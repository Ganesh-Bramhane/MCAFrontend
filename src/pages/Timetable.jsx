import { useState } from "react";

function Timetable() {
  const divisions = ["A", "B", "C"];
  const [selectedDiv, setSelectedDiv] = useState("A");

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const slots = [
    "8:45–9:45",
    "9:45–10:45",
    "10:45–11:30",
    "11:30–12:30",
    "12:30–1:30",
    "1:30–2:30",
    "2:30–2:45",
    "3:00–4:00",
    "4:00–4:30",
  ];

  // 🔹 Timetable data for all divisions
  const timetableData = {
    A: {
      Monday: [
        "WT(MS)",
        "STQA(DB)",
        "CC(VU)",
        "BREAK",
        "ELE ML",
        "BDA(VS)",
        "BREAK",
        "OODP(PB)",
        "Library",
      ],
      Tuesday: [
        "WT(MP)",
        "STQA(DB)",
        "DS(SBK)",
        "BREAK",
        "ELE ML",
        "BDA(VS)",
        "BREAK",
        "OODP(PB)",
        "T&P Activity",
      ],
      Wednesday: [
        "WT(MS)",
        "STQA(DB)",
        "CC(VU)",
        "BREAK",
        "ELE ML",
        "Audit",
        "BREAK",
        "Tech Skill",
        "Library",
      ],
      Thursday: [
        "WT(MP)",
        "DS(SBK)",
        "CC(VU)",
        "BREAK",
        "ELE ML",
        "BDA(VS)",
        "BREAK",
        "Library",
        "Cultural Act",
      ],
      Friday: [
        "WT(MS)",
        "STQA(DB)",
        "CC(VU)",
        "BREAK",
        "ELE ML",
        "BDA(VS)",
        "BREAK",
        "OODP(PB)",
        "Library",
      ],
    },
    B: {
      Monday: [
        "CC(VU)",
        "WT(MP)",
        "STQA(DB)",
        "BREAK",
        "ELE ML",
        "Sports Activity",
        "BREAK",
        "DS(SBK)",
        "Library",
      ],
      Tuesday: [
        "WT(MP)",
        "CC(VU)",
        "DS(SBK)",
        "BREAK",
        "BDA(VS)",
        "STQA(DB)",
        "BREAK",
        "OODP(PB)",
        "T&P Activity",
      ],
      Wednesday: [
        "WT(MS)",
        "STQA(DB)",
        "CC(VU)",
        "BREAK",
        "ELE ML",
        "Tech Skill Expert",
        "BREAK",
        "Library",
        "TG Meeting",
      ],
      Thursday: [
        "CC(VU)",
        "DS(SBK)",
        "WT(MP)",
        "BREAK",
        "ELE ML",
        "Cultural Act",
        "BREAK",
        "Library",
        "DS(SBK)",
      ],
      Friday: [
        "WT(MS)",
        "STQA(DB)",
        "CC(VU)",
        "BREAK",
        "ELE ML",
        "BDA(VS)",
        "BREAK",
        "OODP(PB)",
        "Library",
      ],
    },
    C: {
      Monday: [
        "CC(VU)",
        "STQA(DB)",
        "WT(MS)",
        "BREAK",
        "ELE ML",
        "T&P Activity",
        "BREAK",
        "DS(SBK)",
        "TG Meeting",
      ],
      Tuesday: [
        "WT(MP)",
        "DS(SBK)",
        "CC(VU)",
        "BREAK",
        "BDA(VS)",
        "STQA(DB)",
        "BREAK",
        "OODP(PB)",
        "T&P Activity",
      ],
      Wednesday: [
        "WT(MS)",
        "STQA(DB)",
        "CC(VU)",
        "BREAK",
        "ELE ML",
        "TG Meeting",
        "BREAK",
        "Library",
        "OODP(PB)",
      ],
      Thursday: [
        "WT(MP)",
        "DS(SBK)",
        "CC(VU)",
        "BREAK",
        "ELE ML",
        "BDA(VS)",
        "BREAK",
        "Library",
        "TG Meeting",
      ],
      Friday: [
        "WT(MS)",
        "STQA(DB)",
        "CC(VU)",
        "BREAK",
        "ELE ML",
        "BDA(VS)",
        "BREAK",
        "OODP(PB)",
        "Library",
      ],
    },
  };

  return (
    <section className="py-16 px-4 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-8">
        Timetable – Division {selectedDiv}
      </h1>

      {/* Division Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        {divisions.map((div) => (
          <button
            key={div}
            onClick={() => setSelectedDiv(div)}
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

      {/* Timetable Table */}
      <div className="overflow-x-auto">
        <table className="min-w-[800px] border border-gray-300 bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="border px-4 py-2">Day</th>
              {slots.map((slot, i) => (
                <th key={i} className="border px-4 py-2 text-sm">
                  {slot}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((day, dIdx) => (
              <tr key={dIdx} className="hover:bg-gray-100">
                <td className="border px-4 py-2 font-semibold">{day}</td>
                {timetableData[selectedDiv][day].map((subj, i) => (
                  <td
                    key={i}
                    className={`border px-2 py-2 text-xs text-center ${
                      subj === "BREAK"
                        ? "bg-yellow-100 font-bold"
                        : "text-gray-700"
                    }`}
                  >
                    {subj}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Timetable;
