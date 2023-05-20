function approveRequest() {
  const reason = localStorage.getItem("reason");
  if (!reason) {
    alert("No vacation applied")
    visibleButton();
    return false;
  }
  let status = localStorage.getItem("statusText");
  if (status == 'approved') {
    alert("already been approved")
    visibleButton();
    return false;
  }
  else {
    localStorage.setItem("statusText", "approved");
    localStorage.setItem("status", "approved");
    window.location.href = "employees_page.html";
  }
}

function rejectRequest() {

  const reason = localStorage.getItem("reason");
  if (!reason) {
    alert("No vacation applied")
    visibleButton();
    return false;
  }
  let status = localStorage.getItem("statusText");
  if (status == 'approved') {
    localStorage.setItem("statusText", "rejected");
    localStorage.setItem("status", "rejectAfterApprove");
  }
  else if (status == 'rejected') {
    alert("already been rejected")
    visibleButton();
    return false;
  }
  else {
    localStorage.setItem("statusText", "rejected");
    localStorage.setItem("status", "rejected");
  }
  window.location.href = "employees_page.html";
}

window.onload = function () {
  const reason = localStorage.getItem("reason");
  let status = localStorage.getItem("statusText");
  if (!reason) {
    document.getElementById("status").textContent = "no vacation applied";
  }
  else {
    // Get the values from local storage
    const employeeID = localStorage.getItem("ID");
    const employeeName = localStorage.getItem("Name");
    const fromdate = localStorage.getItem("fromDate");
    const todate = localStorage.getItem("toDate");
    const Reason = localStorage.getItem("reason");

    // Set the cell values to the retrieved values from local storage
    document.getElementById("Name").innerHTML = employeeName;
    document.getElementById("ID").innerHTML = employeeID;
    document.getElementById("from").innerHTML = fromdate;
    document.getElementById("to").innerHTML = todate;
    document.getElementById("Reason").innerHTML = Reason;
  }
  if (status) {
    document.getElementById("status").textContent = status;
    if (status === "approved") {
      document.getElementById("status").style.color = "green";
    } else if (status === "rejected") {
      document.getElementById("status").style.color = "red";
    }
  }
  admin = localStorage.getItem("admin");
  if (admin == "false") {
    const buttons = document.getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      if (button.getAttribute('id') !== 'myButton') {
        button.setAttribute('hidden', true);
      }
    }
    document.getElementById('myButton').removeAttribute("hidden");
    document.getElementById('myButton').textContent = "Delete Request";
  }
}

function cancle_delete() {
  if (admin == "false") {
    localStorage.removeItem("status");
    localStorage.removeItem("statusText");
    localStorage.removeItem("employeeId");
    localStorage.removeItem("employeeName");
    localStorage.removeItem("fromDate");
    localStorage.removeItem("toDate");
    localStorage.removeItem("reason");
    window.location.href = "employees_page.html";
  }
 else
 {
  window.location.href = "employees_page.html";
 }
}
function visibleButton()
{
  document.getElementById('myButton').textContent = "Cancle";
  document.getElementById("myButton").removeAttribute("hidden")
}