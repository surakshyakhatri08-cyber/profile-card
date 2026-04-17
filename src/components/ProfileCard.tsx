const ProfileCard = ({ name, role, image }: {
  name: string;
  role: string;
  image: string;
}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Main Card Container */}
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">

        {/* Profile Image */}
        <div className="flex justify-center pt-8">
          <img
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 p-1"
            src={image}
            alt={`${name}'s profile`}
          />
        </div>

        {/* Text Content */}
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
            {name}
          </h2>
          <p className="text-indigo-600 font-medium mt-1">
            {role}
          </p>

        </div>

        {/* Decorative Bottom Bar */}
        <div className="h-2 bg-indigo-600 w-full" />
      </div>
    </div>
  );
};

export default ProfileCard;
