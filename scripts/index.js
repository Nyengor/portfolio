// detect scroll evnet on document
document.addEventListener('scroll',function() {
    // console.log(window.scrollY);
    if (window.scrollY > 70) {
        // change nav bar bg to blue
        document.getElementById("navbar").style.backgroundColor = "#2A8AE7";
    }
    else {
        // change nav bar to transparent
        document.getElementById("navbar").style.backgroundColor = "transparent";
    }


});
