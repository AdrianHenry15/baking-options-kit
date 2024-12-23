export type CakeShape = "round" | "square" | "sheet" | string | string[]
export type AltBakeryOptionSize = "mini" | "regular" | "jumbo" | string
export type AltBakeryOptionQuantity =
  | "6"
  | "12"
  | "18"
  | "24"
  | "30"
  | "36"
  | "42"
  | "48"
  | "54"
  | "60"

export type BakeryOptionType = {
  /**
   * The primary flavor or flavors of the bakery item.
   * Examples: Vanilla
   * Examples: [Vanilla, Chocolate, Red Velvet]
   */
  flavors: string | string[]
  /**
   * The type of frosting or frostings applied to the item.
   * Examples: Buttercream
   * Examples: [Buttercream, Cream Cheese]
   * Optional for items without frosting (e.g., cookies)
   */
  frostings?: string | string[]
  /**
   * A list of toppings added to the item.
   * Examples: Sprinkles
   * Examples: [Sprinkles, Nuts, Fruits]
   * Optional.
   */
  toppings?: string | string[]
  /**
   * The filling inside the item.
   * Examples: Cream
   * Examples: [Jam, Cream, Custard]
   * Specific to cakes and cupcakes.
   */
  fillings?: string | string[]
  /**
   * Additional features or customizations for the item.
   * Examples: Custom text, Decorative toppers.
   * Optional.
   */
  extras?: string
}

/**
 * Used primarily for bakery items that aren't a cake
 * (e.g., cupcakes, cookies, etc.)
 */
export type AltBakeryOptionType = {
  size: AltBakeryOptionSize
  quantity: AltBakeryOptionQuantity
}

export type CakeShapeSize = {
  shape: CakeShape
  size: string
  servings: string
}

export type CakeType = {
  cake_size: CakeShapeSize
}
