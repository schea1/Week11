const data = {
  name: "Nesto",
  countries: [
    { name: "Mexico", year: 2019 },
    { name: "Canada", year: 2022 },
  ],
};

fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
})
  .then((response) => response.text())
  .then((message) => console.log(message))
  .catch((error) => console.error("Error sending data:", error));