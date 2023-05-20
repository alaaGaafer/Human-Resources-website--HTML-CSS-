// this is to confirm delete and if true remove the row and the data from the local storage
function confirmDelete() {
  if (confirm("Are you sure you want to delete this employee?")) {
    const row = event.target.parentNode.parentNode;
    row.parentNode.removeChild(row);
    localStorage.removeItem("ID");
    localStorage.removeItem("Name");
    localStorage.removeItem("Email");
    localStorage.removeItem("position");
    localStorage.removeItem("address");
    localStorage.removeItem("phone");
    localStorage.removeItem("gender");
    localStorage.removeItem("maritalStatus");
    localStorage.removeItem("available-vacation-days");
    localStorage.removeItem("approved-vacation-days");
    localStorage.removeItem("salary");
    localStorage.removeItem("DOB");
    localStorage.removeItem("status");
    localStorage.removeItem("statusText");
    localStorage.removeItem("employeeId");
    localStorage.removeItem("employeeName");
    localStorage.removeItem("fromDate");
    localStorage.removeItem("toDate");
    localStorage.removeItem("reason");
    return true;
  } else {
    return false;
  }
}
// this gets excuted when the page is reloaded
window.onload = function () {
  const admin = localStorage.getItem("admin");
  if (admin == "false") {
    document.getElementById('AddEmployee').setAttribute("hidden", true);

  }
  const ID = localStorage.getItem("ID");
  if (!ID) {
    //if ID not found in local storage means no data in local storage and it was deleted so skip the rest of the function
    return;
  }

  // Get the values from local storage
  const Name = localStorage.getItem("Name");
  const Email = localStorage.getItem("Email");
  const position = localStorage.getItem("position");
  const address = localStorage.getItem("address");
  const phone = localStorage.getItem("phone");
  const gender = localStorage.getItem("gender");
  const maritalStatus = localStorage.getItem("marital-status");
  let availableVacationDays = localStorage.getItem("available-vacation-days");
  let approvedVacationDays = localStorage.getItem("approved-vacation-days");
  const salary = localStorage.getItem("salary");
  const DOB = localStorage.getItem("DOB");
  const status = localStorage.getItem("status");
  const VacationLength = localStorage.getItem("VacationLength");
  // Get the values from local storage
  // handling vacations
  if (status == "approved") {
    if (availableVacationDays > 0 && availableVacationDays >= VacationLength) {
      availableVacationDays = Number(availableVacationDays) - Number(VacationLength)
      approvedVacationDays = Number(approvedVacationDays) + Number(VacationLength);
      localStorage.setItem("available-vacation-days", availableVacationDays);
      localStorage.setItem("approved-vacation-days", approvedVacationDays);
      localStorage.removeItem("status");
    }
  }
  else if (status == "rejectAfterApprove") {
    availableVacationDays = Number(availableVacationDays) + Number(VacationLength)
    approvedVacationDays = Number(approvedVacationDays) - Number(VacationLength);
    localStorage.setItem("available-vacation-days", availableVacationDays);
    localStorage.setItem("approved-vacation-days", approvedVacationDays);
    localStorage.removeItem("status");
  }
  // handling vacations
  // Create a new row in the table with the values
  const table = document.getElementById("employeeTable");
  const newRow = table.insertRow();
  const IDCell = newRow.insertCell(0);
  const NameCell = newRow.insertCell(1);
  const EmailCell = newRow.insertCell(2);
  const positionCell = newRow.insertCell(3);
  const addressCell = newRow.insertCell(4);
  const phoneCell = newRow.insertCell(5);
  const genderCell = newRow.insertCell(6);
  const maritalStatusCell = newRow.insertCell(7);
  const availableVacationDaysCell = newRow.insertCell(8);
  const approvedVacationDaysCell = newRow.insertCell(9);
  const salaryrCell = newRow.insertCell(10);
  const DOBCell = newRow.insertCell(11);
  const showButtonCell = newRow.insertCell(12);
  const applyButtonCell = newRow.insertCell(13);
  const deleteButtonCell = newRow.insertCell(14);
  const editButtonCell = newRow.insertCell(15)

  // Set the cell values to the retrieved values from local storage
  IDCell.innerHTML = ID;
  NameCell.innerHTML = Name;
  EmailCell.innerHTML = Email;
  positionCell.innerHTML = position;
  addressCell.innerHTML = address;
  phoneCell.innerHTML = phone;
  genderCell.innerHTML = gender;
  maritalStatusCell.innerHTML = maritalStatus;
  availableVacationDaysCell.innerHTML = availableVacationDays;
  approvedVacationDaysCell.innerHTML = approvedVacationDays;
  salaryrCell.innerHTML = salary;
  DOBCell.innerHTML = DOB;
  showButtonCell.innerHTML = '<button class="button" type="button" onclick="location.href=\'vacationForm.html\';">Show</button>';
  applyButtonCell.innerHTML = '<button class="button" type="button" onclick="location.href=\'vactaionApplication.html\';">Apply</button>';
  deleteButtonCell.innerHTML = '<button id="DeleteButton" class="button" type="button" onclick="confirmDelete()">Delete</button>';
  editButtonCell.innerHTML = '<button class="button" onclick="window.location.href=\'add_employee.html?edit=true\'">Edit</button>';
  if (admin == "false") {
    deleteButtonCell.setAttribute("hidden", true);

  }
}
