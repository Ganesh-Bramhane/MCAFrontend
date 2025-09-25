import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white text-center py-20 px-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          Welcome to MCA Department 🎓
        </h1>
        <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto">
          A hub of learning, innovation, and growth for aspiring IT
          professionals.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/9876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 px-6 py-2 rounded-lg shadow hover:bg-green-700 transition"
          >
            💬 WhatsApp HOD
          </a>
          <Link
            to="/timetable"
            className="bg-yellow-500 px-6 py-2 rounded-lg shadow hover:bg-yellow-600 transition"
          >
            📅 View Timetable
          </Link>
        </div>
      </section>

      {/* HOD Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          {/* HOD Photo */}
          <img
            src="https://via.placeholder.com/200" // replace with real HOD photo
            alt="HOD"
            className="w-48 h-48 rounded-full object-cover border-4 border-blue-900 shadow-lg"
          />

          {/* HOD Info */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900">Dr. Amit Bhusari</h2>
            <p className="text-lg text-gray-700 font-medium">
              Head of Department, MCA
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              With 15+ years of experience in teaching and research, Dr. Sharma
              leads the department with a vision to foster innovation,
              discipline, and academic excellence.
            </p>

            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <a
                href="mailto:hod@mca.college.edu"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              >
                ✉️ Email
              </a>
              <a
                href="https://wa.me/9876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          About MCA Department
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          The Master of Computer Applications (MCA) Department provides
          high-quality education and training in advanced computing. With
          experienced faculty, modern labs, and a student-friendly environment,
          we nurture talent to become industry-ready professionals.
        </p>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
          <div>
            <h3 className="text-3xl font-bold text-blue-900">15+</h3>
            <p className="text-gray-600">Faculty Members</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-900">210+</h3>
            <p className="text-gray-600">Students (MCA)</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-900">5</h3>
            <p className="text-gray-600">Labs & Facilities</p>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
          Explore
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Link
            to="/faculty"
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:-translate-y-1 hover:shadow-xl transition transform"
          >
            <h3 className="text-xl font-semibold text-blue-900">👨‍🏫 Faculty</h3>
            <p className="text-gray-600 mt-2">Meet our experienced faculty team</p>
          </Link>
          <Link
            to="/students"
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:-translate-y-1 hover:shadow-xl transition transform"
          >
            <h3 className="text-xl font-semibold text-blue-900">👩‍🎓 Students</h3>
            <p className="text-gray-600 mt-2">View student list & GFM details</p>
          </Link>
          <Link
            to="/notices"
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:-translate-y-1 hover:shadow-xl transition transform"
          >
            <h3 className="text-xl font-semibold text-blue-900">📢 Notices</h3>
            <p className="text-gray-600 mt-2">Stay updated with latest news</p>
          </Link>
          <Link
            to="/achievements"
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:-translate-y-1 hover:shadow-xl transition transform"
          >
            <h3 className="text-xl font-semibold text-blue-900">🏆 Achievements</h3>
            <p className="text-gray-600 mt-2">See our toppers & success stories</p>
          </Link>
           <Link
            to="/timetable"
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:-translate-y-1 hover:shadow-xl transition transform"
          >
            <h3 className="text-xl font-semibold text-blue-900">Timetable</h3>
            <p className="text-gray-600 mt-2">See our toppers & success stories</p>
          </Link>
           <Link
            to="/developers"
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:-translate-y-1 hover:shadow-xl transition transform"
          >
            <h3 className="text-xl font-semibold text-blue-900">Developer</h3>
            <p className="text-gray-600 mt-2">See our toppers & success stories</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
