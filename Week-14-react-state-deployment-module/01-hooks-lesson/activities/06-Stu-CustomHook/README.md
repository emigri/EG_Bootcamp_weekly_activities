# useEffect

In this activity, we will practice using custom Hooks by creating a `useDebounce` Hook that will delay the invoking of a function for a given number of milliseconds.

## Instructions

* Replace your React application's src folder with [starter/src](starter/src).

* If you created a new React app, you will need to install Axios, React Router, and Bootstrap.

* Start the application in dev mode by running `npm run dev` in your terminal.

* Open your browser to [localhost:5173](http://localhost:5173) and study the rendered application.

* Update this application to accomplish the following:

* Create a new custom Hook called `useDebounce` that takes in the two parameters `value` and `delay`.

* Use `setTimeout` to handle the value of the debouncer.

* Update the `Search` page so that the `useEffect` Hook is listening for the value returned from the `useDebounce` Hook. Pass in a `delay` value of 500.

* The finished application should only search for a new article if there has been a period of 500 milliseconds without any user input.

---

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
