document.getElementById("search").addEventListener("click", async () => {
  const username = document.getElementById("githubUser").value;

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error("User not found");

    const { avatar_url, name = "N/A", blog = "N/A", created_at } = await response.json();

    document.getElementById("profilePic").innerHTML = `<p><img src="${avatar_url}" width="100" alt="Profile Picture"></p>`;
    document.getElementById("githubInfo").innerHTML = `
      <tbody>
        ${[
        ["Name:", name],
        ["Blog:", blog !== "N/A" ? `<a href="${blog}" target="_blank">${blog}</a>` : "N/A"],
        ["Account Created:", new Date(created_at).toLocaleDateString()],
      ]
        .map(([label, value]) => `<tr><td>${label}</td><td>${value}</td></tr>`)
        .join("")}
      </tbody>`;
  } catch (error) {
    console.error("Error:", error);
  }
});