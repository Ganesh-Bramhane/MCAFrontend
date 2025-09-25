import { useEffect, useState } from "react";
import FacultyCard from "../components/FacultyCard";

function Faculty() {
  const [facultyList, setFacultyList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Use environment variable
    const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

    fetch(`${API_BASE}/api/faculty`)
      .then((res) => res.json())
      .then((data) => {
        setFacultyList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching faculty:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl text-gray-600">Loading faculty...</p>
      </div>
    );
  }

  return (
    <section className="py-16 px-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-10">
        Our Faculty
      </h1>

      {facultyList.length === 0 ? (
        <p className="text-center text-gray-600">No faculty found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {facultyList.map((faculty) => (
            <FacultyCard key={faculty._id} {...faculty} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Faculty;
