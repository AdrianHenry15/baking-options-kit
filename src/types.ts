export type CakeShape = "round" | "square" | "sheet" | string | string[]

export type CakeShapeSizeType = {
  shape: CakeShape
  size: string
  servings: string
}
