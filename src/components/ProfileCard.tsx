const ProfileCard = ({ name, role, image, isOnline }: {
  name: string;
  role: string;
  image: string;
  isOnline: boolean; // Added new prop type
}) => {
  return (
   
    <div className="flex items-center justify-center gap-8 bg-gray-100">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">

        {/* Profile Image & Online Badge */}
        <div className="flex justify-center pt-8 relative">
          <img
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 p-1"
            src={image}
            alt={`${name}'s profile`}
          />
          
          {/* Conditional Rendering for Online/Offline Badge */}
          <div className={`absolute top-8 translate-x-12 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-sm ${
            isOnline ? 'bg-green-500' : 'bg-gray-400'
          }`}>
            {isOnline ? 'Online' : 'Offline'}
          </div>
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