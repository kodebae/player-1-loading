import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './common/ThemeContext.jsx'

// Hidden watermark 🎮
console.log("%c👾 Portfolio by Player 1 – karmendurbin.dev", "color: #ff6b9d; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px rgba(255, 107, 157, 0.5);");
console.log("%c🎮 Built with React + Vite + Framer Motion", "color: #00d9ff; font-size: 14px;");
console.log("%c⚡ E Rank → S Rank progression system", "color: #b388ff; font-size: 14px;");
console.log("%c🏆 Designed & Developed by Karmen Durbin", "color: #ffd700; font-size: 14px; font-weight: bold;");
console.log("%c\n🚫 Unauthorized copying is not cool. Build your own epic portfolio! 🚫\n", "color: #ff6b9d; font-size: 12px; font-weight: bold;");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)