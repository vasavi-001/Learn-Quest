let darkmode = "false";
// let darkmodeicon = document.querySelector(".darkmodeicon");
// let darkmodeicon = document.getElementById("darkSwitch1");
function dark_mode(e) {
    console.log(e.classList);
    if (darkmode === "false") {
        // document.body.style.backgroundImage = "url('/assets/images/darkmode.png')";
        const bd = document.body;
        bd.classList.add("bdg")
        bd.classList.remove("bdgw")
        // document.body.style.color = "white";
        e.classList.remove("fa-moon");
        e.classList.add("fa-sun");
        document.querySelector(".h1").classList.add("dark-white")
        document.getElementById("mainParagraph").classList.add("add-color");
        document.getElementById("mainParagraph").classList.remove("light-color");
        document.getElementById("mainHeading2").classList.add("darkheading");
        document.getElementById("mainHeading2").classList.remove("lightheading");
        document.getElementById("featureHeading").classList.add("darkheading");
        document.getElementById("featureHeading").classList.remove("lightheading");
        const arr = document.querySelectorAll(".card-title")
        arr.forEach(element => {
            element.classList.add("darkheading");
            element.classList.remove("lightheading");
        });
        const arr1 = document.querySelectorAll(".card-text")
        arr1.forEach(element => {
            element.classList.add("newdarkheading");
            element.classList.remove("newlightheading");
        });
        e.classList.add("fa-sun");
        darkmode = "true";
    }
    else {
        const bd = document.body;
        bd.classList.add("bdgw");
        bd.classList.remove("bdg");
        e.classList.remove("fa-sun");
        e.classList.add("fa-moon");
        document.querySelector(".h1").classList.remove("dark-white");
        document.getElementById("mainParagraph").classList.remove("add-color");
        document.getElementById("mainParagraph").classList.add("light-color");
        document.getElementById("mainHeading2").classList.add("lightheading");
        document.getElementById("mainHeading2").classList.remove("darkheading");
        document.getElementById("featureHeading").classList.remove("darkheading");
        document.getElementById("featureHeading").classList.add("lightheading");
        const arr = document.querySelectorAll(".card-title")
        arr.forEach(element => {
            element.classList.remove("darkheading");
            element.classList.add("lightheading");
        });
        const arr1 = document.querySelectorAll(".card-text")
        arr1.forEach(element => {
            element.classList.remove("newdarkheading");
            element.classList.add("newlightheading");
        });
        darkmode = "false";
    }
}

const toTop = document.querySelector(".to-top");
const topBtn = document.querySelector(".btn-top");

document.body.addEventListener("scroll",scrollTop);
function scrollTop(){
    if(document.body.scrollTop > 20){
        toTop.style.display = "block";
    }else{
        toTop.style.display = "none";
    }
}

topBtn.addEventListener("click",() => {
    document.body.scrollTop = 0;
})