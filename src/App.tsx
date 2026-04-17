import ProfileCard from './components/ProfileCard';

function App() {
  return (
    /* CSS for manage profile*/
    <div className="flex flex-wrap items-center justify-center gap-8 bg-gray-100 min-h-screen p-10">

      {/* First Profile */}
      <ProfileCard
        name="Surakshya Khatri"
        role="Frontend Web Developer"
        image="/my-photo.jpg"
        isOnline={true}
      />

      {/* Second Profile */}
      <ProfileCard
        name="Kranti Pariyar"
        role="UI/UX Designer"
        image="friend1.jpg"
        isOnline={false}
      />

      {/* Third Profile */}
      <ProfileCard
        name="Prabin Basnet"
        role="Backend Developer"
        image="friend2.jpg"
        isOnline={true}
      />

    </div>
  );
}

export default App;