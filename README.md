# Dev Stack

A modern, responsive web application built with React, Vite, TypeScript, and Tailwind CSS. Dev Stack helps developers explore curated technologies across Frontend, Backend, Database, Languages, Styling, and DevOps to design and compare their ideal development stack.

🔗 **Live Site:** [devstack-shahil.vercel.app](https://devstack-shahil.vercel.app)

---

## 🛠️ Technologies Used

- **Framework:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 & daisyUI v5
- **Notifications:** React-Toastify
- **Build Tool:** Vite 8
- **Data Source:** Dynamic JSON (`/technologies.json`)
- **Icons:** Skill Icons

---

## 🚀 Key Features

1. **Dynamic Technology Catalog**
   - 12 real-world technologies fetched dynamically via `useEffect` from a local JSON endpoint, displaying category chips, ratings, and difficulty badges.

2. **Interactive "Your Stack" Builder with Validation**
   - Select technologies to assemble a custom stack in a dedicated sidebar.
   - Built-in duplicate prevention alerts users if a technology has already been chosen.
   - Remove individual technologies or clear the entire stack with a single click.

3. **Smooth, Responsive UI with Aesthetic Notifications**
   - Pixel-perfect layout inspired by modern design standards, responsive across mobile, tablet, and desktop screens.
   - Custom-themed React-Toastify alerts utilizing a unified brand gradient (`#22d3ee` → `#8b5cf6` → `#ec4899`) with smooth slide transitions and in-page anchor scrolling.

---

## 💡 React Core Questions & Answers

### 1. What is JSX, and why is it used in React?

**Answer:** JSX lets us write HTML-like code inside JavaScript. We use it in React because it makes the UI code easier to write and understand.

### 2. What is the difference between props and state?

**Answer:** Props are data passed from a parent component to a child component. State is data that a component manages and can change when something happens.

### 3. What does the useState hook do, and where did you use it in this project?

**Answer:** `useState` lets us create and update data inside a component. I used it in `App.tsx` for the technologies, selected stack, and loading state. I also used it in `Navbar.tsx` for the mobile menu state and active section tracking.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

**Answer:** `useEffect` is used when we need to do something after the component renders. I used it in `App.tsx` to load the technology data from the JSON file when the app starts.

### 5. Why does every item in a .map() list need a unique key prop?

**Answer:** React uses the key to know which item is which when the list changes. A unique key helps React update the right item without unnecessary changes.

### 6. What is conditional rendering? Show one place you used it.

**Answer:** Conditional rendering means showing different UI based on a condition. In this project, I used it in `YourStack.tsx`. When the stack is empty, it shows "Your stack is empty." Otherwise, it shows the selected technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Answer:** A parent sends data to a child through props. A child can send something back by calling a function that the parent passed as a prop. In this project, `App.tsx` passes data and functions to components like `TechCard.tsx`.
