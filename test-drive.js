/* ================= FORM ELEMENTS ================= */

let bookingForm =
document.getElementById("bookingForm");


let successMessage =
document.getElementById("successMessage");



/* ================= SUBMIT EVENT ================= */

bookingForm.addEventListener(
    "submit",

    function(event) {

        event.preventDefault();



        /* HIDE FORM */

        bookingForm.style.display =
        "none";



        /* SHOW SUCCESS MESSAGE */

        successMessage.style.display =
        "block";



        /* SCROLL SMOOTHLY */

        successMessage.scrollIntoView({

            behavior: "smooth"

        });

    }

);
