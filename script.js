document.querySelector(".click-area").addEventListener("click", function () {
  const modal = document.getElementById("messageModal");
  modal.classList.add("show");
  createColorConfetti();
});

document.querySelector(".close-btn").addEventListener("click", function () {
  const modal = document.getElementById("messageModal");
  modal.classList.remove("show");
});

// 点击模态框外部关闭
document.getElementById("messageModal").addEventListener("click", function (e) {
  if (e.target === this) {
    this.classList.remove("show");
  }
});

function createColorConfetti() {
  const colors = [
    "#ff8ba7",
    "#ffc2d1",
    "#ffd93d",
    "#ff6b6b",
    "#87ceeb",
    "#98fb98",
  ];
  const shapes = ["circle", "square", "triangle"];
  const container = document.createElement("div");
  container.className = "confetti-container";
  document.body.appendChild(container);

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    const color = colors[Math.floor(Math.random() * colors.length)];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const left = Math.random() * 100 + "vw";
    const animationDuration = Math.random() * 3 + 2 + "s";
    const animationDelay = Math.random() * 2 + "s";

    confetti.style.cssText = `
      left: ${left};
      background-color: ${color};
      animation: confettiFall ${animationDuration} ease-in forwards;
      animation-delay: ${animationDelay};
    `;

    if (shape === "circle") {
      confetti.style.borderRadius = "50%";
    } else if (shape === "triangle") {
      confetti.style.width = "0";
      confetti.style.height = "0";
      confetti.style.backgroundColor = "transparent";
      confetti.style.borderLeft = "5px solid transparent";
      confetti.style.borderRight = "5px solid transparent";
      confetti.style.borderBottom = `10px solid ${color}`;
    }

    container.appendChild(confetti);
  }

  
  setTimeout(() => {
    container.remove();
  }, 5000);
}

// 添加消息数据
const messages = [
  {
    avatar: "😽",
    name: "日运播报",
    text: "输入祝福语 ​​​",
    date: "2024.12.14",
  },
  
  {
    avatar: "👦",
    name: "某不愿透露姓名的帅哥",
    text: "输入祝福语",
    date: "2024.12.07",
  },
//  若添加其他内容应保持格式相同
  {
    avatar: "🌟",
    name: "许愿区",
    text: "许的愿望一定会实现哦~",
  },
];

let currentMessageIndex = 0;

// 修改更新消息函数
function updateMessage(index) {
  const container = document.querySelector(".message-container");
  container.style.transform = "translateX(50px)";
  container.style.opacity = "0";

  setTimeout(() => {
    const message = messages[index];
    document.querySelector(".message-avatar").textContent = message.avatar;
    document.querySelector(".message-name").textContent = message.name;
    document.querySelector(".message-text").textContent = message.text;
    document.querySelector(".message-date").textContent = message.date;

    requestAnimationFrame(() => {
      container.style.transition = "all 0.5s ease";
      container.style.transform = "translateX(0)";
      container.style.opacity = "1";
    });

    document.querySelector(".prev-btn").disabled = index === 0;
    document.querySelector(".next-btn").disabled =
      index === messages.length - 1;
  }, 300);
}

// 添加按钮事件监听
document.querySelector(".prev-btn").addEventListener("click", function () {
  if (currentMessageIndex > 0) {
    currentMessageIndex--;
    updateMessage(currentMessageIndex);
  }
});

document.querySelector(".next-btn").addEventListener("click", function () {
  if (currentMessageIndex < messages.length - 1) {
    currentMessageIndex++;
    updateMessage(currentMessageIndex);
  }
});

// 添加计算相识时间的函数
function updateFriendshipTime() {
  const startDate = new Date(2020, 7, 1); // 8月1日
  const currentDate = new Date();

  // 计算年月日
  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();
  let days = currentDate.getDate() - startDate.getDate();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (days < 0) {
    months--;
    const lastMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      0
    );
    days += lastMonth.getDate();
  }

  // 计算总天数、小时、分钟和秒
  const timeDiff = currentDate - startDate;
  const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // 更新显示
  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;

  document.getElementById("totalDays").textContent = totalDays;
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}

// 页面加载时立即更新时间
document.addEventListener("DOMContentLoaded", function () {
  updateFriendshipTime();
  // 每秒更新一次
  setInterval(updateFriendshipTime, 1000);
  updateMessage(0);
});
