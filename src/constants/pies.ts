/**
 * A list of pie crusts categorized by classic, graham cracker, nut, cookie, gluten free, specialty, vegan, savory, and no bake, .
 */
export const PIE_CRUSTS = {
  classic: [
    "Flaky Pastry Crust",
    "Shortcrust Pastry",
    "Lard Crust",
    "Pâte Sucrée",
  ],
  graham_cracker: [
    "Classic Graham Cracker",
    "Chocolate Graham Cracker",
    "Cinnamon Graham Cracker",
  ],
  nut: [
    "Almond Crust",
    "Pecan Crust",
    "Walnut Crust",
    "Hazelnut Crust",
    "Macadamia Nut Crust",
  ],
  cookie: [
    "Oreo Cookie Crust",
    "Biscoff Cookie Crust",
    "Gingersnap Crust",
    "Vanilla Wafer Crust",
    "Chocolate Chip Cookie Crust",
  ],
  gluten_free: [
    "Almond Flour Crust",
    "Coconut Flour Crust",
    "Rice Flour Crust",
    "Oat Crust",
  ],
  specialty: [
    "Phyllo Dough Crust",
    "Puff Pastry Crust",
    "Cornmeal Crust",
    "Cheddar Cheese Crust",
    "Potato Crust",
    "Brownie Crust",
    "Marshmallow Crust",
    "Sugar Cookie Crust",
    "Rice Krispies Treats Crust",
  ],
  vegan: [
    "Coconut Oil Crust",
    "Olive Oil Crust",
    "Avocado-Based Crust",
    "Vegan Graham Cracker Crust",
    "Vegan Shortcrust Pastry",
  ],
  savory: [
    "Whole Wheat Crust",
    "Herb-Infused Crust",
    "Cheese Crust",
    "Seed Crust",
  ],
  no_bake: [
    "Cereal Crust",
    "Pretzel Crust",
    "Granola Crust",
    "Chocolate Crust",
  ],
}

/**
 * A list of pie fillings categorized by fruit, custard, nut, savory, specialty, vegan, and gluten-free
 */
export const PIE_FILLINGS = {
  fruit: [
    "Apple",
    "Cherry",
    "Blueberry",
    "Peach",
    "Mixed Berry",
    "Strawberry Rhubarb",
    "Blackberry",
    "Cranberry",
    "Pineapple",
    "Mango",
  ],
  custard: [
    "Pumpkin",
    "Lemon",
    "Chocolate",
    "Coconut Cream",
    "Vanilla Custard",
    "Banana Cream",
    "Key Lime",
    "Butterscotch",
    "Eggnog (Seasonal)",
  ],
  nut: ["Pecan", "Walnut", "Hazelnut", "Macadamia", "Peanut Butter"],
  savory: [
    "Chicken Pot Pie",
    "Beef and Mushroom",
    "Vegetable Medley",
    "Spinach and Cheese",
    "Seafood (Crab or Shrimp)",
    "Shepherd's Pie (Lamb or Beef)",
    "Quiche Lorraine",
    "Broccoli and Cheddar",
  ],
  specialty: ["Salted Caramel", "S'mores", "Maple Bacon", "Churro", "Tiramisu"],
  vegan: [
    "Vegan Chocolate",
    "Vegan Coconut Cream",
    "Vegan Pumpkin",
    "Vegan Lemon",
  ],
  gluten_free: [
    "Gluten-Free Apple",
    "Gluten-Free Pumpkin",
    "Gluten-Free Chocolate",
  ],
}

/**
 * A list of pie toppings categorized by classic, fruit, nut, sweet enhancements, savory enhancements, decorative, no bake, and frozen
 */
export const PIE_TOPPINGS = {
  classic: [
    "Lattice Crust",
    "Full Pastry Cover",
    "Crumb Topping (Streusel)",
    "Whipped Cream",
    "Meringue",
  ],
  fruit: [
    "Fresh Berries",
    "Sliced Apples",
    "Candied Citrus Slices",
    "Pineapple Chunks",
    "Cherries",
  ],
  nut: [
    "Chopped Pecans",
    "Sliced Almonds",
    "Crushed Walnuts",
    "Candied Hazelnuts",
    "Macadamia Nuts",
  ],
  sweet_enhancements: [
    "Powdered Sugar Dusting",
    "Caramel Drizzle",
    "Chocolate Ganache Drizzle",
    "Maple Syrup Drizzle",
    "Honey Drizzle",
  ],
  savory_enhancements: [
    "Cheddar Cheese Shavings",
    "Herb Butter Drizzle",
    "Crispy Bacon Crumbles",
    "Parmesan Shavings",
    "Garlic Herb Oil",
  ],
  decorative: [
    "Pastry Shapes (Leaves, Stars, Hearts)",
    "Edible Glitter",
    "Edible Flowers",
    "Colored Sugar Crystals",
    "Gold Leaf",
  ],
  no_bake: [
    "Graham Cracker Crumbles",
    "Cookie Crumbles (Oreos, Biscoff)",
    "Shredded Coconut",
    "Toasted Marshmallows",
    "Cereal Topping (e.g., Cornflakes, Rice Krispies)",
  ],
  frozen: [
    "Ice Cream Scoop",
    "Frozen Whipped Cream Rosettes",
    "Chocolate Shavings",
    "Crushed Peppermint Candies",
  ],
}

/**
 * A list of pie sizes categorized by standard, mini, large, specialty, and party size with values for the size and servings for your customers.
 */
export const PIE_SIZES = {
  standard: [
    { size: "9-inch", servings: 6 },
    { size: "10-inch", servings: 8 },
    { size: "11-inch", servings: 10 },
  ],
  mini: [
    { size: "4-inch", servings: 1 },
    { size: "5-inch", servings: 2 },
  ],
  large: [
    { size: "12-inch", servings: 12 },
    { size: "14-inch", servings: 16 },
  ],
  specialty: [
    { size: "Rectangular (9x13 inches)", servings: 10 },
    { size: "Heart-Shaped (10 inches)", servings: 8 },
    { size: "Oval (10x8 inches)", servings: 8 },
  ],
  party_size: [
    { size: "Sheet Pie (Full)", servings: 24 },
    { size: "Sheet Pie (Half)", servings: 12 },
  ],
}
