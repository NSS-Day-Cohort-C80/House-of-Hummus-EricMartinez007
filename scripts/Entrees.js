import { setEntreeChoice } from "./TransientState.js"

export const Entrees = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    let entreesHTML = ""

    const entreesStringArray = entrees.map((entree) => {
        return `<div>
              <input type='radio' name='entree' value='${entree.id}' /> ${entree.name}
          </div>`
    })

    entreesHTML += entreesStringArray.join("")

    return entreesHTML
}