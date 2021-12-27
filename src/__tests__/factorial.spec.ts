import { factorial } from "../factorial"

describe("factorial", () => {
  it("should get the factorial of a number", () => {
    expect(factorial(9)).toBe(362880)
  })

  it("should get 1 if we try to do a factorial of 1", () => {
    expect(factorial(1)).toBe(1)
  })

  it("should get 1 if we try to do a factorial of 0", () => {
    expect(factorial(0)).toBe(1)
  })
  it("should fail if we use a negative number", () => {
    expect(() => factorial(-2)).toThrow(
      "cannot use factorial on number smaller than 0"
    )
  })
})
