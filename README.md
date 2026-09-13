# Dev Stack

A small project for exploring different technologies and putting together a custom development stack.

You can look through Frontend, Backend, Database, Languages, Styling, and DevOps technologies, check their ratings and difficulty, and add the ones you want to your own stack.

🔗 [Live Site](https://devstack-shahil.vercel.app)

## What I used

- React 19
- TypeScript
- Vite 8
- Tailwind CSS v4
- daisyUI v5
- React Toastify
- [TechIcons](https://techicons.dev/)
- Local JSON data from `/technologies.json`

## Things you can do

**Explore technologies**

The app loads the technology data from the JSON file and shows useful details like category, rating, and difficulty.

**Build a stack**

Pick the technologies you want and add them to **Your Stack**. You can remove them one by one or clear the whole stack. Trying to add something twice shows a notification instead.

**Use it on different screens**

The layout is responsive, so the app works on mobile, tablet, and desktop. There are also toast notifications and smooth scrolling for a few interactions.

## React questions

### 1. JSX

JSX lets us write HTML like elements inside JavaScript. I find it easier to read than creating the same UI with plain JavaScript.

### 2. Props and state

Props come from a parent component and are mainly used to pass data down.

State belongs to the component itself and can change while the app is running.

### 3. `useState`

`useState` is what I used whenever the UI needed to remember something that could change.

In this project, `App.tsx` uses it for the technology list, selected stack, and loading state. `Navbar.tsx` uses it for the mobile menu.

### 4. `useEffect`

`useEffect` is useful for work that should happen after rendering.

I used it in `App.tsx` to fetch `/technologies.json` when the app loads. Without it, I would be trying to fetch the data as part of the normal render.

### 5. Why `key` in `.map()`?

React needs a way to tell list items apart. A unique `key` helps it understand which item changed, was added, or was removed.

### 6. Conditional rendering

It simply means showing something only when a certain condition is true.

For example, in `YourStack.tsx`, an empty stack shows:

> Your stack is empty.

Once something is added, that message is replaced by the selected technologies.

### 7. Parent and child components

A parent can send data to a child through props.

For the other direction, the parent can give the child a function. The child calls that function when something happens. In my project, `App.tsx` passes data and functions to components such as `TechCard.tsx`.

## A few things I learned

This project helped me get more comfortable with React state, props, hooks, component communication, fetching JSON data, and handling UI changes based on state.