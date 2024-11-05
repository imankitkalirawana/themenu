'use client';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Badge, Button, Card } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

interface SidebarProps {
  onClose: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed top-0 z-[9999] h-screen w-full bg-background/10 backdrop-blur-sm"
      >
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="flex h-screen w-64 flex-col overflow-y-scroll bg-background p-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium">Main Menu</h3>
            <Button
              size="lg"
              className="bg-default-200"
              isIconOnly
              radius="full"
              onClick={onClose}
            >
              <Icon icon="lucide:chevron-left" fontSize={24} />
            </Button>
          </div>
          <div className="mt-4 grid w-full grid-cols-2 gap-2">
            <Card
              isPressable
              isHoverable
              className="col-span-2 mb-2 flex-row items-center justify-between gap-2 rounded-full bg-default-200 p-2"
            >
              <div>
                <Badge
                  color="primary"
                  shape="circle"
                  className="w-fit"
                  content=""
                  isDot
                >
                  <div className="flex size-12 items-center justify-center rounded-full bg-foreground text-background">
                    <Icon icon="majesticons:mail" fontSize={20} />
                  </div>
                </Badge>
              </div>
              <p className="line-clamp-2 text-start text-sm">
                Verify email for safe transactions
              </p>
              <div>
                <Icon icon="lucide:chevron-right" fontSize={20} />
              </div>
            </Card>
            {primaryItems.map((item) => (
              <Card
                title={item.title}
                key={item.icon}
                isPressable
                isHoverable
                as={Link}
                href={item.url}
                className="flex-row items-center justify-center gap-2 whitespace-nowrap bg-default-200 p-3 py-3"
              >
                <Icon icon={item.icon} className="min-w-5" fontSize={20} />
                <p className="line-clamp-1 max-w-[70%] text-sm">{item.title}</p>
              </Card>
            ))}
          </div>
          <div className="mt-4">
            {secondaryItems.map((item) => (
              <Link
                href={item.url}
                key={item.icon}
                className="flex items-center justify-start gap-2 rounded-2xl p-2 py-3 transition-colors hover:bg-default-200"
              >
                <Icon icon={item.icon} fontSize={20} />
                <p className="text-sm">{item.title}</p>
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

function Heading({ title, className }: { title: string; className?: string }) {
  return (
    <>
      <h3 className={cn('text-xl font-medium', className)}>{title}</h3>
    </>
  );
}

const secondaryItems = [
  {
    icon: 'solar:settings-linear',
    title: 'Settings',
    url: '/settings'
  },
  {
    icon: 'solar:help-linear',
    title: 'Help',
    url: '/help'
  }
];

const primaryItems = [
  {
    icon: 'solar:home-2-linear',
    title: 'Home',
    url: '/'
  },
  {
    icon: 'solar:pie-chart-linear',
    title: 'Statistics',
    url: '/statistics'
  },
  {
    icon: 'solar:bill-list-linear',
    title: 'Menu',
    url: '/menu'
  },
  {
    icon: 'solar:history-2-linear',
    title: 'Orders',
    url: '/orders'
  }
];
