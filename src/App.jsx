import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Cart from "./Cart.jsx";
import LandingPage from "./LandingPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Provider store={store}>

        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>


      </Provider>
    </div>
  );
}

export default App;
