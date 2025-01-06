import { CakeShapeSizeType } from "../types"

/**
 * A list of cake shape and size combinations with their corresponding servings.
 * This includes round cakes, square cakes, and sheet cakes in various sizes.
 */
export const CakeShapeSizes: CakeShapeSizeType[] = [
  // Round cakes
  { shape: "round", size: "4 in.", servings: "8" },
  { shape: "round", size: "6 in.", servings: "12" },
  { shape: "round", size: "8 in.", servings: "20" },
  { shape: "round", size: "9 in.", servings: "24" },
  { shape: "round", size: "10 in.", servings: "28" },
  { shape: "round", size: "12 in.", servings: "40" },
  { shape: "round", size: "14 in.", servings: "63" },
  { shape: "round", size: "16 in.", servings: "77" },

  // Square cakes
  { shape: "square", size: "6 in.", servings: "12" },
  { shape: "square", size: "8 in.", servings: "20" },
  { shape: "square", size: "10 in.", servings: "30" },
  { shape: "square", size: "12 in.", servings: "48" },
  { shape: "square", size: "14 in.", servings: "63" },
  { shape: "square", size: "16 in.", servings: "80" },

  // Sheet cakes
  { shape: "sheet", size: "7x11", servings: "24" },
  { shape: "sheet", size: "9x13", servings: "36" },
  { shape: "sheet", size: "11x15", servings: "54" },
  { shape: "sheet", size: "12x18", servings: "72" },
]

/**
 * A list of basic cake flavors. These are classic and popular choices.
 */
export const CAKE_FLAVORS = {
  /**
   * Basic cake flavors
   */
  basic: [
    "Vanilla",
    "Chocolate",
    "Red Velvet",
    "Carrot",
    "Lemon",
    "Strawberry",
    "Marble",
    "Funfetti",
    "Coconut",
    "Coffee",
    "Spice",
  ],
  /**
   * Premium cake flavors
   */
  premium: [
    "Pineapple Upside Down",
    "Black Forest",
    "White Chocolate Raspberry",
    "Mocha",
    "Matcha",
    "Almond",
    "Butter Pecan",
    "Banana",
    "Peanut Butter",
    "Mint Chocolate Chip",
    "Blueberry",
    "Tiramisu",
    "Orange Creamsicle",
    "Salted Caramel",
  ],
}

/**
 * A list of basic ad premium cake frostings. These are classic and popular choices.
 */
export const CAKE_FROSTINGS = {
  /**
   * Basic cake frostings
   */
  basic: [
    "Buttercream", // A sweet, creamy frosting made with butter and sugar.
    "Cream Cheese", // A tangy frosting made with cream cheese and butter.
    "Ganache", // A rich, silky chocolate frosting made with cream and chocolate.
    "Whipped Cream", // A light, airy frosting made from whipped cream.
    "Chocolate Frosting", // A classic chocolate frosting made with cocoa powder.
    "Vanilla Frosting", // A simple and classic frosting made with vanilla.
    "Glaze", // A thin, glossy icing made from powdered sugar and milk.
  ],
  /**
   * Premium cake frostings
   */
  premium: [
    "Fondant", // A smooth, pliable icing often used for decorating cakes.
    "Swiss Meringue Buttercream", // A smooth, fluffy buttercream with a meringue base.
    "Italian Meringue Buttercream", // A buttery frosting with a smooth, silky texture.
    "French Buttercream", // A rich, buttery frosting made with egg yolks.
    "Royal Icing", // A stiff icing made with egg whites and sugar, used for decorations.
    "Peanut Butter Frosting", // A creamy frosting with a rich peanut butter flavor.
    "Salted Caramel Frosting", // A decadent frosting with a salted caramel flavor.
    "Coconut Frosting", // A creamy frosting with shredded coconut for a tropical flavor.
    "Lemon Frosting", // A tangy frosting with a fresh lemon flavor.
    "Strawberry Frosting", // A sweet frosting with a light strawberry flavor.
    "Raspberry Frosting", // A smooth frosting with a fruity raspberry taste.
    "Coffee Frosting", // A coffee-flavored frosting for an extra caffeine kick.
    "Matcha Frosting", // A green tea-flavored frosting with a slightly bitter taste.
    "Orange Cream Frosting", // A creamy, citrus-flavored frosting with a hint of orange.
    "Mint Frosting", // A refreshing minty frosting perfect for chocolate cakes.
  ],
}

/**
 * A list of basic and premium cake toppings. These are unique or specialized choices.
 */
export const CAKE_TOPPINGS = {
  /**
   * Basic cake toppings
   */
  basic: [
    "Sprinkles", // Classic, colorful sugar pieces for decoration.
    "Chopped Nuts", // Crunchy nuts like almonds, peanuts, or walnuts.
    "Shredded Coconut", // Sweet and tropical coconut flakes.
    "Mini Chocolate Chips", // Small, sweet chocolate morsels.
    "Powdered Sugar", // A light dusting of fine sugar for a simple finish.
    "Cinnamon Sugar", // A sweet, spiced mixture of cinnamon and sugar.
    "Crushed Cookies", // Crumbled cookies like Oreos or graham crackers.
    "Frosting Swirls", // Decorative swirls of frosting.
  ],

  /**
   * Premium cake toppings
   */
  premium: [
    "Fresh Strawberries", // Sliced strawberries, or blueberries.
    "Fresh Raspberries", // Sliced raspberries.
    "Fresh Blueberries", // Sliced blueberries.
    "Caramel Drizzle", // A rich caramel sauce for extra sweetness.
    "Chocolate Ganache Drizzle", // A silky chocolate topping for added indulgence.
    "Edible Gold Flakes", // Luxurious, shimmering gold flakes.
    "Toasted Marshmallows", // Lightly browned marshmallows for a campfire vibe.
    "Candied Nuts", // Sweet, crunchy nuts coated in sugar or caramel.
    "Chopped Toffee", // Bits of buttery, crunchy toffee candy.
    "Sea Salt Flakes", // Delicate flakes of sea salt for a sweet and salty mix.
    "White Chocolate Shavings", // Thin, creamy curls of white chocolate.
    "Dark Chocolate Shavings", // Rich, dark chocolate curls for a bold flavor.
    "Crushed Peppermint", // Festive, minty candy pieces.
    "Cereal Pieces", // Fun and colorful cereals like Fruity Pebbles or Cocoa Puffs.
  ],
}

/**
 * A list of basic and premium cake fillings. These are unique or specialized choices.
 */
export const CAKE_FILLINGS = {
  /**
   * Basic cake fillings.
   */
  basic: [
    "Vanilla Cream", // Smooth and sweet vanilla-flavored cream.
    "Chocolate Ganache", // Rich, creamy chocolate filling.
    "Strawberry Jam", // Sweet and tangy strawberry preserve.
    "Raspberry Jam", // Tart and flavorful raspberry filling.
    "Lemon Curd", // Bright and zesty lemon filling.
    "Peanut Butter", // Creamy or chunky peanut butter.
    "Buttercream", // Classic and versatile butter-based cream.
  ],
  /**
   * Premium cake fillings.
   */
  premium: [
    "Marshmallow Fluff", // Light and airy marshmallow filling.
    "Salted Caramel", // Sweet caramel with a hint of salt for balance.
    "Mocha Cream", // A blend of coffee and chocolate flavors.
    "Cookies and Cream", // Crushed cookies mixed into a creamy base.
    "Hazelnut Praline", // Nutty, sweet, and rich hazelnut filling.
    "Passion Fruit Curd", // Exotic and tangy passion fruit filling.
    "Pistachio Cream", // Nutty and subtly sweet pistachio filling.
    "Coconut Custard", // Creamy custard with a tropical coconut flavor.
    "Dark Chocolate Truffle", // Luxurious, deep chocolate filling.
    "Bavarian Cream", // Smooth and creamy custard with vanilla notes.
    "Cream Cheese Filling", // Tangy and creamy cheese-based filling.
    "Cherry Compote", // Sweet and tart cherries in a thickened sauce.
    "Blueberry Compote", // Juicy and flavorful blueberry mixture.
  ],
}
