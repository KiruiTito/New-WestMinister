// Import your components
import React from "react";
import "./index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "./pages/home";
import Newsletters from "./pages/newsletters/newsletters";
import Newsletter from "./pages/newsletter/newsletter";
import AboutPage from "./pages/about/about"; // Import the AboutPage component
import Church from "./pages/church/church";
import Contact from "./pages/contact/contact";
import PageNotFound from "./pages/404/page_not_found";
import Meta from "./components/meta/meta";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import About from "./assets/header.json"; // Import the Association data
// Create the root and render the application
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Meta />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/newsletter" element={<Newsletters />} />
        <Route exact path="/newsletter/:id" element={<Newsletter />} />
        {/* Updated route for AboutPage */}
        <Route
          exact
          path="/about"
          element={<AboutPage aboutData={About} />} // Pass the Association data as a prop
        />
        <Route exact path="/church" element={<Church />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/404" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
