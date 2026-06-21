<h1 align="center">🛍️ AyeshaMart - Premium E-Commerce Platform</h1>

<p align="center">
    A fully responsive, modern e-commerce web application featuring a minimalist Black & White design, global state management, and real-time product filtering.
</p>


<p align="center">
  🚀 Live Demo
</p>
<p align="center">
  <strong>🔗 <a href="https://ecom-ayeshamart.netlify.app" target="_blank">View Live Demo</a></strong>
</p>

<br />


<p align="center">
  <img width="600" height="500" alt="mock" src="https://github.com/user-attachments/assets/c4f07d36-97b3-4bc7-8547-d363db5cbe6b" />
</p>

---

## 📖 Project Overview

AyeshaMart is a sleek and modern eCommerce web application built with a focus on clean UI/UX, smooth animations, and real-world shopping experience. This project demonstrates product browsing, cart management, and responsive design using modern frontend technologies.

---

## ✨ Key Features & Functionality

### 🛒 Global Shopping Cart (Context API)
* Add, remove, and adjust the quantity of items.
* Automatic real-time Grand Total calculation.
* Cart data persists seamlessly across all pages without prop-drilling.
  <img width="1920" height="3220" alt="home" src="https://github.com/user-attachments/assets/a9951878-49c6-43f1-a28b-731f41463394" />


<!-- Drag and drop a GIF of you adding items to the cart here -->
<p align="center"><img width="800" height="366" alt="ecommerce" src="https://github.com/user-attachments/assets/e3418b87-2ff7-4dc2-bd2a-d83fbf311667" /></p>

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

| Home Page | All Products Page | Cart Page 
| :---: | :---: | :---: | :---: |
| [<img width="1920" height="3220" alt="home" src="https://github.com/user-attachments/assets/a9397e62-9d26-4379-9f58-fc99ff098661" />]
 | [<img width="1920" height="3907" alt="product" src="https://github.com/user-attachments/assets/374c2509-2209-4cb8-bbe1-ef1031c1d421" />
] | [<img width="1920" height="1399" alt="cart" src="https://github.com/user-attachments/assets/d87f0317-2ac4-4555-9156-46c572e004af" />]

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
git clone https://github.com/Ayesha-Saddique9/Ecommerce-AyeshaMart
```
**2.Navigate into the directory**
```bash
cd Ecommerce-AyeshaMart
```
**3. Install dependencies**
```bash
npm install
```
**4. Start the development server**
```bash
npm run dev
```
## 👩‍💻 Author

**Ayesha Saddique**  
Frontend Web Developer

🔗 GitHub: https://github.com/Ayesha-Saddique9

💼 LinkedIn: https://linkedin.com/in/ayesha-saddique9

📧 Email: ayeshasaddique70@gmail.com

⭐ If you found this project useful, consider giving it a star!

"Building logic, solving problems, and designing premium user experiences."
