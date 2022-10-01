let darkmode = "false";
// let darkmodeicon = document.querySelector(".darkmodeicon");
// let darkmodeicon = document.getElementById("darkSwitch1");
function dark_mode(e) {
    console.log(e.classList);
    if (darkmode === "false") {
        document.body.style.backgroundImage = "url('/assets/images/darkmode.png')";
        document.body.style.color = "white";
        e.classList.remove("fa-moon");
        e.classList.add("fa-sun");
        darkmode = "true";
    }
    else {
        document.body.style.backgroundImage = "url('/assets/images/qlgb.png')";
        document.body.style.color = "black";
        e.classList.remove("fa-sun");
        e.classList.add("fa-moon");
        darkmode = "false";
    }
}