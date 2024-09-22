//カルーセル
$('.voices__slick').slick({
    dots:true,
    centerMode: true,
    centerPadding:"30px",
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