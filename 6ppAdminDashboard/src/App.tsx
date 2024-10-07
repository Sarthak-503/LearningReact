import { BrowserRouter as Router, Routes, Route   } from 'react-router-dom'
import { lazy, Suspense } from 'react'
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Customers = lazy(() => import("./pages/Customers"));
import Loader from './components/Loader';
const App = () => {
  return (
    <>
      <Router>
       <Suspense fallback={<Loader/>}>
       <Routes>
          <Route path='/admin/dashboard' element={<Dashboard/>}/>
          <Route path='/admin/customers' element={<Customers/>}/>
          <Route path='/admin/products' element={<Products/>}/>
          <Route path='/admin/transaction' element={<Transactions/>}/>

          {/* Charts  */}


          {/* Apps  */}


          
        </Routes>
       </Suspense>
      </Router>
    </>
  )
}

export default App
// 2 Hr Done 