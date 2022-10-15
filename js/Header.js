var headerArr = [
  {
    menuTitle: "EM-Ventures",
    subMenu: [
      {subMenuTitle: "Về chúng tôi", link: ".about-us.html"},
      {subMenuTitle: "Tầm nhìn", link: ""},
      {subMenuTitle: "Sứ mệnh", link: ""},
      {subMenuTitle: "Giá trị cốt lõi", link: ""},
      {subMenuTitle: "Đối tác chiến lược", link: ""},
      {subMenuTitle: "Ban điều hành", link: ""}
    ],
  },
  {
    menuTitle: "Hoạt động",
    subMenu: [
      {subMenuTitle: "EM-Trainning", link: ""},
      {subMenuTitle: "EM-Brands", link: ""},
      {subMenuTitle: "EM-Retail", link: ""},
      {subMenuTitle: "EM-Innovation", link: ""},
      {subMenuTitle: "EM-Voice", link: ""},
      {subMenuTitle: "EM-Payday", link: ""}
    ],
  },
  { menuTitle: "Sự kiện", subMenu: "" },
  {
    menuTitle: "Liên kết",
    subMenu: [
      {subMenuTitle: "Liên hệ", link: ""},
      {subMenuTitle: "Trở thành Nhà tài trợ", link: ""},
      {subMenuTitle: "Trở thành Đại sứ", link: ""},
      {subMenuTitle: "Trở thành Thành viên", link: ""},
      {subMenuTitle: "Dịch vụ kế nối khác", link: ""}
    ],
  },
  { menuTitle: "Tài khoản", subMenu: "" },
];

var headerTemp =
` <div class="header">
    <a href="./home.html" class="header-logo">
      <img src="../images/header/logo.png" alt=""  width="160px" height="66px" >
    </a>
    <div class="header-nav">
      <ul class="header-menu-list">`;

function renderSubMenuHeader(arr) {
  var temp =
    `<ul class="header-submenu-list">`;
  arr.forEach(element => {
    temp += `<li class="header-submenu-item"><a href="${element.link}">${element.subMenuTitle}</a></li>`
  });
  temp += "</ul>";
  return temp;
}

function renderHeaderList(arr) {
  arr.forEach((element) => {
    if (element.subMenu !== "") {
      headerTemp +=
        `<li class="header-menu-item">
        <p>${element.menuTitle} </p>
        ${renderSubMenuHeader(element.subMenu)}
        </li>`;
    } else {
      headerTemp +=
        `<li class="header-menu-item">
        <p>${element.menuTitle} </p>
        </li>`;
    }
  });
  headerTemp += 
  `</ul>
  <button class="download-btn">
    <p>tải app</p>
  </button>`
}

renderHeaderList(headerArr);

document.querySelector(".header").outerHTML = headerTemp;
