import { setSideChoice } from "./TransientState.js"

const handleSideChoice = (event) => {
    if (event.target.name === "side") {
        setSideChoice(parseInt(event.target.value))
    }
}

document.addEventListener("change", handleSideChoice)


export const Sides = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    let sidesHTML = ""

    const sidesStringArray = sides.map((side) => {
        return `<div>
              <input type='radio' name='side' value='${side.id}' /> ${side.title}
          </div>`
    })

    sidesHTML += sidesStringArray.join("")

    return sidesHTML
}

