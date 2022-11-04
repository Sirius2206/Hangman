type HangmanWordProps = {
    reveal?: boolean,
    guessedLetters: string[],
    wordToGuess: string
}

export default function HangmanWord({ guessedLetters, wordToGuess, reveal = false }: HangmanWordProps) {
    return <div className="hm-word">
        {wordToGuess.split("").map((letter, index) => {
            return <span className="hm-letter" key={index}>
                <span
                    className={guessedLetters.includes(letter) || reveal ? "hm-letter-visible" : "hm-letter-hidden"}
                    style={{ color: !guessedLetters.includes(letter) && reveal ? "red" : "black" }}
                >
                    {letter}</span>
            </span>
        })}
    </div>
}