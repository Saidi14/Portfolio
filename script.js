const aboutBtn = document.querySelector(".homeBtn");
aboutBtn.onclick = () => alert("hello world");

const homeBtn = document.querySelector("#nav-home");
homeBtn.addEventListener("click", function(e){
    console.log(e.target);
});