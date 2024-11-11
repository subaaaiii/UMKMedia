import NavbarTransaksi from "./navbar-transaksi/NavbarTransaksi";

export default function Transaksi() {
  return (
    <div className="flex flex-col">
      <p className="hidden lg:block text-[24px] md:text-[32px] font-bold leading-[72px] mb-[16px] text-black">
        Transaksi
      </p>
      <NavbarTransaksi />
    </div>
  );
}
