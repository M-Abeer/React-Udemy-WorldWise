import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import Notfound from "./pages/Notfound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import { useState, useEffect } from "react";

const App = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(function () {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:3001/cities");
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error!!!");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<CityList cities={cities} loading={loading} />}
            />
            <Route
              path="cities"
              element={<CityList cities={cities} loading={loading} />}
            />
            <Route
              path="countries"
              element={<CountryList cities={cities} loading={loading} />}
            />
            <Route path="form" element={<p>Form</p>} />
          </Route>
          <Route path="*" element={<Notfound />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
