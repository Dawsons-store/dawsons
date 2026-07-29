const shopSearch = document.getElementById("shopSearch");

if (shopSearch) {

    shopSearch.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        document.querySelectorAll(".product-card").forEach(card => {

            const name = card.querySelector("h3").textContent.toLowerCase();
            const category = card.querySelector("small").textContent.toLowerCase();

            card.style.display =
                name.includes(value) || category.includes(value)
                    ? "block"
                    : "none";

        });

    });

}