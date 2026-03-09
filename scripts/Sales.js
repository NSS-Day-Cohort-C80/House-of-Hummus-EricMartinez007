export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side").then(res => res.json())


    let salesDivs = sales.map(
        (sale) => {
            const salePrice = sale.entree.price + sale.vegetable.price + sale.side.price
            return `
                <section class="survey-order-container">
                    <div>Receipt #${sale.id} cost $${salePrice}</div>
                </section>
            `
        }
    )

    salesDivs = salesDivs.join("")

    return salesDivs
}

