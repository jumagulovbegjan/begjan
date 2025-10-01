//document.getElementById("alertBtn").addEventListener("click", () => {
  //  alert("kot ekansan dabba")
//}) 

//document.getElementById("redBtn").addEventListener ("click", () => {
  //  document.body.style.background = "red";
//})
//document.getElementById("greenBtn").addEventListener ("click", () => {
//    document.body.style.background = "yellow";
//})
  //  let count = 0
//document.getElementById("countBtn").addEventListener("click", (b) => {
//count++
//b.target.innerText = "bosildi " +count
//})


//document.getElementById("randomBtn").addEventListener("click", () => {
  //  const randomBtns = "#" + Math.floor(Math.random()* 16777215).//toString(16);
  //  document.body.style.background = randomBtns;
//})

// 1) Birinchi tugma
document.getElementById("btn1").addEventListener("click", () => {
    document.getElementById("result").innerText = "seni sikaman ishon dabba"
})


document.getElementById("btn2").addEventListener("click", () => {
    document.getElementById("result").innerHTML = `
    <img src="img/face.jpg" alt="sen kotsan bari bir">

    `
})