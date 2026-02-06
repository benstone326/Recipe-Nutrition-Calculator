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
  translations: Record<string, string[]>;
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
  { name: "chicken breast", aliases: ["chicken", "chicken fillet"], translations: { hu: ["csirkemell", "csirke"], es: ["pechuga de pollo", "pollo"], fr: ["blanc de poulet", "poitrine de poulet"], de: ["Hähnchenbrust", "Hühnerbrust"], it: ["petto di pollo", "pollo"], pt: ["peito de frango", "frango"], zh: ["鸡胸肉", "鸡肉"], ja: ["鶏むね肉", "鶏肉"] }, per100g: { calories: 165, totalFat: 3.6, saturatedFat: 1, transFat: 0, cholesterol: 85, sodium: 74, totalCarbs: 0, dietaryFiber: 0, totalSugars: 0, addedSugars: 0, protein: 31, vitaminD: 0.1, calcium: 15, iron: 1, potassium: 256 } },
  { name: "ground beef", aliases: ["beef mince", "minced beef", "beef"], translations: { hu: ["darált marhahús", "marhahús"], es: ["carne molida", "carne picada"], fr: ["bœuf haché", "viande hachée"], de: ["Rinderhackfleisch", "Hackfleisch"], it: ["carne macinata", "manzo macinato"], pt: ["carne moída", "carne picada"], zh: ["牛肉碎", "牛肉末"], ja: ["牛ひき肉", "ひき肉"] }, per100g: { calories: 254, totalFat: 17.2, saturatedFat: 6.7, transFat: 0.7, cholesterol: 78, sodium: 66, totalCarbs: 0, dietaryFiber: 0, totalSugars: 0, addedSugars: 0, protein: 25.5, vitaminD: 0, calcium: 18, iron: 2.6, potassium: 305 } },
  { name: "salmon", aliases: ["salmon fillet"], translations: { hu: ["lazac"], es: ["salmón"], fr: ["saumon"], de: ["Lachs"], it: ["salmone"], pt: ["salmão"], zh: ["三文鱼", "鲑鱼"], ja: ["サーモン", "鮭"] }, per100g: { calories: 208, totalFat: 13.4, saturatedFat: 3.1, transFat: 0, cholesterol: 55, sodium: 59, totalCarbs: 0, dietaryFiber: 0, totalSugars: 0, addedSugars: 0, protein: 20, vitaminD: 11, calcium: 12, iron: 0.8, potassium: 363 } },
  { name: "shrimp", aliases: ["prawn", "prawns"], translations: { hu: ["garnéla", "garnélarák"], es: ["camarón", "gamba"], fr: ["crevette", "crevettes"], de: ["Garnele", "Shrimp"], it: ["gamberetto", "gambero"], pt: ["camarão"], zh: ["虾", "虾仁"], ja: ["エビ", "海老"] }, per100g: { calories: 99, totalFat: 0.3, saturatedFat: 0.1, transFat: 0, cholesterol: 189, sodium: 111, totalCarbs: 0.2, dietaryFiber: 0, totalSugars: 0, addedSugars: 0, protein: 24, vitaminD: 0, calcium: 52, iron: 0.2, potassium: 259 } },
  { name: "egg", aliases: ["eggs", "whole egg"], translations: { hu: ["tojás"], es: ["huevo", "huevos"], fr: ["œuf", "œufs"], de: ["Ei", "Eier"], it: ["uovo", "uova"], pt: ["ovo", "ovos"], zh: ["鸡蛋", "蛋"], ja: ["卵", "たまご"] }, per100g: { calories: 155, totalFat: 11, saturatedFat: 3.3, transFat: 0, cholesterol: 373, sodium: 124, totalCarbs: 1.1, dietaryFiber: 0, totalSugars: 1.1, addedSugars: 0, protein: 13, vitaminD: 2, calcium: 56, iron: 1.8, potassium: 126 } },
  { name: "tofu", aliases: ["bean curd"], translations: { hu: ["tofu", "szójasajt"], es: ["tofu"], fr: ["tofu"], de: ["Tofu"], it: ["tofu"], pt: ["tofu"], zh: ["豆腐"], ja: ["豆腐", "とうふ"] }, per100g: { calories: 76, totalFat: 4.8, saturatedFat: 0.7, transFat: 0, cholesterol: 0, sodium: 7, totalCarbs: 1.9, dietaryFiber: 0.3, totalSugars: 0.6, addedSugars: 0, protein: 8, vitaminD: 0, calcium: 350, iron: 5.4, potassium: 121 } },
  { name: "rice", aliases: ["white rice", "basmati rice", "jasmine rice"], translations: { hu: ["rizs"], es: ["arroz"], fr: ["riz"], de: ["Reis"], it: ["riso"], pt: ["arroz"], zh: ["米饭", "白米"], ja: ["ご飯", "米"] }, per100g: { calories: 130, totalFat: 0.3, saturatedFat: 0.1, transFat: 0, cholesterol: 0, sodium: 1, totalCarbs: 28, dietaryFiber: 0.4, totalSugars: 0, addedSugars: 0, protein: 2.7, vitaminD: 0, calcium: 10, iron: 0.2, potassium: 35 } },
  { name: "brown rice", aliases: [], translations: { hu: ["barna rizs"], es: ["arroz integral"], fr: ["riz complet", "riz brun"], de: ["Vollkornreis", "brauner Reis"], it: ["riso integrale"], pt: ["arroz integral"], zh: ["糙米"], ja: ["玄米"] }, per100g: { calories: 123, totalFat: 1, saturatedFat: 0.2, transFat: 0, cholesterol: 0, sodium: 1, totalCarbs: 26, dietaryFiber: 1.8, totalSugars: 0.4, addedSugars: 0, protein: 2.6, vitaminD: 0, calcium: 10, iron: 0.4, potassium: 43 } },
  { name: "pasta", aliases: ["spaghetti", "penne", "fusilli", "macaroni", "noodles"], translations: { hu: ["tészta", "pasta"], es: ["pasta", "fideos"], fr: ["pâtes", "pâtes alimentaires"], de: ["Nudeln", "Pasta"], it: ["pasta", "pastasciutta"], pt: ["massa", "macarrão"], zh: ["意大利面", "面条"], ja: ["パスタ", "麺"] }, per100g: { calories: 131, totalFat: 1.1, saturatedFat: 0.2, transFat: 0, cholesterol: 0, sodium: 1, totalCarbs: 25, dietaryFiber: 1.8, totalSugars: 0.6, addedSugars: 0, protein: 5, vitaminD: 0, calcium: 7, iron: 1.3, potassium: 44 } },
  { name: "bread", aliases: ["white bread", "toast"], translations: { hu: ["kenyér", "fehér kenyér"], es: ["pan", "pan blanco"], fr: ["pain", "pain blanc"], de: ["Brot", "Weißbrot"], it: ["pane", "pane bianco"], pt: ["pão", "pão branco"], zh: ["面包", "白面包"], ja: ["パン", "食パン"] }, per100g: { calories: 265, totalFat: 3.2, saturatedFat: 0.7, transFat: 0, cholesterol: 0, sodium: 491, totalCarbs: 49, dietaryFiber: 2.7, totalSugars: 5, addedSugars: 3, protein: 9, vitaminD: 0, calcium: 260, iron: 3.6, potassium: 100 } },
  { name: "potato", aliases: ["potatoes"], translations: { hu: ["burgonya", "krumpli"], es: ["patata", "papa"], fr: ["pomme de terre"], de: ["Kartoffel", "Kartoffeln"], it: ["patata", "patate"], pt: ["batata"], zh: ["土豆", "马铃薯"], ja: ["じゃがいも", "ジャガイモ"] }, per100g: { calories: 77, totalFat: 0.1, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 6, totalCarbs: 17, dietaryFiber: 2.2, totalSugars: 0.8, addedSugars: 0, protein: 2, vitaminD: 0, calcium: 12, iron: 0.8, potassium: 421 } },
  { name: "sweet potato", aliases: ["sweet potatoes", "yam"], translations: { hu: ["édesburgonya", "batáta"], es: ["batata", "boniato", "camote"], fr: ["patate douce"], de: ["Süßkartoffel"], it: ["patata dolce", "patata americana"], pt: ["batata-doce"], zh: ["红薯", "地瓜"], ja: ["さつまいも", "サツマイモ"] }, per100g: { calories: 86, totalFat: 0.1, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 55, totalCarbs: 20, dietaryFiber: 3, totalSugars: 4.2, addedSugars: 0, protein: 1.6, vitaminD: 0, calcium: 30, iron: 0.6, potassium: 337 } },
  { name: "flour", aliases: ["all purpose flour", "plain flour", "wheat flour", "all-purpose flour"], translations: { hu: ["liszt", "búzaliszt"], es: ["harina", "harina de trigo"], fr: ["farine", "farine de blé"], de: ["Mehl", "Weizenmehl"], it: ["farina", "farina di grano"], pt: ["farinha", "farinha de trigo"], zh: ["面粉", "小麦粉"], ja: ["小麦粉", "薄力粉"] }, per100g: { calories: 364, totalFat: 1, saturatedFat: 0.2, transFat: 0, cholesterol: 0, sodium: 2, totalCarbs: 76, dietaryFiber: 2.7, totalSugars: 0.3, addedSugars: 0, protein: 10, vitaminD: 0, calcium: 15, iron: 4.6, potassium: 107 } },
  { name: "sugar", aliases: ["white sugar", "granulated sugar", "caster sugar"], translations: { hu: ["cukor", "kristálycukor"], es: ["azúcar", "azúcar blanco"], fr: ["sucre", "sucre blanc"], de: ["Zucker", "weißer Zucker"], it: ["zucchero", "zucchero semolato"], pt: ["açúcar", "açúcar branco"], zh: ["糖", "白糖"], ja: ["砂糖", "上白糖"] }, per100g: { calories: 387, totalFat: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 1, totalCarbs: 100, dietaryFiber: 0, totalSugars: 100, addedSugars: 100, protein: 0, vitaminD: 0, calcium: 1, iron: 0, potassium: 2 } },
  { name: "brown sugar", aliases: ["dark brown sugar", "light brown sugar"], translations: { hu: ["barna cukor"], es: ["azúcar moreno", "azúcar morena"], fr: ["sucre brun", "cassonade"], de: ["brauner Zucker", "Rohrzucker"], it: ["zucchero di canna", "zucchero bruno"], pt: ["açúcar mascavo", "açúcar demerara"], zh: ["红糖", "黑糖"], ja: ["黒砂糖", "ブラウンシュガー"] }, per100g: { calories: 380, totalFat: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 28, totalCarbs: 98, dietaryFiber: 0, totalSugars: 97, addedSugars: 97, protein: 0.1, vitaminD: 0, calcium: 83, iron: 0.7, potassium: 133 } },
  { name: "honey", aliases: [], translations: { hu: ["méz"], es: ["miel"], fr: ["miel"], de: ["Honig"], it: ["miele"], pt: ["mel"], zh: ["蜂蜜", "蜜糖"], ja: ["はちみつ", "蜂蜜"] }, per100g: { calories: 304, totalFat: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 4, totalCarbs: 82, dietaryFiber: 0.2, totalSugars: 82, addedSugars: 82, protein: 0.3, vitaminD: 0, calcium: 6, iron: 0.4, potassium: 52 } },
  { name: "butter", aliases: ["unsalted butter", "salted butter"], translations: { hu: ["vaj"], es: ["mantequilla", "manteca"], fr: ["beurre"], de: ["Butter"], it: ["burro"], pt: ["manteiga"], zh: ["黄油", "奶油"], ja: ["バター"] }, per100g: { calories: 717, totalFat: 81, saturatedFat: 51, transFat: 3.3, cholesterol: 215, sodium: 11, totalCarbs: 0.1, dietaryFiber: 0, totalSugars: 0.1, addedSugars: 0, protein: 0.9, vitaminD: 0, calcium: 24, iron: 0, potassium: 24 } },
  { name: "olive oil", aliases: ["extra virgin olive oil", "evoo"], translations: { hu: ["olívaolaj"], es: ["aceite de oliva"], fr: ["huile d'olive"], de: ["Olivenöl"], it: ["olio d'oliva", "olio extravergine"], pt: ["azeite", "azeite de oliva"], zh: ["橄榄油"], ja: ["オリーブオイル", "オリーブ油"] }, per100g: { calories: 884, totalFat: 100, saturatedFat: 14, transFat: 0, cholesterol: 0, sodium: 2, totalCarbs: 0, dietaryFiber: 0, totalSugars: 0, addedSugars: 0, protein: 0, vitaminD: 0, calcium: 1, iron: 0.6, potassium: 1 } },
  { name: "vegetable oil", aliases: ["canola oil", "sunflower oil", "cooking oil"], translations: { hu: ["étolaj", "napraforgóolaj"], es: ["aceite vegetal", "aceite de girasol"], fr: ["huile végétale", "huile de tournesol"], de: ["Pflanzenöl", "Sonnenblumenöl"], it: ["olio vegetale", "olio di semi"], pt: ["óleo vegetal", "óleo de girassol"], zh: ["植物油", "菜油"], ja: ["植物油", "サラダ油"] }, per100g: { calories: 884, totalFat: 100, saturatedFat: 7.4, transFat: 0, cholesterol: 0, sodium: 0, totalCarbs: 0, dietaryFiber: 0, totalSugars: 0, addedSugars: 0, protein: 0, vitaminD: 0, calcium: 0, iron: 0, potassium: 0 } },
  { name: "milk", aliases: ["whole milk", "full cream milk"], translations: { hu: ["tej"], es: ["leche"], fr: ["lait"], de: ["Milch", "Vollmilch"], it: ["latte"], pt: ["leite"], zh: ["牛奶", "鲜奶"], ja: ["牛乳", "ミルク"] }, per100g: { calories: 61, totalFat: 3.3, saturatedFat: 1.9, transFat: 0, cholesterol: 10, sodium: 43, totalCarbs: 4.8, dietaryFiber: 0, totalSugars: 5, addedSugars: 0, protein: 3.2, vitaminD: 1.3, calcium: 113, iron: 0, potassium: 132 } },
  { name: "cream", aliases: ["heavy cream", "double cream", "whipping cream", "thickened cream"], translations: { hu: ["tejszín", "habtejszín"], es: ["crema", "nata"], fr: ["crème", "crème fraîche"], de: ["Sahne", "Schlagsahne"], it: ["panna", "panna da montare"], pt: ["creme de leite", "natas"], zh: ["奶油", "淡奶油"], ja: ["生クリーム", "クリーム"] }, per100g: { calories: 340, totalFat: 36, saturatedFat: 23, transFat: 1.2, cholesterol: 137, sodium: 34, totalCarbs: 2.8, dietaryFiber: 0, totalSugars: 2.9, addedSugars: 0, protein: 2, vitaminD: 0.6, calcium: 65, iron: 0, potassium: 75 } },
  { name: "cheese", aliases: ["cheddar", "cheddar cheese"], translations: { hu: ["sajt", "cheddar sajt"], es: ["queso", "queso cheddar"], fr: ["fromage", "cheddar"], de: ["Käse", "Cheddar"], it: ["formaggio", "cheddar"], pt: ["queijo", "queijo cheddar"], zh: ["奶酪", "芝士"], ja: ["チーズ", "チェダーチーズ"] }, per100g: { calories: 403, totalFat: 33, saturatedFat: 21, transFat: 1.2, cholesterol: 105, sodium: 621, totalCarbs: 1.3, dietaryFiber: 0, totalSugars: 0.5, addedSugars: 0, protein: 25, vitaminD: 0.6, calcium: 721, iron: 0.7, potassium: 98 } },
  { name: "parmesan", aliases: ["parmigiano", "parmesan cheese"], translations: { hu: ["parmezán", "parmezán sajt"], es: ["parmesano", "queso parmesano"], fr: ["parmesan"], de: ["Parmesan", "Parmesankäse"], it: ["parmigiano", "parmigiano reggiano"], pt: ["parmesão", "queijo parmesão"], zh: ["帕尔马干酪", "帕玛森"], ja: ["パルメザン", "パルミジャーノ"] }, per100g: { calories: 431, totalFat: 29, saturatedFat: 19, transFat: 0, cholesterol: 88, sodium: 1529, totalCarbs: 4.1, dietaryFiber: 0, totalSugars: 0.9, addedSugars: 0, protein: 38, vitaminD: 0.5, calcium: 1184, iron: 0.8, potassium: 92 } },
  { name: "mozzarella", aliases: ["mozzarella cheese"], translations: { hu: ["mozzarella", "mozzarella sajt"], es: ["mozzarella", "queso mozzarella"], fr: ["mozzarella"], de: ["Mozzarella"], it: ["mozzarella"], pt: ["mussarela", "queijo mussarela"], zh: ["马苏里拉", "莫扎瑞拉"], ja: ["モッツァレラ"] }, per100g: { calories: 280, totalFat: 17, saturatedFat: 11, transFat: 0, cholesterol: 54, sodium: 627, totalCarbs: 3.1, dietaryFiber: 0, totalSugars: 1.1, addedSugars: 0, protein: 28, vitaminD: 0.4, calcium: 505, iron: 0.4, potassium: 76 } },
  { name: "yogurt", aliases: ["plain yogurt", "greek yogurt", "natural yogurt"], translations: { hu: ["joghurt", "natúr joghurt"], es: ["yogur", "yogur natural"], fr: ["yaourt", "yogourt"], de: ["Joghurt", "Naturjoghurt"], it: ["yogurt", "yogurt greco"], pt: ["iogurte", "iogurte natural"], zh: ["酸奶", "优格"], ja: ["ヨーグルト"] }, per100g: { calories: 59, totalFat: 0.4, saturatedFat: 0.1, transFat: 0, cholesterol: 5, sodium: 36, totalCarbs: 3.6, dietaryFiber: 0, totalSugars: 3.2, addedSugars: 0, protein: 10, vitaminD: 0, calcium: 110, iron: 0.1, potassium: 141 } },
  { name: "onion", aliases: ["onions", "yellow onion", "brown onion", "white onion"], translations: { hu: ["hagyma", "vöröshagyma"], es: ["cebolla"], fr: ["oignon"], de: ["Zwiebel", "Zwiebeln"], it: ["cipolla", "cipolle"], pt: ["cebola"], zh: ["洋葱"], ja: ["玉ねぎ", "タマネギ"] }, per100g: { calories: 40, totalFat: 0.1, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 4, totalCarbs: 9.3, dietaryFiber: 1.7, totalSugars: 4.2, addedSugars: 0, protein: 1.1, vitaminD: 0, calcium: 23, iron: 0.2, potassium: 146 } },
  { name: "garlic", aliases: ["garlic clove", "garlic cloves"], translations: { hu: ["fokhagyma"], es: ["ajo"], fr: ["ail"], de: ["Knoblauch"], it: ["aglio"], pt: ["alho"], zh: ["大蒜", "蒜"], ja: ["にんにく", "ニンニク"] }, per100g: { calories: 149, totalFat: 0.5, saturatedFat: 0.1, transFat: 0, cholesterol: 0, sodium: 17, totalCarbs: 33, dietaryFiber: 2.1, totalSugars: 1, addedSugars: 0, protein: 6.4, vitaminD: 0, calcium: 181, iron: 1.7, potassium: 401 } },
  { name: "tomato", aliases: ["tomatoes", "fresh tomato"], translations: { hu: ["paradicsom"], es: ["tomate"], fr: ["tomate"], de: ["Tomate", "Tomaten"], it: ["pomodoro", "pomodori"], pt: ["tomate"], zh: ["番茄", "西红柿"], ja: ["トマト"] }, per100g: { calories: 18, totalFat: 0.2, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 5, totalCarbs: 3.9, dietaryFiber: 1.2, totalSugars: 2.6, addedSugars: 0, protein: 0.9, vitaminD: 0, calcium: 10, iron: 0.3, potassium: 237 } },
  { name: "tomato sauce", aliases: ["passata", "tomato puree", "marinara", "tomato paste"], translations: { hu: ["paradicsomszósz", "passata"], es: ["salsa de tomate", "tomate frito"], fr: ["sauce tomate", "coulis de tomate"], de: ["Tomatensauce", "Tomatensoße"], it: ["salsa di pomodoro", "passata"], pt: ["molho de tomate", "polpa de tomate"], zh: ["番茄酱", "番茄酱汁"], ja: ["トマトソース"] }, per100g: { calories: 29, totalFat: 0.2, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 460, totalCarbs: 6.6, dietaryFiber: 1.5, totalSugars: 4, addedSugars: 0, protein: 1.3, vitaminD: 0, calcium: 13, iron: 0.9, potassium: 331 } },
  { name: "carrot", aliases: ["carrots"], translations: { hu: ["sárgarépa", "répa"], es: ["zanahoria"], fr: ["carotte"], de: ["Karotte", "Möhre"], it: ["carota", "carote"], pt: ["cenoura"], zh: ["胡萝卜"], ja: ["にんじん", "ニンジン"] }, per100g: { calories: 41, totalFat: 0.2, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 69, totalCarbs: 10, dietaryFiber: 2.8, totalSugars: 4.7, addedSugars: 0, protein: 0.9, vitaminD: 0, calcium: 33, iron: 0.3, potassium: 320 } },
  { name: "broccoli", aliases: [], translations: { hu: ["brokkoli"], es: ["brócoli", "brécol"], fr: ["brocoli"], de: ["Brokkoli"], it: ["broccoli", "broccolo"], pt: ["brócolis"], zh: ["西兰花", "花椰菜"], ja: ["ブロッコリー"] }, per100g: { calories: 34, totalFat: 0.4, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 33, totalCarbs: 7, dietaryFiber: 2.6, totalSugars: 1.7, addedSugars: 0, protein: 2.8, vitaminD: 0, calcium: 47, iron: 0.7, potassium: 316 } },
  { name: "spinach", aliases: ["baby spinach"], translations: { hu: ["spenót"], es: ["espinaca", "espinacas"], fr: ["épinard", "épinards"], de: ["Spinat"], it: ["spinaci", "spinacio"], pt: ["espinafre"], zh: ["菠菜"], ja: ["ほうれん草", "ホウレンソウ"] }, per100g: { calories: 23, totalFat: 0.4, saturatedFat: 0.1, transFat: 0, cholesterol: 0, sodium: 79, totalCarbs: 3.6, dietaryFiber: 2.2, totalSugars: 0.4, addedSugars: 0, protein: 2.9, vitaminD: 0, calcium: 99, iron: 2.7, potassium: 558 } },
  { name: "bell pepper", aliases: ["capsicum", "red pepper", "green pepper", "yellow pepper", "peppers"], translations: { hu: ["paprika", "kaliforniai paprika"], es: ["pimiento", "pimiento morrón"], fr: ["poivron"], de: ["Paprika", "Gemüsepaprika"], it: ["peperone", "peperoni"], pt: ["pimentão"], zh: ["甜椒", "彩椒"], ja: ["ピーマン", "パプリカ"] }, per100g: { calories: 31, totalFat: 0.3, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 4, totalCarbs: 6, dietaryFiber: 2.1, totalSugars: 4.2, addedSugars: 0, protein: 1, vitaminD: 0, calcium: 7, iron: 0.4, potassium: 211 } },
  { name: "mushroom", aliases: ["mushrooms", "button mushroom"], translations: { hu: ["gomba", "csiperke"], es: ["champiñón", "seta"], fr: ["champignon"], de: ["Pilz", "Champignon"], it: ["fungo", "funghi", "champignon"], pt: ["cogumelo"], zh: ["蘑菇", "香菇"], ja: ["きのこ", "マッシュルーム"] }, per100g: { calories: 22, totalFat: 0.3, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 5, totalCarbs: 3.3, dietaryFiber: 1, totalSugars: 2, addedSugars: 0, protein: 3.1, vitaminD: 0.2, calcium: 3, iron: 0.5, potassium: 318 } },
  { name: "avocado", aliases: ["avocados"], translations: { hu: ["avokádó"], es: ["aguacate", "palta"], fr: ["avocat"], de: ["Avocado"], it: ["avocado"], pt: ["abacate"], zh: ["牛油果", "鳄梨"], ja: ["アボカド"] }, per100g: { calories: 160, totalFat: 15, saturatedFat: 2.1, transFat: 0, cholesterol: 0, sodium: 7, totalCarbs: 9, dietaryFiber: 7, totalSugars: 0.7, addedSugars: 0, protein: 2, vitaminD: 0, calcium: 12, iron: 0.6, potassium: 485 } },
  { name: "lemon", aliases: ["lemon juice", "lemons"], translations: { hu: ["citrom"], es: ["limón"], fr: ["citron"], de: ["Zitrone"], it: ["limone"], pt: ["limão"], zh: ["柠檬"], ja: ["レモン"] }, per100g: { calories: 29, totalFat: 0.3, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 2, totalCarbs: 9.3, dietaryFiber: 2.8, totalSugars: 2.5, addedSugars: 0, protein: 1.1, vitaminD: 0, calcium: 26, iron: 0.6, potassium: 138 } },
  { name: "banana", aliases: ["bananas"], translations: { hu: ["banán"], es: ["plátano", "banana"], fr: ["banane"], de: ["Banane"], it: ["banana"], pt: ["banana"], zh: ["香蕉"], ja: ["バナナ"] }, per100g: { calories: 89, totalFat: 0.3, saturatedFat: 0.1, transFat: 0, cholesterol: 0, sodium: 1, totalCarbs: 23, dietaryFiber: 2.6, totalSugars: 12, addedSugars: 0, protein: 1.1, vitaminD: 0, calcium: 5, iron: 0.3, potassium: 358 } },
  { name: "apple", aliases: ["apples"], translations: { hu: ["alma"], es: ["manzana"], fr: ["pomme"], de: ["Apfel"], it: ["mela", "mele"], pt: ["maçã"], zh: ["苹果"], ja: ["りんご", "リンゴ"] }, per100g: { calories: 52, totalFat: 0.2, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 1, totalCarbs: 14, dietaryFiber: 2.4, totalSugars: 10, addedSugars: 0, protein: 0.3, vitaminD: 0, calcium: 6, iron: 0.1, potassium: 107 } },
  { name: "coconut milk", aliases: ["coconut cream"], translations: { hu: ["kókusztej", "kókuszkrém"], es: ["leche de coco"], fr: ["lait de coco"], de: ["Kokosmilch"], it: ["latte di cocco"], pt: ["leite de coco"], zh: ["椰奶", "椰浆"], ja: ["ココナッツミルク"] }, per100g: { calories: 230, totalFat: 24, saturatedFat: 21, transFat: 0, cholesterol: 0, sodium: 15, totalCarbs: 6, dietaryFiber: 0, totalSugars: 3.3, addedSugars: 0, protein: 2.3, vitaminD: 0, calcium: 16, iron: 1.6, potassium: 263 } },
  { name: "soy sauce", aliases: ["shoyu", "tamari"], translations: { hu: ["szójaszósz"], es: ["salsa de soja"], fr: ["sauce soja"], de: ["Sojasoße", "Sojasauce"], it: ["salsa di soia"], pt: ["molho de soja"], zh: ["酱油", "生抽"], ja: ["醤油", "しょうゆ"] }, per100g: { calories: 53, totalFat: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 5637, totalCarbs: 4.9, dietaryFiber: 0.8, totalSugars: 0.4, addedSugars: 0, protein: 8.1, vitaminD: 0, calcium: 20, iron: 1.8, potassium: 212 } },
  { name: "salt", aliases: ["sea salt", "table salt", "kosher salt"], translations: { hu: ["só"], es: ["sal"], fr: ["sel"], de: ["Salz"], it: ["sale"], pt: ["sal"], zh: ["盐", "食盐"], ja: ["塩", "しお"] }, per100g: { calories: 0, totalFat: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 38758, totalCarbs: 0, dietaryFiber: 0, totalSugars: 0, addedSugars: 0, protein: 0, vitaminD: 0, calcium: 24, iron: 0.3, potassium: 8 } },
  { name: "black pepper", aliases: ["pepper", "ground pepper"], translations: { hu: ["bors", "fekete bors"], es: ["pimienta", "pimienta negra"], fr: ["poivre", "poivre noir"], de: ["Pfeffer", "schwarzer Pfeffer"], it: ["pepe", "pepe nero"], pt: ["pimenta", "pimenta-do-reino"], zh: ["黑胡椒", "胡椒"], ja: ["黒コショウ", "コショウ"] }, per100g: { calories: 251, totalFat: 3.3, saturatedFat: 1.4, transFat: 0, cholesterol: 0, sodium: 20, totalCarbs: 64, dietaryFiber: 25, totalSugars: 0.6, addedSugars: 0, protein: 10, vitaminD: 0, calcium: 443, iron: 9.7, potassium: 1329 } },
  { name: "cumin", aliases: ["ground cumin", "cumin powder"], translations: { hu: ["köménymag", "római kömény"], es: ["comino"], fr: ["cumin"], de: ["Kreuzkümmel", "Kumin"], it: ["cumino"], pt: ["cominho"], zh: ["孜然", "小茴香"], ja: ["クミン"] }, per100g: { calories: 375, totalFat: 22, saturatedFat: 1.5, transFat: 0, cholesterol: 0, sodium: 168, totalCarbs: 44, dietaryFiber: 11, totalSugars: 2.3, addedSugars: 0, protein: 18, vitaminD: 0, calcium: 931, iron: 66, potassium: 1788 } },
  { name: "paprika", aliases: ["smoked paprika"], translations: { hu: ["pirospaprika", "fűszerpaprika"], es: ["pimentón"], fr: ["paprika"], de: ["Paprikapulver"], it: ["paprica"], pt: ["páprica", "colorau"], zh: ["红椒粉", "辣椒粉"], ja: ["パプリカパウダー"] }, per100g: { calories: 282, totalFat: 13, saturatedFat: 2, transFat: 0, cholesterol: 0, sodium: 68, totalCarbs: 54, dietaryFiber: 35, totalSugars: 10, addedSugars: 0, protein: 14, vitaminD: 0, calcium: 229, iron: 21, potassium: 2280 } },
  { name: "cinnamon", aliases: ["ground cinnamon"], translations: { hu: ["fahéj"], es: ["canela"], fr: ["cannelle"], de: ["Zimt"], it: ["cannella"], pt: ["canela"], zh: ["肉桂", "桂皮"], ja: ["シナモン"] }, per100g: { calories: 247, totalFat: 1.2, saturatedFat: 0.3, transFat: 0, cholesterol: 0, sodium: 10, totalCarbs: 81, dietaryFiber: 53, totalSugars: 2.2, addedSugars: 0, protein: 4, vitaminD: 0, calcium: 1002, iron: 8.3, potassium: 431 } },
  { name: "ginger", aliases: ["fresh ginger", "ginger root"], translations: { hu: ["gyömbér"], es: ["jengibre"], fr: ["gingembre"], de: ["Ingwer"], it: ["zenzero"], pt: ["gengibre"], zh: ["生姜", "姜"], ja: ["生姜", "しょうが"] }, per100g: { calories: 80, totalFat: 0.8, saturatedFat: 0.2, transFat: 0, cholesterol: 0, sodium: 13, totalCarbs: 18, dietaryFiber: 2, totalSugars: 1.7, addedSugars: 0, protein: 1.8, vitaminD: 0, calcium: 16, iron: 0.6, potassium: 415 } },
  { name: "chickpeas", aliases: ["garbanzo beans", "canned chickpeas"], translations: { hu: ["csicseriborsó"], es: ["garbanzos"], fr: ["pois chiches"], de: ["Kichererbsen"], it: ["ceci"], pt: ["grão-de-bico"], zh: ["鹰嘴豆"], ja: ["ひよこ豆"] }, per100g: { calories: 164, totalFat: 2.6, saturatedFat: 0.3, transFat: 0, cholesterol: 0, sodium: 7, totalCarbs: 27, dietaryFiber: 8, totalSugars: 4.8, addedSugars: 0, protein: 8.9, vitaminD: 0, calcium: 49, iron: 2.9, potassium: 291 } },
  { name: "lentils", aliases: ["red lentils", "green lentils", "brown lentils"], translations: { hu: ["lencse"], es: ["lentejas"], fr: ["lentilles"], de: ["Linsen"], it: ["lenticchie"], pt: ["lentilhas"], zh: ["扁豆", "小扁豆"], ja: ["レンズ豆"] }, per100g: { calories: 116, totalFat: 0.4, saturatedFat: 0.1, transFat: 0, cholesterol: 0, sodium: 2, totalCarbs: 20, dietaryFiber: 8, totalSugars: 1.8, addedSugars: 0, protein: 9, vitaminD: 0, calcium: 19, iron: 3.3, potassium: 369 } },
  { name: "black beans", aliases: ["canned black beans"], translations: { hu: ["fekete bab"], es: ["frijoles negros", "porotos negros"], fr: ["haricots noirs"], de: ["schwarze Bohnen"], it: ["fagioli neri"], pt: ["feijão preto"], zh: ["黑豆"], ja: ["黒豆", "黒いんげん豆"] }, per100g: { calories: 132, totalFat: 0.5, saturatedFat: 0.1, transFat: 0, cholesterol: 0, sodium: 1, totalCarbs: 24, dietaryFiber: 8.7, totalSugars: 0.3, addedSugars: 0, protein: 8.9, vitaminD: 0, calcium: 27, iron: 2.1, potassium: 355 } },
  { name: "almond", aliases: ["almonds"], translations: { hu: ["mandula"], es: ["almendra", "almendras"], fr: ["amande", "amandes"], de: ["Mandel", "Mandeln"], it: ["mandorla", "mandorle"], pt: ["amêndoa", "amêndoas"], zh: ["杏仁"], ja: ["アーモンド"] }, per100g: { calories: 579, totalFat: 50, saturatedFat: 3.8, transFat: 0, cholesterol: 0, sodium: 1, totalCarbs: 22, dietaryFiber: 13, totalSugars: 4.4, addedSugars: 0, protein: 21, vitaminD: 0, calcium: 269, iron: 3.7, potassium: 733 } },
  { name: "peanut butter", aliases: [], translations: { hu: ["mogyoróvaj", "földimogyoróvaj"], es: ["mantequilla de maní", "crema de cacahuete"], fr: ["beurre de cacahuète"], de: ["Erdnussbutter"], it: ["burro di arachidi"], pt: ["manteiga de amendoim", "pasta de amendoim"], zh: ["花生酱"], ja: ["ピーナッツバター"] }, per100g: { calories: 588, totalFat: 50, saturatedFat: 10, transFat: 0, cholesterol: 0, sodium: 17, totalCarbs: 20, dietaryFiber: 6, totalSugars: 9.2, addedSugars: 3, protein: 25, vitaminD: 0, calcium: 43, iron: 1.7, potassium: 649 } },
  { name: "oats", aliases: ["rolled oats", "oatmeal", "porridge oats"], translations: { hu: ["zab", "zabpehely"], es: ["avena", "copos de avena"], fr: ["avoine", "flocons d'avoine"], de: ["Hafer", "Haferflocken"], it: ["avena", "fiocchi d'avena"], pt: ["aveia", "flocos de aveia"], zh: ["燕麦", "燕麦片"], ja: ["オーツ麦", "オートミール"] }, per100g: { calories: 389, totalFat: 6.9, saturatedFat: 1.2, transFat: 0, cholesterol: 0, sodium: 2, totalCarbs: 66, dietaryFiber: 11, totalSugars: 1, addedSugars: 0, protein: 17, vitaminD: 0, calcium: 54, iron: 4.7, potassium: 429 } },
  { name: "corn", aliases: ["sweet corn", "corn kernels"], translations: { hu: ["kukorica", "csemegekukorica"], es: ["maíz", "elote"], fr: ["maïs"], de: ["Mais", "Süßmais"], it: ["mais", "granturco"], pt: ["milho"], zh: ["玉米", "甜玉米"], ja: ["とうもろこし", "コーン"] }, per100g: { calories: 86, totalFat: 1.2, saturatedFat: 0.2, transFat: 0, cholesterol: 0, sodium: 15, totalCarbs: 19, dietaryFiber: 2.7, totalSugars: 3.2, addedSugars: 0, protein: 3.3, vitaminD: 0, calcium: 2, iron: 0.5, potassium: 270 } },
  { name: "bacon", aliases: ["bacon strips", "streaky bacon"], translations: { hu: ["szalonna", "bacon"], es: ["tocino", "bacon"], fr: ["bacon", "lard fumé"], de: ["Speck", "Bacon"], it: ["pancetta", "bacon"], pt: ["bacon", "toucinho"], zh: ["培根", "烟肉"], ja: ["ベーコン"] }, per100g: { calories: 541, totalFat: 42, saturatedFat: 14, transFat: 0, cholesterol: 110, sodium: 1717, totalCarbs: 1.4, dietaryFiber: 0, totalSugars: 0, addedSugars: 0, protein: 37, vitaminD: 0.6, calcium: 5, iron: 0.7, potassium: 565 } },
  { name: "pork", aliases: ["pork chop", "pork loin", "pork tenderloin"], translations: { hu: ["sertéshús", "sertés"], es: ["cerdo", "carne de cerdo"], fr: ["porc", "viande de porc"], de: ["Schweinefleisch"], it: ["maiale", "carne di maiale"], pt: ["porco", "carne de porco"], zh: ["猪肉"], ja: ["豚肉", "ポーク"] }, per100g: { calories: 242, totalFat: 14, saturatedFat: 5.2, transFat: 0, cholesterol: 80, sodium: 62, totalCarbs: 0, dietaryFiber: 0, totalSugars: 0, addedSugars: 0, protein: 27, vitaminD: 0.7, calcium: 19, iron: 0.9, potassium: 362 } },
  { name: "tuna", aliases: ["canned tuna", "tuna steak"], translations: { hu: ["tonhal"], es: ["atún"], fr: ["thon"], de: ["Thunfisch"], it: ["tonno"], pt: ["atum"], zh: ["金枪鱼", "吞拿鱼"], ja: ["ツナ", "マグロ"] }, per100g: { calories: 132, totalFat: 1, saturatedFat: 0.2, transFat: 0, cholesterol: 47, sodium: 47, totalCarbs: 0, dietaryFiber: 0, totalSugars: 0, addedSugars: 0, protein: 28, vitaminD: 1.7, calcium: 4, iron: 0.8, potassium: 323 } },
  { name: "zucchini", aliases: ["courgette", "zucchinis"], translations: { hu: ["cukkini"], es: ["calabacín"], fr: ["courgette"], de: ["Zucchini"], it: ["zucchina", "zucchine"], pt: ["abobrinha"], zh: ["西葫芦"], ja: ["ズッキーニ"] }, per100g: { calories: 17, totalFat: 0.3, saturatedFat: 0.1, transFat: 0, cholesterol: 0, sodium: 8, totalCarbs: 3.1, dietaryFiber: 1, totalSugars: 2.5, addedSugars: 0, protein: 1.2, vitaminD: 0, calcium: 16, iron: 0.4, potassium: 261 } },
  { name: "cucumber", aliases: ["cucumbers"], translations: { hu: ["uborka"], es: ["pepino"], fr: ["concombre"], de: ["Gurke", "Salatgurke"], it: ["cetriolo", "cetrioli"], pt: ["pepino"], zh: ["黄瓜"], ja: ["きゅうり", "キュウリ"] }, per100g: { calories: 16, totalFat: 0.1, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 2, totalCarbs: 3.6, dietaryFiber: 0.5, totalSugars: 1.7, addedSugars: 0, protein: 0.7, vitaminD: 0, calcium: 16, iron: 0.3, potassium: 147 } },
  { name: "lettuce", aliases: ["iceberg lettuce", "romaine", "cos lettuce"], translations: { hu: ["saláta", "fejes saláta"], es: ["lechuga"], fr: ["laitue", "salade"], de: ["Salat", "Kopfsalat"], it: ["lattuga", "insalata"], pt: ["alface"], zh: ["生菜", "莴苣"], ja: ["レタス"] }, per100g: { calories: 15, totalFat: 0.2, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 28, totalCarbs: 2.9, dietaryFiber: 1.3, totalSugars: 0.8, addedSugars: 0, protein: 1.4, vitaminD: 0, calcium: 36, iron: 0.9, potassium: 194 } },
  { name: "cream cheese", aliases: ["philadelphia"], translations: { hu: ["krémsajt"], es: ["queso crema", "queso cremoso"], fr: ["fromage à la crème"], de: ["Frischkäse", "Cream Cheese"], it: ["formaggio cremoso", "formaggio spalmabile"], pt: ["cream cheese", "queijo cremoso"], zh: ["奶油奶酪", "奶油芝士"], ja: ["クリームチーズ"] }, per100g: { calories: 342, totalFat: 34, saturatedFat: 19, transFat: 1.2, cholesterol: 110, sodium: 321, totalCarbs: 4.1, dietaryFiber: 0, totalSugars: 3.2, addedSugars: 0, protein: 6, vitaminD: 0.3, calcium: 98, iron: 0.4, potassium: 138 } },
  { name: "baking powder", aliases: [], translations: { hu: ["sütőpor"], es: ["polvo de hornear", "levadura en polvo"], fr: ["levure chimique", "poudre à lever"], de: ["Backpulver"], it: ["lievito in polvere"], pt: ["fermento em pó"], zh: ["泡打粉", "发酵粉"], ja: ["ベーキングパウダー"] }, per100g: { calories: 53, totalFat: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 10600, totalCarbs: 28, dietaryFiber: 0, totalSugars: 0, addedSugars: 0, protein: 0, vitaminD: 0, calcium: 5876, iron: 11, potassium: 20 } },
  { name: "baking soda", aliases: ["bicarbonate of soda"], translations: { hu: ["szódabikarbóna", "sütőszóda"], es: ["bicarbonato de sodio"], fr: ["bicarbonate de soude"], de: ["Natron", "Backsoda"], it: ["bicarbonato di sodio"], pt: ["bicarbonato de sódio"], zh: ["小苏打"], ja: ["重曹", "ベーキングソーダ"] }, per100g: { calories: 0, totalFat: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 27360, totalCarbs: 0, dietaryFiber: 0, totalSugars: 0, addedSugars: 0, protein: 0, vitaminD: 0, calcium: 0, iron: 0, potassium: 0 } },
  { name: "vanilla extract", aliases: ["vanilla", "vanilla essence"], translations: { hu: ["vaníliakivonat", "vanília"], es: ["extracto de vainilla", "esencia de vainilla"], fr: ["extrait de vanille", "vanille"], de: ["Vanilleextrakt", "Vanille"], it: ["estratto di vaniglia", "vaniglia"], pt: ["extrato de baunilha", "essência de baunilha"], zh: ["香草精", "香草提取物"], ja: ["バニラエッセンス", "バニラエキス"] }, per100g: { calories: 288, totalFat: 0.1, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 9, totalCarbs: 13, dietaryFiber: 0, totalSugars: 13, addedSugars: 0, protein: 0.1, vitaminD: 0, calcium: 11, iron: 0.1, potassium: 148 } },
  { name: "cocoa powder", aliases: ["cocoa", "cacao powder"], translations: { hu: ["kakaópor", "kakaó"], es: ["cacao en polvo", "cacao"], fr: ["cacao en poudre", "cacao"], de: ["Kakaopulver", "Kakao"], it: ["cacao in polvere", "cacao"], pt: ["cacau em pó", "chocolate em pó"], zh: ["可可粉"], ja: ["ココアパウダー", "ココア"] }, per100g: { calories: 228, totalFat: 14, saturatedFat: 8.1, transFat: 0, cholesterol: 0, sodium: 21, totalCarbs: 58, dietaryFiber: 33, totalSugars: 1.8, addedSugars: 0, protein: 20, vitaminD: 0, calcium: 128, iron: 14, potassium: 1524 } },
  { name: "dark chocolate", aliases: ["chocolate", "chocolate chips"], translations: { hu: ["étcsokoládé", "csokoládé"], es: ["chocolate negro", "chocolate oscuro"], fr: ["chocolat noir"], de: ["Zartbitterschokolade", "dunkle Schokolade"], it: ["cioccolato fondente", "cioccolato"], pt: ["chocolate amargo", "chocolate meio amargo"], zh: ["黑巧克力", "dark 巧克力"], ja: ["ダークチョコレート", "チョコレート"] }, per100g: { calories: 546, totalFat: 31, saturatedFat: 19, transFat: 0, cholesterol: 8, sodium: 24, totalCarbs: 60, dietaryFiber: 7, totalSugars: 48, addedSugars: 40, protein: 5, vitaminD: 0, calcium: 56, iron: 8, potassium: 559 } },
  { name: "maple syrup", aliases: [], translations: { hu: ["juharszirup"], es: ["jarabe de arce", "sirope de arce"], fr: ["sirop d'érable"], de: ["Ahornsirup"], it: ["sciroppo d'acero"], pt: ["xarope de bordo", "maple syrup"], zh: ["枫糖浆"], ja: ["メープルシロップ"] }, per100g: { calories: 260, totalFat: 0.1, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 12, totalCarbs: 67, dietaryFiber: 0, totalSugars: 60, addedSugars: 60, protein: 0, vitaminD: 0, calcium: 102, iron: 0.1, potassium: 212 } },
  { name: "vinegar", aliases: ["white vinegar", "apple cider vinegar", "balsamic vinegar", "rice vinegar"], translations: { hu: ["ecet", "almaecet"], es: ["vinagre"], fr: ["vinaigre"], de: ["Essig"], it: ["aceto"], pt: ["vinagre"], zh: ["醋", "白醋"], ja: ["酢", "お酢"] }, per100g: { calories: 21, totalFat: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 2, totalCarbs: 0.9, dietaryFiber: 0, totalSugars: 0.4, addedSugars: 0, protein: 0, vitaminD: 0, calcium: 6, iron: 0, potassium: 73 } },
  { name: "mustard", aliases: ["dijon mustard", "yellow mustard"], translations: { hu: ["mustár"], es: ["mostaza"], fr: ["moutarde"], de: ["Senf"], it: ["senape", "mostarda"], pt: ["mostarda"], zh: ["芥末", "黄芥末"], ja: ["マスタード", "からし"] }, per100g: { calories: 66, totalFat: 4.0, saturatedFat: 0.2, transFat: 0, cholesterol: 0, sodium: 1135, totalCarbs: 5.3, dietaryFiber: 3.3, totalSugars: 2.2, addedSugars: 0, protein: 3.7, vitaminD: 0, calcium: 58, iron: 1.5, potassium: 138 } },
  { name: "mayonnaise", aliases: ["mayo"], translations: { hu: ["majonéz"], es: ["mayonesa"], fr: ["mayonnaise"], de: ["Mayonnaise", "Mayo"], it: ["maionese"], pt: ["maionese"], zh: ["蛋黄酱", "美乃滋"], ja: ["マヨネーズ"] }, per100g: { calories: 680, totalFat: 75, saturatedFat: 12, transFat: 0, cholesterol: 42, sodium: 635, totalCarbs: 0.6, dietaryFiber: 0, totalSugars: 0.6, addedSugars: 0, protein: 1, vitaminD: 0, calcium: 7, iron: 0.3, potassium: 20 } },
  { name: "ketchup", aliases: ["tomato ketchup", "tomato sauce (condiment)"], translations: { hu: ["ketchup", "paradicsomos ketchup"], es: ["kétchup", "salsa ketchup"], fr: ["ketchup"], de: ["Ketchup", "Tomatenketchup"], it: ["ketchup"], pt: ["ketchup"], zh: ["番茄酱", "茄汁"], ja: ["ケチャップ"] }, per100g: { calories: 112, totalFat: 0.1, saturatedFat: 0, transFat: 0, cholesterol: 0, sodium: 907, totalCarbs: 28, dietaryFiber: 0.3, totalSugars: 22, addedSugars: 18, protein: 1.7, vitaminD: 0, calcium: 14, iron: 0.4, potassium: 281 } },
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

export function findNutritionEntry(ingredientName: string, lang?: string): NutritionEntry | null {
  const lower = ingredientName.toLowerCase().trim();
  for (const entry of NUTRITION_DB) {
    if (entry.name === lower) return entry;
    for (const alias of entry.aliases) {
      if (alias === lower) return entry;
    }
  }
  for (const entry of NUTRITION_DB) {
    const langsToCheck = lang ? [lang] : Object.keys(entry.translations);
    for (const l of langsToCheck) {
      const trans = entry.translations[l];
      if (trans) {
        for (const t of trans) {
          if (t.toLowerCase() === lower) return entry;
        }
      }
    }
  }
  for (const entry of NUTRITION_DB) {
    if (lower.includes(entry.name) || entry.name.includes(lower)) return entry;
    for (const alias of entry.aliases) {
      if (lower.includes(alias) || alias.includes(lower)) return entry;
    }
  }
  for (const entry of NUTRITION_DB) {
    const langsToCheck = lang ? [lang] : Object.keys(entry.translations);
    for (const l of langsToCheck) {
      const trans = entry.translations[l];
      if (trans) {
        for (const t of trans) {
          const tl = t.toLowerCase();
          if (lower.includes(tl) || tl.includes(lower)) return entry;
        }
      }
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
  servings: number,
  lang?: string
): NutritionPer100g & { energy_kj: number; salt: number } {
  const total: NutritionPer100g = {
    calories: 0, totalFat: 0, saturatedFat: 0, transFat: 0,
    cholesterol: 0, sodium: 0, totalCarbs: 0, dietaryFiber: 0,
    totalSugars: 0, addedSugars: 0, protein: 0, vitaminD: 0,
    calcium: 0, iron: 0, potassium: 0,
  };

  for (const ing of ingredients) {
    const entry = findNutritionEntry(ing.name, lang);
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
