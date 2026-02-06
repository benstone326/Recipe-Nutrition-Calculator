import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Platform,
  Alert,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons, Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import * as Haptics from "expo-haptics";
import Colors from "@/constants/colors";
import { useRecipes } from "@/contexts/RecipeContext";
import { useSettings } from "@/contexts/SettingsContext";
import { REGULATION_INFO, NutritionField } from "@/constants/nutrition";

function NutritionTable({ nutrition, regulation, tr }: { nutrition: any; regulation: string; tr: (key: string) => string }) {
  const info = REGULATION_INFO[regulation as keyof typeof REGULATION_INFO];
  if (!info) return null;

  return (
    <View style={styles.nutritionCard}>
      <View style={styles.nutritionHeader}>
        <Ionicons name="nutrition-outline" size={18} color={Colors.light.accent} />
        <Text style={styles.nutritionTitle}>{tr("nutritionFacts")}</Text>
        <View style={styles.perServingBadge}>
          <Text style={styles.perServingText}>{tr("perServing")}</Text>
        </View>
      </View>
      <Text style={styles.regulationLabel}>{info.name}</Text>
      <View style={styles.nutritionDividerThick} />
      {info.fields.map((field: NutritionField, index: number) => {
        let value = 0;
        if (field.key === "energy_kj") {
          value = nutrition.energy_kj || 0;
        } else if (field.key === "salt") {
          value = nutrition.salt || 0;
        } else {
          value = nutrition[field.key] || 0;
        }
        const displayValue = Math.round(value * 10) / 10;

        return (
          <View key={field.key + index}>
            <View
              style={[
                styles.nutritionRow,
                field.indented && styles.nutritionRowIndented,
              ]}
            >
              <Text
                style={[
                  styles.nutritionLabel,
                  field.bold && styles.nutritionLabelBold,
                  field.indented && styles.nutritionLabelIndented,
                ]}
              >
                {field.label}
              </Text>
              <Text
                style={[
                  styles.nutritionValue,
                  field.bold && styles.nutritionValueBold,
                ]}
              >
                {displayValue} {field.unit}
              </Text>
            </View>
            {index < info.fields.length - 1 && (
              <View style={styles.nutritionDivider} />
            )}
          </View>
        );
      })}
    </View>
  );
}

export default function RecipeDetailScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { getRecipe, deleteRecipe } = useRecipes();
  const { regulation, tr } = useSettings();
  const recipe = getRecipe(id);
  const webTopInset = Platform.OS === "web" ? 67 : 0;

  if (!recipe) {
    return (
      <View style={[styles.container, styles.emptyContainer]}>
        <Text style={styles.emptyText}>{tr("recipeNotFound")}</Text>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.backLink}>{tr("goBack")}</Text>
        </Pressable>
      </View>
    );
  }

  const handleDelete = () => {
    Alert.alert(
      tr("deleteRecipe"),
      `${tr("deleteConfirm")} "${recipe.title}"?`,
      [
        { text: tr("cancel"), style: "cancel" },
        {
          text: tr("delete"),
          style: "destructive",
          onPress: async () => {
            await deleteRecipe(recipe.id);
            router.back();
          },
        },
      ]
    );
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
          <Ionicons name="chevron-back" size={24} color={Colors.light.text} />
        </Pressable>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {recipe.title}
        </Text>
        <View style={styles.headerActions}>
          <Pressable
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              router.push({ pathname: "/recipe/add", params: { editId: recipe.id } });
            }}
            style={({ pressed }) => [styles.headerBtn, pressed && { opacity: 0.6 }]}
          >
            <Feather name="edit-2" size={20} color={Colors.light.tint} />
          </Pressable>
          <Pressable
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              handleDelete();
            }}
            style={({ pressed }) => [styles.headerBtn, pressed && { opacity: 0.6 }]}
          >
            <Feather name="trash-2" size={20} color={Colors.light.destructive} />
          </Pressable>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: Platform.OS === "web" ? 34 : insets.bottom + 20 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.metaRow}>
          <View style={styles.metaChip}>
            <Feather name="users" size={14} color={Colors.light.tint} />
            <Text style={styles.metaChipText}>{recipe.servings} {tr("servings")}</Text>
          </View>
          <View style={styles.metaChip}>
            <Feather name="list" size={14} color={Colors.light.tint} />
            <Text style={styles.metaChipText}>{recipe.ingredients.length} {tr("ingredients").toLowerCase()}</Text>
          </View>
          <View style={styles.metaChip}>
            <Feather name="layers" size={14} color={Colors.light.tint} />
            <Text style={styles.metaChipText}>{recipe.steps.length} {tr("steps").toLowerCase()}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="cart-outline" size={20} color={Colors.light.tint} />
            <Text style={styles.sectionTitle}>{tr("ingredients")}</Text>
          </View>
          {recipe.ingredients.map((ing) => (
            <View key={ing.id} style={styles.ingredientRow}>
              <View style={styles.ingredientBullet} />
              <Text style={styles.ingredientText}>
                <Text style={styles.ingredientQty}>
                  {ing.quantity} {ing.unit}
                </Text>
                {"  "}
                {ing.name}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="list-outline" size={20} color={Colors.light.tint} />
            <Text style={styles.sectionTitle}>{tr("steps")}</Text>
          </View>
          {recipe.steps.map((step, index) => (
            <View key={step.id} style={styles.stepRow}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{index + 1}</Text>
              </View>
              <Text style={styles.stepText}>{step.text}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <NutritionTable nutrition={recipe.nutrition} regulation={regulation} tr={tr} />
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
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingBottom: 12,
    backgroundColor: Colors.light.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.borderLight,
    gap: 4,
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
  headerActions: {
    flexDirection: "row",
    gap: 2,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  metaRow: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    marginBottom: 24,
  },
  metaChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.light.tintLight,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    gap: 6,
  },
  metaChipText: {
    fontSize: 13,
    fontFamily: "DMSans_500Medium",
    color: Colors.light.tint,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "DMSans_700Bold",
    color: Colors.light.text,
  },
  ingredientRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 10,
    paddingLeft: 4,
  },
  ingredientBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.light.tint,
    marginTop: 7,
  },
  ingredientText: {
    flex: 1,
    fontSize: 15,
    fontFamily: "DMSans_400Regular",
    color: Colors.light.text,
    lineHeight: 22,
  },
  ingredientQty: {
    fontFamily: "DMSans_600SemiBold",
    color: Colors.light.tint,
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 14,
    marginBottom: 14,
  },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.light.tint,
    alignItems: "center",
    justifyContent: "center",
  },
  stepNumberText: {
    fontSize: 13,
    fontFamily: "DMSans_700Bold",
    color: "#fff",
  },
  stepText: {
    flex: 1,
    fontSize: 15,
    fontFamily: "DMSans_400Regular",
    color: Colors.light.text,
    lineHeight: 22,
    paddingTop: 3,
  },
  nutritionCard: {
    backgroundColor: Colors.light.surface,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  nutritionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 4,
  },
  nutritionTitle: {
    fontSize: 17,
    fontFamily: "DMSans_700Bold",
    color: Colors.light.text,
    flex: 1,
  },
  perServingBadge: {
    backgroundColor: Colors.light.accentLight,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  perServingText: {
    fontSize: 11,
    fontFamily: "DMSans_500Medium",
    color: Colors.light.accent,
  },
  regulationLabel: {
    fontSize: 12,
    fontFamily: "DMSans_400Regular",
    color: Colors.light.textTertiary,
    marginBottom: 10,
  },
  nutritionDividerThick: {
    height: 2,
    backgroundColor: Colors.light.text,
    marginBottom: 4,
  },
  nutritionDivider: {
    height: 1,
    backgroundColor: Colors.light.borderLight,
  },
  nutritionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  nutritionRowIndented: {
    paddingLeft: 16,
  },
  nutritionLabel: {
    fontSize: 14,
    fontFamily: "DMSans_400Regular",
    color: Colors.light.text,
  },
  nutritionLabelBold: {
    fontFamily: "DMSans_700Bold",
  },
  nutritionLabelIndented: {
    color: Colors.light.textSecondary,
  },
  nutritionValue: {
    fontSize: 14,
    fontFamily: "DMSans_400Regular",
    color: Colors.light.text,
  },
  nutritionValueBold: {
    fontFamily: "DMSans_600SemiBold",
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 16,
    fontFamily: "DMSans_500Medium",
    color: Colors.light.textSecondary,
  },
  backLink: {
    fontSize: 15,
    fontFamily: "DMSans_600SemiBold",
    color: Colors.light.tint,
    marginTop: 12,
  },
});
