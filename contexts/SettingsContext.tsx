import { createContext, useContext, useState, useEffect, useMemo, ReactNode, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NutritionRegulation } from "@/constants/nutrition";

interface SettingsContextValue {
  regulation: NutritionRegulation;
  setRegulation: (reg: NutritionRegulation) => void;
}

const SETTINGS_KEY = "@recipebox_settings";

const SettingsContext = createContext<SettingsContextValue | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [regulation, setRegulationState] = useState<NutritionRegulation>("us_fda");

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const stored = await AsyncStorage.getItem(SETTINGS_KEY);
      if (stored) {
        const settings = JSON.parse(stored);
        if (settings.regulation) {
          setRegulationState(settings.regulation);
        }
      }
    } catch (e) {
      console.error("Failed to load settings:", e);
    }
  };

  const setRegulation = useCallback(async (reg: NutritionRegulation) => {
    setRegulationState(reg);
    try {
      await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify({ regulation: reg }));
    } catch (e) {
      console.error("Failed to save settings:", e);
    }
  }, []);

  const value = useMemo(() => ({
    regulation,
    setRegulation,
  }), [regulation, setRegulation]);

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
}
