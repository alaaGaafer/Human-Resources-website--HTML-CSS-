function validateForm() {
    // getting input fields values
    let Name = document.getElementById("name").value;
    let Email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    // getting input fields values

    // allert if the name is empty
    if (Name== "") {
        alert("Name must be filled out");
        return false;
    }
    // allert if the Email is empty
    if (Email== "") {
        alert("Email must be filled out");
        return false;
    }
    // checks if the email format valid
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Email)) {
        document.getElementById("email").focus();
        alert("Invalid email format");
        return false;
    }
    if (message== "") {
        alert("message must be filled out");
        return false;
    }
    return true;
}