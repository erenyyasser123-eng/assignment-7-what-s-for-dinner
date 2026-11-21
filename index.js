// ! Variables ---------------------------------------
var recipes = [
  {
    rating: 4.7,
    reviews: 2000,
    perpTime: 15,
    cookTime: 40,
    servings: 4,
    imgUrl: "./ASS-PHOTOS/BeefTacos.jpg",
    difficulty: "Easy",
    cuisine: "Mexican",
    title: "Beef Tacos",
    description:
      "Soft tacos filled with seasoned beef, vegetables, cheese, and avocado",
    ingredients: [
      "1 lb ground beef",
      "6 soft tortillas",
      "1 cup shredded lettuce",
      "1/2 cup diced tomatoes",
      "1/2 cup shredded cheddar cheese",
      "1 ripe avocado, sliced",
    ],
    instructions: [
      "Brown the ground beef in a skillet over medium heat and drain excess fat.",
      "Season the beef with taco spices and a splash of water, then simmer for 5 minutes.",
      "Warm the soft tortillas in a dry pan or microwave.",
      "Fill each tortilla with beef, lettuce, tomatoes, cheese, and avocado slices.",
    ],
    nutrition: {
      calories: "300 kcal",
      protein: "9g",
      carbohydrates: "48g",
      fat: "10g",
      fiber: "6g",
      sodium: "7gm",
    },
    chefTips: [
      "Cut vegetables the same size.",
      "Cook on high heat.",
      "Don't overcrowd the pan.",
    ],
    get isOverTime() {
      return this.perpTime > 45;
    },
  },
  {
    rating: 4.8,
    reviews: 356,
    perpTime: 50,
    cookTime: 15,
    servings: 2,
    imgUrl: "./ASS-PHOTOS/ShrimpScampi.jpg",
    difficulty: "Medium",
    cuisine: "Seafood",
    title: "Shrimp Scampi",
    description: "Garlicky shrimp in white wine butter sauce",
    ingredients: [
      "400g large shrimp, peeled",
      "300g linguine pasta",
      "6 cloves garlic, minced",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley, chopped",
    ],
    instructions: [
      "Boil the linguine in salted water until al dente, then reserve a little pasta water.",
      "Heat olive oil and butter in a pan, then sauté garlic for 30 seconds.",
      "Add shrimp and cook until pink, about 2 minutes per side.",
      "Toss cooked pasta with the sauce and garnish with fresh parsley.",
    ],
    nutrition: {
      calories: "420 kcal",
      protein: "28g",
      carbohydrates: "45g",
      fat: "14g",
      fiber: "3g",
      sodium: "640mg",
    },
    chefTips: [
      "Don't overcook the shrimp or they will turn rubbery.",
      "Use freshly minced garlic for the best aroma.",
      "Save a splash of pasta water to loosen the sauce.",
    ],
    get isOverTime() {
      return this.perpTime > 45;
    },
  },
  {
    rating: 4.9,
    reviews: 1240,
    perpTime: 20,
    cookTime: 25,
    servings: 4,
    imgUrl: "./ASS-PHOTOS/MargheritaPizza.jpg",
    difficulty: "Beginner",
    cuisine: "Italian",
    title: "Margherita Pizza",
    description:
      "Classic Italian pizza with tomato sauce, mozzarella, and fresh basil",
    ingredients: [
      "1 pizza dough ball",
      "1/2 cup tomato sauce",
      "200g fresh mozzarella, sliced",
      "Fresh basil leaves",
      "1 tablespoon olive oil",
    ],
    instructions: [
      "Preheat your oven to the highest setting and stretch the dough on a baking sheet.",
      "Spread an even layer of tomato sauce over the dough.",
      "Top with mozzarella slices and bake for 12-15 minutes until bubbly.",
      "Garnish with fresh basil leaves and a drizzle of olive oil before serving.",
    ],
    nutrition: {
      calories: "290 kcal",
      protein: "13g",
      carbohydrates: "34g",
      fat: "11g",
      fiber: "2g",
      sodium: "520mg",
    },
    chefTips: [
      "Let the dough rest at room temperature before stretching.",
      "Avoid overloading with sauce so the crust stays crisp.",
      "Add fresh basil after baking so it stays vibrant.",
    ],
    get isOverTime() {
      return this.perpTime > 45;
    },
  },
  {
    rating: 4.6,
    reviews: 810,
    perpTime: 15,
    cookTime: 20,
    servings: 3,
    imgUrl: "./ASS-PHOTOS/ChickenVeggieStir-Fry.jpg",
    difficulty: "Easy",
    cuisine: "Asian",
    title: "Chicken Veggie Stir-Fry",
    description:
      "Tender chicken strips tossed with crisp vegetables and savory glaze",
    ingredients: [
      "350g chicken breast, sliced",
      "1 cup broccoli florets",
      "1 red bell pepper, sliced",
      "1 carrot, julienned",
      "3 tablespoons soy sauce",
      "1 tablespoon sesame oil",
    ],
    instructions: [
      "Heat oil in a wok or large skillet over high heat.",
      "Sear chicken strips until golden and cooked through, then set aside.",
      "Stir-fry broccoli, bell pepper, and carrot for 3-4 minutes until crisp-tender.",
      "Return chicken to the pan, add soy sauce, and toss well for 1 minute.",
    ],
    nutrition: {
      calories: "310 kcal",
      protein: "31g",
      carbohydrates: "16g",
      fat: "12g",
      fiber: "4g",
      sodium: "710mg",
    },
    chefTips: [
      "Cut vegetables the same size.",
      "Cook on high heat.",
      "Don't overcrowd the pan.",
    ],
    get isOverTime() {
      return this.perpTime > 45;
    },
  },
  {
    rating: 4.8,
    reviews: 590,
    perpTime: 55,
    cookTime: 30,
    servings: 4,
    imgUrl: "./ASS-PHOTOS/creamy-pasta.jpg",
    difficulty: "Medium",
    cuisine: "Italian",
    title: "Creamy Garlic Mushroom Pasta",
    description:
      "Rich penne pasta in a velvety garlic and roasted mushroom sauce",
    ingredients: [
      "350g penne pasta",
      "250g mushrooms, sliced",
      "1 cup heavy cream",
      "1/2 cup grated parmesan",
      "4 cloves garlic, minced",
      "Salt and black pepper to taste",
    ],
    instructions: [
      "Cook penne in boiling salted water until tender and drain.",
      "Sauté sliced mushrooms and garlic until browned and fragrant.",
      "Pour in heavy cream and simmer gently for 3 minutes.",
      "Stir in parmesan cheese and pasta until evenly coated.",
    ],
    nutrition: {
      calories: "480 kcal",
      protein: "15g",
      carbohydrates: "52g",
      fat: "24g",
      fiber: "3g",
      sodium: "490mg",
    },
    chefTips: [
      "Simmer the cream gently rather than boiling rapidly.",
      "Grate parmesan fresh for smoother melting.",
      "Season with black pepper right before serving.",
    ],
    get isOverTime() {
      return this.perpTime > 45;
    },
  },
];

var currentIndex = 0;

// DOM Elements
var recipeImg = document.getElementById("recipeImg");
var recipeRating = document.getElementById("recipeRating");
var recipeReviews = document.getElementById("recipeReviews");
var prepTime = document.getElementById("prepTime");
var cookTime = document.getElementById("cookTime");
var servings = document.getElementById("servings");
var recipeDifficulty = document.getElementById("recipeDifficulty");
var recipeCuisine = document.getElementById("recipeCuisine");
var recipeTitle = document.getElementById("recipeTitle");
var recipeDescription = document.getElementById("recipeDescription");
var prepAlert = document.getElementById("prepAlert");

var nutCalories = document.getElementById("nutCalories");
var nutProtein = document.getElementById("nutProtein");
var nutCarbs = document.getElementById("nutCarbs");
var nutFat = document.getElementById("nutFat");
var nutFiber = document.getElementById("nutFiber");
var nutSodium = document.getElementById("nutSodium");

var ingredientsList = document.getElementById("ingredientsList");
var instructionsList = document.getElementById("instructionsList");
var tipsList = document.getElementById("tipsList");
var generateBtn = document.getElementById("generateBtn");

// ! Functions ---------------------------------------
function renderRecipe(recipe) {
  // 1. تحديث الصورة والبيانات الثابتة
  recipeImg.src = recipe.imgUrl;
  recipeImg.alt = recipe.title;
  recipeRating.textContent = recipe.rating;
  recipeReviews.textContent = "(" + recipe.reviews + " reviews)";
  prepTime.textContent = recipe.perpTime + " min";
  cookTime.textContent = recipe.cookTime + " min";
  servings.textContent = recipe.servings + " people";

  // 2. تحديث العنوان والوصف والتاجات والتنبيه
  recipeDifficulty.textContent = recipe.difficulty;
  recipeCuisine.textContent = recipe.cuisine;
  recipeTitle.textContent = recipe.title;
  recipeDescription.textContent = recipe.description;

  if (recipe.isOverTime) {
    prepAlert.classList.remove("d-none");
    prepAlert.classList.add("d-flex");
  } else {
    prepAlert.classList.remove("d-flex");
    prepAlert.classList.add("d-none");
  }

  // 3. تحديث أرقام كروت القيم الغذائية
  nutCalories.textContent = recipe.nutrition.calories;
  nutProtein.textContent = recipe.nutrition.protein;
  nutCarbs.textContent = recipe.nutrition.carbohydrates;
  nutFat.textContent = recipe.nutrition.fat;
  nutFiber.textContent = recipe.nutrition.fiber;
  nutSodium.textContent = recipe.nutrition.sodium;

  // 4. بناء قائمة المكونات المرقمة
  ingredientsList.innerHTML = "";
  for (var i = 0; i < recipe.ingredients.length; i++) {
    var li = document.createElement("li");
    li.className = "d-flex align-items-center gap-3";

    var badge = document.createElement("span");
    badge.className =
      "badge rounded-circle d-inline-flex align-items-center justify-content-center fw-bold";
    badge.style.cssText =
      "width: 24px; height: 24px; background-color: #ff6600; color: #fff; flex-shrink: 0;";
    badge.textContent = i + 1;

    var text = document.createElement("span");
    text.textContent = recipe.ingredients[i];

    li.appendChild(badge);
    li.appendChild(text);
    ingredientsList.appendChild(li);
  }

  // 5. بناء قائمة الخطوات المرقمة
  instructionsList.innerHTML = "";
  for (var j = 0; j < recipe.instructions.length; j++) {
    var stepLi = document.createElement("li");
    stepLi.className = "d-flex align-items-start gap-3";

    var stepBadge = document.createElement("span");
    stepBadge.className =
      "badge rounded-circle d-inline-flex align-items-center justify-content-center fw-bold";
    stepBadge.style.cssText =
      "width: 26px; height: 26px; background-color: #ff6600; color: #fff; flex-shrink: 0;";
    stepBadge.textContent = j + 1;

    var stepBody = document.createElement("div");
    var stepTitle = document.createElement("div");
    stepTitle.className = "fw-bold mb-1";
    stepTitle.textContent = "Step " + (j + 1);

    var stepText = document.createElement("div");
    stepText.textContent = recipe.instructions[j];

    stepBody.appendChild(stepTitle);
    stepBody.appendChild(stepText);
    stepLi.appendChild(stepBadge);
    stepLi.appendChild(stepBody);
    instructionsList.appendChild(stepLi);
  }

  // 6. بناء نصائح الشيف
  tipsList.innerHTML = "";
  for (var k = 0; k < recipe.chefTips.length; k++) {
    var tipBox = document.createElement("div");
    tipBox.className = "p-3 mb-2 rounded-3 d-flex align-items-center gap-2";
    tipBox.style.cssText =
      "background-color: #fff6ec; border-left: 4px solid #ff6600;";

    var icon = document.createElement("i");
    icon.className = "fa-solid fa-lightbulb";
    icon.style.color = "#ff6600";

    var tipText = document.createElement("span");
    tipText.textContent = recipe.chefTips[k];

    tipBox.appendChild(icon);
    tipBox.appendChild(tipText);
    tipsList.appendChild(tipBox);
  }
}

// ! Actions (Event Listener) -------------------------
generateBtn.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % recipes.length;
  renderRecipe(recipes[currentIndex]);

  var firstTab = new bootstrap.Tab(document.getElementById("ingredients-tab"));
  firstTab.show();
});

// Initial Render
renderRecipe(recipes[currentIndex]);
