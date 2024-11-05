'use client';

import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Sidebar from '../sidebar/sidebar';
import { AnimatePresence } from 'framer-motion';

interface NavbarProps {
  title?: string;
  actionButton?: {
    icon: React.ReactNode;
    onClick: () => void;
    className?: string;
  };
}

export default function Navbar({ title, actionButton }: NavbarProps) {
  const pathname = usePathname();
  const previousPath = pathname.split('/').slice(0, -1).join('/');
  const currentPath = pathname.split('/').slice(-1).join('/');
  const [isSidebar, setIsSidebar] = React.useState(false);

  return (
    <>
      <div className="fixed top-0 z-[99] flex w-full items-center justify-between bg-[#f8f8f860] px-4 py-2 backdrop-blur-lg">
        <Button
          as={Link}
          href={`${previousPath || '/'}`}
          isIconOnly
          className="bg-white"
        >
          <Icon icon="lucide:arrow-left" />
        </Button>
        <h1 className="text-lg font-semibold capitalize">
          {title || currentPath}
        </h1>
        {actionButton ? (
          <Button
            isIconOnly
            onClick={actionButton.onClick}
            className={cn('bg-white', actionButton.className)}
          >
            {actionButton.icon}
          </Button>
        ) : (
          <Button
            isIconOnly
            className="bg-white"
            onClick={() => setIsSidebar(!isSidebar)}
          >
            <Icon icon="lucide:menu" />
          </Button>
        )}
      </div>
      <AnimatePresence>{isSidebar && <Sidebar />}</AnimatePresence>
    </>
  );
}
