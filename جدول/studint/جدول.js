let studentId=1


function addStudent() {
  const nameInput = document.getElementById("studentName");
  const phoneInput = document.getElementById("studentPhone");

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  if (name === "" || phone === "") {
    alert("Please enter both name and phone number.");
    return;
  }

  const table = document
    .getElementById("studentsTable")
    .getElementsByTagName("tbody")[0];

  const row = table.insertRow();

  row.innerHTML = `
    <td>${studentId}</td>
    <td contenteditable="true">${name}</td>
    <td contenteditable="true">${phone}</td>
    <td><input type="checkbox" class="presence"></td>
    <td><input type="checkbox" class="absence"></td>
    <td>
      <button onclick="editStudent(this)">Edit</button>
    </td>
    <td>
      <button onclick="deleteStudent(this)">Delete</button>
    </td>
  `;


  const presence = row.querySelector(".presence");
  const absence = row.querySelector(".absence");

  presence.addEventListener("change", () => {
    if (presence.checked) {
      absence.checked = false;
    }
  });

  absence.addEventListener("change", () => {
    if (absence.checked) {
      presence.checked = false;
    }
  });

  studentId++;
  nameInput.value = "";
  phoneInput.value = "";
  nameInput.focus();
}


function deleteStudent(button) {
  if (confirm("Are you sure you want to delete this student?")) {
    const row = button.parentNode.parentNode;
    row.remove();
  }
}
function calculateAttendance() {
  const presences = document.querySelectorAll(".presence");
  const absences = document.querySelectorAll(".absence");

  let presentCount = 0;
  let absentCount = 0;

  presences.forEach((p) => {
    if (p.checked) {
      presentCount++;
    }
  });

  absences.forEach((a) => {
    if (a.checked) {
      absentCount++;
    }
  });

  const resultBox = document.getElementById("resultBox");
  resultBox.innerText =   `Present: ${presentCount} | Absent: ${absentCount}  `
}