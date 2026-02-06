import { createContext, useContext, useState, useEffect, useMemo, ReactNode, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NutritionRegulation } from "@/constants/nutrition";
import { Language, t } from "@/constants/translations";

interface SettingsContextValue {
  regulation: NutritionRegulation;
  setRegulation: (reg: NutritionRegulation) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  tr: (key: string) => string;
}

const SETTINGS_KEY = "@recipebox_settings";

const SettingsContext = createContext<SettingsContextValue | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [regulation, setRegulationState] = useState<NutritionRegulation>("us_fda");
  const [language, setLanguageState] = useState<Language>("en");

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
        if (settings.language) {
          setLanguageState(settings.language);
        }
      }
    } catch (e) {
      console.error("Failed to load settings:", e);
    }
  };

  const saveSettings = useCallback(async (reg: NutritionRegulation, lang: Language) => {
    try {
      await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify({ regulation: reg, language: lang }));
    } catch (e) {
      console.error("Failed to save settings:", e);
    }
  }, []);

  const setRegulation = useCallback(async (reg: NutritionRegulation) => {
    setRegulationState(reg);
    saveSettings(reg, language);
  }, [language, saveSettings]);

  const setLanguage = useCallback(async (lang: Language) => {
    setLanguageState(lang);
    saveSettings(regulation, lang);
  }, [regulation, saveSettings]);

  const tr = useCallback((key: string) => t(language, key), [language]);

  const value = useMemo(() => ({
    regulation,
    setRegulation,
    language,
    setLanguage,
    tr,
  }), [regulation, setRegulation, language, setLanguage, tr]);

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
