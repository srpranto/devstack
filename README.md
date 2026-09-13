# Dev Stack

Dev Stack is an interactive web app for exploring different technologies and building a custom tech stack. You can browse technologies from Frontend, Backend, Database, Languages, Styling, and DevOps, check their ratings and difficulty, and add the ones you want to your own stack.

🔗 **Live Site:** [https://devstack-shahil.vercel.app](https://devstack-shahil.vercel.app/)

## 🛠️ Technologies Used

- React 19
- TypeScript
- Vite 8
- Tailwind CSS v4
- daisyUI v5
- React Toastify
- Local JSON data (`/technologies.json`)
- [TechIcons](https://techicons.dev/)

## 🚀 Key Features

### Dynamic Technology Catalog

The app loads technology data from `/technologies.json` when it starts. Each technology shows details such as its category, rating, and difficulty level.

### Build Your Own Stack

You can add technologies to **Your Stack**, remove them one by one, or clear the whole stack. The app also checks for duplicate technologies and shows a notification if you try to add one again.

### Responsive and Interactive UI

The layout works across mobile, tablet, and desktop screens. It also includes smooth scrolling and React Toastify notifications for different actions.

## 💡 React Core Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is basically what lets me write HTML like code inside my JavaScript or TypeScript. I use it in my React components because it feels much easier to build and read the UI this way.

For example, this is JSX from `TechCard.tsx`:

```tsx
<h3 className="text-base font-bold text-slate-900 mt-4">{name}</h3>
```

Here, `{name}` is a JavaScript value being used directly inside the JSX.

---

### 2. What is the difference between props and state?

The easiest way I understood this is that props are used to pass something into a component, while state is used when the component needs to keep track of something that can change.

In my project, `tech` is passed to `TechCard` as a prop. The `stack`, on the other hand, is kept as state inside `App.tsx`.

| Props                                 | State                      |
| :------------------------------------ | :------------------------- |
| Passed from a parent                  | Managed inside a component |
| Used to pass data                     | Used for changing data     |
| The child does not directly change it | Updated with a setter      |

---

### 3. What does the `useState` hook do, and where did you use it in this project?

I use `useState` when I need React to remember a value and update the UI when that value changes.

In `App.tsx`, I used it for the technology list, the user's selected stack, and the loading state:

```tsx
const [technologies, setTechnologies] = useState<Technology[]>([]);
const [stack, setStack] = useState<Technology[]>([]);
const [loading, setLoading] = useState(true);
```

I also used it in `Navbar.tsx` for the mobile menu:

```tsx
const [isOpen, setIsOpen] = useState(false);
```

So when the user adds something to the stack, or opens the mobile menu, the state changes and React updates that part of the UI.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

I think of `useEffect` as a way to run something after React renders. In this project, I needed it because the technology data has to be fetched from the JSON file when the app starts.

```tsx
useEffect(() => {
  fetch("/technologies.json")
    .then((res) => res.json())
    .then((data: Technology[]) => {
      setTechnologies(data);
      setLoading(false);
    })
    .catch(() => {
      setLoading(false);
      toast.error("Failed to load technologies data.");
    });
}, []);
```

The `[]` tells React that this effect does not depend on any changing value, so it runs when the component first mounts. I would not put the `fetch()` directly inside the component body because that would run during renders.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The key is how React keeps track of the items in a list. When something changes, React can use the key to figure out which item was added, removed, or changed.

In my project, every technology already has a unique `id`, so I use that:

```tsx
{
  technologies.map((tech) => (
    <TechCard
      key={tech.id}
      tech={tech}
      onAdd={handleAddToStack}
      isAdded={stack.find((item) => item.id === tech.id) !== undefined}
    />
  ));
}
```

Using a proper key also helps React keep the correct item identity when the list updates.

---

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

For me, conditional rendering means showing different parts of the UI depending on what is happening.

I used it in `YourStack.tsx`. When the user has not added anything yet, I show the empty stack message:

```tsx
{stack.length === 0 ? (
  <div>
    <span>Your stack is empty.</span>
  </div>
) : (
  <div>
    {stack.map((item) => (
      // selected technologies
    ))}
  </div>
)}
```

So basically, an empty stack shows "Your stack is empty." and once something is added, that message is replaced with the selected technologies.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

I pass data from the parent to the child using props. In my project, `App.tsx` gives `TechCard.tsx` the technology data and also a function for adding that technology to the stack.

```tsx
const handleAddToStack = (tech: Technology) => {
  setStack([...stack, tech]);
};

<TechCard
  tech={tech}
  onAdd={handleAddToStack}
  isAdded={...}
/>
```

Then `TechCard` can call the function when the user clicks the button:

```tsx
<button onClick={() => onAdd(tech)}>Add to Stack</button>
```

So the parent sends the data and function down through props, and the child can communicate back by calling that function.
