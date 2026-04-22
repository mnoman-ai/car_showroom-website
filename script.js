function showAlert() {
    alert("Welcome to LUXE Cars!");
}

// Car Data
let cars = [

    {
        name: "BMW",
        price: "₹50L",
        img: "assets/images/bmw.jpg"
    },

    {
        name: "Audi",
        price: "₹60L",
        img: "assets/images/audi.jpg"
    },

    {
        name: "Mercedes",
        price: "₹70L",
        img: "assets/images/merc.jpg"
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
