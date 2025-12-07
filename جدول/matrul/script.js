function addRow() {
  const day = document.getElementById("day").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const teacher = document.getElementById("teacher").value.trim();
  const time = document.getElementById("time").value.trim();

  if (!day || !subject || !teacher || !time) {
    alert("من فضلك املأ كل الخانات");
    return;
  }

  const tableBody = document.getElementById("scheduleBody");
  const newRow = tableBody.insertRow();

  newRow.insertCell(0).innerText = day;
  newRow.insertCell(1).innerText = subject;
  newRow.insertCell(2).innerText = teacher;
  newRow.insertCell(3).innerText = time;

  // مسح الخانات بعد الإضافة
  document.getElementById("day").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("teacher").value = "";
  document.getElementById("time").value = "";
}
