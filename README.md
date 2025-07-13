# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
## Application
In this application we can search for the products from the list of products on the home screen.
When you click on any product , you are able to see the product description.
There is an add to cart button which adds the product to the cart .
In Cart page you can add the quantity ,decrease the quantity or can also remove the product from the cart.
In Checkout Page you will be able to see the final total of all the products you selected.
The data for the products is fetched through an api and is stored in a custom hook which is used in this application.
