import NavbarKelasSaya from './navbar-kelas-saya/NavbarKelasSaya';

export default function KelasSaya() {
  return (
    <div className="flex flex-col">
      <p className="hidden lg:block text-[24px] md:text-[32px] font-bold leading-[72px] mb-[16px] text-black">
        Kelas Saya
      </p>
      <NavbarKelasSaya />
    </div>
  );
}
