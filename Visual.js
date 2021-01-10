//randomly positions and color all element with class name "Something"
var elements = document.getElementsByClassName('parallax-geomerty');
for (var i = 0; i < elements.length; i++) {
    //Position them
    var numx = Math.floor((Math.random() * 100) + 1);
    var numy = Math.floor((Math.random() * 100) + 1);
    elements[i].style.top = numy + "vh";
    elements[i].style.left = numx + "vw";

    //color them
    var numColor = Math.floor((Math.random() * 5) + 1);
    if (numColor == 1) {
        elements[i].style.color = "#DE49A5";
    } else if (numColor == 2) {
        elements[i].style.color = "#DE9554";
    } else if (numColor == 3) {
        elements[i].style.color = "#5B3EDE";
    } else if (numColor == 4) {
        elements[i].style.color = "#52E045";
    } else if (numColor == 5) {
        elements[i].style.color = "#33BEDE";
    }
}


//Create parallax effect depemdimg on screen size
var w = parseInt(window.innerWidth);

if (w <= 500) {
    //On scroll

    window.addEventListener("scroll", scrollParallax);

    function scrollParallax(e) {
        let scrollPage = window.pageYOffset;
        document.querySelectorAll('.parallax-geomerty').forEach(movement => {
            let speed = movement.dataset.speed;
            movement.style.transform = `translateY(${scrollPage * speed}px)`;
        })
    }
} else if (w > 500) {
    //On mouse movement
    document.addEventListener("mousemove", mouseParallax);

    function mouseParallax(e) {
        this.querySelectorAll('.parallax-geomerty').forEach(mouseMovement => {
            let speed = mouseMovement.dataset.speed;
            mouseMovement.style.transform = `translateX(${e.pageX * speed}px) translateY(${e.pageY * speed}px`;
        })
    }
}