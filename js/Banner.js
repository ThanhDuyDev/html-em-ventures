const articleCss = [
  "../css/banner.css",
]

var newsData = [
  "../images/banner-reuse/banner-news1.png",
  "../images/banner-reuse/banner-news2.png",
  "../images/banner-reuse/banner-news3.png",
]

var brandsData = [
  "../images/banner-reuse/banner-brand1.png",
  "../images/banner-reuse/banner-brand2.png",
  "../images/banner-reuse/banner-brand3.png",
]

export var bannerTemp =
  `    <div class="banner">
<div class="img-bg">
  <img src="../images/banner-reuse/banner-bg.png" alt=""/>
</div>
<div class="banner-container">
  <div class="banner-text">
    <h2>EM-Power Woman Ventures</h2>
    <h1>TỰ CHỦ LÀ MỘT LỰA CHỌN ĐỂ BẠN HẠNH PHÚC</h1>
    <p>Dự án dành cho phụ nữ khắp Việt Nam, tạo động lực và truyền cảm hứng sống tích cực; để họ tôn trọng, yêu thương bản thân, tạo dựng cuộc sống ổn định và cùng tạo nên giá trị tốt đẹp cho cộng đồng.</p>
    <div class="btn-group">
      <button class="joinem-btn">
        <p>Gia nhập EM-VENTURES</p>
        <i class="fa-sharp fa-solid fa-arrow-right"></i>
      </button>
      <button class="explore-btn">
        <p>Tìm hiểu thêm</p>
      </button>
    </div>
  </div>
  <div class="banner-bottom">
  <div class="banner-news">
  <h1>tin tức cộng đồng</h1>
  <div class="news-list">
  ${renderBannerNewsList(newsData)}
  </div>
  </div>
  <div class="banner-brands">
  ${renderBannerBrandsList(brandsData)}
  `

function renderBannerNewsList(arr) {
  var temp = "";
  arr.forEach(element => {
    temp +=
      `         <div class="news-item">
      <img src="${element}" alt="" width="150px" height="180px">
      <p>Là phụ nữ, làm thế nào ...</p>
    </div>`
  });
  return temp;
}

function renderBannerBrandsList(arr) {
  var temp = "";
  arr.forEach(element => {
    temp += `       <div class="brand-item">
    <img src="${element}" alt="" width="180px" height="180px">
  </div>`
  });
  return temp;
}


importCss(articleCss);
