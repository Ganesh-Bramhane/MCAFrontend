import { useEffect, useState } from "react";

function Notices() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

    fetch(`${API_BASE}/api/notices`)
      .then((res) => res.json())
      .then((data) => {
        setNotices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching notices:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-10">
        Notices & Announcements
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-32">
          <p className="text-xl text-gray-600">Loading notices...</p>
        </div>
      ) : notices.length === 0 ? (
        <p className="text-center text-gray-600">No notices found.</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {notices.map((n) => (
            <div
              key={n._id}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-semibold text-blue-900 mb-2">
                {n.title}
              </h2>
              <p className="text-gray-700">{n.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                📅 {new Date(n.date).toLocaleDateString()}
              </p>
              {n.link && (
                <a
                  href={n.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
                >
                  View Document
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Notices;
