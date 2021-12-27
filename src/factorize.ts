export function factorize(num: number): number {
  if (num < 0) throw new Error("cannot factorize number lower than 1")
  if (num === 0) return 1
  return num * factorize(num - 1)
}
