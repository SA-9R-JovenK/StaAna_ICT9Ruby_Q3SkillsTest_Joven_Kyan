document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registrationForm");
    const profileInput = document.getElementById("profileImage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let firstName = document.getElementById("firstName").value.trim();
        let lastName = document.getElementById("lastName").value.trim();
        let age = document.getElementById("age").value;
        let contact = document.getElementById("contact").value.trim();
        let email = document.getElementById("email").value.trim();
        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();
        let terms = document.getElementById("terms").checked;

        if (!firstName || !lastName || !age || !contact || !email || !username || !password) {
            alert("Please fill out all required fields.");
            return;
        }

        if (age < 13) {
            alert("You must be at least 13 years old to register.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!terms) {
            alert("You must accept the Terms and Privacy Policy.");
            return;
        }

        alert("Registration Successful! 🎉");
    });

    profileInput.addEventListener("change", function () {
        const file = this.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                document.querySelector(".profile-placeholder").innerHTML =
                    "<img src='" + e.target.result + "' style='width:100%; border-radius:10px;'>";
            };

            reader.readAsDataURL(file);
        }
    });

});