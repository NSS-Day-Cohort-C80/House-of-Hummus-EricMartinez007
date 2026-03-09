import { setVegetableChoice } from "./TransientState.js"

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
