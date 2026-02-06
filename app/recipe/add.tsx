import { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Platform,
  Alert,
  ScrollView,
  Keyboard,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons, Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import * as Haptics from "expo-haptics";
import Colors from "@/constants/colors";
import { useRecipes, Ingredient, Step } from "@/contexts/RecipeContext";
import { AVAILABLE_UNITS, findNutritionEntry } from "@/constants/nutrition";
import { KeyboardAwareScrollViewCompat } from "@/components/KeyboardAwareScrollViewCompat";

function generateId(): string {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
}

function IngredientItem({
  ingredient,
  onUpdate,
  onRemove,
}: {
  ingredient: Ingredient;
  onUpdate: (updated: Ingredient) => void;
  onRemove: () => void;
}) {
  const matched = findNutritionEntry(ingredient.name);
  const [showUnits, setShowUnits] = useState(false);

  return (
    <View style={styles.ingredientItem}>
      <View style={styles.ingredientRow}>
        <TextInput
          style={styles.ingredientQtyInput}
          value={ingredient.quantity > 0 ? String(ingredient.quantity) : ""}
          onChangeText={(t) => {
            const num = parseFloat(t) || 0;
            onUpdate({ ...ingredient, quantity: num });
          }}
          keyboardType="decimal-pad"
          placeholder="Qty"
          placeholderTextColor={Colors.light.textTertiary}
        />
        <Pressable
          style={styles.unitSelector}
          onPress={() => setShowUnits(!showUnits)}
        >
          <Text style={styles.unitText}>{ingredient.unit}</Text>
          <Ionicons
            name={showUnits ? "chevron-up" : "chevron-down"}
            size={14}
            color={Colors.light.textSecondary}
          />
        </Pressable>
        <TextInput
          style={styles.ingredientNameInput}
          value={ingredient.name}
          onChangeText={(t) => onUpdate({ ...ingredient, name: t })}
          placeholder="Ingredient name"
          placeholderTextColor={Colors.light.textTertiary}
        />
        <Pressable onPress={onRemove} style={styles.removeBtn}>
          <Ionicons name="close" size={18} color={Colors.light.destructive} />
        </Pressable>
      </View>
      {showUnits && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.unitList}
          contentContainerStyle={styles.unitListContent}
        >
          {AVAILABLE_UNITS.map((unit) => (
            <Pressable
              key={unit}
              style={[
                styles.unitChip,
                ingredient.unit === unit && styles.unitChipActive,
              ]}
              onPress={() => {
                onUpdate({ ...ingredient, unit });
                setShowUnits(false);
              }}
            >
              <Text
                style={[
                  styles.unitChipText,
                  ingredient.unit === unit && styles.unitChipTextActive,
                ]}
              >
                {unit}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      )}
      {ingredient.name.length > 0 && (
        <View style={styles.matchIndicator}>
          <View
            style={[
              styles.matchDot,
              { backgroundColor: matched ? Colors.light.success : Colors.light.warning },
            ]}
          />
          <Text style={styles.matchText}>
            {matched
              ? `Matched: ${matched.name}`
              : "No nutrition data found"}
          </Text>
        </View>
      )}
    </View>
  );
}

function StepItem({
  step,
  index,
  onUpdate,
  onRemove,
}: {
  step: Step;
  index: number;
  onUpdate: (updated: Step) => void;
  onRemove: () => void;
}) {
  return (
    <View style={styles.stepItem}>
      <View style={styles.stepNumber}>
        <Text style={styles.stepNumberText}>{index + 1}</Text>
      </View>
      <TextInput
        style={styles.stepInput}
        value={step.text}
        onChangeText={(t) => onUpdate({ ...step, text: t })}
        placeholder={`Describe step ${index + 1}...`}
        placeholderTextColor={Colors.light.textTertiary}
        multiline
        textAlignVertical="top"
      />
      <Pressable onPress={onRemove} style={styles.removeBtn}>
        <Ionicons name="close" size={18} color={Colors.light.destructive} />
      </Pressable>
    </View>
  );
}

export default function AddRecipeScreen() {
  const insets = useSafeAreaInsets();
  const { editId } = useLocalSearchParams<{ editId?: string }>();
  const { addRecipe, updateRecipe, getRecipe } = useRecipes();
  const isEditing = !!editId;
  const existingRecipe = isEditing ? getRecipe(editId) : undefined;

  const [title, setTitle] = useState("");
  const [servings, setServings] = useState("1");
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: generateId(), name: "", quantity: 0, unit: "g" },
  ]);
  const [steps, setSteps] = useState<Step[]>([
    { id: generateId(), order: 0, text: "" },
  ]);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (existingRecipe) {
      setTitle(existingRecipe.title);
      setServings(String(existingRecipe.servings));
      setIngredients(existingRecipe.ingredients.map((i) => ({ ...i })));
      setSteps(existingRecipe.steps.map((s) => ({ ...s })));
    }
  }, [existingRecipe?.id]);

  const webTopInset = Platform.OS === "web" ? 67 : 0;

  const addIngredient = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setIngredients([...ingredients, { id: generateId(), name: "", quantity: 0, unit: "g" }]);
  };

  const updateIngredient = (index: number, updated: Ingredient) => {
    const copy = [...ingredients];
    copy[index] = updated;
    setIngredients(copy);
  };

  const removeIngredient = (index: number) => {
    if (ingredients.length <= 1) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const addStep = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSteps([...steps, { id: generateId(), order: steps.length, text: "" }]);
  };

  const updateStep = (index: number, updated: Step) => {
    const copy = [...steps];
    copy[index] = updated;
    setSteps(copy);
  };

  const removeStep = (index: number) => {
    if (steps.length <= 1) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSteps(steps.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    if (!title.trim()) {
      Alert.alert("Missing Title", "Please enter a recipe title.");
      return;
    }

    const validIngredients = ingredients.filter(
      (i) => i.name.trim() && i.quantity > 0
    );
    if (validIngredients.length === 0) {
      Alert.alert(
        "Missing Ingredients",
        "Please add at least one ingredient with a name and quantity."
      );
      return;
    }

    const validSteps = steps.filter((s) => s.text.trim());
    if (validSteps.length === 0) {
      Alert.alert("Missing Steps", "Please add at least one step.");
      return;
    }

    setIsSaving(true);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    Keyboard.dismiss();

    try {
      const data = {
        title: title.trim(),
        servings: Math.max(parseInt(servings) || 1, 1),
        ingredients: validIngredients.map((i, idx) => ({
          ...i,
          name: i.name.trim(),
        })),
        steps: validSteps.map((s, idx) => ({
          ...s,
          order: idx,
          text: s.text.trim(),
        })),
      };

      if (isEditing && editId) {
        await updateRecipe(editId, data);
      } else {
        await addRecipe(data);
      }
      router.back();
    } catch (e) {
      Alert.alert("Error", "Failed to save recipe. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.header,
          { paddingTop: (Platform.OS === "web" ? webTopInset : insets.top) + 8 },
        ]}
      >
        <Pressable
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            router.back();
          }}
          style={({ pressed }) => [styles.headerBtn, pressed && { opacity: 0.6 }]}
        >
          <Ionicons name="close" size={24} color={Colors.light.text} />
        </Pressable>
        <Text style={styles.headerTitle}>
          {isEditing ? "Edit Recipe" : "New Recipe"}
        </Text>
        <Pressable
          onPress={handleSave}
          disabled={isSaving}
          style={({ pressed }) => [
            styles.saveButton,
            pressed && { opacity: 0.8 },
            isSaving && { opacity: 0.5 },
          ]}
        >
          <Ionicons name="checkmark" size={22} color="#fff" />
        </Pressable>
      </View>

      <KeyboardAwareScrollViewCompat
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: Platform.OS === "web" ? 34 : insets.bottom + 20 },
        ]}
        bottomOffset={60}
      >
        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Recipe Title</Text>
          <TextInput
            style={styles.titleInput}
            value={title}
            onChangeText={setTitle}
            placeholder="e.g. Grandma's Chicken Soup"
            placeholderTextColor={Colors.light.textTertiary}
            autoFocus={!isEditing}
          />
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Servings</Text>
          <View style={styles.servingsRow}>
            <Pressable
              onPress={() => {
                const n = Math.max((parseInt(servings) || 1) - 1, 1);
                setServings(String(n));
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              }}
              style={styles.servingsBtn}
            >
              <Ionicons name="remove" size={20} color={Colors.light.tint} />
            </Pressable>
            <TextInput
              style={styles.servingsInput}
              value={servings}
              onChangeText={setServings}
              keyboardType="number-pad"
              textAlign="center"
            />
            <Pressable
              onPress={() => {
                const n = (parseInt(servings) || 1) + 1;
                setServings(String(n));
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              }}
              style={styles.servingsBtn}
            >
              <Ionicons name="add" size={20} color={Colors.light.tint} />
            </Pressable>
          </View>
        </View>

        <View style={styles.fieldGroup}>
          <View style={styles.sectionHeader}>
            <Text style={styles.label}>Ingredients</Text>
            <Pressable onPress={addIngredient} style={styles.addItemBtn}>
              <Ionicons name="add-circle" size={22} color={Colors.light.tint} />
              <Text style={styles.addItemText}>Add</Text>
            </Pressable>
          </View>
          {ingredients.map((ing, index) => (
            <IngredientItem
              key={ing.id}
              ingredient={ing}
              onUpdate={(u) => updateIngredient(index, u)}
              onRemove={() => removeIngredient(index)}
            />
          ))}
        </View>

        <View style={styles.fieldGroup}>
          <View style={styles.sectionHeader}>
            <Text style={styles.label}>Steps</Text>
            <Pressable onPress={addStep} style={styles.addItemBtn}>
              <Ionicons name="add-circle" size={22} color={Colors.light.tint} />
              <Text style={styles.addItemText}>Add</Text>
            </Pressable>
          </View>
          {steps.map((step, index) => (
            <StepItem
              key={step.id}
              step={step}
              index={index}
              onUpdate={(u) => updateStep(index, u)}
              onRemove={() => removeStep(index)}
            />
          ))}
        </View>

        <View style={styles.infoCard}>
          <Ionicons
            name="information-circle-outline"
            size={18}
            color={Colors.light.accent}
          />
          <Text style={styles.infoText}>
            Nutrition values are calculated automatically when you save. The
            calculator matches ingredient names to a built-in nutrition database.
            Use common names for best results (e.g. "chicken breast", "olive oil").
          </Text>
        </View>
      </KeyboardAwareScrollViewCompat>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingBottom: 12,
    backgroundColor: Colors.light.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.borderLight,
    gap: 8,
  },
  headerBtn: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontFamily: "DMSans_600SemiBold",
    color: Colors.light.text,
  },
  saveButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: Colors.light.tint,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  fieldGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 15,
    fontFamily: "DMSans_600SemiBold",
    color: Colors.light.text,
    marginBottom: 8,
  },
  titleInput: {
    backgroundColor: Colors.light.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.light.border,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    fontFamily: "DMSans_400Regular",
    color: Colors.light.text,
  },
  servingsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  servingsBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: Colors.light.tintLight,
    alignItems: "center",
    justifyContent: "center",
  },
  servingsInput: {
    width: 60,
    height: 40,
    backgroundColor: Colors.light.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.light.border,
    fontSize: 16,
    fontFamily: "DMSans_600SemiBold",
    color: Colors.light.text,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  addItemBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  addItemText: {
    fontSize: 14,
    fontFamily: "DMSans_500Medium",
    color: Colors.light.tint,
  },
  ingredientItem: {
    backgroundColor: Colors.light.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.light.borderLight,
    padding: 12,
    marginBottom: 10,
  },
  ingredientRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  ingredientQtyInput: {
    width: 55,
    height: 38,
    backgroundColor: Colors.light.surfaceSecondary,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 14,
    fontFamily: "DMSans_500Medium",
    color: Colors.light.text,
  },
  unitSelector: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.light.surfaceSecondary,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 38,
    gap: 4,
  },
  unitText: {
    fontSize: 13,
    fontFamily: "DMSans_500Medium",
    color: Colors.light.textSecondary,
  },
  ingredientNameInput: {
    flex: 1,
    height: 38,
    backgroundColor: Colors.light.surfaceSecondary,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    fontFamily: "DMSans_400Regular",
    color: Colors.light.text,
  },
  removeBtn: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  unitList: {
    marginTop: 8,
    maxHeight: 36,
  },
  unitListContent: {
    gap: 6,
    paddingRight: 8,
  },
  unitChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: Colors.light.surfaceSecondary,
  },
  unitChipActive: {
    backgroundColor: Colors.light.tint,
  },
  unitChipText: {
    fontSize: 12,
    fontFamily: "DMSans_500Medium",
    color: Colors.light.textSecondary,
  },
  unitChipTextActive: {
    color: "#fff",
  },
  matchIndicator: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 8,
    paddingLeft: 2,
  },
  matchDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  matchText: {
    fontSize: 11,
    fontFamily: "DMSans_400Regular",
    color: Colors.light.textTertiary,
  },
  stepItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    marginBottom: 10,
  },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.light.tint,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  stepNumberText: {
    fontSize: 13,
    fontFamily: "DMSans_700Bold",
    color: "#fff",
  },
  stepInput: {
    flex: 1,
    minHeight: 48,
    backgroundColor: Colors.light.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.light.borderLight,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    fontFamily: "DMSans_400Regular",
    color: Colors.light.text,
    lineHeight: 20,
  },
  infoCard: {
    flexDirection: "row",
    backgroundColor: Colors.light.accentLight,
    borderRadius: 12,
    padding: 14,
    gap: 10,
    alignItems: "flex-start",
    marginTop: 8,
  },
  infoText: {
    flex: 1,
    fontSize: 13,
    fontFamily: "DMSans_400Regular",
    color: Colors.light.accent,
    lineHeight: 19,
  },
});
