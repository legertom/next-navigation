## Adding custom colors

In `tailwind.config.ts` you can define colors, like so:
```js
theme: {
    extend: {
      colors: {
        'jada-purple': '#9B5DE5',
        'jada-pink': '#FF5BB5',
        'jada-yellow': '#FEE440',
        'jada-blue': '#00BBF9',
        'jada-cyan': '#00F5D4',
      },
      //other things
    },
  },
  ```

After adding these to your config, you can use them in your Tailwind classes like this:

- For background color: `bg-jada-purple`, `bg-jada-pink`, etc.
- For text color: `text-jada-purple`, `text-jada-pink`, etc.
- For border color: `border-jada-purple`, `border-jada-pink`, etc.

**Example:**
```js
const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button 
            className="bg-jada-purple  text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-jada-pink transition-colors"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

```

Remember to restart your development server after making changes to `tailwind.config`.js to ensure that the new configuration is applied.

### Color Application Notes
Make sure to apply these colors to the `Navbar` and `Button` components (including hover). You can also at a `bg` color to the top-level `Page` component.


## Hero Card
A hero card is a component that is only shown at the top of the home page. 

- Add a `HeroCard.tsx` component in the `/components` directory.
- In the top-level `page.tsx` file, import the `HeroCard` component as well as the `usePathname` method from `next/navigation` and assign its value to a variable such as `pathname`.
- Add a conditional check if `pathname` is `/`, and the logcal AND operator `&&` so that if the pathname is the homepage/root directory, show if the `HeroCard` component. Pass the desired values to the `HeroCard` component.

```javascript
//in page.tsx
{pathname === '/' && (
        <HeroCard
          imageUrl="/path-to-image.jpg"
          imageAlt="Image Description"
          title="Hero Title"
          subtitle="Hero Subtitle"
          body="Hero body text"
        />
)}
```

## Turn off Navbar for the Dashboard
The Navbar component is currently set in the main layout.tsx file, so we'll need to turn that off when showing pages from the dashboard route. We can do this by importing `usePathname` (same process as the `HeroCard` above) and then including a line like this:
 `{!pathname.includes('/dashboard') && <Navbar />}`

## Display File Tree

In the root directory there is a small script called `displayFileTree.js` that I use to output a text-based file tree. I find this helpful in development when I get confused. You can run this from the root directory with the command `node displayFileTree.js` if you want to try it out. This script outputs a file called `fileTree.txt` into the root directory.

## Responsive Navbar
We need to make the Navbar component responsive. When viewed on a mobile device, we want a ion to appear that will dropdown a menu with our items.