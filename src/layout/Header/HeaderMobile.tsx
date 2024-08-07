export default function HeaderMobile() {
  return (
    <div className="sticky top-0 left-0 w-full z-3 bg-base h-[65px]">
      <header className="px-4 lg:py-2 py-3 relative flex items-center z-5 bg-base shadow-none border-solid border-b-[1px] border-0 border-base">
        <div className="w-full bg-input rounded-full flex justify-start gap-1 pr-5 items-center align-middle">
          <img
            src="/asset/header/searchIcon.svg"
            alt="جستجو"
            width={20}
            height={20}
            className="bg-transparent"
          />
          <span className="text-mobile-search bg-transparent text-textInput opacity-70 pb-1">
            جستجو در
          </span>
          <img
            src="/asset/header/digikalaSearch.svg"
            alt="جستجو"
            width={61}
            className="bg-transparent"
          />
        </div>
      </header>
    </div>
  );
}
