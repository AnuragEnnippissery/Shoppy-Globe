import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound.jsx'
import ProductList from './components/ProductList.jsx'
//import Cart from './components/Cart.jsx'
import ProductDetail from './components/ProductDetail.jsx'
//import CheckOut from './components/Checkout.jsx'
import { Provider} from 'react-redux'
import appStore from './utils/appStore.js'
import { lazy ,Suspense} from 'react'
import Checkout from './components/Checkout.jsx'

const Cart = lazy(() => import('./components/Cart.jsx'));
const CheckOut = lazy(()=> import('./components/Checkout.jsx'));
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<NotFound/>,
    children:[{
      path:'/',element: <ProductList/>
    },
    {
      path: '/Cart',element: (
          <Suspense fallback={<div>Loading Cart...</div>}>
            <Cart />
          </Suspense>
        ),
    },
    {
      path: '/Checkout',element: (
          <Suspense fallback={<div>Loading Cart...</div>}>
            <Checkout />
          </Suspense>
        ),
    },
    
    {
      path:'/ProductList/:id',element:<ProductDetail/>,
    }
  ],
  
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
        <RouterProvider router={appRouter}/>
    </Provider>
    
  
  </StrictMode>,
)
