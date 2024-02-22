const Navbar = () => {
  return (
    <ul className="flex items-center justify-center bg-white align-middle text-xl text-tertiary-dark dark:bg-tertiary-dark dark:text-tertiary-light">
      <li className="px-5">
        <button>Reading List</button>
      </li>
      <p>|</p>
      <li className="px-5">
        <button>Upload Novel</button>
      </li>
      <p>|</p>
      <li className="px-5">
        <button>Upload Novel</button>
      </li>
    </ul>
  );
};

export default Navbar;
