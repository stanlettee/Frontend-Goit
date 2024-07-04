



function toggleText() {
    const checkBox = document.getElementById("toggle");
    const logo = document.getElementById("logo");
    const item1 = document.getElementById("item1");
    const item2 = document.getElementById("item2");

    if(checkBox.checked){
        logo.style.opacity = 0;
        document.body.style.overflow = "hidden";
        item1.style.position = "static"
        item2.style.position = "static"
        
    }
    else{
        logo.style.opacity = 1;
        document.body.style.overflow = "scroll";
        item1.style.position = "relative"
        item2.style.position = "relative"
    }
}

// function toggleBtn() {
//     document.body.style.overflow = "hidden";
// };