document.getElementById("dataForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const tableBody = document.querySelector("#outputTable tbody");
  tableBody.innerHTML = "";
  formData.forEach((value, key) => {
    tableBody.innerHTML += `<tr><td>${key}</td><td>${value}</td></tr>`;
  });
  document.getElementById("formDataHeader").style.display = "block";
  document.getElementById("outputTable").style.display = "table";
});