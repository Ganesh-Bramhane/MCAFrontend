import { useEffect, useState } from "react";

function Timetable() {
  const [timetable, setTimetable] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDiv, setSelectedDiv] = useState("A");

  useEffect(() => {
    const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

    fetch(`${API_BASE}/api/timetable/division/${selectedDiv}`)
      .then((res) => res.json())
      .then((data) => {
        setTimetable(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching timetable:", err);
        setLoading(false);
      });
  }, [selectedDiv]);

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-10">
        Class Timetable
      </h1>

      {/* Division Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
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
          <p className="text-xl text-gray-600">Loading timetable...</p>
        </div>
      ) : timetable.length === 0 ? (
        <p className="text-center text-gray-600">No timetable found.</p>
      ) : (
        <div className="overflow-x-auto max-w-5xl mx-auto">
          <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-900 text-white text-left">
                <th className="p-3">Day</th>
                <th className="p-3">Time</th>
                <th className="p-3">Subject</th>
                <th className="p-3">Faculty</th>
                <th className="p-3">Type</th>
              </tr>
            </thead>
            <tbody>
              {timetable.map((entry) => (
                <tr
                  key={entry._id}
                  className="odd:bg-white even:bg-gray-100 hover:bg-yellow-50 transition"
                >
                  <td className="p-3 font-medium text-gray-800">{entry.day}</td>
                  <td className="p-3 text-gray-700">{entry.time}</td>
                  <td className="p-3 text-gray-700">{entry.subject}</td>
                  <td className="p-3 text-gray-700">{entry.faculty}</td>
                  <td className="p-3 text-gray-700 capitalize">{entry.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default Timetable;
