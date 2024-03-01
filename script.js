let x = document.getElementById("dark");
x.addEventListener("click", () => {
event.preventDefault();
document.body.classList.remove("style");
document.body.classList.add("dark");
});

let y = document.getElementById("light");
y.addEventListener("click", () => {
event.preventDefault();
document.body.classList.remove("dark");
document.body.classList.add("style");
});

let z = document.getElementById("base");
z.addEventListener("click", () => {
event.preventDefault();
document.body.classList.remove("dark", "style");
});


