// Your code here
const dodger = document.getElementById("dodger");

//moveDodgerLeft(): moves the DODGER to the left 
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

//moveDodgerRight(): moves the DODGER to the right
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left < 360) {
        dodger.style.left = `${left + 1}px`
    }
}

// Wire the functions up to the event listener 
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
})

