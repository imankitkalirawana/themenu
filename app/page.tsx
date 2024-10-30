import React from 'react';
import Image from 'next/image';
import { Code } from '@nextui-org/react';
import Banner from '@/components/sections/homepage/banner';
import MenuContainer from '@/components/sections/menu/menu-container';
import CustomerNavbar from '@/components/sections/navbar/customer-navbar';
export default function Home() {
  return (
    <>
      <CustomerNavbar />
      {/* <Banner /> */}
      <MenuContainer />
    </>
  );
}
