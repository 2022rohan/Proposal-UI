# 💝 Valentine's Day Proposal

A beautiful, interactive Valentine's Day proposal website with a playful twist! Perfect for expressing your love in a fun and memorable way.

![Valentine's Day Proposal](https://img.shields.io/badge/Made%20With-Love-ff69b4?style=for-the-badge)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🌹 About

This is a fun frontend project created to help friends express their love to their partners in a unique and interactive way. The website features a beautiful, dreamy design with a playful "escaping No button" that makes it nearly impossible to decline! 

## ✨ Features

- 🎨 **Premium Design**: Elegant typography, soft gradients, and dreamy pink aesthetics
- 💫 **Interactive Animations**: Floating hearts, smooth transitions, and delightful micro-interactions
- 🎯 **Playful Logic**: The "No" button escapes when you try to click it
- 🎊 **Celebration**: Beautiful confetti animation when "Yes" is clicked
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- 💕 **Personalization**: Add your partner's name via URL parameter
- 🚀 **Performance Optimized**: Fast loading and smooth animations

## 🎁 Personalization Feature

You can personalize the proposal by adding your partner's name to the URL using the `name` query parameter!

### Example Usage:

```
https://your-website.com/?name=Sarah
```

This will display: **"Sarah, Will You Be My Valentine?"**

### More Examples:

- `https://your-website.com/?name=Emily` → "Emily, Will You Be My Valentine?"
- `https://your-website.com/?name=Jessica` → "Jessica, Will You Be My Valentine?"
- `https://your-website.com/?name=Michael` → "Michael, Will You Be My Valentine?"

Just replace `Sarah` with your partner's name, and the website will automatically personalize the message! 💖

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/valentine-proposal.git
cd valentine-proposal
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🎨 Tech Stack

- **React.js** - UI library
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server
- **Custom SVG** - Hand-crafted heart illustrations
- **Google Fonts** - Cormorant Garamond for elegant typography

## 📁 Project Structure

```
valentine-proposal/
├── public/
├── src/
│   ├── components/
│   │   └── ValentineProposal.jsx    # Main component
│   ├── App.jsx                       # App entry point
│   ├── main.jsx                      # React DOM render
│   └── index.css                     # Global styles with Tailwind
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🎭 How It Works

1. **Landing Page**: Beautiful animated background with floating hearts
2. **The Question**: "Will You Be My Valentine?" displayed elegantly
3. **Two Buttons**: 
   - **"Yes, I Will"** - Leads to celebration 🎉
   - **"Perhaps Not"** - Escapes when you hover/touch it! 😄
4. **The Catch**: The "No" button moves away every time you try to click it
5. **Success**: When "Yes" is clicked, a beautiful celebration screen appears with confetti

## 💡 Customization

### Change Colors

Edit the gradient colors in `ValentineProposal.jsx`:

```jsx
// Background gradient
<div className="bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">

// Button gradient
<div className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500">
```

### Change Typography

Update the font import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your-Font-Here&display=swap" rel="stylesheet">
```

### Adjust Animation Speed

Modify animation durations in the `<style jsx>` section:

```css
@keyframes float-1 {
  /* Change timing here */
  animation: float-1 15s ease-in-out infinite;
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to Netlify

1. Run `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

### Deploy to GitHub Pages

```bash
npm run build
# Follow GitHub Pages deployment instructions
```

## 🎉 Usage Tips

1. **Share the personalized link** with your partner's name
2. **Best viewed on desktop** for the full experience (but works great on mobile too!)
3. **Make sure they have sound on** for the best experience
4. **Share it in a romantic context** - maybe over a candlelit dinner? 🕯️

## 🤝 Contributing

This is a fun personal project, but if you have ideas to make it even better:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💝 Show Your Love

If this helped you express your love or made someone smile:

- ⭐ Star this repository
- 🔄 Share it with friends
- 💌 Let me know your success story!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Thanks to all my friends who inspired this project
- Special thanks to everyone celebrating love!
- Built with ❤️ for spreading joy

## 📧 Contact

Have questions or want to share your story? Feel free to reach out!

- GitHub: [@2022rohan](https://github.com/2022rohan)
- 

---

<div align="center">

**Made with 💖 for spreading love and joy**

*Remember: The best valentine is one who makes you smile every day!*

</div>
