// DATA
const articleCss = [
  "../css/em-articles.css",
]

var venturesList = [
  { bold: "EM-Trainning", text: "đào tạo" },
  { bold: "EM-Brands", text: "ứng dụng số hóa nâng cao thu nhập" },
  { bold: "EM-Retail", text: "xây dựng chuỗi cửa hàng kết nối giới thiệu sản phẩm truyền thống, đặc sản địa phương" },
  { bold: "EM-Innovation", text: "hỗ trợ sáng kiến" },
  { bold: "EM-Voice", text: "tôn vinh" },
  { bold: "EM-PAYDAY", text: "dịch vụ tài chính" },
]

var trainning = {
  name: "trainning",
  img: "../images/em-articles/trainning.png",
  intro: "đào tạo",
  content: "Trang bị cho Phụ nữ kiến thức cần thiết để chủ động trong công việc và cuộc sống hàng ngày, tạo cơ hội phát triển và khẳng định bản thân.",
  list: ["Kiến thức về sản phẩm.",
    "Kiến thức về xây dựng thương hiệu, tiếp thị.",
    "Kiến thức về kinh doanh, kiểm soát tài chính.",
    "Kiến thức về chuyển đổi số."]
};

var retail = {
  name: "retail",
  img: "../images/em-articles/retail.png",
  intro: "XÂY DỰNG CHUỖI CỬA HÀNG KẾT NỐI GIỚI THIỆU SẢN PHẨM TRUYỀN THỐNG, ĐẶC SẢN ĐỊA PHƯƠNG",
  content: "EM-RETAIL tiên phong là mắt xích kết nối cùng các đơn vị ban ngành liên quan để hỗ trợ phụ nữ các tỉnh/ thành phố tự tin duy trì và phát triển các sản phẩm truyền thống, đặc sản địa phương.",
  list: [
    "Gìn giữ & phát triển làng nghề truyền thống khắp vùng miền Việt Nam.",
    "Tạo việc làm, tăng thu nhập cho phụ nữ thông qua mô hình kinh doanh tự doanh trên toàn quốc.",
    "Hỗ trợ mô hình kinh doanh; liên kết với đơn vị hỗ trợ tài chính để phụ nữ có nguồn vốn mở cửa hàng bán lẻ; phối hợp với các cơ quan ban ngành liên quan có thẩm quyền để chứng nhận chất lượng sản phẩm và phát triển thị trường; hỗ trợ phụ nữ xây dựng thương hiệu và phát triển thương hiệu.",
    "Áp dụng nền tảng số hoá, quản trị bằng công nghệ, góp phần thực hiện chuyển đổi số cho phụ nữ."
  ]
}

var innovation = {
  name: "innovation",
  img: "../images/em-articles/innovation.png",
  intro: "hỗ trợ sáng kiến",
  content: "Khuyến khích và tạo điều kiện để phụ nữ có cơ hội thể hiện quan điểm, tư duy sáng tạo; từ đó hiện thực hoá các ý tưởng kinh doanh và sáng kiến mang lại giá trị cho đối tượng phụ nữ. Bên cạnh việc hỗ trợ nâng cao kỹ năng, kiến thức, EM-INNOVATION còn tạo cơ hội kết nối đầu tư cho các ý tưởng, đề xuất mang tính khả thi và xuất sắc.",
  list: [
    " Phát động và khuyến khích hội viên phụ nữ gửi các ý tưởng kinh doanh (đề xuất các dự án phát triển kinh tế, khai thác thế mạnh địa phương: nông – lâm – thủy sản; thủ công mỹ nghệ, du lịch, văn hóa bản địa…) hoặc các sáng kiến cộng đồng mang lại lợi ích cho đối tượng là phụ nữ.",
    "Hỗ trợ nâng cao kỹ năng, kiến thức và tiếp cận nguồn vốn.",
    "Kết nối và đầu tư phát triển các dự án, mô hình có tiềm lực nhằm hỗ trợ hội viên phụ nữ phát triển kinh tế xã hội mang tính bền vững."
  ]
}

var voice = {
  name: "voice",
  img: "../images/em-articles/voice.png",
  intro: "tôn vinh",
  content: "Với sự hỗ trợ của EM-VENTURES, phụ nữ Việt Nam không những có thể vượt qua chính bản thân, tạo lập công việc chủ động và nâng chất lượng cuộc sống mà còn truyền cảm hứng tích cực cho thể hệ phụ nữ trong thời đại mới.",
  list: [
    "Đánh giá hiệu quả hoạt động của các mô hình, dự án được triển khai làm cơ sở để nhận rộng thực hiện trong năm tiếp theo.",
    "Tổ chức sự kiện thường niên, tôn vinh phụ nữ đã thực sự tạo sự khác biệt, với sự hỗ trợ của EM-VENTURES, họ đã nỗ lực vươn lên để tạo dựng sự nghiệp và mang lại những giá trị tích cực cho cộng đồng, truyền cảm hứng tích cực cho thế hệ phụ nữ Việt Nam trong thời đại mới."
  ]
}

var payday = {
  name: "payday",
  img: "../images/em-articles/payday.png",
  intro: "dịch vụ tài chính",
  content: "Cùng với những đối tác là Doanh nghiệp lớn, có uy tín trong lĩnh vực tài chinh tại Việt Nam, EM-VENTURES cung cấp các dịch vụ liên kết như một App tài chính, dành cho những Phụ nữ là Hội viên của EM-VENTURES:",
  list: [
    "Nạp/Rút tiền",
    "Chuyển tiền",
    "Thanh toán",
    " Gửi tiết kiệm/ Vay",
    "Tích hợp các dịch vụ sẵn có của tài chính"
  ]
}

// TEMPLATE
export var venturesTemp = "";
export var trainningTemp = "";
export var retailTemp = "";
export var innovationTemp = "";
export var voiceTemp = "";
export var paydayTemp = "";
var moreBtnTemp =
  `    <button class="more-btn ">
<p>Xem thêm</p>
<i class="fa-sharp fa-solid fa-arrow-right"></i>
</button>`;
var articleBottomTemp = `  <div class="article-bottom">
<div class="text-wrap">
  <p>Thông tin chi tiết</p>
  <p>em-inn@emventures.vn</p>
</div>
${moreBtnTemp}
</div>`;

function renderVenturesArticle(arr) {
  venturesTemp =
    `  <div class="em-article em-ventures">
      <div class="img-wrap">
        <img src="../images/em-articles/ventures.png" alt="" width="1000px" height="600px">
      </div>
      <div class="text-wrap">
        <h1 class="purple-grad">EM-VENTURES xây dựng các giải pháp nhằm hỗ trợ Phụ nữ làm chủ cuộc sống của
        chính mình</h1>
        <p>
        Với mục tiêu giúp đỡ, hỗ trợ hàng triệu phụ nữ Việt Nam có cuộc sống tốt đẹp hơn, EM-Ventures triển khai các giải pháp đồng bộ, có tính kết nối, bằng từng hành động cụ thể, giúp phụ nữ xây dựng gia đình có sinh kế bền vững, hạnh phúc, tiến bộ, văn minh, chia sẻ trách nhiệm xã hội, góp phần xây dựng các giá trị tốt đẹp cho gia đình và cộng đồng:
        </p>
        <ul>
`
  arr.forEach(element => {
    venturesTemp += `
    <li><span>${element.bold}</span> / ${element.text}</li>    `;
  });
  venturesTemp +=
    '</ul><p class="highlight-text">“Học – Thực hành – Tự doanh – Phát triển sáng kiến mới – Tôn vinh”</p><p>Chặng đường phát triển bản thân của người phụ nữ được EM-Ventures phác hoạ và định hướng hỗ trợ cho từng thành viên của mình, để họ làm chủ cuộc sống của mình, từng bước vững chắc để tạo dựng sự nghiệp.</p>'
}


function renderArticle(obj) {
  var temp = `  <div class="em-article em-${obj.name}">
  <div class="img-wrap">
    <img src="${obj.img}" alt="" width="1000px" height="600px">
  </div>
  <div class="text-wrap">
    <div class="title purple-grad">
      <h1>${obj.name}</h1>
      <h2>${obj.intro}</h2>
    </div>
    <p>${obj.content}</p>
    <ul>`
  obj.list.forEach(element => {
    temp += `<li>${element}</li>`
  })
  temp += `</ul>`;

  if (obj.name === "trainning") {
    trainningTemp += temp + moreBtnTemp;
  } else if (obj.name === "retail") {
    retailTemp += temp + articleBottomTemp;
  } else if (obj.name === "innovation") {
    innovationTemp += temp + articleBottomTemp;
  } else if (obj.name === "voice") {
    voiceTemp += temp + moreBtnTemp;
  } else if (obj.name === "payday") {
    paydayTemp += temp + moreBtnTemp;
  }
}


importCss(articleCss);
renderVenturesArticle(venturesList);
renderArticle(trainning);
renderArticle(retail);
renderArticle(innovation);
renderArticle(voice);
renderArticle(payday);


// console.log(trainningTemp);

export function renderAll() {
  document.querySelector(".ventures").outerHTML = venturesTemp;
  document.querySelector(".trainning").outerHTML = trainningTemp;
  document.querySelector(".retail").outerHTML = retailTemp;
  document.querySelector(".innovation").outerHTML = innovationTemp;
  document.querySelector(".voice").outerHTML = voiceTemp;
  document.querySelector(".payday").outerHTML = paydayTemp;
}
