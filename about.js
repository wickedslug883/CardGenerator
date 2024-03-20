const invertBtn = document.getElementById("invertBtn");
const htmlElement = document.documentElement;

invertBtn.addEventListener("click", () => {
  if (htmlElement.classList.contains("inverted")) {
    htmlElement.classList.remove("inverted");
    htmlElement.classList.add("revert");
  } else {
    htmlElement.classList.remove("revert");
    htmlElement.classList.add("inverted");
  }
});
const ktwTitle = document.querySelector('.ktwTitle');

ktwTitle.innerHTML = ktwTitle.textContent.replace(/\S/g, "<span class='jello-letter'>$&</span>");

const jelloLetters = document.querySelectorAll('.jello-letter');

jelloLetters.forEach((jelloLetter) => {
  jelloLetter.addEventListener('mouseenter', () => {
    jelloLetter.classList.add('jello-animation');
    setTimeout(() => {
      jelloLetter.classList.remove('jello-animation');
    }, 1000); // Remove the class after 1 second (the duration of the animation)
  });
});

const box_two=document.getElementById('box_img_two')
const container=document.getElementById('ktwImageBox')

container.addEventListener('mousemove',(e)=>{
    let positionX=e.offsetX
    let positionY=e.offsetY
    box_two.style.clipPath=`circle(70px at ${positionX}px ${positionY}px)`
}
)
const tro_two=document.getElementById('tro_img_two')
const trotainer=document.getElementById('ktwImageTro')

trotainer.addEventListener('mousemove',(e)=>{
    let positionX=e.offsetX
    let positionY=e.offsetY
    tro_two.style.clipPath=`circle(70px at ${positionX}px ${positionY}px)`
}
)