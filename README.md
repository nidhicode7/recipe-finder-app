# 🍽️ Recipe Finder App

**Live Demo**: [recipe-finder-app-gamma-eight.vercel.app](https://recipe-finder-app-gamma-eight.vercel.app)

## 📌 Overview

The **Recipe Finder App** is a web-based application that allows users to find recipes based on the ingredients they have at home. Simply type ingredients like `"egg, milk, tomato"` into the search bar and get a curated list of recipes you can make.

It’s fast, responsive, and built with modern web technologies. Ideal for home cooks, students, and anyone who wants to make the most out of the ingredients they already have.

---

## 💡 Features

- 🔍 **Ingredient-based search** – Enter one or more ingredients to get recipe suggestions.
- 📖 **Detailed recipe cards** – View recipe names, images, and instructions.
- ⚡ **Real-time fetch** – Instantly fetches recipes using a public API.
- 📱 **Responsive Design** – Works smoothly on mobile, tablet, and desktop.
- 🌐 **Deployed with Vercel** – Fast, reliable, and easy to access.

---

## 🛠️ Tech Stack

| Frontend | Backend/API | Deployment |
|----------|-------------|------------|
| `React` (with Vite) | [Spoonacular API](https://spoonacular.com/food-api) | `Vercel` |
| `HTML5`, `CSS3` | Public API (no backend server used) | Continuous deployment from GitHub |

---
---

## 🔧 Installation & Setup

To run this project locally, follow these steps:


**1.Clone repository**
git clone https://github.com/nidhicode7/recipe-finder-app.git
cd recipe-finder-app


### 2. Install dependencies**
npm install

**3. Add your API key**
This project uses the Spoonacular API.
Create a .env file in the root directory and add:
VITE_API_KEY=your_spoonacular_api_key_here
Replace your_spoonacular_api_key_here with your real API key.

**4. Run the app**
npm run dev
Open http://localhost:5173 in your browser.

**5. Deployment**

This app is continuously deployed using Vercel. Any push to the main branch automatically triggers a new deployment.



Made with love by Nidhishaa


