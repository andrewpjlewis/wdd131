const themeSelector = document.getElementById("dark");
const imageElement = document.getElementById("logo");
function changeTheme() {
    console.log("Current theme value:", themeSelector.value);
    if (themeSelector.value === "dark") {
        console.log("Setting dark theme");
        document.body.classList.add("dark");
        imageElement.src = "images/logo_dark.png";
    } else {
        console.log("Setting light theme");
        document.body.classList.remove("dark");
        imageElement.src = "images/logo.png";
    }
}
themeSelector.addEventListener("change", changeTheme)