fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
  .then(response => response.json())
  .then(data => {
    let table = document.createElement("table");
    table.id = "paintings";
    let headerRow = table.insertRow();
    headerRow.innerHTML = `
            <th>Name</th>
            <th>Year</th>
            <th>Artist</th>
        `;
    data.forEach(painting => {
      let row = table.insertRow();
      row.innerHTML = `<td>${painting.name}</td><td>${painting.year}</td><td>${painting.artist}</td>`;
    });
    document.getElementById("table-container").appendChild(table);
  })
  .catch(error => console.error("Error fetching paintings:", error));