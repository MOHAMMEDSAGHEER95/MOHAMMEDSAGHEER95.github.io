//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//Moving Animation Event
function card_move(elem,e){
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  elem.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
}
//Animate In
// card.addEventListener("mouseenter", (e) => {
//   card.style.transition = "none";
  //Popout
//   title.style.transform = "translateZ(150px)";
//   sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
//   description.style.transform = "translateZ(125px)";
//   sizes.style.transform = "translateZ(100px)";
//   purchase.style.transform = "translateZ(75px)";
// });

function content_move_in(elem, e){
  elem.style.transition = "none";
  debugger
  $(elem).children().find('.title')[0].style.transform = "translateZ(150px)";
  $(elem).find('.sneaker').find('img')[0].style.transform = "translateZ(200px) rotateZ(45deg)";
  $(elem).find('.info').find('h3')[0].style.transform = "translateZ(125px)";
  $(elem).find('.info').find('.sizes')[0].style.transform = "translateZ(100px)";
  $(elem).find('.info').find('.purchase')[0].style.transform = "translateZ(75px)";

}
//Animate Out
// card.addEventListener("mouseleave", (e) => {
//   card.style.transition = "all 0.5s ease";
//   card.style.transform = `rotateY(0deg) rotateX(0deg)`;
//   //Popback
//   title.style.transform = "translateZ(0px)";
//   sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
//   description.style.transform = "translateZ(0px)";
//   sizes.style.transform = "translateZ(0px)";
//   purchase.style.transform = "translateZ(0px)";
// });


function content_move_out(elem, e){
  elem.style.transition = "all 0.5s ease";
  elem.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  $(elem).children().find('.title')[0].style.transform = "translateZ(0px)";
  $(elem).find('.sneaker').find('img')[0].style.transform = "translateZ(0px) rotateZ(0deg)";
  $(elem).find('.info').find('h3')[0].style.transform = "translateZ(0px)";
  $(elem).find('.info').find('.sizes')[0].style.transform = "translateZ(0px)";
  $(elem).find('.info').find('.purchase')[0].style.transform = "translateZ(0px)";

}

$('button').click(function(){ 
    $('button').removeClass("active");
    $(this).addClass("active");
})

$('.card').mousemove(function(e){ 

  card_move(this,e);

})

$('.card').mouseenter(function(e){ 

  content_move_in(this,e);

})


$('.card').mouseleave(function(e){ 

  content_move_out(this,e);

})