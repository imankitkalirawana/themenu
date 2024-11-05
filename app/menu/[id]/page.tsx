import MenuItem from '@/components/sections/menu/items/menu-item';
import Navbar from '@/components/sections/menu/navbar';

const item = {
  id: 1,
  name: 'Italian Spaghetti Aglio e Olio',
  price: 79,
  image: '/images/spaghetti.png',
  type: 'Main Course'
};

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl">
        <MenuItem item={item} />
      </div>
    </>
  );
}
