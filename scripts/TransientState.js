const transientState = {
    entreeId: 0,
    vegetableId: 0,
    sideId: 0
}

export const setEntreeChoice = (chosenEntree) => {
    transientState.entreeId = chosenEntree
    console.log(transientState)
}

export const setVegetableChoice = (chosenVegetable) => {
    transientState.vegetableId = chosenVegetable
    console.log(transientState)
}

export const setSideChoice = (chosenSide) => {
    transientState.sideId = chosenSide
    console.log(transientState)
}

export const placeOrder = async () => {
    if (transientState.entreeId > 0 && transientState.vegetableId > 0 && transientState.sideId > 0) {
        const postOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(transientState)
        }

        const response = await fetch("http://localhost:8088/orders", postOptions)

        const newOrderEvent = new CustomEvent("newOrderCreated")
        document.dispatchEvent(newOrderEvent)
    }
    else {
        alert("Need to complete the form before submitting!")
    }
}