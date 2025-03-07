# 生日祝福网页 🎂

一个精心设计的生日祝福网页，可以展示温馨的生日祝福、友情计时器和音乐播放等功能。

## 项目由来

最好的朋友生日时开发的网页，现在我想将这份温暖传递下去，于是选择开源，愿天下友谊地久天长！

## 功能特点 ✨

- 🎉 精美的生日祝福界面
- ⏰ 实时显示相识时间计数器
- 💝 可滑动的祝福消息卡片
- 🎵 背景音乐播放
- 🎊 点击按钮触发彩色碎纸屑特效
- 📱 完全响应式设计，支持各种设备

## 技术栈 🛠️

- HTML5
- CSS3 (动画、渐变、响应式设计)
- JavaScript (ES6+)
- 网易云音乐外链播放器

## 快速开始 🚀

1. 克隆项目到本地：
   ```bash
   git clone [项目地址]
   ```

2. 使用任意HTTP服务器运行项目，例如使用Python的简单HTTP服务器：
   ```bash
   python -m http.server
   ```

3. 在浏览器中访问：
   ```
   http://localhost:8000
   ```

## 自定义配置 ⚙️

### 修改祝福对象

在 `index.html` 中修改：
```html
<h1>xx生日快乐！</h1>  <!-- 修改xx为收礼者姓名 -->
```

### 修改相识时间

在 `script.js` 中修改：
```javascript
const startDate = new Date(2020, 7, 1); // 修改为你们相识时间
```

### 修改背景音乐

在 `index.html` 中找到 `music-player` 部分，修改网易云音乐外链播放器的 `id` 参数：
```html
src="//music.163.com/outchain/player?type=2&id=你的音乐ID&auto=1&height=66"
```

### 添加/修改祝福消息

在 `script.js` 中的 `messages` 数组中添加或修改消息：
```javascript
const messages = [
  {
    avatar: "😊",
    name: "消息发送者",
    text: "祝福内容",
    date: "2024.01.01"
  }
  // 可以添加更多消息
];
```

## 贡献 🤝

欢迎提交问题和功能需求！如果你想贡献代码：

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 许可证 📄

本项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解更多细节

## 预览 👀

[在线演示链接](https://qcaid.github.io/Birthday-Demo/)

![预览图片](https://github.com/Qcaid/Birthday-Demo/blob/343eadb867fcd67cb122af974fc2e3537de37c23/demo-img/img-01.png)
![预览图片](https://github.com/Qcaid/Birthday-Demo/blob/343eadb867fcd67cb122af974fc2e3537de37c23/demo-img/img-02.png)

## 联系方式 📮

如果你有任何问题或建议，欢迎联系我：

- 项目地址：[https://github.com/Qcaid/Birthday-Demo/]
- 电子邮件：[wwei50057@gmail.com]

---

如果这个项目对你有帮助，欢迎给个 ⭐️ Star！
