const body=document.querySelector("body")
const quote=document.querySelector(".quote")
console.log(quote)
const btn=document.querySelector("button")
btn.addEventListener("click",()=>{
    getColor()
    getJoke()
})
function getJoke(){
    fetch("https://icanhazdadjoke.com/",{
        method: "GET",
        headers: {
            "Content-Type":"application/json",
            'Accept': 'application/json'
        }
    })
    .then(res=>res.json())
    .then(joke=>{
        quote.textContent=joke.joke
    })
}
getJoke()
function getColor(){
    const r=Math.floor(Math.random()*256)
    const g=Math.floor(Math.random()*256)
    const b=Math.floor(Math.random()*256)
    body.style.backgroundColor=`rgb(${r},${g},${b})`
    body.style.animation="fadeInOut 2500ms ease-in-out"
    quote.style.color=`rgb(${r},${g},${b})`
    quote.style.animation="opak 2000ms ease-in-out"
    
}
getColor()
