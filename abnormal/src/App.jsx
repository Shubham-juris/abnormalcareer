import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Common/Navbar";
import Hero from "./Home/Hero";
import Services from "./Home/Services";
import About from "./About/about";
import Contact from "./Contact/Contact";
import Footer from "./Common/Footer";
import Register from "./Register/Register";
import BestCompanies from "./Home/BestCompanies";
import AllCompanies from "./Home/Allcompanies";
import PopularJobs from "./Home/PopularJobs";
import AllJobsPage from "./Home/AllJobsPage";

function App() {
  return (
    <Router>
      <Navbar />
      
      <div className="pt-20">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <PopularJobs/>
                <BestCompanies/>
                
                <Services />
                
              </>
            }
          />
           <Route path="/jobs" element={<AllJobsPage />} />
          <Route path="/companies" element={<AllCompanies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          {/* Optional route for future */}
          <Route path="*" element={<div>404 - Not Found</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
