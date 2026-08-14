import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./sections/Footer/Footer";

import Hero from "./sections/Hero/hero";
import Services from "./sections/Services/Services";
import Advantages from "./sections/Advantages/Advantages";
import Portfolio from "./pages/Portfolio";
import OrderSteps from "./sections/OrderSteps/OrderSteps";

import ProductDetail from "./pages/ProductDetail";


function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}


function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Advantages />
      <Portfolio />
      <OrderSteps />
    </>
  );
}


export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />


        <Route
          path="/produk/:slug"
          element={
            <>
              <Navbar />
              <main>
                <ProductDetail />
              </main>
            </>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}