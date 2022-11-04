const HEAD = (
    <div style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        right: "-30px",
        top: "50px"
    }} />
)

const BODY = (
    <div style={{
        width: "10px",
        height: "100px",
        background: "black",
        position: "absolute",
        right: "0px",
        top: "120px"
    }} />
)

const RIGHT_ARM = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        right: "-90px",
        top: "130px",
        rotate: "-30deg"
    }} />
)

const LEFT_ARM = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        right: 0,
        top: "130px",
        rotate: "30deg"
    }} />
)

const RIGHT_LEG = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        right: "-90px",
        top: "210px",
        rotate: "60deg",
        transformOrigin: "left bottom"
    }} />
)

const LEFT_LEG = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        right: 0,
        top: "210px",
        rotate: "-60deg",
        transformOrigin: "right bottom"
    }} />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export default function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return <div className="hm-drawing">
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div style={{ height: "50px", width: "10px", background: "black", position: "absolute", top: 0, right: 0 }} />
        <div style={{ height: "10px", width: "200px", background: "black", marginLeft: "120px" }} />
        <div style={{ height: "400px", width: "10px", background: "black", marginLeft: "120px" }} />
        <div style={{ height: "10px", width: "250px", background: "black" }}>

        </div>
    </div>
}