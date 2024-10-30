'use client';
import { isImage } from '@/lib/helper';
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import Link from 'next/link';

export default function MenuHeader() {
  return (
    <>
      <div className="no-scrollbar flex w-full justify-start gap-2 overflow-scroll md:gap-4">
        {categories.map((category) => (
          <Link
            href={`/menu/${category.id === 'all' ? '' : category.id}`}
            key={category.id}
            className="group flex aspect-square h-20 w-20 flex-col items-center justify-center"
          >
            <div className="min-h-12 min-w-12 rounded-xl bg-gradient-to-b from-primary-500 to-transparent p-2">
              {isImage(category.icon) ? (
                <Image
                  src={category.icon}
                  alt={category.label}
                  className="h-8 w-8 mix-blend-darken"
                  width={100}
                  height={100}
                />
              ) : (
                <Icon icon={category.icon} className="text-3xl" />
              )}
            </div>
            <span className="text-xs">{category.label}</span>
          </Link>
        ))}
      </div>
    </>
  );
}

const categories = [
  {
    id: 'all',
    label: 'All',
    icon: '/images/meal.png'
  },
  {
    id: 'pizza',
    label: 'Pizza',
    icon: 'noto:pizza'
  },
  {
    id: 'spaghetti',
    label: 'Spaghetti',
    icon: '/images/spaghetti.png'
  },
  {
    id: 'salad',
    label: 'Salad',
    icon: 'noto:green-salad'
  },
  {
    id: 'chinese',
    label: 'Chinese',
    icon: '/images/chinese.png'
  },
  {
    id: 'beverage',
    label: 'Beverage',
    icon: 'noto:tropical-drink'
  }
];
