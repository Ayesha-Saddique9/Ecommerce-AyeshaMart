<h1 align="center">🛍️ AyeshaMart - Premium E-Commerce Platform</h1>

<p align="center">
  A fully responsive, modern e-commerce web application featuring a minimalist Black & White design, global state management, and real-time product filtering.
</p>

<p align="center">
  <strong>🔗 <a href="[Insert Your Netlify Live Link Here]" target="_blank">View Live Demo</a></strong>
</p>

<br />

<p align="center">
  <!-- Drag and drop your Laptop/Mobile Mockup Image here -->
  [Insert Hero Mockup Image Here]
</p>

---

## 📖 Project Overview

AyeshaMart is a complete front-end E-Commerce application designed to replicate the premium feel of high-end fashion and tech brands (like Zara or Apple). Built to demonstrate advanced React concepts, the application handles complex JavaScript logic including dynamic routing, real-time search/filtering, and a fully functional shopping cart using the Context API.

---

## ✨ Key Features & Functionality

### 🛒 Global Shopping Cart (Context API)
* Add, remove, and adjust the quantity of items.
* Automatic real-time Grand Total calculation.
* Cart data persists seamlessly across all pages without prop-drilling.

<!-- Drag and drop a GIF of you adding items to the cart here -->
<p align="center">[Insert Cart GIF Here]</p>

### 🔍 Dynamic Search, Sort & Filter
* Users can search for products by name via the Navbar.
* Category filtering and Price sorting (Low-to-High / High-to-Low) using optimized JavaScript array methods (`.filter`, `.sort`).

### 📱 100% Mobile Responsive Layout
* Mobile-first design using Tailwind CSS.
* Features a custom Mobile Hamburger Menu and a 2x2 responsive category grid.

### 💳 Interactive Checkout & Empty States
* Split-screen checkout form with required field validation.
* Custom 404 "Page Not Found" screen and empty cart/empty search UI states.
* Smooth page transitions and hover effects powered by Framer Motion.

---

## 📸 Full Page Screenshots

| Home Page | All Products Page | Product Details | Checkout Form |
| :---: | :---: | :---: | :---: |
| [Insert Home Screenshot] | [Insert Products Screenshot] | [Insert Details Screenshot] | [Insert Checkout Screenshot] |

---

## 🛠️ Tech Stack Used

* **Core:** React.js (Vite)
* **Routing:** React Router DOM (Dynamic Routing & `useSearchParams`)
* **State Management:** React Context API & `useContext`
* **Styling:** Tailwind CSS (Custom Flexbox/Grid layouts)
* **Animations:** Framer Motion
* **Icons:** React Icons
* **Data Fetching:** Fetch API with `async/await` (Connected to FakeStoreAPI)
* **Deployment:** Netlify

---

## 🧠 What I Learned

Building this project from scratch was a massive leap in my journey to becoming a Full-Stack MERN Developer. Key takeaways include:

1. **Advanced State Management:** Transitioning from local `useState` to a global `CartContext`, allowing complex data to be shared instantly across the entire application.
2. **JavaScript Logic:** Moving beyond UI to write raw JS logic. I learned how to safely mutate arrays in React, handle asynchronous try/catch error states, and chain `.filter()` and `.sort()` methods to manipulate data before rendering.
3. **UI/UX Principles:** Understanding how color hierarchy, "breathing room" (padding), and smooth animations (Framer Motion) turn a basic website into a premium, user-friendly product.
4. **Debugging & Deployment:** Fixing CSS layout traps (like the flexbox "sandwich"), handling Vite asset deployment in the `public` folder, and configuring Netlify redirects.

---

## 🚀 How to Run the Project Locally

If you would like to run this project on your local machine, follow these steps:

**1. Clone the repository**
```bash
git clone [Insert Your GitHub Repo Link Here]
