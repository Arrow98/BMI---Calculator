const maleButton = document.getElementById("male")
const femaleButton = document.getElementById("female")

maleButton.addEventListener('click',(e)=>{
    maleButton.classList.toggle("active-gender")
})
femaleButton.addEventListener('click',(e)=>{
    femaleButton.classList.toggle("active-gender")
})