const socialActCss = [
  "../css/social-act.css",
]

const socialActData = [
  {img: '../images/social-act/act1.png', text: '3M Safety'},
  {img: '../images/social-act/act2.png', text: 'Grab chung tay đến trường'},
  {img: '../images/social-act/small-act1.png', text: 'Chạy vì trái tim'},
  {img: '../images/social-act/small-act2.png', text: 'Giải bóng đá trẻ em có hoàn cảnh khó khăn'},
  {img: '../images/social-act/act3.png', text: 'Mùa xuân cho em'},
  {img: '../images/social-act/act4.png', text: 'Sơn hạnh phúc vẽ yêu thương'}
]

export let socialActTemp = 
`    <div class="social-act">
<div class="title">
  <h2>SỰ KIỆN của em - ventures</h2>
  <h1 class="purple-grad">Những hoạt động cộng đồng</h1>
</div>
<div class="list">
  ${renderSocialActItem(socialActData)}
</div>

</div>
<button class="more-btn ">
  <p>Xem thêm</p>
  <i class="fa-sharp fa-solid fa-arrow-right"></i>
</button>
</div>`

function renderSocialActItem(arr) {
  let str = '<div class="column">';
  for(let i=0; i<arr.length; i++) {
    str +=
    `<div class=${(2<=i && i<=3) ? 'small-item' : 'item'} >
      <img src="${arr[i].img}" alt="">
      <div class="bottom">
        <p>${arr[i].text}</p>
      </div>
    </div>`
    if (i === (arr.length/2 -1)) {
       str += '</div><div class="column">'
    }
    if (i === arr.length) {
      str += '</div>'
    }
  }
  return str;
}

importCss(socialActCss);