import { useState } from "react";

function Students() {
  const divisions = ["A", "B", "C"];
  const [selectedDiv, setSelectedDiv] = useState("C");

  // 🔹 Static Data (example)
  const studentData = {
    A: [
      {
        batch: "A1",
        gfm: "Prof. Vaishali Hatkar",
        students: [
          { roll: "A-101", name: "STUDENT A ONE" },
          { roll: "A-102", name: "STUDENT A TWO" },
          { roll: "A-103", name: "STUDENT A THREE" },
        ],
      },
      {
        batch: "A2",
        gfm: "Prof. Kapil Misal",
        students: [
          { roll: "A-104", name: "STUDENT A FOUR" },
          { roll: "A-105", name: "STUDENT A FIVE" },
        ],
      },
      {
        batch: "A3",
        gfm: "Prof. Manisha Patil",
        students: [
          { roll: "A-106", name: "STUDENT A SIX" },
          { roll: "A-107", name: "STUDENT A SEVEN" },
        ],
      },
    ],
    B: [
      {
        batch: "B1",
        gfm: "Prof. Sameer Kakade",
        students: [
          { roll: "B-101", name: "STUDENT B ONE" },
          { roll: "B-102", name: "STUDENT B TWO" },
        ],
      },
      {
        batch: "B2",
        gfm: "Prof. Rajesh Nair",
        students: [
          { roll: "B-103", name: "STUDENT B THREE" },
          { roll: "B-104", name: "STUDENT B FOUR" },
        ],
      },
      {
        batch: "B3",
        gfm: "Prof. Dipali Bhusari",
        students: [
          { roll: "B-105", name: "STUDENT B FIVE" },
          { roll: "B-106", name: "STUDENT B SIX" },
        ],
      },
    ],
    C: [
      {
        batch: "C1",
        gfm: "Prof. Shubhangi Vitalkar",
        students: [
          { roll: "C-101", name: "ARYA DESHMUKH" },
    { roll: "C-102", name: "ASHISH RAWAT" },
    { roll: "C-103", name: "ATISH YEDAKE" },
    { roll: "C-104", name: "AVISHKAR GURAV" },
    { roll: "C-105", name: "AWARI MAHESH" },
    { roll: "C-106", name: "AYUSH GAYAKWAD" },
    { roll: "C-107", name: "BHOYAR YASH" },
    { roll: "C-108", name: "BITE KACHAN" },
    { roll: "C-109", name: "BODAKE PARMESHWAR" },
    { roll: "C-110", name: "BRAMHANE GANESH" },
    { roll: "C-111", name: "CHAKOR RUTUJA" },
    { roll: "C-112", name: "DEORE TEJAS" },
    { roll: "C-113", name: "DHANANJAY ADINATH" },
    { roll: "C-114", name: "DIVYA BARMASE" },
    { roll: "C-115", name: "DIXIT TUSHARSINGH" },
    { roll: "C-116", name: "DUBHASHE ANIKET" },
    { roll: "C-117", name: "DUNGE AMBIKA" },
    { roll: "C-118", name: "GHULE NAYANA" },
    { roll: "C-119", name: "GODASE JANHAVI" },
    { roll: "C-120", name: "GOLANDE KESHAV" },
    { roll: "C-121", name: "GOPALE PRATHAMESH" },
    { roll: "C-122", name: "GOTE SHIVAM" },
    { roll: "C-123", name: "GURAV SHREYA" },
    { roll: "C-124", name: "HEMANT MURLIDHAR" },
    { roll: "C-125", name: "HUSAINI AFWAN" },

        ],
      },
      {
        batch: "C2",
        gfm: "Prof. Sameer Kakade",
        students: [
          { roll: "C-106", name: "AYUSH GAYAKWAD" },
          { roll: "C-107", name: "BHOYAR YASH" },
          { roll: "C-108", name: "BITE KACHAN" },
          { roll: "C-109", name: "BODAKE PARMESHWAR" },
          { roll: "C-110", name: "BRAMHANE GANESH" },
        ],
      },
      {
        batch: "C3",
        gfm: "Prof. Rajesh Nair",
        students: [
          { roll: "C-111", name: "CHAKOR RUTUJA" },
          { roll: "C-112", name: "DEORE TEJAS" },
          { roll: "C-113", name: "DHANANJAY SONAWANE" },
          { roll: "C-114", name: "DIVYA BARMASE" },
          { roll: "C-115", name: "DIXIT TUSHAR" },
        ],
      },
    ],
  };

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-10">
        Students & GFM Allocation
      </h1>

      {/* 🔹 Division Tabs */}
      <div className="flex justify-center space-x-4 mb-10">
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

      {/* 🔹 Batches for selected division */}
      {studentData[selectedDiv] ? (
        studentData[selectedDiv].map((batch, idx) => (
          <div
            key={idx}
            className="mb-12 bg-white shadow-lg rounded-xl p-6 max-w-6xl mx-auto"
          >
            {/* GFM Card */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-blue-900">
                {batch.gfm}
              </h2>
              <p className="text-gray-600">Batch: {batch.batch}</p>
            </div>

            {/* Student Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {batch.students.map((s, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-blue-50 shadow-md rounded-lg p-3 text-center text-sm transform hover:scale-105 hover:shadow-xl transition duration-300"
                >
                  <img
                    src={`/images/${s.roll}.jpg`}
                    alt={s.name}
                    className="w-16 h-16 mx-auto rounded-full object-cover border-2 border-blue-700 mb-2"
                    onError={(e) => (e.target.src = "/images/default.png")}
                  />
                  <h3 className="font-semibold text-blue-900">{s.name}</h3>
                  <p className="text-gray-600 text-xs">Roll: {s.roll}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">
          No data available for Division {selectedDiv}
        </p>
      )}
    </section>
  );
}

export default Students;
