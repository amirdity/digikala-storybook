import React from "react";
import { Link } from "react-router-dom";
type HeaderNavbar = {
  link: string;
  src: string;
  alt: string;
  children: React.ReactNode;
};
function HeaderNavbar({ link, src, alt, children }: HeaderNavbar) {
  // prees cntrl + shift + 2 to have half space
  return (
    <>
      <Link
        to={link}
        className="flex flex-row gap-x-2 justify-center items-center"
      >
        <img src={src} alt={alt} className="w-[18px]" />
        {children}
      </Link>
    </>
  );
}

HeaderNavbar.propTypes = {};

export default HeaderNavbar;
