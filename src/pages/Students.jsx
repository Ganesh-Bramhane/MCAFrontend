import { useEffect, useState } from "react";
import StudentCard from "../components/StudentCard";

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDiv, setSelectedDiv] = useState("A");

  useEffect(() => {
    const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

    fetch(`${API_BASE}/api/students/division/${selectedDiv}`)
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching students:", err);
        setLoading(false);
      });
  }, [selectedDiv]);

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-10">
        Students & GFM Allocation
      </h1>

      {/* Division Tabs */}
      <div className="flex justify-center space-x-4 mb-10">
        {["A", "B", "C"].map((div) => (
          <button
            key={div}
            onClick={() => {
              setSelectedDiv(div);
              setLoading(true);
            }}
            className={`px-5 py-2 rounded-lg shadow font-medium ${
              selectedDiv === div
                ? "bg-blue-700 text-white"
                : "bg-white text-blue-700 border border-blue-700"
            }`}
          >
            Division {div}
          </button>
        ))}
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <p className="text-xl text-gray-600">Loading students...</p>
        </div>
      ) : students.length === 0 ? (
        <p className="text-center text-gray-600">No students found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {students.map((s) => (
            <StudentCard key={s._id} {...s} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Students;
