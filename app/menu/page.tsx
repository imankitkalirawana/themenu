import MenuGrid from '@/components/sections/menu/menu-grid';
import MenuHeader from '@/components/sections/menu/menu-header';
import Navbar from '@/components/sections/menu/navbar';

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="mx-auto mt-20 max-w-7xl px-4">
        <MenuHeader />
        <MenuGrid />
      </div>
    </>
  );
}
