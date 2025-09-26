import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Faculty from "./pages/Faculty";
import Students from "./pages/Students";
import Timetable from "./pages/Timetable";
import Notices from "./pages/Notices";
import Achievements from "./pages/Achievements";
import Developers from "./pages/Developers";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/students" element={<Students />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
