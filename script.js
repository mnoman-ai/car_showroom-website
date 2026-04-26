function showAlert() {
    alert("Welcome to LUXE Cars!");
}
// Premium Collection Data

let cars = [

    {

        name: "BMW M4 Competition",

        price: "₹1.53 Cr",

        img: "assets/images/bmw.jpg",

        tagline:
        "Precision engineered performance."

    },



    {

        name: "Audi RS7 Sportback",

        price: "₹2.24 Cr",

        img: "assets/images/audi.jpg",

        tagline:
        "Executive power in motion."

    },



    {

        name: "Mercedes AMG GT 63",

        price: "₹3.00 Cr",

        img: "assets/images/merc.jpg",

        tagline:
        "Luxury fused with domination."

    }

];


// DOM Manipulation
let container = document.getElementById("carList");

// Loop through cars array
cars.forEach(car => {

    let card = `
        <div class="card">

            <img src="${car.img}" width="100%">

            <h3>${car.name}</h3>

            <p>${car.price}</p>

            <button onclick="buyCar('${car.name}')">
                Buy
            </button>

        </div>
    `;

    container.innerHTML += card;

});

// Buy Button Function
function buyCar(name) {
    alert(name + " selected!");
}



let searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    let value = searchInput.value.toLowerCase();

    let filteredCars = cars.filter(car =>
        car.name.toLowerCase().includes(value)
    );

    container.innerHTML = "";

    filteredCars.forEach(car => {

        let card = `
            <div class="card">

                <img src="${car.img}" width="100%">

                <h3>${car.name}</h3>

                <p>${car.price}</p>

                <button onclick="buyCar('${car.name}')">
                    Buy
                </button>

            </div>
        `;

        container.innerHTML += card;

    });

});
