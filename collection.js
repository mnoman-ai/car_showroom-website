/* ================= LUXURY CAR DATA ================= */

let cars = [

    {
        name: "BMW M4 Competition",

        price: "₹1.53 Cr",

        image: "assets/images/bmw.jpg",

        tagline:
        "Precision engineered performance.",

        engine:
        "3.0L Twin-Turbo Inline-6",

        horsepower:
        "503 HP",

        topSpeed:
        "Top Speed: 250 km/h",

        acceleration:
        "0-100 km/h: 3.5 sec",

        transmission:
        "8-Speed Automatic",

        description:
        "The BMW M4 Competition delivers aggressive performance with refined luxury engineering crafted for high-speed precision."
    },



    {
        name: "Audi RS7 Sportback",

        price: "₹2.24 Cr",

        image: "assets/images/audi.jpg",

        tagline:
        "Executive power in motion.",

        engine:
        "4.0L Twin-Turbo V8",

        horsepower:
        "591 HP",

        topSpeed:
        "Top Speed: 305 km/h",

        acceleration:
        "0-100 km/h: 3.6 sec",

        transmission:
        "8-Speed Tiptronic",

        description:
        "The Audi RS7 combines executive elegance with breathtaking acceleration and intelligent quattro performance."
    },



    {
        name: "Mercedes AMG GT 63",

        price: "₹3.00 Cr",

        image: "assets/images/merc.jpg",

        tagline:
        "Luxury fused with domination.",

        engine:
        "4.0L V8 Biturbo",

        horsepower:
        "630 HP",

        topSpeed:
        "Top Speed: 315 km/h",

        acceleration:
        "0-100 km/h: 3.2 sec",

        transmission:
        "AMG SPEEDSHIFT MCT",

        description:
        "Built for elite performance, the AMG GT 63 delivers extreme speed with uncompromising luxury craftsmanship."
    },



    {
        name: "Range Rover Autobiography",

        price: "₹4.17 Cr",

        image: "assets/images/rangerover.jpg",

        tagline:
        "Elevated luxury without limits.",

        engine:
        "4.4L Twin-Turbo V8",

        horsepower:
        "523 HP",

        topSpeed:
        "Top Speed: 250 km/h",

        acceleration:
        "0-100 km/h: 4.6 sec",

        transmission:
        "8-Speed Automatic",

        description:
        "The Range Rover Autobiography represents supreme luxury SUV engineering with unmatched road presence."
    },



    {
        name: "Ferrari F8 Tributo",

        price: "₹4.02 Cr",

        image: "assets/images/ferrari.jpg",

        tagline:
        "Pure Italian aggression.",

        engine:
        "3.9L Twin-Turbo V8",

        horsepower:
        "710 HP",

        topSpeed:
        "Top Speed: 340 km/h",

        acceleration:
        "0-100 km/h: 2.9 sec",

        transmission:
        "7-Speed Dual Clutch",

        description:
        "The Ferrari F8 Tributo delivers razor-sharp aerodynamics and extraordinary acceleration inspired by racing heritage."
    },



    {
        name: "Mercedes-Benz G-Class",

        price: "₹3.30 Cr",

        image: "assets/images/gclass.jpg",

        tagline:
        "Iconic power. Timeless authority.",

        engine:
        "4.0L V8 Biturbo",

        horsepower:
        "577 HP",

        topSpeed:
        "Top Speed: 240 km/h",

        acceleration:
        "0-100 km/h: 4.5 sec",

        transmission:
        "9-Speed Automatic",

        description:
        "The G-Class combines military-grade presence with handcrafted luxury and commanding V8 performance."
    }

];


/* ================= RENDER CARDS ================= */

let container =
document.getElementById("carsContainer");


cars.forEach((car, index) => {

    let card = `

        <div class="car-card">

            <img src="${car.image}">

            <div class="card-content">

                <h2>
                    ${car.name}
                </h2>

                <p class="price">
                    ${car.price}
                </p>

                <p class="tagline">
                    ${car.tagline}
                </p>

                <button
                    class="details-btn"

                    onclick="openModal(${index})">

                    View Details

                </button>

            </div>

        </div>

    `;

    container.innerHTML += card;

});



/* ================= MODAL SYSTEM ================= */

let modal =
document.getElementById("carModal");


function openModal(index) {

    let car = cars[index];

    document.getElementById(
        "modalImage"
    ).src = car.image;


    document.getElementById(
        "modalTagline"
    ).innerText = car.tagline;


    document.getElementById(
        "modalName"
    ).innerText = car.name;


    document.getElementById(
        "modalPrice"
    ).innerText = car.price;


    document.getElementById(
        "modalEngine"
    ).innerText =
    "Engine: " + car.engine;


    document.getElementById(
        "modalHorsepower"
    ).innerText =
    "Power: " + car.horsepower;


    document.getElementById(
        "modalSpeed"
    ).innerText =
    car.topSpeed;


    document.getElementById(
        "modalAcceleration"
    ).innerText =
    car.acceleration;


    document.getElementById(
        "modalTransmission"
    ).innerText =
    "Transmission: "
    + car.transmission;


    document.getElementById(
        "modalDescription"
    ).innerText =
    car.description;


    modal.style.display = "flex";
}



/* ================= CLOSE MODAL ================= */

function closeModal() {

    modal.style.display = "none";
}
