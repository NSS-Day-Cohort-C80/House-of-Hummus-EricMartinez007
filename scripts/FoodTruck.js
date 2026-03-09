// import { Sales } from "./Sales.js"
import { Entrees } from "./Entrees.js"
import { Veggies } from "./Vegetables.js"
import { Sides } from "./SideDishes.js"

export const FoodTruck = async () => {
    // const salesHTML = await Sales()
    const entreesHTML = await Entrees()
    const veggiesHTML = await Veggies()
    const sidesHTML = await Sides()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <article class="choices">
            <section class="choices__entrees options">
                <h2>Entrees</h2>
                ${entreesHTML}
            </section>

            <section class="choices__veggie options">
                <h2>Vegetables</h2>
                ${veggiesHTML}
            </section>

            <section class="choices__sides options">
                <h2>Sides</h2>
                ${sidesHTML}
            </section>
        </article>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ????
        </article>

    `
}
