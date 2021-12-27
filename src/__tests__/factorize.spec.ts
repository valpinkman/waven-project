import { factorize } from "../factorize"

describe("factorize", () => {
  it("should get the correct answer", () => {
    expect(factorize(9)).toBe(362880)
  })
})
