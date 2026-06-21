<h1 align="center">🛍️ AyeshaMart - Premium E-Commerce Platform</h1>

<p align="center">
  A fully responsive, modern e-commerce web app built with a minimalist Black & White UI, global state management, and real-time product filtering. Designed for speed, clarity, and premium shopping experience.
</p>

<p align="center">
  <a href="https://ecom-ayeshamart.netlify.app" target="_blank">
    <img src="https://img.shields.io/badge/Live_Demo-000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo"/>
  </a>
</p>

<p align="center">
  <strong>🔗 <a href="https://ecom-ayeshamart.netlify.app" target="_blank">View Live Demo →</a></strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion"/>
</p>

<br/>

<p align="center">
  <img width="900" alt="AyeshaMart Responsive Mockup" src="https://github.com/user-attachments/assets/c4f07d36-97b3-4bc7-8547-d363db5cbe6b" />
</p>
<p align="center"><sub>Responsive mockup showing Desktop + Mobile views</sub></p>

---

## 📖 Project Overview

**AyeshaMart** is a sleek, production-ready eCommerce frontend built to replicate a real-world shopping experience. Focused on clean UI/UX, micro-interactions, and performance, it delivers fast product browsing, cart management, and checkout flows across all devices.

Built mobile-first with Tailwind CSS and powered by React Context + Framer Motion for fluid state and animations.

---

## ✨ Key Features

### 🛒 Global Shopping Cart
Real-time cart powered by React Context API. No prop-drilling, instant sync across pages.
- Add / Remove / Update quantity
- Auto Grand Total calculation 
- Persistent state across routes
<p align="center">
  <img width="800" alt="Cart in Action" src="https://github.com/user-attachments/assets/e3418b87-2ff7-4dc2-bd2a-d83fbf311667" />
</p>

### 🔍 Smart Search, Sort & Filter
Lightning-fast product discovery with optimized JS.
- Live search via Navbar 
- Category filtering
- Price sort: Low-to-High / High-to-Low using `.filter()` + `.sort()`

### 📱 Mobile-First Responsive Design
Tailwind CSS + custom hamburger menu + adaptive grids.
- 2x2 category grid on mobile
- Fluid layouts from 320px to 4K screens
<p align="center">
  <img width="900" alt="Homepage Full View" src="https://github.com/user-attachments/assets/a9951878-49c6-43f1-a28b-731f41463394" />
</p>

### 💳 Checkout + Empty States
Split-screen checkout with form validation. Thoughtful UX for edge cases.
- Required field validation
- Custom 404 page
- Empty cart & empty search states
- Smooth transitions with Framer Motion

---

## 📸 Full Page Screenshots

<table>
  <tr>
    <td align="center"><b>Homepage</b></td>
    <td align="center"><b>All Products</b></td>
    <td align="center"><b>Cart Page</b></td>
  </tr>
  <tr>
    <td><img width="400" alt="Home Page" src="https://github.com/user-attachments/assets/a9397e62-9d26-4379-9f58-fc99ff098661" /></td>
    <td><img width="400" alt="Products Page" src="https://github.com/user-attachments/assets/374c2509-2209-4cb8-bbe1-ef1031c1d421" /></td>
    <td><img width="400" alt="Cart Page" src="https://github.com/user-attachments/assets/d87f0317-2ac4-4555-9156-46c572e004af" /></td>
  </tr>
</table>

---

## 🛠️ Tech Stack

- **Core:** React.js + Vite
- **Routing:** React Router DOM with `useSearchParams` for dynamic URLs
- **State Management:** React Context API + `useContext`
- **Styling:** Tailwind CSS with custom Flexbox/Grid
- **Animations:** Framer Motion for page transitions & micro-interactions
- **Icons:** React Icons
- **API:** Fetch API + `async/await` with FakeStoreAPI
- **Deployment:** Netlify

---

## 🧠 What I Learned

Building this from scratch was a massive step in my journey to becoming a Full-Stack MERN Developer:

1. **Advanced State Management:** Moved from local `useState` to global `CartContext` for instant data sharing across the app.
2. **JavaScript Logic:** Wrote safe array mutations, handled async `try/catch`, and chained `.filter()` + `.sort()` for dynamic product lists.
3. **UI/UX Principles:** Applied color hierarchy, proper padding/"breathing room", and smooth animations to turn a basic site into a premium product.
4. **Debugging & Deployment:** Fixed CSS layout issues, configured Vite assets in `public`, and set up Netlify redirects for SPA routing.

---

## 🚀 Run Locally

**1. Clone the repository**
```bash
git clone https://github.com/Ayesha-Saddique9/Ecommerce-AyeshaMart
