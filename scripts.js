const form = document.getElementById("color-form")
const colorBlocks = [
    document.querySelector(".display-color-one"),
    document.querySelector(".display-color-two"),
    document.querySelector(".display-color-three"),
    document.querySelector(".display-color-four"),
    document.querySelector(".display-color-five")
];

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const seed = document.getElementById("seed-color").value.slice(1);
    const mode = document.getElementById("mode-color").value;
    fetch(`https://www.thecolorapi.com/scheme?hex=${seed}&mode=${mode}`)
    .then(res => res.json())
    .then(data => data.colors.forEach((color, index) => {
        console.log(color.hex.value)
        colorBlocks[index].style.background = color.hex.value
    }))
})