function validatelogin() {
    let Email = document.forms["login"]["email"].value;
    let password = document.forms["login"]["Password"].value;
    if (Email.trim() === "") {
        document.getElementById("email").focus();
        alert("Email must be filled out");
        return false;
    }
    // checks if the email format valid
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Email)) {
        document.getElementById("email").focus();
        alert("Invalid email format");
        return false;
    }
    if (password.trim() === "") {
        document.getElementById("Password").focus();
        alert("password must be filled out");
        return false;
    }
    if ((password).length < 8) {
        document.getElementById("Password").focus();
        alert("the password is too short");
        return false;
    }
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){8,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById("Password").focus();
        alert("password must contain numbers and characters");
        return false;
    }
    // credntials
    if (Email != 'admin@demo.com' && Email != 'user@demo.com') {
        alert('Email not correct')

        return false;
    }
    else if (password != 'Hu20207013man') {
        alert('password not correct')
        return false;
    }
    if (Email == 'admin@demo.com') {
        localStorage.setItem("admin", true)
    } else {
        localStorage.setItem("admin", false)
    }
}