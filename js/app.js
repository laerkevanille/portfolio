const toggleBtn = document.querySelector("#lamp-switch");

function toggleTheme() {
    document.body.classList.toggle("dark");
    document.getElementById("content-wrapper").classList.toggle("dark");
    document.getElementById("content").classList.toggle("dark");
    document.getElementById("desk-bg").classList.toggle("dark");
}

toggleBtn.addEventListener("click", toggleTheme);