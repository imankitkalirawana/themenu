import MenuGrid from './menu-grid';
import MenuHeader from './menu-header';

export default function MenuContainer() {
  return (
    <>
      <div className="px-4 pt-8">
        <MenuHeader />
        <MenuGrid />
      </div>
    </>
  );
}
