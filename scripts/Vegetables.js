import { setVegetableChoice } from "./TransientState.js"

const handleVegetableChoice = (event) => {
    if (event.target.name === "vegetable") {
        setVegetableChoice(parseInt(event.target.value))
    }
}

document.addEventListener("change", handleVegetableChoice)


export const Veggies = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()

    let vegetablesHTML = ""

    const vegetablesStringArray = vegetables.map((vegetable) => {
        return `<div>
              <input type='radio' name='vegetable' value='${vegetable.id}' /> ${vegetable.type}
          </div>`
    })

    vegetablesHTML += vegetablesStringArray.join("")

    return vegetablesHTML
}
