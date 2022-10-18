 

var socialOrgData = [
  {
    title: "trainning",
    icon: "../images/social-org/org1.png",
    intro: "ĐÀO TẠO",
    content: "Trang bị cho Phụ nữ kiến thức cần thiết để chủ động trong công việc và cuộc sống hàng ngày, tạo cơ hội phát triển..."
  },
  {
    title: "brands",
    icon: "../images/social-org/org2.png",
    intro: "ỨNG DỤNG SỐ HOÁ NÂNG CAO THU NHẬP",
    content: " Chương trình EM-BRANDS được xây dựng dựa trên cơ sở phát triển nền tảng ứng dụng liên kết giữa các thương hiệu,..."
  },
  {
    title: "retail",
    icon: "../images/social-org/org3.png",
    intro: "XÂY DỰNG CHUỖI CỬA HÀNG",
    content: "EM-RETAIL tiên phong là mắt xích kết nối cùng các đơn vị ban ngành liên quan để hỗ trợ phụ nữ các tỉnh/ thành phố..."
  },
  {
    title: "innovation",
    icon: "../images/social-org/org1.png",
    intro: "HỖ TRỢ SÁNG KIẾN",
    content: "Khuyến khích và tạo điều kiện để phụ nữ có cơ hội thể hiện quan điểm, tư duy sáng tạo; từ đó hiện thực hoá..."
  },
  {
    title: "voice",
    icon: "../images/social-org/org2.png",
    intro: "TÔN VINH",
    content: "Với sự hỗ trợ của EM-VENTURES, phụ nữ Việt Nam không những có thể vượt qua chính bản thân, tạo lập công việc..."
  },
  {
    title: "payday",
    icon: "../images/social-org/org3.png",
    intro: "DỊCH VỤ TÀI CHÍNH",
    content: " Cùng với những đối tác là Doanh nghiệp lớn, có uy tín trong lĩnh vực tài chinh tại Việt Nam, EM-VENTURES cung cấp..."
  },
]

export var socialOrgTemp = 
`    <div class="social-org">
<div class="title">
  <h2>Tổ chức cộng đồng</h2>
  <h1 class="purple-grad">EM-Power Woman Ventures</h1>
  <p>“ Cảm hứng sống đến từ chính mình ”</p>
</div>
<div class="org-list">
  ${renderOrg(socialOrgData)}
</div>
</div>`
function renderOrg(arr) {
  var temp = "";
  arr.forEach(element => {
    temp +=
    `        <div class="org-item">
    <div class="img-wrap">
      <div class="title">
        <div class="text">
          <h1><span >em - </span>${element.title}</h1>
          <p>Ventures | <span>By PDA</span></p>
        </div>
        <img src="../images/notext-logo.png" alt="" height="40px" width="40px">
      </div>
      <div class="icon-wrap">
        <img src="${element.icon}" alt="">
      </div>
    </div>
    <div class="text-wrap">
      <div class="content">
        <p>
          ${element.intro}
        </p>
        <p>${element.content}</p>
      </div>
      <div class="see-more">
        <p>Xem thêm</p>
        <i class="fa-sharp fa-solid fa-arrow-right"></i>
      </div>
    </div>
  </div>`
  });
  return temp;
}

