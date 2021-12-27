export function factorial(num: number): number {
  if (num < 0) throw new Error("cannot use factorial on number smaller than 0")
  if (num === 0) return 1
  return num * factorial(num - 1)
}
