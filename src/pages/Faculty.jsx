function Faculty() {
  const facultyList = [
    {
      name: "Dr. Amit A. Bhusari",
      designation: "Associate Professor & HOD",
      qualification: "Ph.D. (Computer Sci. & Engg), M.C.A., M.Sc. (Mathematics)",
      experience: "Teaching: 20 Years",
      area: "Wireless Network Security, Cryptography",
      email: "hodmca.tae@kjei.edu.in",
      photo: "/images/amitbhusari.jpg",
    },
    {
      name: "Mr. Sameer B. Kakade",
      designation: "Assistant Professor",
      qualification: "M.Sc (Computer Science)",
      experience: "Teaching: 20 Years",
      area: "Data Design & Analysis of Algorithms, Web Technology",
      email: "sameerkakade.tae@kjei.edu.in",
      photo: "/images/sameerkakade.jpg",
    },
    {
      name: "Ms. Shubhangi M. Vitalkar",
      designation: "Assistant Professor",
      qualification: "M.C.A",
      experience: "Teaching: 5 Years",
      area: "Web Technology, DBMS, Data Analytics, Data Science",
      email: "shubhangivitalkar.tae@kjei.edu.in",
      photo: "/images/shubhangi.jpg",
    },
    {
      name: "Ms. Vibha Upadhya",
      designation: "Assistant Professor",
      qualification: "M.C.A",
      experience: "Teaching: 5 Years",
      area: "Software Engineering, C, Web Technologies",
      email: "",
      photo: "/images/vibha.jpg",
    },
    {
      name: "Mr. Bisweswar Thakur",
      designation: "Assistant Professor",
      qualification: "M.Sc (Computer Science), NET (CS & Applications)",
      experience: "Teaching: 6 Years",
      area: "Data Structure & Algorithm, AI, Data Science & Machine Learning, TOC",
      email: "",
      photo: "/images/bisweswar.jpg",
    },
    {
      name: "Mrs. Dipali A. Bhusari",
      designation: "Assistant Professor",
      qualification: "M.C.A.",
      experience: "Teaching: 3 Years",
      area: "Quality Assurance",
      email: "",
      photo: "/images/dipali.jpg",
    },
    {
      name: "Dr. Kapil K. Misal",
      designation: "Associate Professor",
      qualification: "Ph.D. (Computer Applications), M.C.A.",
      experience: "Teaching: 14 Years",
      area: "Machine Learning, AI, DSA, RDBMS, Asp.Net, HCI, MongoDB",
      email: "",
      photo: "/images/kapil.jpg",
    },
    {
      name: "Mr. Pramod R. Jadhao",
      designation: "Assistant Professor",
      qualification: "M.C.A",
      experience: "Teaching: 3 Years",
      area: "AI, Machine Learning, Data Science, Computer Vision, Big Data, OOP, Web Tech",
      email: "",
      photo: "/images/pramod.jpg",
    },
    {
      name: "Mrs. Sujata R. Patil",
      designation: "Assistant Professor",
      qualification: "M.C.A",
      experience: "Teaching: 10 Years",
      area: "Discrete Mathematics, Cyber Security",
      email: "",
      photo: "/images/sujata.jpg",
    },
    {
      name: "Mrs. Vaishali S. Hatkar",
      designation: "Assistant Professor",
      qualification: "M.C.A",
      experience: "Teaching: 3 Years",
      area: "OOPs, DBMS, JAVA, STQA",
      email: "",
      photo: "/images/vaishali.jpg",
    },
    {
      name: "Mrs. Manisha K. Patil",
      designation: "Assistant Professor",
      qualification: "M.C.A",
      experience: "Teaching: 3 Years",
      area: "STQA, SEPM, DBMS, Python",
      email: "",
      photo: "/images/manisha.jpg",
    },
    {
      name: "Mr. Pritish P. Bisne",
      designation: "Assistant Professor",
      qualification: "M.C.A",
      experience: "Teaching: 2 Years",
      area: "Computer Application, WT, DBMS",
      email: "",
      photo: "/images/pritish.jpg",
    },
    {
      name: "Ms. Monika Shinde",
      designation: "Assistant Professor",
      qualification: "M.C.A",
      experience: "Teaching: 2 Years",
      area: "WT, DBMS, SEPM, AI",
      email: "",
      photo: "/images/monika.jpg",
    },
    {
      name: "Mrs. Shamal S. Hudale",
      designation: "Jr. Clerk",
      qualification: "B.Com, MBA (Student Section)",
      experience: "",
      area: "",
      email: "????",
      photo: "/images/shamal.jpg",
    },
    // 👉 baki faculty members yahi array me daal do
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-10">
        Our Faculty
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {facultyList.map((f, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-6 text-center transform hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            {/* Photo */}
            <div className="flex justify-center">
              <img
                src={f.photo}
                alt={f.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-700 shadow-md"
              />
            </div>

            {/* Name + Designation */}
            <h2 className="text-lg font-semibold text-blue-900 mt-4">{f.name}</h2>
            <p className="text-gray-600 text-sm">{f.designation}</p>

            {/* Qualification & Experience */}
            <p className="text-gray-500 text-xs mt-2">{f.qualification}</p>
            <p className="text-gray-500 text-xs">{f.experience}</p>

            {/* Area of Interest */}
            <p className="text-gray-600 text-sm mt-2 italic">
              {f.area}
            </p>

            {/* Email Button */}
            {f.email && (
              <a
                href={`mailto:${f.email}`}
                className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 shadow"
              >
                ✉️ Email
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faculty;
