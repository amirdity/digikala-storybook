import HeaderNavbar from "../../../components/header/HeaderNavbar";
import MegaMenu from "../../../components/header/MegaMenu";
import logo from "/asset/header/digikala-logo-asli.svg";
// import MegaMenu from "../../components/Header/MegaMenu";
// import HeaderNavbar from "../../components/header/HeaderNavbar";
export default function HeaderDesktop() {
  return (
    <header className="w-full flex flex-col border-b-gray-300 border-b-[1px]">
      <div className="flex w-full mx-auto justify-between md:px-4 grow container flex-row h-[68px] max-w-[1676px] ">
        <div className="flex flex-row my-auto gap-x-10 ">
          <img
            src={logo}
            alt="لوگواصلی دیجی کالا"
            className="h-[30px] my-auto"
          />
          <div className="w-[600px] bg-[#f0f0f1] rounded-lg">
            <input
              type="search"
              className="bg-[#f0f0f1] rounded-lg h-[44px]"
              placeholder="جستجو"
            />
          </div>
        </div>
        <div className="flex flex-row my-auto h-[45px] gap-x-5">
          <button className="border flex flex-row w-[136px] h-[40px] items-center rounded-lg justify-center gap-x-2 py-[4px] px-[8px]">
            <img src="/login-icon.svg" />{" "}
            <p className=" text-[12px] font-[700]"> ورود | ثبت نام</p>
          </button>
          <span className="h-[20px] w-[1px] border-gray border border-solid my-auto" />

          <a href="/" className="my-auto">
            <img src="/cart-icon.svg" alt="سبد خرید" />
          </a>
        </div>
      </div>

      <nav className=" flex flex-row my-auto justify-between md:px-4 grow container mx-auto h-[68px] max-w-[1644px]">
        <div className="flex flex-row h-[40px] gap-x-5">
          <MegaMenu />
          <HeaderNavbar
            src="/shegeftAngiz.svg"
            alt="شگفت‌انگیزها"
            link="/incredible-offers"
          >
            شگفت‌انگیزها
          </HeaderNavbar>
          <HeaderNavbar
            src="/super-market-icon.svg"
            alt="سوپرمارکت"
            link="/fresh"
          >
            سوپرمارکت
          </HeaderNavbar>
          <HeaderNavbar
            src="/giftCart-icon.svg"
            alt="کارت هدیه"
            link="/dk-ds-gift-card"
          >
            کارت هدیه
          </HeaderNavbar>
          <HeaderNavbar
            src="/bestSeleres-icon.svg"
            alt="پرفروش‌ترین‌ها"
            link="/best-selling"
          >
            پرفروش‌ترین‌ها
          </HeaderNavbar>
          <HeaderNavbar
            src="/off-icon.svg"
            alt="تخفیف‌ها و پیشنهادها"
            link="/promotion-center"
          >
            تخفیف‌ها و پیشنهادها
          </HeaderNavbar>
          <HeaderNavbar src="" alt="" link="/faq">
            سوالی دارید؟
          </HeaderNavbar>
          <span className="h-[20px] w-[1px] border-gray border border-solid my-auto" />
          <HeaderNavbar src="" alt="" link="/seller-introduction">
            در دیجی‌کالا بفروشید!
          </HeaderNavbar>
        </div>
        <div className="flex flex-row w-[173px] items-center gap-x-2 mb-0">
          <img
            src="/location-icon.svg"
            alt="لوکیشن"
            className="w-[20px] h-[20px]"
          />
          لطفا شهر خود را انتخاب کنید
        </div>
      </nav>
    </header>
  );
}
