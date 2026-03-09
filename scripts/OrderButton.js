import { placeOrder } from "./TransientState.js"

const handlePlaceOrder = (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        console.log(placeOrder())
    }
}

export const OrderButton = () => {
    document.addEventListener("click", handlePlaceOrder)

    return `
    <article class="order">
    <button id="purchase">Purchase Combo</button>
    </article>
    `
}