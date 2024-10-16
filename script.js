// script.js
const button = document.getElementById("button");

button.addEventListener('click', (event) => {
    event.preventDefault(); // Correct spelling and call to prevent form submission
    const name = document.getElementById("name").value;
    const year = document.getElementById("year").value;

    let url = "https://localhost:8080/"; // Added quotes around the URL
    const queryString = new URLSearchParams();
    
    if (name) {
        queryString.append("name", name);
    }
    if (year) {
        queryString.append("year", year);
    }
    
    url += '?' + queryString.toString();
    document.getElementById("url").textContent = url;
    console.log(url);
});
