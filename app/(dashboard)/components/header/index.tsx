import Logo from "../logo";
import Navigation from "../navigation";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-blue-500 to-blue-700 text-white px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex justify-start items-center mb-14">
          <div className="flex items-center lg:gap-x-16">
            <Logo />
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
