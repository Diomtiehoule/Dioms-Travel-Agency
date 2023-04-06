const carousel = document.querySelector(".carousel");
firstImg =  carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll('.wrapper i');

let isDragStar = false, prevPageX,  prevScrollLetf;
let fisrtImgWidth = firstImg.clientWidth +14;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const showHideIcons =  () =>{
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        carousel.scrollLeft += icon.id == 'left' ? -fisrtImgWidth : fisrtImgWidth;
        setTimeout(() => showHideIcons(), 60);
    });
})

const DragStar = (e) => {
    isDragStar = true;
    prevPageX =  e.pageX;
    prevScrollLetf = carousel.scrollLeft;
    showHideIcons();

}


const  dragging = (e) => {
    if(!isDragStar) return;
    e.preventDefault();
    carousel.classList.add('dragging')
    let positionDiff =  e.pageX - prevPageX ;
    carousel.scrollLeft = prevScrollLetf - positionDiff;
}

const DragStop = (e) => {
    isDragStar = false ;
    carousel.classList.remove('dragging');
}
carousel.addEventListener("mousedown", DragStar);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener.remove("mousemove", dragging);