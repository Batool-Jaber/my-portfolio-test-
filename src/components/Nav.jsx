const Nav = ({ color, setPage }) => {
  return (
    <header>
      <nav className={`bg-${color} text-center text-white p-2`}>
        <ul className="flex justify-center space-x-4">
          <li>
            <button onClick={() => setPage("home")} className="text-white p-2 hover:bg-pink-50 rounded-lg hover:text-pink-800">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => setPage("about")} className="text-white p-2 hover:bg-pink-50 rounded-lg hover:text-pink-800">
              About
            </button>
          </li>
          <li>
            <button onClick={() => setPage("contact")} className="text-white p-2 hover:bg-pink-50 rounded-lg hover:text-pink-800">
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
