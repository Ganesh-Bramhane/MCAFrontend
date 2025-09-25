function FacultyCard({ name, subject, designation, email, phone, whatsapp, photo }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
      <img
        src={photo || "/images/default.png"} // agar photo missing ho to default
        alt={name}
        className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-blue-900 mb-4"
      />

      <h2 className="text-xl font-semibold text-blue-900">{name}</h2>
      <p className="text-gray-600">{designation}</p>
      {subject && <p className="text-gray-500 text-sm mt-1">{subject}</p>}

      {/* Contact Buttons */}
      <div className="mt-4 flex justify-center gap-3 flex-wrap">
        {email && (
          <a
            href={`mailto:${email}`}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            ✉️ Email
          </a>
        )}
        {phone && (
          <a
            href={`tel:${phone}`}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            📞 Call
          </a>
        )}
        {whatsapp && (
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            💬 WhatsApp
          </a>
        )}
      </div>
    </div>
  );
}

export default FacultyCard;
