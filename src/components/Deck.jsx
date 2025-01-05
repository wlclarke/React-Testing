import React, { useState } from "react";

// Helper to create and shuffle a deck
const createShuffledDeck = () => {
    const suits = ["hearts", "diamonds", "clubs", "spades"];
    const ranks = [
        { name: "2", value: 2 },
        { name: "3", value: 3 },
        { name: "4", value: 4 },
        { name: "5", value: 5 },
        { name: "6", value: 6 },
        { name: "7", value: 7 },
        { name: "8", value: 8 },
        { name: "9", value: 9 },
        { name: "10", value: 10 },
        { name: "Jack", value: 11 },
        { name: "Queen", value: 12 },
        { name: "King", value: 13 },
        { name: "Ace", value: 14 },
    ];

    const deck = [];
    suits.forEach((suit) => {
        ranks.forEach((rank) => {
            deck.push({ ...rank, suit });
        });
    });

    return deck.sort(() => Math.random() - 0.5); // Shuffle the deck
};

// Function to split the deck
const splitDeck = (deck) => {
    const half = Math.ceil(deck.length / 2);
    const playerDeck = deck.slice(0, half);
    const opponentDeck = deck.slice(half);

    return { playerDeck, opponentDeck };
};

// React Component
function App() {
    const [playerDeck, setPlayerDeck] = useState([]);
    const [opponentDeck, setOpponentDeck] = useState([]);

    const initializeGame = () => {
        const shuffledDeck = createShuffledDeck();
        const { playerDeck, opponentDeck } = splitDeck(shuffledDeck);
        setPlayerDeck(playerDeck);
        setOpponentDeck(opponentDeck);
    };

    return (
        <div className="container text-center">
            <h1>Card Game: Split Deck</h1>
            <button onClick={initializeGame} className="btn btn-primary mb-4">
                Initialize Game
            </button>

            <h2>Player's Deck</h2>
            <div>
                {playerDeck.map((card, index) => (
                    <p key={index}>
                        {card.name} of {card.suit}
                    </p>
                ))}
            </div>

            <h2>Opponent's Deck</h2>
            <div>
                {opponentDeck.map((card, index) => (
                    <p key={index}>
                        {card.name} of {card.suit}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default App;