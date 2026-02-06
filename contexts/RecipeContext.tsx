import { createContext, useContext, useState, useEffect, useMemo, ReactNode, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { calculateNutrition, NutritionPer100g } from "@/constants/nutrition";
import { Language } from "@/constants/translations";

export interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
}

export interface Step {
  id: string;
  order: number;
  text: string;
}

export interface RecipeNutrition extends NutritionPer100g {
  energy_kj: number;
  salt: number;
}

export interface Recipe {
  id: string;
  title: string;
  servings: number;
  ingredients: Ingredient[];
  steps: Step[];
  nutrition: RecipeNutrition;
  createdAt: number;
  updatedAt: number;
}

interface RecipeContextValue {
  recipes: Recipe[];
  isLoading: boolean;
  addRecipe: (recipe: Omit<Recipe, "id" | "nutrition" | "createdAt" | "updatedAt">, lang?: Language) => Promise<Recipe>;
  updateRecipe: (id: string, recipe: Omit<Recipe, "id" | "nutrition" | "createdAt" | "updatedAt">, lang?: Language) => Promise<Recipe>;
  deleteRecipe: (id: string) => Promise<void>;
  getRecipe: (id: string) => Recipe | undefined;
}

const STORAGE_KEY = "@recipebox_recipes";

const RecipeContext = createContext<RecipeContextValue | null>(null);

function generateId(): string {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
}

export function RecipeProvider({ children }: { children: ReactNode }) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        setRecipes(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load recipes:", e);
    } finally {
      setIsLoading(false);
    }
  };

  const saveRecipes = async (newRecipes: Recipe[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newRecipes));
    } catch (e) {
      console.error("Failed to save recipes:", e);
    }
  };

  const addRecipe = useCallback(async (data: Omit<Recipe, "id" | "nutrition" | "createdAt" | "updatedAt">, lang?: Language): Promise<Recipe> => {
    const nutrition = calculateNutrition(
      data.ingredients.map((i) => ({ name: i.name, quantity: i.quantity, unit: i.unit })),
      data.servings,
      lang
    );
    const recipe: Recipe = {
      ...data,
      id: generateId(),
      nutrition,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    const updated = [recipe, ...recipes];
    setRecipes(updated);
    await saveRecipes(updated);
    return recipe;
  }, [recipes]);

  const updateRecipe = useCallback(async (id: string, data: Omit<Recipe, "id" | "nutrition" | "createdAt" | "updatedAt">, lang?: Language): Promise<Recipe> => {
    const nutrition = calculateNutrition(
      data.ingredients.map((i) => ({ name: i.name, quantity: i.quantity, unit: i.unit })),
      data.servings,
      lang
    );
    const updated = recipes.map((r) => {
      if (r.id === id) {
        return { ...r, ...data, nutrition, updatedAt: Date.now() };
      }
      return r;
    });
    setRecipes(updated);
    await saveRecipes(updated);
    return updated.find((r) => r.id === id)!;
  }, [recipes]);

  const deleteRecipe = useCallback(async (id: string) => {
    const updated = recipes.filter((r) => r.id !== id);
    setRecipes(updated);
    await saveRecipes(updated);
  }, [recipes]);

  const getRecipe = useCallback((id: string) => {
    return recipes.find((r) => r.id === id);
  }, [recipes]);

  const value = useMemo(() => ({
    recipes,
    isLoading,
    addRecipe,
    updateRecipe,
    deleteRecipe,
    getRecipe,
  }), [recipes, isLoading, addRecipe, updateRecipe, deleteRecipe, getRecipe]);

  return (
    <RecipeContext.Provider value={value}>
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipes() {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipes must be used within a RecipeProvider");
  }
  return context;
}
