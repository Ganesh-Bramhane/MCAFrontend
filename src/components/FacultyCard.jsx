function FacultyCard({ name, subject, designation, photo, phone, whatsapp, email }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
      <img
        src={photo || "/images/default.png"} // fallback image
        alt={name}
        className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-900 mb-4"
      />
      <h3 className="text-xl font-semibold text-blue-900">{name}</h3>
      <p className="text-gray-600">{designation}</p>
      <p className="text-sm text-gray-500 mb-4">{subject}</p>

      <div className="flex justify-center gap-3">
        {phone && (
          <a href={`tel:${phone}`} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
            📞
          </a>
        )}
        {whatsapp && (
          <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
            💬
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
            ✉️
          </a>
        )}
      </div>
    </div>
  );
}

export default FacultyCard;
