window.onload = function () 
{
    const employee_id=localStorage.getItem("ID")
    const employee_name=localStorage.getItem("Name")
    document.getElementById('employee-id').value=employee_id
    document.getElementById('employee-name').value=employee_name
}
function validateForm() {
    let fromDate = document.forms["apply"]["from-date"].value;
    let toDate = document.forms["apply"]["to-date"].value;
    let reason = document.forms["apply"]["reason"].value;
    let currentDate = new Date().toJSON().slice(0, 10);
    const availableVacationDays = localStorage.getItem("available-vacation-days");
    const VacationLength = localStorage.getItem("VacationLength");
    if (fromDate == "") {
        document.getElementById("from-date").focus();
        alert("From date must be filled out");
        return false;
    }
    if (new Date(fromDate) <= new Date(currentDate)) {
        document.getElementById("from-date").focus();
        alert("From date must be after current Date");
        return false;
    }
    // from date conditions

    if (toDate == "") {
        document.getElementById("to-date").focus();
        alert("To date must be filled out");
        return false;
    }

    if (new Date(fromDate) >= new Date(toDate)) {
        document.getElementById("to-date").focus();
        alert("From date must be before To date");
        return false;
    }
    let dayDiff = (new Date(toDate).getTime() - new Date(fromDate).getTime()) / 86400000;
    if (dayDiff > 21) {
        document.getElementById("to-date").focus();
        alert("To date must be within 21 days of the from date");
        return false;
    }
    if (availableVacationDays==0||availableVacationDays<dayDiff) {
        alert("your available Vacation Days aren't enough ")
        return false;
      }
    if (reason == "") {
        document.getElementById("reason").focus();
        alert("reason must be filled out");
        return false;
    }
    localStorage.setItem("fromDate", fromDate);
    localStorage.setItem("toDate", toDate);
    localStorage.setItem("reason", reason);
    localStorage.setItem("VacationLength", dayDiff);
    localStorage.removeItem("status");
    localStorage.removeItem("statusText");
    return true;
}