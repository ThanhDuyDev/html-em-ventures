const partnerCss = [
  "../css/partner.css",
]

const partnerData = [
  {
    title: "ĐỐI TÁC TÀI CHÍNH", list: [
      "../images/partner/eco-partner1.png",
      "../images/partner/eco-partner2.png",
      "../images/partner/eco-partner3.png"
    ]
  },
  { title: "ĐẠI SỨ", list: ["", ""] },
  {
    title: "ĐỐI TÁC CÔNG NGHỆ", list: [
      "../images/partner/it-partner.png"
    ]
  },
  {
    title: "ĐỐI TÁC ĐỒNG HÀNH", list: [
      "../images/partner/fl-partner1.png",
      "../images/partner/fl-partner2.png",
      "../images/partner/fl-partner3.png",
      "../images/partner/fl-partner4.png",
      "../images/partner/fl-partner5.png",
      "../images/partner/fl-partner6.png",
    ]
  },
]

export let partnerTemp = 
`    <div class="partner">
<h1>ĐỐI TÁC CHIẾN LƯỢC</h1>
<div class="content">
  <div class="goverment">
    <h1 class='purple-grad'>CHÍNH PHỦ</h1>
    <p>HỘI LIÊN HIỆP PHỤ NỮ VIỆT NAM
      TRUNG TÂM VÌ SỰ PHÁT TRIỂN 
      PHỤ NỮ BẮC – TRUNG – BỘ</p>
      <img src="../images/partner/goverment.png" alt="" width="240px" height="240px">
  </div>
  ${renderPartnerColumn(partnerData)}
</div>
</div>`

function renderPartnerColumn(arr) {
  let str = ""
  arr.forEach(element => {
    str += 
    `<div class="partner-column">
    <h1>${element.title}</h1>
    <div class="list ${element.list.length > 3 ? 'wrap-list' : ''}">
      ${renderParnterList(element.list)}
    </div>
  </div>`
  })
  return str;
}

function renderParnterList(arr) {
  let str = "";
  arr.forEach(element => {
    str +=
    `<div class="item-wrap">
    ${element !== "" ? `<img src = "${element}" alt="" width="200px" height="100px">` : ''}
    </div>`
  });
  return str;
}

importCss(partnerCss);
