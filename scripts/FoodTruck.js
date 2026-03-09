// import { Sales } from "./Sales.js"
import { Entrees } from "./Entrees.js"

export const FoodTruck = async () => {
    // const salesHTML = await Sales()
    const entreesHTML = await Entrees()

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

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ????
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ????
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
