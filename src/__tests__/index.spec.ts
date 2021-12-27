import { WavenFactory, WavenDeck } from ".."

let wavenDeck: WavenDeck | undefined
describe("WavenFactory", () => {
  describe("first player", () => {
    beforeAll(() => {
      wavenDeck = WavenFactory({ deckLength: 9, cards: [], playFirst: true })
    })

    describe("getCardFirstTurn", () => {
      it("should return about 55% for a 9 deck cards with draw 5", () => {
        expect(wavenDeck?.getCardFirstTurn()).toBeGreaterThanOrEqual(0.555)
      })
    })
  })

  describe("second player", () => {
    beforeAll(() => {
      wavenDeck = WavenFactory({ deckLength: 9, cards: [], playFirst: false })
    })

    describe("getCardFirstTurn", () => {
      it("should return about 55% for a 9 deck cards with draw 5", () => {
        expect(wavenDeck?.getCardFirstTurn()).toBeGreaterThanOrEqual(0.66)
      })
    })
  })
})
