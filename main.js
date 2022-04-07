const p = document.querySelectorAll("#paraf");
const span = document.querySelector(".bottom-card-paraf");

p.forEach((item) => {
  item.style.display = "none";
});

let state = false
span.addEventListener("click", () => {
    p.forEach(item => {
        state = true
        item.style.display = 'inline'
    })
    if(state) {
        span.style.color = 'grey'
        span.innerHTML = 'Daha Az'

    }
    
  
});