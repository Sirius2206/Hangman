const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type KeyboardProps = {
    disabled?: boolean,
    activeLetters: string[],
    inactiveLetters: string[],
    addGuessedLetter: (letter: string) => void
}
export default function Keyboard({ disabled = false, activeLetters, inactiveLetters, addGuessedLetter }: KeyboardProps) {
    return <div className="hm-keyboard-container">

        <div className="hm-keyboard">
            {KEYS.map(key => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return (
                    <button
                        disabled={isInactive || isActive || disabled}
                        className={`btn ${isActive ? "btn-active" : ""} ${isInactive ? "btn-disabled" : ""}`}
                        onClick={() => addGuessedLetter(key)}
                        key={key}>{key}</button>
                )
            })}
        </div>
    </div>
}