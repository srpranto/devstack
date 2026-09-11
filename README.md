# Dev Stack

A modern, responsive web application built with React, Vite, TypeScript, and Tailwind CSS. Dev Stack helps developers explore curated technologies across Frontend, Backend, Database, Languages, Styling, and DevOps to design and compare their ideal development stack.

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

**Answer:** JSX stands for JavaScript XML. It is a syntax extension that lets us write HTML-like elements and templates directly inside JavaScript files. JSX is used in React because it makes component code clean, intuitive, and readable while allowing the full power of JavaScript expressions inside curly braces `{ }`.

### 2. What is the difference between props and state?

**Answer:**

- **Props:** External, read-only data passed down from a parent component to a child component. The receiving child cannot modify props.
- **State:** Internal, mutable data managed within the component itself. Updating state causes the component and its children to re-render.

### 3. What does the useState hook do, and where did you use it in this project?

**Answer:** The `useState` hook declares a reactive state variable and provides a setter function to update it. In this project, `useState` was used in:

- `src/App.tsx` to store the list of technologies (`technologies`), the user's selected technologies (`stack`), and the loading boolean state.
- `src/components/Navbar.tsx` to manage the mobile hamburger menu open/close toggle state (`isOpen`).

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

**Answer:** `useEffect` handles side effects like data fetching, DOM updates, or subscriptions outside the rendering flow. In this project, `useEffect` was needed in `src/App.tsx` with an empty dependency array `[]` to fetch `/technologies.json` once when the application mounts, avoiding infinite fetch loops during renders.

### 5. Why does every item in a .map() list need a unique key prop?

**Answer:** React uses the `key` prop during its Virtual DOM diffing process to identify which list items have changed, been added, or been removed. Unique keys ensure efficient rendering, maintain correct component state, and prevent UI bugs when list items are added or removed.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

**Answer:** Conditional rendering means rendering different UI elements or components based on specific conditions or state. In this project, conditional rendering was used in `src/components/YourStack.tsx`: When `stack.length === 0`, it displays a dashed container with the message `"Your stack is empty."`. When `stack.length > 0`, it instead renders the list of selected technology cards along with the `"Remove All"` button.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Answer:**

- **Parent to child:** The parent passes data down through props (e.g., `App.tsx` passes `tech={tech}` and `isAdded={...}` to `TechCard.tsx`).
- **Child to parent:** The parent passes a callback function as a prop (e.g., `onAdd={handleAddToStack}`). When an event occurs (such as clicking the button), the child invokes that callback function with the necessary arguments, passing data back up to the parent.
