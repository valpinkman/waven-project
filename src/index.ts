import { factorial } from "./factorial"

interface Card {
  turnWanted: number
  draws: boolean
  drawNumber: number
  id: string | number
}

type Arguments = {
  deckLength: number
  cards: Array<Card>
  playFirst: boolean
}

export interface WavenDeck {
  factorial: (num: number) => number
  getCardFirstTurn: () => number
}

export const WavenFactory = ({
  deckLength,
  cards,
  playFirst,
}: Arguments): WavenDeck => {
  const length = deckLength

  function getCardFirstTurn() {
    if (playFirst) {
      // 5 cards
      // total possible draws / total draws
      return (factorial(length - 1) * 5) / factorial(length)
    }

    // 6 cards
    return (factorial(length - 1) * 6) / factorial(length)
  }

  return {
    factorial,
    getCardFirstTurn,
  }
}
