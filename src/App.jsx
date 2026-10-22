import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/nav';
import Footer from './components/footer';
import {Cart as CartProvider} from './components/CartP';
import CartDrawer from './components/CartD';

const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const Cart = lazy(() => import('./pages/Cart'));
const Care = lazy(() => import('./pages/Care'));
const Lookbook = lazy(() => import('./pages/Lookbook'));
const Menu = lazy(() => import('./pages/Menu'));

function AppLayout() {
  const location = useLocation();
  const isMenuPage = location.pathname === '/menu';

  return (
    <>
      {!isMenuPage && <NavBar />}
      <CartDrawer />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/care" element={<Care />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Suspense>
      {!isMenuPage && <Footer />}
    </>
  );
}

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
