export interface NutritionPer100g {
  calories: number;
  totalFat: number;
  saturatedFat: number;
  transFat: number;
  cholesterol: number;
  sodium: number;
  totalCarbs: number;
  dietaryFiber: number;
  totalSugars: number;
  addedSugars: number;
  protein: number;
  vitaminD: number;
  calcium: number;
  iron: number;
  potassium: number;
}

export interface NutritionEntry {
  name: string;
  aliases: string[];
  per100g: NutritionPer100g;
}

export const UNIT_CONVERSIONS: Record<string, number> = {
  g: 1,
  kg: 1000,
  oz: 28.35,
  lb: 453.59,
  ml: 1,
  l: 1000,
  cup: 240,
  tbsp: 15,
  tsp: 5,
  piece: 100,
  whole: 100,
  clove: 5,
  slice: 30,
  pinch: 0.5,
  dash: 0.6,
};

export const AVAILABLE_UNITS = [
  "g", "kg", "oz", "lb", "ml", "l", "cup", "tbsp", "tsp", "piece", "whole", "clove", "slice", "pinch", "dash"
];

export const NUTRITION_DB: NutritionEntry[] = [
  { name: "chicken breast", aliases: ["chicken", "chicken fillet"], per100g: { calories: 165, totalFat: 3.6, saturatedFat: 1, transFat: 0, cholesterol: 85, sodium: 74, totalCarbs: 0, dietaryFiber: 0, totalSugars: 0, addedSugars: 0, protein: 31, vitaminD: 0.1, calcium: 15, iron: 1, potassium: 256 } },
  { name: "ground beef", aliases: ["beef mince", "minced beef", "beef"], per100g: { calories: 254, totalFat: 17.2, saturatedFat: 6.7, transFat: 0.7, cholesterol: 78, sodium: 66, totalCarbs: 0, dietaryFiber: 0, totalSugars: 0, addedSugars: 0, protein: 25.5, vitaminD: 0, calcium: 18, iron: 2.6, potassium: 305 } },
  { name: "salmon", aliases: ["salmon fillet"], per100g: { calories: 208, totalFat: 13.4, saturatedFat: 3.1, transFat: 0, cholesterol: 55, sodium: 59, totalCarbs: 0, dietaryFiber: 0, totalSugars: 0, addedSugars: 0, protein: 20, vitaminD: 11, calcium: 12, iron: 0.8, potassium: 363 } },
  { name: "shrimp", aliases: ["prawn", "prawns"], per100g: { calories: 99, totalFat: 0.3, saturatedFat: 0.1, transFat: 0, cholesterol: 189, sodium: 111, totalCarbs: 0.2, dietaryFiber: 0, totalSugars: 0, addedSugars: 0, protein: 24, vitaminD: 0, calcium: 52, iron: 0.2, potassium: 259 } },
  { name: "egg", aliases: ["eggs", "whole egg"], per100g: { calories: 155, totalFat: 11, saturatedFat: 3.3, transFat: 0, cholesterol: 373, sodium: 124, totalCarbs: 1.1, dietaryFiber: 0, totalSugars: 1.1, addedSugars: 0, protein: 13, vitaminD: 2, calcium: 56, iron: 1.8, potassium: 126 } },
  { name: "tofu", aliases: ["bean curd"], per100g: { calories: 76, totalFat: 4.8, saturatedFat: 0.7, transFat: 0, cholesterol: 0, sodium: 7, totalCarbs: 1.9, dietaryFiber: 0.3, totalSugars: 0.6, addedSugars: 0, protein: 8, vitaminD: 0, calcium: 350, iron: 5.4, potassium: 121 } },
  { name: "rice", aliases: ["white rice", "basmati rice", "jasmine rice"], per100g: { calories: 130, totalFat: 0.3, saturatedFat: 0.1, transFat: 0, cholesterol: 0, sodium: 1, totalCarbs: 28, dietaryFiber: 0.4, totalSugars: 0, addedSugars: 0, protein: 2.7, vitaminD: 0, calcium: 10, iron: 0.2, potassium: 35 } },
  { name: "brown rice", aliases: [], per100g: { calories: 123, totalFat: 1, saturatedFat: 0.2, transFat: 0, cholesterol: 0, sodium: 1, totalCarbs: 26, dietaryFiber: 1.8, totalSugars: 0.4, addedSugars: 0, protein: 2.6, vitaminD: 0, calcium: 10, iron: 0.4, potassium: 43 } },
  { name: "pasta", aliases: ["spaghetti", "penne", "fusilli", "macaroni", "noodles"], per100g: { calories: 131, totalFat: 1.1, saturatedFat: 0.2, transFat: 0, cholesterol: 0, sodium: 1, totalCarbs: 25, dietaryFiber: 1.8, totalSugars: 0.6, addedSugars: 0, protein: 5, vitaminD: 0, calcium: 7, iron: 1.3, potassium: 44 } },
  { name: "bread", aliases: ["white bread", "toast"], per100g: { calories: 265, totalFat: 3.2, saturatedFat: 0.7, transFat: 0, cholesterol: 0, sodium: 491, totalCarbs: 49, dietaryFiber: 2.7, totalSugars: 5, addedSugars: 3, protein: 9, vitaminD: 0, calcium: 260, iron: 3.6, potassium: 100 } },
  { name: "potato", aliases: ["potatoes"], per100g: { calories: 77, totalFat: 0.1, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 6, totalCarbs: 17, dietaryFiber: 2.2, totalSugars: 0.8, addedSugars: 0, protein: 2, vitaminD: 0, calcium: 12, iron: 0.8, potassium: 421 } },
  { name: "sweet potato", aliases: ["sweet potatoes", "yam"], per100g: { calories: 86, totalFat: 0.1, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 55, totalCarbs: 20, dietaryFiber: 3, totalSugars: 4.2, addedSugars: 0, protein: 1.6, vitaminD: 0, calcium: 30, iron: 0.6, potassium: 337 } },
  { name: "flour", aliases: ["all purpose flour", "plain flour", "wheat flour", "all-purpose flour"], per100g: { calories: 364, totalFat: 1, saturatedFat: 0.2, transFat: 0, cholesterol: 0, sodium: 2, totalCarbs: 76, dietaryFiber: 2.7, totalSugars: 0.3, addedSugars: 0, protein: 10, vitaminD: 0, calcium: 15, iron: 4.6, potassium: 107 } },
  { name: "sugar", aliases: ["white sugar", "granulated sugar", "caster sugar"], per100g: { calories: 387, totalFat: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 1, totalCarbs: 100, dietaryFiber: 0, totalSugars: 100, addedSugars: 100, protein: 0, vitaminD: 0, calcium: 1, iron: 0, potassium: 2 } },
  { name: "brown sugar", aliases: ["dark brown sugar", "light brown sugar"], per100g: { calories: 380, totalFat: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 28, totalCarbs: 98, dietaryFiber: 0, totalSugars: 97, addedSugars: 97, protein: 0.1, vitaminD: 0, calcium: 83, iron: 0.7, potassium: 133 } },
  { name: "honey", aliases: [], per100g: { calories: 304, totalFat: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 4, totalCarbs: 82, dietaryFiber: 0.2, totalSugars: 82, addedSugars: 82, protein: 0.3, vitaminD: 0, calcium: 6, iron: 0.4, potassium: 52 } },
  { name: "butter", aliases: ["unsalted butter", "salted butter"], per100g: { calories: 717, totalFat: 81, saturatedFat: 51, transFat: 3.3, cholesterol: 215, sodium: 11, totalCarbs: 0.1, dietaryFiber: 0, totalSugars: 0.1, addedSugars: 0, protein: 0.9, vitaminD: 0, calcium: 24, iron: 0, potassium: 24 } },
  { name: "olive oil", aliases: ["extra virgin olive oil", "evoo"], per100g: { calories: 884, totalFat: 100, saturatedFat: 14, transFat: 0, cholesterol: 0, sodium: 2, totalCarbs: 0, dietaryFiber: 0, totalSugars: 0, addedSugars: 0, protein: 0, vitaminD: 0, calcium: 1, iron: 0.6, potassium: 1 } },
  { name: "vegetable oil", aliases: ["canola oil", "sunflower oil", "cooking oil"], per100g: { calories: 884, totalFat: 100, saturatedFat: 7.4, transFat: 0, cholesterol: 0, sodium: 0, totalCarbs: 0, dietaryFiber: 0, totalSugars: 0, addedSugars: 0, protein: 0, vitaminD: 0, calcium: 0, iron: 0, potassium: 0 } },
  { name: "milk", aliases: ["whole milk", "full cream milk"], per100g: { calories: 61, totalFat: 3.3, saturatedFat: 1.9, transFat: 0, cholesterol: 10, sodium: 43, totalCarbs: 4.8, dietaryFiber: 0, totalSugars: 5, addedSugars: 0, protein: 3.2, vitaminD: 1.3, calcium: 113, iron: 0, potassium: 132 } },
  { name: "cream", aliases: ["heavy cream", "double cream", "whipping cream", "thickened cream"], per100g: { calories: 340, totalFat: 36, saturatedFat: 23, transFat: 1.2, cholesterol: 137, sodium: 34, totalCarbs: 2.8, dietaryFiber: 0, totalSugars: 2.9, addedSugars: 0, protein: 2, vitaminD: 0.6, calcium: 65, iron: 0, potassium: 75 } },
  { name: "cheese", aliases: ["cheddar", "cheddar cheese"], per100g: { calories: 403, totalFat: 33, saturatedFat: 21, transFat: 1.2, cholesterol: 105, sodium: 621, totalCarbs: 1.3, dietaryFiber: 0, totalSugars: 0.5, addedSugars: 0, protein: 25, vitaminD: 0.6, calcium: 721, iron: 0.7, potassium: 98 } },
  { name: "parmesan", aliases: ["parmigiano", "parmesan cheese"], per100g: { calories: 431, totalFat: 29, saturatedFat: 19, transFat: 0, cholesterol: 88, sodium: 1529, totalCarbs: 4.1, dietaryFiber: 0, totalSugars: 0.9, addedSugars: 0, protein: 38, vitaminD: 0.5, calcium: 1184, iron: 0.8, potassium: 92 } },
  { name: "mozzarella", aliases: ["mozzarella cheese"], per100g: { calories: 280, totalFat: 17, saturatedFat: 11, transFat: 0, cholesterol: 54, sodium: 627, totalCarbs: 3.1, dietaryFiber: 0, totalSugars: 1.1, addedSugars: 0, protein: 28, vitaminD: 0.4, calcium: 505, iron: 0.4, potassium: 76 } },
  { name: "yogurt", aliases: ["plain yogurt", "greek yogurt", "natural yogurt"], per100g: { calories: 59, totalFat: 0.4, saturatedFat: 0.1, transFat: 0, cholesterol: 5, sodium: 36, totalCarbs: 3.6, dietaryFiber: 0, totalSugars: 3.2, addedSugars: 0, protein: 10, vitaminD: 0, calcium: 110, iron: 0.1, potassium: 141 } },
  { name: "onion", aliases: ["onions", "yellow onion", "brown onion", "white onion"], per100g: { calories: 40, totalFat: 0.1, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 4, totalCarbs: 9.3, dietaryFiber: 1.7, totalSugars: 4.2, addedSugars: 0, protein: 1.1, vitaminD: 0, calcium: 23, iron: 0.2, potassium: 146 } },
  { name: "garlic", aliases: ["garlic clove", "garlic cloves"], per100g: { calories: 149, totalFat: 0.5, saturatedFat: 0.1, transFat: 0, cholesterol: 0, sodium: 17, totalCarbs: 33, dietaryFiber: 2.1, totalSugars: 1, addedSugars: 0, protein: 6.4, vitaminD: 0, calcium: 181, iron: 1.7, potassium: 401 } },
  { name: "tomato", aliases: ["tomatoes", "fresh tomato"], per100g: { calories: 18, totalFat: 0.2, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 5, totalCarbs: 3.9, dietaryFiber: 1.2, totalSugars: 2.6, addedSugars: 0, protein: 0.9, vitaminD: 0, calcium: 10, iron: 0.3, potassium: 237 } },
  { name: "tomato sauce", aliases: ["passata", "tomato puree", "marinara", "tomato paste"], per100g: { calories: 29, totalFat: 0.2, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 460, totalCarbs: 6.6, dietaryFiber: 1.5, totalSugars: 4, addedSugars: 0, protein: 1.3, vitaminD: 0, calcium: 13, iron: 0.9, potassium: 331 } },
  { name: "carrot", aliases: ["carrots"], per100g: { calories: 41, totalFat: 0.2, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 69, totalCarbs: 10, dietaryFiber: 2.8, totalSugars: 4.7, addedSugars: 0, protein: 0.9, vitaminD: 0, calcium: 33, iron: 0.3, potassium: 320 } },
  { name: "broccoli", aliases: [], per100g: { calories: 34, totalFat: 0.4, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 33, totalCarbs: 7, dietaryFiber: 2.6, totalSugars: 1.7, addedSugars: 0, protein: 2.8, vitaminD: 0, calcium: 47, iron: 0.7, potassium: 316 } },
  { name: "spinach", aliases: ["baby spinach"], per100g: { calories: 23, totalFat: 0.4, saturatedFat: 0.1, transFat: 0, cholesterol: 0, sodium: 79, totalCarbs: 3.6, dietaryFiber: 2.2, totalSugars: 0.4, addedSugars: 0, protein: 2.9, vitaminD: 0, calcium: 99, iron: 2.7, potassium: 558 } },
  { name: "bell pepper", aliases: ["capsicum", "red pepper", "green pepper", "yellow pepper", "peppers"], per100g: { calories: 31, totalFat: 0.3, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 4, totalCarbs: 6, dietaryFiber: 2.1, totalSugars: 4.2, addedSugars: 0, protein: 1, vitaminD: 0, calcium: 7, iron: 0.4, potassium: 211 } },
  { name: "mushroom", aliases: ["mushrooms", "button mushroom"], per100g: { calories: 22, totalFat: 0.3, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 5, totalCarbs: 3.3, dietaryFiber: 1, totalSugars: 2, addedSugars: 0, protein: 3.1, vitaminD: 0.2, calcium: 3, iron: 0.5, potassium: 318 } },
  { name: "avocado", aliases: ["avocados"], per100g: { calories: 160, totalFat: 15, saturatedFat: 2.1, transFat: 0, cholesterol: 0, sodium: 7, totalCarbs: 9, dietaryFiber: 7, totalSugars: 0.7, addedSugars: 0, protein: 2, vitaminD: 0, calcium: 12, iron: 0.6, potassium: 485 } },
  { name: "lemon", aliases: ["lemon juice", "lemons"], per100g: { calories: 29, totalFat: 0.3, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 2, totalCarbs: 9.3, dietaryFiber: 2.8, totalSugars: 2.5, addedSugars: 0, protein: 1.1, vitaminD: 0, calcium: 26, iron: 0.6, potassium: 138 } },
  { name: "banana", aliases: ["bananas"], per100g: { calories: 89, totalFat: 0.3, saturatedFat: 0.1, transFat: 0, cholesterol: 0, sodium: 1, totalCarbs: 23, dietaryFiber: 2.6, totalSugars: 12, addedSugars: 0, protein: 1.1, vitaminD: 0, calcium: 5, iron: 0.3, potassium: 358 } },
  { name: "apple", aliases: ["apples"], per100g: { calories: 52, totalFat: 0.2, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 1, totalCarbs: 14, dietaryFiber: 2.4, totalSugars: 10, addedSugars: 0, protein: 0.3, vitaminD: 0, calcium: 6, iron: 0.1, potassium: 107 } },
  { name: "coconut milk", aliases: ["coconut cream"], per100g: { calories: 230, totalFat: 24, saturatedFat: 21, transFat: 0, cholesterol: 0, sodium: 15, totalCarbs: 6, dietaryFiber: 0, totalSugars: 3.3, addedSugars: 0, protein: 2.3, vitaminD: 0, calcium: 16, iron: 1.6, potassium: 263 } },
  { name: "soy sauce", aliases: ["shoyu", "tamari"], per100g: { calories: 53, totalFat: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 5637, totalCarbs: 4.9, dietaryFiber: 0.8, totalSugars: 0.4, addedSugars: 0, protein: 8.1, vitaminD: 0, calcium: 20, iron: 1.8, potassium: 212 } },
  { name: "salt", aliases: ["sea salt", "table salt", "kosher salt"], per100g: { calories: 0, totalFat: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 38758, totalCarbs: 0, dietaryFiber: 0, totalSugars: 0, addedSugars: 0, protein: 0, vitaminD: 0, calcium: 24, iron: 0.3, potassium: 8 } },
  { name: "black pepper", aliases: ["pepper", "ground pepper"], per100g: { calories: 251, totalFat: 3.3, saturatedFat: 1.4, transFat: 0, cholesterol: 0, sodium: 20, totalCarbs: 64, dietaryFiber: 25, totalSugars: 0.6, addedSugars: 0, protein: 10, vitaminD: 0, calcium: 443, iron: 9.7, potassium: 1329 } },
  { name: "cumin", aliases: ["ground cumin", "cumin powder"], per100g: { calories: 375, totalFat: 22, saturatedFat: 1.5, transFat: 0, cholesterol: 0, sodium: 168, totalCarbs: 44, dietaryFiber: 11, totalSugars: 2.3, addedSugars: 0, protein: 18, vitaminD: 0, calcium: 931, iron: 66, potassium: 1788 } },
  { name: "paprika", aliases: ["smoked paprika"], per100g: { calories: 282, totalFat: 13, saturatedFat: 2, transFat: 0, cholesterol: 0, sodium: 68, totalCarbs: 54, dietaryFiber: 35, totalSugars: 10, addedSugars: 0, protein: 14, vitaminD: 0, calcium: 229, iron: 21, potassium: 2280 } },
  { name: "cinnamon", aliases: ["ground cinnamon"], per100g: { calories: 247, totalFat: 1.2, saturatedFat: 0.3, transFat: 0, cholesterol: 0, sodium: 10, totalCarbs: 81, dietaryFiber: 53, totalSugars: 2.2, addedSugars: 0, protein: 4, vitaminD: 0, calcium: 1002, iron: 8.3, potassium: 431 } },
  { name: "ginger", aliases: ["fresh ginger", "ginger root"], per100g: { calories: 80, totalFat: 0.8, saturatedFat: 0.2, transFat: 0, cholesterol: 0, sodium: 13, totalCarbs: 18, dietaryFiber: 2, totalSugars: 1.7, addedSugars: 0, protein: 1.8, vitaminD: 0, calcium: 16, iron: 0.6, potassium: 415 } },
  { name: "chickpeas", aliases: ["garbanzo beans", "canned chickpeas"], per100g: { calories: 164, totalFat: 2.6, saturatedFat: 0.3, transFat: 0, cholesterol: 0, sodium: 7, totalCarbs: 27, dietaryFiber: 8, totalSugars: 4.8, addedSugars: 0, protein: 8.9, vitaminD: 0, calcium: 49, iron: 2.9, potassium: 291 } },
  { name: "lentils", aliases: ["red lentils", "green lentils", "brown lentils"], per100g: { calories: 116, totalFat: 0.4, saturatedFat: 0.1, transFat: 0, cholesterol: 0, sodium: 2, totalCarbs: 20, dietaryFiber: 8, totalSugars: 1.8, addedSugars: 0, protein: 9, vitaminD: 0, calcium: 19, iron: 3.3, potassium: 369 } },
  { name: "black beans", aliases: ["canned black beans"], per100g: { calories: 132, totalFat: 0.5, saturatedFat: 0.1, transFat: 0, cholesterol: 0, sodium: 1, totalCarbs: 24, dietaryFiber: 8.7, totalSugars: 0.3, addedSugars: 0, protein: 8.9, vitaminD: 0, calcium: 27, iron: 2.1, potassium: 355 } },
  { name: "almond", aliases: ["almonds"], per100g: { calories: 579, totalFat: 50, saturatedFat: 3.8, transFat: 0, cholesterol: 0, sodium: 1, totalCarbs: 22, dietaryFiber: 13, totalSugars: 4.4, addedSugars: 0, protein: 21, vitaminD: 0, calcium: 269, iron: 3.7, potassium: 733 } },
  { name: "peanut butter", aliases: [], per100g: { calories: 588, totalFat: 50, saturatedFat: 10, transFat: 0, cholesterol: 0, sodium: 17, totalCarbs: 20, dietaryFiber: 6, totalSugars: 9.2, addedSugars: 3, protein: 25, vitaminD: 0, calcium: 43, iron: 1.7, potassium: 649 } },
  { name: "oats", aliases: ["rolled oats", "oatmeal", "porridge oats"], per100g: { calories: 389, totalFat: 6.9, saturatedFat: 1.2, transFat: 0, cholesterol: 0, sodium: 2, totalCarbs: 66, dietaryFiber: 11, totalSugars: 1, addedSugars: 0, protein: 17, vitaminD: 0, calcium: 54, iron: 4.7, potassium: 429 } },
  { name: "corn", aliases: ["sweet corn", "corn kernels"], per100g: { calories: 86, totalFat: 1.2, saturatedFat: 0.2, transFat: 0, cholesterol: 0, sodium: 15, totalCarbs: 19, dietaryFiber: 2.7, totalSugars: 3.2, addedSugars: 0, protein: 3.3, vitaminD: 0, calcium: 2, iron: 0.5, potassium: 270 } },
  { name: "bacon", aliases: ["bacon strips", "streaky bacon"], per100g: { calories: 541, totalFat: 42, saturatedFat: 14, transFat: 0, cholesterol: 110, sodium: 1717, totalCarbs: 1.4, dietaryFiber: 0, totalSugars: 0, addedSugars: 0, protein: 37, vitaminD: 0.6, calcium: 5, iron: 0.7, potassium: 565 } },
  { name: "pork", aliases: ["pork chop", "pork loin", "pork tenderloin"], per100g: { calories: 242, totalFat: 14, saturatedFat: 5.2, transFat: 0, cholesterol: 80, sodium: 62, totalCarbs: 0, dietaryFiber: 0, totalSugars: 0, addedSugars: 0, protein: 27, vitaminD: 0.7, calcium: 19, iron: 0.9, potassium: 362 } },
  { name: "tuna", aliases: ["canned tuna", "tuna steak"], per100g: { calories: 132, totalFat: 1, saturatedFat: 0.2, transFat: 0, cholesterol: 47, sodium: 47, totalCarbs: 0, dietaryFiber: 0, totalSugars: 0, addedSugars: 0, protein: 28, vitaminD: 1.7, calcium: 4, iron: 0.8, potassium: 323 } },
  { name: "zucchini", aliases: ["courgette", "zucchinis"], per100g: { calories: 17, totalFat: 0.3, saturatedFat: 0.1, transFat: 0, cholesterol: 0, sodium: 8, totalCarbs: 3.1, dietaryFiber: 1, totalSugars: 2.5, addedSugars: 0, protein: 1.2, vitaminD: 0, calcium: 16, iron: 0.4, potassium: 261 } },
  { name: "cucumber", aliases: ["cucumbers"], per100g: { calories: 16, totalFat: 0.1, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 2, totalCarbs: 3.6, dietaryFiber: 0.5, totalSugars: 1.7, addedSugars: 0, protein: 0.7, vitaminD: 0, calcium: 16, iron: 0.3, potassium: 147 } },
  { name: "lettuce", aliases: ["iceberg lettuce", "romaine", "cos lettuce"], per100g: { calories: 15, totalFat: 0.2, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 28, totalCarbs: 2.9, dietaryFiber: 1.3, totalSugars: 0.8, addedSugars: 0, protein: 1.4, vitaminD: 0, calcium: 36, iron: 0.9, potassium: 194 } },
  { name: "cream cheese", aliases: ["philadelphia"], per100g: { calories: 342, totalFat: 34, saturatedFat: 19, transFat: 1.2, cholesterol: 110, sodium: 321, totalCarbs: 4.1, dietaryFiber: 0, totalSugars: 3.2, addedSugars: 0, protein: 6, vitaminD: 0.3, calcium: 98, iron: 0.4, potassium: 138 } },
  { name: "baking powder", aliases: [], per100g: { calories: 53, totalFat: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 10600, totalCarbs: 28, dietaryFiber: 0, totalSugars: 0, addedSugars: 0, protein: 0, vitaminD: 0, calcium: 5876, iron: 11, potassium: 20 } },
  { name: "baking soda", aliases: ["bicarbonate of soda"], per100g: { calories: 0, totalFat: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 27360, totalCarbs: 0, dietaryFiber: 0, totalSugars: 0, addedSugars: 0, protein: 0, vitaminD: 0, calcium: 0, iron: 0, potassium: 0 } },
  { name: "vanilla extract", aliases: ["vanilla", "vanilla essence"], per100g: { calories: 288, totalFat: 0.1, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 9, totalCarbs: 13, dietaryFiber: 0, totalSugars: 13, addedSugars: 0, protein: 0.1, vitaminD: 0, calcium: 11, iron: 0.1, potassium: 148 } },
  { name: "cocoa powder", aliases: ["cocoa", "cacao powder"], per100g: { calories: 228, totalFat: 14, saturatedFat: 8.1, transFat: 0, cholesterol: 0, sodium: 21, totalCarbs: 58, dietaryFiber: 33, totalSugars: 1.8, addedSugars: 0, protein: 20, vitaminD: 0, calcium: 128, iron: 14, potassium: 1524 } },
  { name: "dark chocolate", aliases: ["chocolate", "chocolate chips"], per100g: { calories: 546, totalFat: 31, saturatedFat: 19, transFat: 0, cholesterol: 8, sodium: 24, totalCarbs: 60, dietaryFiber: 7, totalSugars: 48, addedSugars: 40, protein: 5, vitaminD: 0, calcium: 56, iron: 8, potassium: 559 } },
  { name: "maple syrup", aliases: [], per100g: { calories: 260, totalFat: 0.1, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 12, totalCarbs: 67, dietaryFiber: 0, totalSugars: 60, addedSugars: 60, protein: 0, vitaminD: 0, calcium: 102, iron: 0.1, potassium: 212 } },
  { name: "vinegar", aliases: ["white vinegar", "apple cider vinegar", "balsamic vinegar", "rice vinegar"], per100g: { calories: 21, totalFat: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 2, totalCarbs: 0.9, dietaryFiber: 0, totalSugars: 0.4, addedSugars: 0, protein: 0, vitaminD: 0, calcium: 6, iron: 0, potassium: 73 } },
  { name: "mustard", aliases: ["dijon mustard", "yellow mustard"], per100g: { calories: 66, totalFat: 4.0, saturatedFat: 0.2, transFat: 0, cholesterol: 0, sodium: 1135, totalCarbs: 5.3, dietaryFiber: 3.3, totalSugars: 2.2, addedSugars: 0, protein: 3.7, vitaminD: 0, calcium: 58, iron: 1.5, potassium: 138 } },
  { name: "mayonnaise", aliases: ["mayo"], per100g: { calories: 680, totalFat: 75, saturatedFat: 12, transFat: 0, cholesterol: 42, sodium: 635, totalCarbs: 0.6, dietaryFiber: 0, totalSugars: 0.6, addedSugars: 0, protein: 1, vitaminD: 0, calcium: 7, iron: 0.3, potassium: 20 } },
  { name: "ketchup", aliases: ["tomato ketchup", "tomato sauce (condiment)"], per100g: { calories: 112, totalFat: 0.1, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 907, totalCarbs: 28, dietaryFiber: 0.3, totalSugars: 22, addedSugars: 18, protein: 1.7, vitaminD: 0, calcium: 14, iron: 0.4, potassium: 281 } },
];

export type NutritionRegulation = "us_fda" | "eu" | "uk" | "australia";

export interface NutritionField {
  key: keyof NutritionPer100g | "energy_kj" | "salt";
  label: string;
  unit: string;
  indented?: boolean;
  bold?: boolean;
}

export const REGULATION_INFO: Record<NutritionRegulation, { name: string; flag: string; fields: NutritionField[] }> = {
  us_fda: {
    name: "United States (FDA)",
    flag: "US",
    fields: [
      { key: "calories", label: "Calories", unit: "kcal", bold: true },
      { key: "totalFat", label: "Total Fat", unit: "g", bold: true },
      { key: "saturatedFat", label: "Saturated Fat", unit: "g", indented: true },
      { key: "transFat", label: "Trans Fat", unit: "g", indented: true },
      { key: "cholesterol", label: "Cholesterol", unit: "mg", bold: true },
      { key: "sodium", label: "Sodium", unit: "mg", bold: true },
      { key: "totalCarbs", label: "Total Carbohydrate", unit: "g", bold: true },
      { key: "dietaryFiber", label: "Dietary Fiber", unit: "g", indented: true },
      { key: "totalSugars", label: "Total Sugars", unit: "g", indented: true },
      { key: "addedSugars", label: "Added Sugars", unit: "g", indented: true },
      { key: "protein", label: "Protein", unit: "g", bold: true },
      { key: "vitaminD", label: "Vitamin D", unit: "mcg" },
      { key: "calcium", label: "Calcium", unit: "mg" },
      { key: "iron", label: "Iron", unit: "mg" },
      { key: "potassium", label: "Potassium", unit: "mg" },
    ],
  },
  eu: {
    name: "European Union",
    flag: "EU",
    fields: [
      { key: "energy_kj", label: "Energy", unit: "kJ", bold: true },
      { key: "calories", label: "Energy", unit: "kcal", bold: true },
      { key: "totalFat", label: "Fat", unit: "g", bold: true },
      { key: "saturatedFat", label: "of which saturates", unit: "g", indented: true },
      { key: "totalCarbs", label: "Carbohydrate", unit: "g", bold: true },
      { key: "totalSugars", label: "of which sugars", unit: "g", indented: true },
      { key: "protein", label: "Protein", unit: "g", bold: true },
      { key: "salt", label: "Salt", unit: "g", bold: true },
    ],
  },
  uk: {
    name: "United Kingdom",
    flag: "UK",
    fields: [
      { key: "energy_kj", label: "Energy", unit: "kJ", bold: true },
      { key: "calories", label: "Energy", unit: "kcal", bold: true },
      { key: "totalFat", label: "Fat", unit: "g", bold: true },
      { key: "saturatedFat", label: "of which saturates", unit: "g", indented: true },
      { key: "totalCarbs", label: "Carbohydrate", unit: "g", bold: true },
      { key: "totalSugars", label: "of which sugars", unit: "g", indented: true },
      { key: "dietaryFiber", label: "Fibre", unit: "g", bold: true },
      { key: "protein", label: "Protein", unit: "g", bold: true },
      { key: "salt", label: "Salt", unit: "g", bold: true },
    ],
  },
  australia: {
    name: "Australia / New Zealand",
    flag: "AU",
    fields: [
      { key: "energy_kj", label: "Energy", unit: "kJ", bold: true },
      { key: "protein", label: "Protein", unit: "g", bold: true },
      { key: "totalFat", label: "Fat, total", unit: "g", bold: true },
      { key: "saturatedFat", label: "- saturated", unit: "g", indented: true },
      { key: "totalCarbs", label: "Carbohydrate", unit: "g", bold: true },
      { key: "totalSugars", label: "- sugars", unit: "g", indented: true },
      { key: "sodium", label: "Sodium", unit: "mg", bold: true },
    ],
  },
};

export function findNutritionEntry(ingredientName: string): NutritionEntry | null {
  const lower = ingredientName.toLowerCase().trim();
  for (const entry of NUTRITION_DB) {
    if (entry.name === lower) return entry;
    for (const alias of entry.aliases) {
      if (alias === lower) return entry;
    }
  }
  for (const entry of NUTRITION_DB) {
    if (lower.includes(entry.name) || entry.name.includes(lower)) return entry;
    for (const alias of entry.aliases) {
      if (lower.includes(alias) || alias.includes(lower)) return entry;
    }
  }
  return null;
}

export function convertToGrams(quantity: number, unit: string): number {
  const factor = UNIT_CONVERSIONS[unit.toLowerCase()];
  if (!factor) return quantity;
  return quantity * factor;
}

export function calculateNutrition(
  ingredients: { name: string; quantity: number; unit: string }[],
  servings: number
): NutritionPer100g & { energy_kj: number; salt: number } {
  const total: NutritionPer100g = {
    calories: 0, totalFat: 0, saturatedFat: 0, transFat: 0,
    cholesterol: 0, sodium: 0, totalCarbs: 0, dietaryFiber: 0,
    totalSugars: 0, addedSugars: 0, protein: 0, vitaminD: 0,
    calcium: 0, iron: 0, potassium: 0,
  };

  for (const ing of ingredients) {
    const entry = findNutritionEntry(ing.name);
    if (!entry) continue;

    const grams = convertToGrams(ing.quantity, ing.unit);
    const factor = grams / 100;

    (Object.keys(total) as (keyof NutritionPer100g)[]).forEach((key) => {
      total[key] += entry.per100g[key] * factor;
    });
  }

  const perServing = {} as NutritionPer100g;
  const s = Math.max(servings, 1);
  (Object.keys(total) as (keyof NutritionPer100g)[]).forEach((key) => {
    perServing[key] = Math.round((total[key] / s) * 10) / 10;
  });

  return {
    ...perServing,
    energy_kj: Math.round(perServing.calories * 4.184 * 10) / 10,
    salt: Math.round((perServing.sodium / 400) * 10) / 10,
  };
}
