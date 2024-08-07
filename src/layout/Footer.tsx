import React from "react";
import PropTypes from "prop-types";
import SuportLinks from "../components/footer/SuportLinks";
import FooterNavlink from "../components/footer/FooterNavlink";
import DownloadLink from "../components/footer/DownloadLink";
import Description from "../components/footer/Description";
import Reserved from "../components/footer/Reserved";
import FooterFoot from "../components/footer/FooterFoot";

function Footer() {
  return (
    <>
      <footer className="flex flex-col justify-center max-w-[1676px] mx-auto mt-10">
        {/* ----------------------HEADER OF THE FOOTER------------------------- */}
        <div className="flex flex-row justify-between items-center  max-w-[1676px]">
          <img src="/digi-footer.svg" alt="دیجی کالا" className="h-[30]" />
          <button className="flex flex-row items-center border rounded-lg px-2 h-[40px] w-[140px] justify-center gap-1">
            {" "}
            بازگشت به بالا
            <img src="arrowGoUpp.svg" alt="فلش رو به بالا" />
          </button>
        </div>
        {/* --------------------------SUPUTR--------------------------------------- */}
        <div className="flex flex-row justify-start items-center h-[26px] gap-x-5 mt-4">
          <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
          <span className="h-[20px] w-[1px] border-gray border border-solid my-auto" />
          <p>۰۲۱-۹۱۰۰۰۱۰۰</p>
          <span className="h-[20px] w-[1px] border-gray border border-solid my-auto" />
          <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
        </div>
        <div className="flex flex-row justify-around items-center h-[100px] gap-x-5 mt-4">
          <SuportLinks
            src="/express-delivery.svg"
            alt="اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس"
            link="/faq/question/79/"
          >
            اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس
          </SuportLinks>
          <SuportLinks
            src="/cash-on-delivery.svg"
            alt="امکان پرداخت در محل"
            link="/faq/question/79/"
          >
            امکان پرداخت در محل
          </SuportLinks>
          <SuportLinks
            src="/support.svg"
            alt=" روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ"
            link="/page/contact-us/"
          >
            ۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ
          </SuportLinks>
          <SuportLinks
            src="/days-return.svg"
            alt="هفت روز ضمانت بازگشت کالا"
            link="/faq/question/83/"
          >
            هفت روز ضمانت بازگشت کالا{" "}
          </SuportLinks>
          <SuportLinks
            src="/original-products.svg"
            alt="ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ"
            link="/faq/question/82/"
          >
            ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ
          </SuportLinks>
        </div>
        <div className="flex flex-col justify-center max-w-[1676px] mx-auto">
          <FooterNavlink />
          <DownloadLink />
          <Description />
          <Reserved />
        </div>
      </footer>
      <FooterFoot />
    </>
  );
}

Footer.propTypes = {};

export default Footer;
