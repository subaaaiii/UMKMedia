export default function OfferSection() {
  return (
    <div className="px-[16px] sm:px-[100px] my-[40px] w-full max-w-screen-2xl h-fit lg:h-[869px] flex flex-col items-center text-black500 justify-center gap-[20px] md:gap-[48px]">
      <p className="w-[234px] md:w-[667px] text-[14px] leading-[20px] md:text-[40px] md:leading-[72px] font-bold">
        Kamu bisa berinvestasi dengan kami
      </p>
      <p className="w-[297px] md:w-[532px] text-[12px] leading-[20px] md:text-[18px] md:leading-[50px] font-normal text-center">
        Dapatkan E-BOOK GRATIS Social Media Cuan yang akan membongkar rahasia
        menghasilkan uang dari social media,
      </p>
      <p className="text-[18px] leading-[20px] md:text-[40px] md:leading-[72px] font-medium text-center">
        Mulai dari
      </p>
      <p className="text-[18px] leading-[20px] md:text-[80px] md:leading-[72px] font-extrabold">
        Rp. 1.000.000,-
      </p>
      <button
        onClick={() => window.open("https://wa.me/6282335676172", "_blank")}
        className="w-[160px] sm:w-[200px] py-[6px] md:py-[16px] px-[32px] rounded-[10px] bg-black500 text-whiteSmoke500 text-[12px] leading-[24px] md:text-[16px] md:leading-[24px] font-normal hover:bg-whiteSmoke500 hover:text-black500 hover:shadow-lg border-black500 border-2"
      >
        Hubungi Kami
      </button>
    </div>
  );
}
