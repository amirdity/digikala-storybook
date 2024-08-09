import useIsMobile from "../../hooks/useIsMobile";
// import HeaderDesktop from "./Desktop/HeaderDesktop";
import HeaderMobile from "./Mobile/HeaderMobile";

// import TopBaner from "./TopBaner";
function Header() {
  const Mobile: boolean = useIsMobile();
  return (
    <>
      {/* <TopBaner /> */}
      {Mobile && <HeaderMobile />}
      
      {/* {!Mobile && <HeaderDesktop />} */}
    </>
  );
}

export default Header;
