// Data
const headerFooterCss = [
  "../css/default.css",
  "../css/header.css",
  "../css/footer.css",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css",
]

const headerData = [{
  menuTitle: "EM-Ventures",
  subMenu: [{
      name: "Về chúng tôi",
      link: ".about-us.html"
  }, {
      name: "Tầm nhìn",
      link: ""
  }, {
      name: "Sứ mệnh",
      link: ""
  }, {
      name: "Giá trị cốt lõi",
      link: ""
  }, {
      name: "Đối tác chiến lược",
      link: ""
  }, {
      name: "Ban điều hành",
      link: ""
  }],
}, {
  menuTitle: "Hoạt động",
  subMenu: [{
      name: "EM-Trainning",
      link: ""
  }, {
      name: "EM-Brands",
      link: ""
  }, {
      name: "EM-Retail",
      link: ""
  }, {
      name: "EM-Innovation",
      link: ""
  }, {
      name: "EM-Voice",
      link: ""
  }, {
      name: "EM-Payday",
      link: ""
  }],
}, {
  menuTitle: "Sự kiện",
  subMenu: ""
}, {
  menuTitle: "Liên kết",
  subMenu: [{
      name: "Liên hệ",
      link: ""
  }, {
      name: "Trở thành Nhà tài trợ",
      link: ""
  }, {
      name: "Trở thành Đại sứ",
      link: ""
  }, {
      name: "Trở thành Thành viên",
      link: ""
  }, {
      name: "Dịch vụ kế nối khác",
      link: ""
  }],
}, {
  menuTitle: "Tài khoản",
  subMenu: ""
}, ];

const footerData = [{
  title: "EM-Ventures",
  nav: [{
      name: "Về chúng tôi",
      link: ""
  }, {
      name: "Sự kiện cộng đồng",
      link: ""
  }]
}, {
  title: "Hoạt động",
  nav: [{
      name: "EM-Training",
      link: ""
  }, {
      name: "EM-Brands",
      link: ""
  }, {
      name: "EM-Retail",
      link: ""
  }, {
      name: "EM-Innovation",
      link: ""
  }, {
      name: "EM-Voice",
      link: ""
  }, {
      name: "EM-Payday",
      link: ""
  }]
}, {
  title: "Đối tác chiến lược",
  nav: [{
      name: "Đối tác chiến lược",
      link: ""
  }, {
      name: "Đối tác Tài chính",
      link: ""
  }, {
      name: "Đối tác đồng hành",
      link: ""
  }]
}, {
  title: "Liên kết",
  nav: [{
      name: "Liên hê",
      link: ""
  }, {
      name: "Trở thành Nhà tài trợ",
      link: ""
  }, {
      name: "Trở thành Đại sứ",
      link: ""
  }, {
      name: "Trở thành Thành viên",
      link: ""
  }, {
      name: "Dịch vụ kết nối khác",
      link: ""
  }]
}]

// import css
function importCss(arr) {
  arr.forEach(element => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `${element}`
      document.querySelector("head").append(link);
  });
}

//  Template
var headerTemp =
  ` <div class="header">
    <div class="header-container page-width">
  <a href="./home.html" class="header-logo">
    <img src="../images/logo.png" alt=""  width="160px" height="66px" >
  </a>
  <div class="header-nav">
    <ul class="header-menu-list">
    ${renderHeader(headerData)}
    </ul>
  <button class="download-btn">
    <p>tải app</p>
  </button>
  </div>
  </div>`
  
var footerTemp =
  `<div class="footer">
<div class="footer-container page-width">
  <div class="footer-nav">
    <ul class="footer-nav-table">
    ${renderFooter(footerData)}
    </ul>
  <div class="get-noti">
    <h3>Nhận thông báo</h3>
    <div class="input-wrap">
      <input type="text">
      <div class="icon-wrap">
        <i class="fa-solid fa-angle-right"></i>
      </div>
    </div>
    <p>Đăng ký để nhận thông báo từ EM-Ventures để cập nhật những tin tức và khám phá mới.</p>
  </div>
  </div>
  <div class="footer-line-break"></div>
  <div class="footer-bottom">
    <img src="../images/logo.png" alt="" width="160px" height="60px">
    <p>©2022 EM-Ventures. All Right Reserved</p>
    <div class="social-contact">
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-facebook-f"></i>
      <i class="fa-brands fa-instagram"></i>
    </div>
  </div>`

// Function render
function renderList(data, listCName, itemCName) {
  var temp =
      `<ul class="${listCName}">`;
  data.forEach(element => {
      temp += `<li class="${itemCName}"><a href="${element.link}">${element.name}</a></li>`
  });
  temp += "</ul>";
  return temp;
}

function renderHeader(arr) {
  let str = '';
  arr.forEach((element) => {
      if (element.subMenu !== "") {
          str +=
        `<li class="header-menu-item">
          <p>${element.menuTitle} </p>
          ${renderList(element.subMenu, "header-submenu-list desktop-hide", "header-submenu-item")}
        </li>`;
      } else {
          str +=
              `<li class="header-menu-item">
      <p>${element.menuTitle} </p>
      </li>`;
      }
  });
return str; 
}

function renderFooter(arr) {
  let str = '';
  arr.forEach(element => {
    str +=
          `<li class="footer-nav-column">
    <p>${element.title}</p>
      ${renderList(element.nav, "", "")}
    `
  });
  return str;
}

importCss(headerFooterCss);
renderHeader(headerData);
renderFooter(footerData);

document.querySelector(".header").outerHTML = headerTemp;
document.querySelector(".footer").outerHTML = footerTemp;

