import { useEffect, useState } from "react";

function Achievements() {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

    fetch(`${API_BASE}/api/achievements`)
      .then((res) => res.json())
      .then((data) => {
        setAchievements(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching achievements:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-10">
        Student Achievements 🏆
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-32">
          <p className="text-xl text-gray-600">Loading achievements...</p>
        </div>
      ) : achievements.length === 0 ? (
        <p className="text-center text-gray-600">No achievements found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((a) => (
            <div
              key={a._id}
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition"
            >
              <img
                src={a.photo || "/images/default.png"}
                alt={a.studentName}
                className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-blue-900 mb-4"
              />
              <h2 className="text-xl font-semibold text-blue-900">
                {a.studentName}
              </h2>
              <p className="text-gray-600 text-sm mb-2">Division {a.div}</p>
              <p className="text-gray-700">{a.achievement}</p>
              <p className="text-sm text-gray-500 mt-2">📅 {a.year}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Achievements;
