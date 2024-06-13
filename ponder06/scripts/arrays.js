const steps = ["one", "two", "three"];

steps.forEach((step) => {
    document.querySelector("#myList").innerHTML += `<li>${step}</li>`;
});

// for (let i = 0; i < steps.length; i++) {
//     document.querySelector("#myList").innerHTML += `<li>${steps[i]}</li>`;
// }

// steps.map((step) => {
//     document.querySelector("#myList").innerHTML += `<li>${step}</li>`;
// })
