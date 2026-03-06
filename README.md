# New Clothes Project

A modern e-commerce application prototype featuring a smooth, design-focused user interface.

## 🚀 Features

- **Storefront**: Browse a curated list of fashion items and shoes.
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
- **Mock Data**: JSON-based server simulation in the `Server` directory.

## 📦 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 📂 Project Structure

- `src/main.js`: Core application logic and home page rendering.
- `src/pages/Cart/`: Cart page implementation (HTML, CSS, JS).
- `src/pages/Item-Details/`: Detailed product view logic.
- `src/assets/`: UI assets, including the "no-orders" graphic and offer banners.
- `Server/`: Contains `data.json` mock data.

---
Designed and developed for the New Clothes project.
