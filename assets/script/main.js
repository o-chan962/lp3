//カルーセル
$('.voices__slick').slick({
    dots:true,
    arrows: true,
    prevArrow: ".arrow-circle--prev",
    nextArrow: ".arrow-circle--next",
    slidesToShow: 3,// 一度に表示するスライド数
    responsive:[
      {
        breakpoint : 767,
        settings:{
        slidesToShow: 1,
        }
      }
    ]
  });