'use client';
import { Avatar, Button, Input } from '@nextui-org/react';
import { Filter, Navigation, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from '@iconify/react/dist/iconify.js';
import Sidebar from '../sidebar/sidebar';
import { set } from 'mongoose';

export default function CustomerNavbar() {
  const [isSidebar, setIsSidebar] = useState(false);
  const words = [
    'Pizza',
    'Burger',
    'Sushi',
    'Noodles',
    'Pasta',
    'Salad',
    'Soup',
    'Dessert'
  ];
  const [index, setIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const total = words.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [total]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        animate={{ y: isScrolled ? -90 : 0 }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 50 }}
        className="fixed top-0 z-[99] w-full rounded-b-xl bg-primary"
      >
        <div className="relative mx-auto flex max-w-7xl flex-col gap-4 px-2 py-4 text-white">
          <div key="profile" className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar name="Ank" />
                <div className="flex flex-col">
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-sm">Cashier</p>
                </div>
              </div>
              <div>
                <Button
                  isIconOnly
                  className="bg text-white"
                  variant="flat"
                  onClick={() => setIsSidebar(!isSidebar)}
                >
                  <Icon icon="lucide:menu" fontSize={18} />
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <Navigation className="size-4 fill-white" />
              <span>Foodie Restaurant, Solo</span>
            </div>
          </div>

          <div className="relative flex items-center justify-between gap-2 transition-all">
            <div className="relative flex w-full items-center gap-2">
              <Input
                placeholder={isFocused ? '' : 'Search for'}
                startContent={<Search className="size-5 text-black" />}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="max-w-sm"
              />
              {!isFocused && (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    className="pointer-events-none absolute left-10 top-[10px] text-sm text-default-500"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-sm opacity-0">Search for </span>
                    {`"${words[index]}"`}
                  </motion.span>
                </AnimatePresence>
              )}
              <Button isIconOnly className="bg-white">
                <Filter className="size-4" />
              </Button>
            </div>
            {isScrolled && (
              <Button
                isIconOnly
                className="bg-white"
                onClick={() => setIsSidebar(!isSidebar)}
              >
                <Icon icon="lucide:menu" fontSize={18} />
              </Button>
            )}
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {isSidebar && <Sidebar onClose={() => setIsSidebar(false)} />}
      </AnimatePresence>
    </>
  );
}
