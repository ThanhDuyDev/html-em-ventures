const aboutUsCss = [
  "../css/joined.css",
]

const joinedData = [
  {number: "50", text: "Thương hiệu đồng hành"},
  {number: "50", text: "Nhân sự chủ lực"},
  {number: "500", text: "Thành viên Hội viên"},
  {number: "120", text: "Dự án triển khai"},
]

export var joinedTemp = 
`    <div class="joined">
  ${renderJoinedTemp(joinedData)}
</div>`

function renderJoinedTemp(arr) {
  var temp = "";
  arr.forEach(e => {
    temp += `<div class="joined-item">
    <h1 class="purple-grad">${e.number}+</h1>
    <p>${e.text}</p>
  </div>`
  });
  return temp;
}

importCss(aboutUsCss);