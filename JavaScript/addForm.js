window.onload = function () {
    const ID = localStorage.getItem("ID");
    if (!ID) {
        // ID not found in local storage, skip the rest of the function
        return;
    }
    else {
        let urlParams = new URLSearchParams(window.location.search);
        let isEdit = urlParams.get('edit') === 'true';
        glopalEdit = isEdit;
        if (isEdit) {
            // displaying the data of the employee in the input fields
            document.title = "Edit employee";
            document.getElementById("ID").value = localStorage.getItem("ID");
            document.getElementById("Name").value = localStorage.getItem("Name");
            document.getElementById("email").value = localStorage.getItem("Email");
            document.getElementById("position").value = localStorage.getItem("position");
            document.getElementById("address").value = localStorage.getItem("address");
            document.getElementById("phone").value = localStorage.getItem("phone");
            document.getElementById("gender").value = localStorage.getItem("gender");
            document.getElementById("marital-status").value = localStorage.getItem("marital-status");
            document.getElementById("available-vacation-days").value = localStorage.getItem("available-vacation-days");
            document.getElementById("approved-vacation-days").value = localStorage.getItem("approved-vacation-days");
            document.getElementById("salary").value = localStorage.getItem("salary");
            document.getElementById("DOB").value = localStorage.getItem("DOB");
            document.getElementById("edit&submit").value = 'Edit employee';
            // displaying the data of the employee in the input fields
            // if it's user make input fields read only except for phone, address and marital state
            const admin = localStorage.getItem("admin");
            if (admin == "false") {
                const inputs = document.getElementsByTagName('input');

                for (let i = 0; i < inputs.length; i++) {
                    const input = inputs[i];
                    if (input.getAttribute('id') !== 'address' && input.getAttribute('id') !== 'phone') {
                        input.setAttribute('readonly', true);
                    }
                }
                document.getElementById('position').disabled = true;
                document.getElementById('gender').disabled = true;
            }
            // if it's user make input fields read only except for phone, address and marital state
            validateForm();
        }
    }
}
function validateForm() {
    // getting input fields values
    let ID = document.getElementById("ID").value;
    let Name = document.getElementById("Name").value;
    let Email = document.getElementById("email").value;
    let position = document.getElementById("position").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;
    let maritalStatus = document.getElementById("marital-status").value;
    let availableVacationDays = document.getElementById("available-vacation-days").value;
    let approvedVacationDays = document.getElementById("approved-vacation-days").value;
    let salary = document.getElementById("salary").value;
    let DOB = document.getElementById("DOB").value;
    let currentDate = new Date().toJSON().slice(0, 10);
    // getting input fields values
    // allert if the Id empty
    if (ID.trim() === "") {
        document.getElementById("ID").focus();
        alert("ID must be filled out");
        return false;
    }
    // allert if the Id is not a number
    if (!/^[0-9]+$/.test(ID)) {
        document.getElementById("ID").focus();
        alert("ID must be numbers only");
        return false;
    }
    if ((ID).length !== 8) {
        document.getElementById("ID").focus();
        alert("ID must be 8 digits");
        return false;
    }
    if (Name.trim() === "") {
        document.getElementById("Name").focus();
        alert("Name must be filled out");
        return false;
    }
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
    if (position.trim() === "") {
        document.getElementById("position").focus();
        alert("Position must be filled out");
        return false;
    }
    if (address.trim() === "") {
        document.getElementById("address").focus();
        alert("Address must be filled out");
        return false;
    }
    if (phone.trim() === "") {
        document.getElementById("phone").focus();
        alert("Phone must be filled out");
        return false;
    }
    if (!/^[0-9]+$/.test(phone)) {
        document.getElementById("phone").focus();
        alert("Phone must be numbers only");
        return false;
    }
    if ((phone).length !== 11) {
        document.getElementById("phone").focus();
        alert("Phone number must be 11 digits");
        return false;
    }
    if (gender.trim() === "") {
        document.getElementById("gender").focus();
        alert("Gender must be filled out");
        return false;
    }
    if (maritalStatus.trim() === "") {
        document.getElementById("marital-status").focus();
        alert("Marital status must be filled out");
        return false;
    }
    if (availableVacationDays.trim() === "") {
        document.getElementById("availableVacationDays").focus();
        alert("Available vacation days must be filled out");
        return false;
    }
    if (approvedVacationDays.trim() === "") {
        document.getElementById("approvedVacationDays").focus();
        alert("Approved vacation days must be filled out");
        return false;
    }
    if (salary.trim() === "") {
        document.getElementById("salary").focus();
        alert("Salary must be filled out");
        return false;
    }
    if (!/^[0-9]+$/.test(salary)) {
        document.getElementById("salary").focus();
        alert("Salary must be numbers only");
        return false;
    }
    if (DOB.trim() === "") {
        document.getElementById("DOB").focus();
        alert("DOB date must be filled out");
        return false;
    }
    let yearsOld = (new Date(currentDate).getTime() - new Date(DOB).getTime()) / 31536000000;
    if (yearsOld < 25) {
        document.getElementById("DOB").focus();
        alert("Employee can't be younger than 25 years old");
        return false;
    }
    // seeting employee info
    localStorage.setItem("ID", ID);
    localStorage.setItem("Name", Name);
    localStorage.setItem("Email", Email);
    localStorage.setItem("position", position);
    localStorage.setItem("address", address);
    localStorage.setItem("phone", phone);
    localStorage.setItem("gender", gender);
    localStorage.setItem("marital-status", maritalStatus);
    localStorage.setItem("available-vacation-days", availableVacationDays);
    localStorage.setItem("approved-vacation-days", approvedVacationDays);
    localStorage.setItem("salary", salary);
    localStorage.setItem("DOB", DOB);
    // seeting employee info

    // removing vacation form data
    if (!glopalEdit) {
        localStorage.removeItem("status");
        localStorage.removeItem("statusText");
        localStorage.removeItem("employeeId");
        localStorage.removeItem("employeeName");
        localStorage.removeItem("fromDate");
        localStorage.removeItem("toDate");
        localStorage.removeItem("reason");
    }
    // removing vacation form data
    return true;
}

