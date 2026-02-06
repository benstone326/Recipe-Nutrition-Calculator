import { useState, useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  TextInput,
  Platform,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import * as Haptics from "expo-haptics";
import Colors from "@/constants/colors";
import { useRecipes, Recipe } from "@/contexts/RecipeContext";

function RecipeCard({ recipe, onDelete }: { recipe: Recipe; onDelete: () => void }) {
  const matchedCount = recipe.ingredients.filter((i) => {
    const { findNutritionEntry } = require("@/constants/nutrition");
    return findNutritionEntry(i.name) !== null;
  }).length;
  const totalCount = recipe.ingredients.length;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        router.push({ pathname: "/recipe/[id]", params: { id: recipe.id } });
      }}
      onLongPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        Alert.alert(
          "Delete Recipe",
          `Are you sure you want to delete "${recipe.title}"?`,
          [
            { text: "Cancel", style: "cancel" },
            { text: "Delete", style: "destructive", onPress: onDelete },
          ]
        );
      }}
    >
      <View style={styles.cardContent}>
        <View style={styles.cardIcon}>
          <Ionicons name="restaurant" size={22} color={Colors.light.tint} />
        </View>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle} numberOfLines={1}>
            {recipe.title}
          </Text>
          <View style={styles.cardMeta}>
            <View style={styles.metaItem}>
              <Feather name="list" size={12} color={Colors.light.textTertiary} />
              <Text style={styles.metaText}>
                {recipe.ingredients.length} ingredients
              </Text>
            </View>
            <View style={styles.metaDot} />
            <View style={styles.metaItem}>
              <Feather name="layers" size={12} color={Colors.light.textTertiary} />
              <Text style={styles.metaText}>
                {recipe.steps.length} steps
              </Text>
            </View>
            <View style={styles.metaDot} />
            <View style={styles.metaItem}>
              <Feather name="users" size={12} color={Colors.light.textTertiary} />
              <Text style={styles.metaText}>
                {recipe.servings} serv.
              </Text>
            </View>
          </View>
          <View style={styles.nutritionBadge}>
            <Text style={styles.nutritionBadgeText}>
              {Math.round(recipe.nutrition.calories)} kcal / serving
            </Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={18} color={Colors.light.textTertiary} />
      </View>
    </Pressable>
  );
}

export default function RecipeListScreen() {
  const insets = useSafeAreaInsets();
  const { recipes, isLoading, deleteRecipe } = useRecipes();
  const [search, setSearch] = useState("");

  const filteredRecipes = useMemo(() => {
    if (!search.trim()) return recipes;
    const q = search.toLowerCase();
    return recipes.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.ingredients.some((i) => i.name.toLowerCase().includes(q))
    );
  }, [recipes, search]);

  const webTopInset = Platform.OS === "web" ? 67 : 0;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.header,
          { paddingTop: (Platform.OS === "web" ? webTopInset : insets.top) + 12 },
        ]}
      >
        <Text style={styles.headerTitle}>Recipes</Text>
        <Pressable
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            router.push("/recipe/add");
          }}
          style={({ pressed }) => [
            styles.addButton,
            pressed && { opacity: 0.7 },
          ]}
        >
          <Ionicons name="add" size={26} color="#fff" />
        </Pressable>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Feather name="search" size={16} color={Colors.light.textTertiary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search recipes or ingredients..."
            placeholderTextColor={Colors.light.textTertiary}
            value={search}
            onChangeText={setSearch}
            returnKeyType="search"
          />
          {search.length > 0 && (
            <Pressable onPress={() => setSearch("")}>
              <Ionicons name="close-circle" size={18} color={Colors.light.textTertiary} />
            </Pressable>
          )}
        </View>
      </View>

      {isLoading ? (
        <View style={styles.emptyContainer}>
          <ActivityIndicator size="large" color={Colors.light.tint} />
        </View>
      ) : filteredRecipes.length === 0 ? (
        <View style={styles.emptyContainer}>
          <View style={styles.emptyIcon}>
            <Ionicons name="book-outline" size={48} color={Colors.light.textTertiary} />
          </View>
          <Text style={styles.emptyTitle}>
            {search ? "No recipes found" : "No recipes yet"}
          </Text>
          <Text style={styles.emptySubtitle}>
            {search
              ? "Try a different search term"
              : "Tap + to add your first recipe"}
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredRecipes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <RecipeCard
              recipe={item}
              onDelete={() => deleteRecipe(item.id)}
            />
          )}
          contentContainerStyle={[
            styles.listContent,
            { paddingBottom: Platform.OS === "web" ? 34 + 84 : 100 },
          ]}
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
        />
      )}
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
    justifyContent: "space-between",
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
  addButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: Colors.light.tint,
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: Colors.light.surface,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.light.surfaceSecondary,
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 42,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    fontFamily: "DMSans_400Regular",
    color: Colors.light.text,
    height: "100%",
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  card: {
    backgroundColor: Colors.light.surface,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.light.borderLight,
    overflow: "hidden",
  },
  cardPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 14,
  },
  cardIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: Colors.light.tintLight,
    alignItems: "center",
    justifyContent: "center",
  },
  cardText: {
    flex: 1,
    gap: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: "DMSans_600SemiBold",
    color: Colors.light.text,
  },
  cardMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    fontFamily: "DMSans_400Regular",
    color: Colors.light.textTertiary,
  },
  metaDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: Colors.light.textTertiary,
  },
  nutritionBadge: {
    alignSelf: "flex-start",
    backgroundColor: Colors.light.accentLight,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    marginTop: 2,
  },
  nutritionBadgeText: {
    fontSize: 11,
    fontFamily: "DMSans_500Medium",
    color: Colors.light.accent,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  emptyIcon: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: Colors.light.surfaceSecondary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 18,
    fontFamily: "DMSans_600SemiBold",
    color: Colors.light.text,
    marginBottom: 6,
  },
  emptySubtitle: {
    fontSize: 14,
    fontFamily: "DMSans_400Regular",
    color: Colors.light.textTertiary,
    textAlign: "center",
  },
});
