import { StyleSheet, Text, View, Pressable, Platform, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons, Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import Colors from "@/constants/colors";
import { useSettings } from "@/contexts/SettingsContext";
import { REGULATION_INFO, NutritionRegulation } from "@/constants/nutrition";
import { LANGUAGES, Language } from "@/constants/translations";

const REGULATIONS: { key: NutritionRegulation }[] = [
  { key: "us_fda" },
  { key: "eu" },
  { key: "uk" },
  { key: "australia" },
];

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const { regulation, setRegulation, language, setLanguage, tr } = useSettings();
  const webTopInset = Platform.OS === "web" ? 67 : 0;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.header,
          { paddingTop: (Platform.OS === "web" ? webTopInset : insets.top) + 12 },
        ]}
      >
        <Text style={styles.headerTitle}>{tr("settings")}</Text>
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingBottom: Platform.OS === "web" ? 34 + 84 : 100 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.sectionBlock}>
          <View style={styles.sectionHeaderRow}>
            <Ionicons name="language-outline" size={20} color={Colors.light.tint} />
            <Text style={styles.sectionTitle}>{tr("language")}</Text>
          </View>
          <Text style={styles.sectionSubtitle}>{tr("chooseLanguage")}</Text>

          <View style={styles.languageGrid}>
            {LANGUAGES.map((lang) => {
              const isSelected = language === lang.code;
              return (
                <Pressable
                  key={lang.code}
                  style={[
                    styles.languageChip,
                    isSelected && styles.languageChipSelected,
                  ]}
                  onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    setLanguage(lang.code);
                  }}
                >
                  <Text
                    style={[
                      styles.languageNative,
                      isSelected && styles.languageNativeSelected,
                    ]}
                  >
                    {lang.nativeName}
                  </Text>
                  <Text
                    style={[
                      styles.languageEnglish,
                      isSelected && styles.languageEnglishSelected,
                    ]}
                  >
                    {lang.name}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.sectionBlock}>
          <View style={styles.sectionHeaderRow}>
            <Ionicons name="nutrition-outline" size={20} color={Colors.light.accent} />
            <Text style={styles.sectionTitle}>{tr("nutritionLabelFormat")}</Text>
          </View>
          <Text style={styles.sectionSubtitle}>{tr("chooseRegulation")}</Text>

          <View style={styles.regulationList}>
            {REGULATIONS.map((reg) => {
              const info = REGULATION_INFO[reg.key];
              const isSelected = regulation === reg.key;
              return (
                <Pressable
                  key={reg.key}
                  style={[
                    styles.regulationCard,
                    isSelected && styles.regulationCardSelected,
                  ]}
                  onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    setRegulation(reg.key);
                  }}
                >
                  <View style={styles.regulationLeft}>
                    <View
                      style={[
                        styles.flagBadge,
                        isSelected && styles.flagBadgeSelected,
                      ]}
                    >
                      <Text style={styles.flagText}>{info.flag}</Text>
                    </View>
                    <View style={styles.regulationInfo}>
                      <Text
                        style={[
                          styles.regulationName,
                          isSelected && styles.regulationNameSelected,
                        ]}
                      >
                        {info.name}
                      </Text>
                      <Text style={styles.regulationFieldCount}>
                        {info.fields.length} {tr("nutritionalFields")}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.radioOuter,
                      isSelected && styles.radioOuterSelected,
                    ]}
                  >
                    {isSelected && <View style={styles.radioInner} />}
                  </View>
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={styles.infoCard}>
          <Ionicons name="information-circle-outline" size={20} color={Colors.light.accent} />
          <Text style={styles.infoText}>{tr("nutritionRegulationInfo")}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 8,
    backgroundColor: Colors.light.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.borderLight,
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: "DMSans_700Bold",
    color: Colors.light.text,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  sectionBlock: {
    marginBottom: 8,
  },
  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "DMSans_600SemiBold",
    color: Colors.light.text,
  },
  sectionSubtitle: {
    fontSize: 14,
    fontFamily: "DMSans_400Regular",
    color: Colors.light.textSecondary,
    marginBottom: 16,
    lineHeight: 20,
    paddingLeft: 28,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.light.borderLight,
    marginVertical: 16,
  },
  languageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  languageChip: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 14,
    backgroundColor: Colors.light.surface,
    borderWidth: 1.5,
    borderColor: Colors.light.borderLight,
    minWidth: 100,
    alignItems: "center",
  },
  languageChipSelected: {
    borderColor: Colors.light.tint,
    backgroundColor: "#FDF8F5",
  },
  languageNative: {
    fontSize: 15,
    fontFamily: "DMSans_600SemiBold",
    color: Colors.light.text,
    marginBottom: 2,
  },
  languageNativeSelected: {
    color: Colors.light.tint,
  },
  languageEnglish: {
    fontSize: 11,
    fontFamily: "DMSans_400Regular",
    color: Colors.light.textTertiary,
  },
  languageEnglishSelected: {
    color: Colors.light.tint,
  },
  regulationList: {
    gap: 10,
  },
  regulationCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.light.surface,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1.5,
    borderColor: Colors.light.borderLight,
  },
  regulationCardSelected: {
    borderColor: Colors.light.tint,
    backgroundColor: "#FDF8F5",
  },
  regulationLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  flagBadge: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: Colors.light.surfaceSecondary,
    alignItems: "center",
    justifyContent: "center",
  },
  flagBadgeSelected: {
    backgroundColor: Colors.light.tintLight,
  },
  flagText: {
    fontSize: 14,
    fontFamily: "DMSans_700Bold",
    color: Colors.light.textSecondary,
  },
  regulationInfo: {
    gap: 2,
  },
  regulationName: {
    fontSize: 15,
    fontFamily: "DMSans_600SemiBold",
    color: Colors.light.text,
  },
  regulationNameSelected: {
    color: Colors.light.tint,
  },
  regulationFieldCount: {
    fontSize: 12,
    fontFamily: "DMSans_400Regular",
    color: Colors.light.textTertiary,
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: Colors.light.border,
    alignItems: "center",
    justifyContent: "center",
  },
  radioOuterSelected: {
    borderColor: Colors.light.tint,
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.light.tint,
  },
  infoCard: {
    flexDirection: "row",
    backgroundColor: Colors.light.accentLight,
    borderRadius: 12,
    padding: 14,
    marginTop: 16,
    gap: 10,
    alignItems: "flex-start",
  },
  infoText: {
    flex: 1,
    fontSize: 13,
    fontFamily: "DMSans_400Regular",
    color: Colors.light.accent,
    lineHeight: 19,
  },
});
