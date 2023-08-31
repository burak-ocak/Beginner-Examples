const btn = document.querySelector(".btn");
const yazi = document.querySelector(".yazi");

const colors = ["red", "blue", "yellow", "purple"];

btn.addEventListener("click", () => {
    const rastgeleSayi = Math.floor(Math.random() * 4);
    document.body.style.backgroundColor = colors[rastgeleSayi];
    yazi.innerText = `Background Color: ${colors[rastgeleSayi]}`;
})