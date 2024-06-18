function Header() {
  return (
    <header>
      <div className=" flex  flex-col justify-center align-middle items-center">
        <img src="" alt="لوگو" />
        <p> کافه رستوران لونا </p>
        <div className="flex flex-row gap-5">
          <a href="#"> @ instagram </a>
          <a href="#"> 091222222 @</a>
        </div>
      </div>

      <nav className="">
        <ul className="flex justify-around ">
          <li >درباره ما</li>
          <li>آیتم ها</li>
          <li>محصولات</li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {};

export default Header;
