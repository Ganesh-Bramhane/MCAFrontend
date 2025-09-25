function Developers() {
  const team = [
    {
      name: "Ganesh",
      role: "Frontend/Backend Developer/DevOps",
      message: "Focused on UI/UX and making the site responsive.",
      image: "./images/C110.jpg",
    },
    {
      name: "??",
      role: "Backend Developer",
      message: "Built the backend using Node.js & MongoDB.",
      image: "./images/ravi.jpg",
    },
    {
      name: "??",
      role: "Tester",
      message: "Ensured everything works smoothly with proper testing.",
      image: "./images/priya.jpg",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-12">
        Meet Our Developers
      </h1>

      {/* Developer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {team.map((dev, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center"
          >
            <img
              src={dev.image}
              alt={dev.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-900"
            />
            <h2 className="mt-4 text-xl font-semibold text-blue-900">{dev.name}</h2>
            <p className="text-blue-600 font-medium">{dev.role}</p>
            <p className="text-gray-700 mt-2 text-sm">{dev.message}</p>
          </div>
        ))}
      </div>

      {/* Closing Message */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold text-blue-900">Hello Juniors 👋</h2>
        <p className="mt-4 text-gray-700 text-lg">
          This is our small project, built with ❤️ for the MCA Department.  
          We hope it will be useful for you in your studies and make your journey easier.
        </p>
        <p className="mt-2 text-blue-700 font-semibold">— Ganesh & Team (2nd Year MCA)</p>
      </div>
    </section>
  );
}

export default Developers;
