'use client';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Avatar, Badge, Button, Input } from '@nextui-org/react';
import { Bell, Filter, Navigation, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function CustomerNavbar() {
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
  const total = words.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <div className="bg-primary">
      <div className="relative mx-auto flex max-w-7xl flex-col gap-4 px-2 py-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar name="Ank" />
            <div className="flex flex-col">
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm">Cashier</p>
            </div>
          </div>
          <div>
            <Button isIconOnly variant="flat">
              <Badge size="sm" content="" color="primary" variant="flat">
                <Bell className="fill-white stroke-white" />
              </Badge>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Navigation className="size-4 fill-white" />
            <span>Foodie Restaurant, Solo</span>
          </div>
          <div className="relative flex items-center gap-2">
            {/* Input with a basic placeholder */}
            <Input
              placeholder={isFocused ? '' : 'Search for'}
              startContent={<Search className="size-5 text-black" />}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="max-w-sm"
            />
            {/* Animated text overlaying the input placeholder */}
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
                ``
              </AnimatePresence>
            )}

            <Button isIconOnly className="bg-white">
              <Filter className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
