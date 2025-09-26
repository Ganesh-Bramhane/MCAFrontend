function Developers() {
  const dev = {
    name: "Ganesh Bramhane",
    role: "Full Stack Developer (Frontend + Backend + DevOps)",
    message: "Focused on building this project to solve real problems juniors may face.",
    image: "./images/C110.jpg", // 👈 apni photo yaha daal do
  };

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-12">
        Meet the Developer
      </h1>

      {/* Developer Card */}
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center">
        <img
          src={dev.image}
          alt={dev.name}
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-900 shadow-md"
        />
        <h2 className="mt-4 text-2xl font-semibold text-blue-900">{dev.name}</h2>
        <p className="text-blue-600 font-medium">{dev.role}</p>
        <p className="text-gray-700 mt-3 text-base">{dev.message}</p>
      </div>

      {/* Closing Message */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold text-blue-900">Hello Juniors 👋</h2>
        <p className="mt-4 text-gray-700 text-lg">
           This is my small project, built with ❤️ for the MCA Department.  
    I created this during my 2nd year to solve some of the issues I faced in my first year —  
    so that your journey becomes smoother and more organized.
        </p>
         <p className="mt-4 text-gray-700 text-lg leading-relaxed">
    I am constantly trying to enhance it and make it bigger, better, and more useful.  
    Remember — great things always start with small steps 🚀
  </p>
        <p className="mt-2 text-blue-700 font-semibold">— Ganesh (2nd Year MCA)</p>
      </div>
    </section>
  );
}

export default Developers;
