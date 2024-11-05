import React from 'react';
import MenuContainer from '@/components/sections/menu/menu-container';
import CustomerNavbar from '@/components/sections/navbar/customer-navbar';
export default function Home() {
  return (
    <>
      <CustomerNavbar />
      <div className="mx-auto mt-40 max-w-7xl">
        <MenuContainer />
      </div>
    </>
  );
}
