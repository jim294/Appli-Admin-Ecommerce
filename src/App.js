import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Resetpassword from "./pages/Resetpassword";
import Forgotpassword from "./pages/Forgotpassword";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard"
import Enquiries from "./pages/Enquiries";
import Bloglist from "./pages/Bloglist";
import Blogcatlist from "./pages/Blogcatlist";
import Orders from "./pages/Orders";
import Customers from "./pages/Customurs";
import Colorslist from "./pages/Colorlist";
import Categorylist from "./pages/Categorylist";
import Brandlist from "./pages/Brandlst";
import Productlist from "./pages/Productlist";
import Addblog from "./pages/Addblog.js";
import Addblogcat from "./pages/Addblogcat.js";
import Addcolor from "./pages/Addcolor.js";
import Addcat from "./pages/Addcat.js";
import Addbrand from "./pages/Addbrand.js";
import Addproduct from "./pages/Addproduct.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard/>} />
          <Route path="enquiries" element={<Enquiries/>} />
          <Route path="blog-list" element={<Bloglist/>} />
          <Route path="blog" element={<Addblog/>} />
          <Route path="blog-category-list" element={<Blogcatlist/>} />
          <Route path="blog-category" element={<Addblogcat/>} />

          <Route path="orders" element={<Orders/>} />
          <Route path="customers" element={<Customers/>} />
          <Route path="list-color" element={<Colorslist/>} />
          <Route path="color" element={<Addcolor/>} />
          <Route path="list-category" element={<Categorylist/>} />
          <Route path="category" element={<Addcat/>} />
          <Route path="list-brand" element={<Brandlist/>} />
          <Route path="brand" element={<Addbrand/>} />
          <Route path="list-product" element={<Productlist/>} />
          <Route path="product" element={<Addproduct/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
