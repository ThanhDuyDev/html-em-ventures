const visionCss = [
  "../css/vision.css",
]

let visionData = [
  { img: "../images/about-us/vision-item1.png", title: "Tầm Nhìn", content: "Sáng tạo đổi mới luôn tạo động lực cho sự phát triển bền vững, kết nối giá trị cộng sinh trong xu hướng toàn cầu. Một thế giới mà ở đó, phụ nữ tự chủ trong công việc sẽ tạo nên động lực phát triển kinh tế." },
  { img: "../images/about-us/vision-item2.png", title: "Sứ Mệnh", content: "Tạo động lực và truyền cảm hứng sống tích cực cho phụ nữ Việt Nam; hỗ trợ các điều kiện để họ ổn định cuộc sống, và cùng kiến tạo những giá trị tốt đẹp cho phụ nữ và cộng đồng. " }
]

export var visionTemp =
  `    <div class="vision">
<div class="title">
  <h1>Về EM-Power Woman Ventures</h1>
  <h2 class="purple-grad">Tầm Nhìn và Sứ Mệnh</h2>
  <p>Một dự án cộng đồng dành cho phụ nữ khắp Việt Nam, được khởi xướng bởi PDA & Partners, đồng hành cùng Trung
    tâm Vì sự phát triển Phụ nữ Bắc Trung Bộ, thuộc Hội Liên hiệp Phụ nữ Việt Nam.</p>
  <div class="see-more">
    <p>Xem thêm</p>
    <i class="fa-sharp fa-solid fa-arrow-right"></i>
  </div>
</div>
<div class="content">
  <img src="../images/about-us/vision.png" alt="" width="400px" height="400px">
  <div class="text-wrap">
    ${renderVisionItem(visionData)}
    <div class="bottom">
      <button class="more-btn ">
        <p>Xem thêm</p>
        <i class="fa-sharp fa-solid fa-arrow-right"></i>
      </button>
      <button class="contact-btn">
        Liên hệ
      </button>
    </div>
  </div>
</div>
</div>`

function renderVisionItem(arr) {
  let str = "";
  arr.forEach(element => {
    str += `<div class="item">
    <div class="item-img">
      <img src="${element.img}" alt="">
    </div>
    <div class="item-text">
      <h1>${element.title}</h1>
      <p>${element.content}</p>
    </div>
  </div>  `
  })
  return str;
}

importCss(visionCss);
