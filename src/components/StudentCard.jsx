function StudentCard({ name, roll, gfm, photo }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 text-center hover:shadow-xl transition">
      <img
        src={photo || "/images/default.png"}
        alt={name}
        className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-blue-900 mb-3"
      />
      <h3 className="text-lg font-semibold text-blue-900">{name}</h3>
      <p className="text-gray-600 text-sm">Roll: {roll}</p>
      <p className="text-sm mt-2">
        <span className="font-medium">GFM:</span> {gfm}
      </p>
    </div>
  );
}

export default StudentCard;
