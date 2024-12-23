import { CakeShapeSize } from "../types"

/**
 * A list of cake shape and size combinations with their corresponding servings.
 * This includes round cakes, square cakes, and sheet cakes in various sizes.
 */
export const CakeShapeSizes: CakeShapeSize[] = [
  // Round cakes
  { shape: "Round", size: "4 in.", servings: "8" },
  { shape: "Round", size: "6 in.", servings: "12" },
  { shape: "Round", size: "8 in.", servings: "20" },
  { shape: "Round", size: "9 in.", servings: "24" },
  { shape: "Round", size: "10 in.", servings: "28" },
  { shape: "Round", size: "12 in.", servings: "40" },
  { shape: "Round", size: "14 in.", servings: "63" },
  { shape: "Round", size: "16 in.", servings: "77" },

  // Square cakes
  { shape: "Square", size: "6 in.", servings: "12" },
  { shape: "Square", size: "8 in.", servings: "20" },
  { shape: "Square", size: "10 in.", servings: "30" },
  { shape: "Square", size: "12 in.", servings: "48" },
  { shape: "Square", size: "14 in.", servings: "63" },
  { shape: "Square", size: "16 in.", servings: "80" },

  // Sheet cakes
  { shape: "Sheet", size: "7x11", servings: "24" },
  { shape: "Sheet", size: "9x13", servings: "36" },
  { shape: "Sheet", size: "11x15", servings: "54" },
  { shape: "Sheet", size: "12x18", servings: "72" },
]

/**
 * A list of popular cake flavors. These can be used for customizing the flavor of cakes.
 * Each flavor represents a different cake style that can be chosen for various occasions.
 */
export const CAKE_FLAVORS = [
  "Vanilla", // A classic and versatile flavor.
  "Chocolate", // Rich and indulgent.
  "Red Velvet", // A slightly tangy, rich flavor with a striking color.
  "Carrot", // Moist and spiced with a hint of sweetness from carrots.
  "Lemon", // A fresh and zesty citrus flavor.
  "Strawberry", // Sweet and fruity with a light flavor.
  "Marble", // A mix of chocolate and vanilla swirls.
  "Coconut", // A tropical, rich flavor from shredded coconut.
  "Funfetti", // A festive cake with sprinkles mixed in.
  "Coffee", // A rich and slightly bitter flavor with coffee essence.
  "Spice", // A warm spiced flavor with cinnamon and nutmeg.
  "Pineapple Upside Down", // A fruity and caramelized cake with pineapple.
  "Black Forest", // A decadent combination of chocolate, cherries, and cream.
  "White Chocolate Raspberry", // A creamy and fruity cake with raspberry notes.
  "Mocha", // A rich chocolate and coffee flavor combo.
  "Matcha", // A Japanese green tea flavor with an earthy, bitter profile.
  "Almond", // A nutty and slightly sweet flavor.
  "Butter Pecan", // Rich and buttery with roasted pecans.
  "Banana", // Sweet and slightly tropical with a rich texture.
  "Peanut Butter", // A creamy, nutty flavor with peanut butter.
  "Mint Chocolate Chip", // A refreshing mint flavor paired with chocolate chips.
  "Blueberry", // A light and fruity flavor with fresh blueberries.
  "Tiramisu", // A coffee-flavored dessert cake inspired by the Italian classic.
  "Orange Creamsicle", // A citrusy flavor combined with creamy sweetness.
  "Salted Caramel", // A perfect blend of sweet and salty with caramel notes.
]

/**
 * A list of popular frosting options that can be used to complement cakes.
 * These frostings come in a variety of textures and flavors.
 */
export const CAKE_FROSTINGS = [
  "Buttercream", // A sweet, creamy frosting made with butter and sugar.
  "Cream Cheese", // A tangy frosting made with cream cheese and butter.
  "Ganache", // A rich, silky chocolate frosting made with cream and chocolate.
  "Whipped Cream", // A light, airy frosting made from whipped cream.
  "Fondant", // A smooth, pliable icing often used for decorating cakes.
  "Chocolate Frosting", // A classic chocolate frosting made with cocoa powder.
  "Vanilla Frosting", // A simple and classic frosting made with vanilla.
  "Swiss Meringue Buttercream", // A smooth, fluffy buttercream with a meringue base.
  "Italian Meringue Buttercream", // A buttery frosting with a smooth, silky texture.
  "French Buttercream", // A rich, buttery frosting made with egg yolks.
  "Royal Icing", // A stiff icing made with egg whites and sugar, used for decorations.
  "Glaze", // A thin, glossy icing made from powdered sugar and milk.
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
]

/**
 * A list of common cake toppings that can be added to enhance the flavor and appearance of cakes.
 * These toppings include a variety of textures, sweetness, and decorations.
 */
export const CAKE_TOPPINGS = [
  "Sprinkles", // Colorful, sugary sprinkles for a festive touch.
  "Chopped Nuts", // Crunchy and savory nuts for texture.
  "Fresh Fruits", // Seasonal fruits like strawberries, blueberries, and raspberries.
  "Chocolate Shavings", // Thinly shaved chocolate for decoration.
  "Edible Flowers", // Beautiful, decorative edible flowers.
  "Marzipan", // Sweet, almond-based paste used for decorations.
  "Caramel Drizzle", // A smooth caramel sauce drizzled over the cake.
  "Shredded Coconut", // Shredded coconut for a tropical flavor and texture.
  "Oreos", // Crushed or whole Oreo cookies for a chocolaty topping.
  "Candied Ginger", // Sweet, spicy ginger pieces for a unique touch.
  "Crushed Cookies", // Crushed cookie pieces for an added crunch.
  "Meringue Kisses", // Light, airy meringue pieces for decoration.
  "Chocolate Chips", // Classic chocolate chips for a sweet touch.
  "Fondant Decorations", // Smooth fondant decorations for a polished look.
  "Graham Cracker Crumbs", // Crushed graham crackers for a crunchy texture.
  "Whipped Cream", // Light and fluffy whipped cream as a topping.
  "Berries (Strawberries, Blueberries, Raspberries)", // Fresh berries for a fruity touch.
  "Mini Marshmallows", // Soft, chewy mini marshmallows for a fun topping.
  "Butter Toffee", // A rich toffee with a buttery flavor for a sweet touch.
  "Gold Leaf", // Edible gold leaf for an elegant, premium touch.
  "Pretzels", // Salty pretzels for a sweet and salty combination.
  "Rainbow Dust", // Colorful edible dust for a shimmering finish.
  "Cinnamon Sugar", // A sweet and spicy sprinkle of cinnamon and sugar.
]

/**
 * A list of filling options for cakes. These fillings add flavor and moisture to the layers of the cake.
 * They can be sweet, creamy, or fruity depending on the desired taste.
 */
export const CAKE_FILLINGS = [
  "Vanilla Custard", // A creamy, smooth filling with a rich vanilla flavor.
  "Chocolate Ganache", // A rich, silky chocolate filling made with cream and chocolate.
  "Strawberry Jam", // A sweet and fruity filling made with strawberries.
  "Raspberry Jam", // A tart and sweet filling made with raspberries.
  "Lemon Curd", // A tangy and creamy filling made with lemon juice and zest.
  "Pastry Cream", // A thick, vanilla-flavored custard filling.
  "Whipped Cream", // A light, airy filling made from whipped cream.
  "Cream Cheese Filling", // A tangy, smooth filling made with cream cheese.
  "Caramel Filling", // A rich, sweet filling made with caramel.
  "Peanut Butter Filling", // A creamy and nutty filling with peanut butter.
  "Cherry Filling", // A sweet, tart filling made with cherries.
  "Mocha Cream", // A coffee-flavored creamy filling with a chocolate touch.
  "Orange Marmalade", // A citrusy filling made with oranges.
  "Coconut Cream", // A rich, tropical filling made with coconut milk and cream.
  "Apple Cinnamon Filling", // A warm, spiced filling made with apples and cinnamon.
  "Pineapple Filling", // A sweet, tropical filling made with pineapple.
  "Blueberry Compote", // A fruity, sweet filling made with blueberries.
  "Nutella", // A creamy, chocolate-hazelnut filling.
  "Pumpkin Spice Filling", // A spiced, creamy filling made with pumpkin.
  "Banana Cream", // A smooth, sweet filling made with banana.
  "Tiramisu Filling", // A creamy filling with a coffee and mascarpone flavor.
  "Mint Chocolate Chip Filling", // A cool, minty filling with chocolate chips.
]
