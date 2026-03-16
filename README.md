# E-commerce Demo

A modern, responsive e-commerce application prototype featuring a smooth, design-focused user interface for a fashion storefront.

## 🚀 Features

- **Storefront**: Browse a curated list of fashion items and shoes.
- **User Authentication**: Complete Login and Sign Up flows with client-side validation.
- **Product Details**: Detailed item views with interactive color and size selection.
- **Dynamic Cart**: 
  - Real-time cart management using `localStorage`.
  - Ability to choose and update color/size directly within the cart.
  - Automatic merging of identical items with different quantities.
  - Smooth quantity controls (increment, decrement, or remove).
- **Order Flow**: Complete the purchase to see the "Order Confirmed" design.
- **Empty States**: High-quality "No orders" visual state when the cart is empty.
- **Notifications**: Custom-designed toast notifications for "Added to Cart" feedback.
- **Responsive Header**: Consistent navigation and user profile section across all pages.

## 🛠️ Technology Stack

- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3.
- **Icons**: [Lucide](https://lucide.dev/).
- **Fonts**: Roboto and Inter via Google Fonts.
- **Build Tool**: [Vite](https://vitejs.dev/).
- **Package Manager**: [Bun](https://bun.sh/).

## 📦 Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh/) installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ahmed5Emad/E-commerce-Demo.git
   cd E-commerce-Demo
   ```

2. **Install Dependencies**:
   ```bash
   bun install
   ```

3. **Run Development Server**:
   ```bash
   bun run dev
   ```

4. **Build for Production**:
   ```bash
   bun run build
   ```

## 🚀 Deployment

The project is configured for easy deployment to GitHub Pages using the `gh-pages` package.

To deploy the latest version:
```bash
bun run deploy
```

## 📂 Project Structure

- `index.html`: Entry point of the application.
- `src/main.js`: Core application logic and home page rendering.
- `src/pages/Cart/`: Cart page implementation (HTML, CSS, JS).
- `src/pages/Item-Details/`: Detailed product view logic.
- `src/pages/Login/`: User login page.
- `src/pages/Signup/`: User registration page.
- `public/data.json`: Mock product data used by the application.
- `public/assets/`: UI assets, including the "no-orders" graphic and offer banners.

---
Designed and developed as part of the E-commerce Demo project.
