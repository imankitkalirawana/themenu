import { Icon } from '@iconify/react/dist/iconify.js';
import { Button } from '@nextui-org/react';
import { Plus } from 'lucide-react';

export default function MenuGrid() {
  return (
    <>
      <div>
        <div className="mt-12 grid grid-cols-2 gap-4 overflow-scroll md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-xl border border-divider bg-white shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="aspect-video w-full overflow-hidden rounded-t-md object-contain py-2"
                width={150}
                height={150}
              />
              <div className="p-2">
                <div className="flex flex-col items-center">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-default-500">{item.type}</p>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-default-100 px-2 py-1">
                  <p className="mt-2 flex items-center gap-1 text-default-500">
                    <span>₹</span>
                    <span className="font-semibold text-foreground">
                      {item.price}
                    </span>
                  </p>
                  <div>
                    <Button
                      radius="full"
                      className="text-white"
                      size="sm"
                      color="primary"
                      isIconOnly
                    >
                      <Plus />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const items = [
  {
    id: 1,
    name: 'Biryani Rice',
    price: 79,
    description: 'Spicy biryani with basmati rice',
    image: '/images/biryani-rice.png',
    type: 'Main Course'
  },
  {
    id: 1,
    name: 'Italian Spaghetti',
    price: 79,
    description: 'Spaghetti with tomato sauce',
    image: '/images/spaghetti.png',
    type: 'Main Course'
  },
  {
    id: 1,
    name: 'Chicken Alfredo',
    price: 79,
    description: 'Pasta with chicken in white sauce',
    image: '/images/chinese.png',
    type: 'Main Course'
  },
  {
    id: 1,
    name: 'Almond Cake',
    price: 79,
    description: 'Almond cake with chocolate topping',
    image: '/images/chicken-alfredo.png',
    type: 'Dessert'
  },
  {
    id: 1,
    name: 'Steak & Caviar',
    price: 79,
    description: 'Steak with caviar and vegetables',
    image: '/images/chicken-alfredo.png',
    type: 'Main Course'
  },
  {
    id: 1,
    name: 'Chicken Alfredo',
    price: 79,
    description: 'Pasta with chicken in white sauce',
    image: '/images/chicken-alfredo.png',
    type: 'Main Course'
  },
  {
    id: 1,
    name: 'Chicken Alfredo',
    price: 79,
    description: 'Pasta with chicken in white sauce',
    image: '/images/chicken-alfredo.png',
    type: 'Main Course'
  },
  {
    id: 1,
    name: 'Chicken Alfredo',
    price: 79,
    description: 'Pasta with chicken in white sauce',
    image: '/images/chicken-alfredo.png',
    type: 'Main Course'
  },
  {
    id: 1,
    name: 'Chicken Alfredo',
    price: 79,
    description: 'Pasta with chicken in white sauce',
    image: '/images/chicken-alfredo.png',
    type: 'Main Course'
  },
  {
    id: 1,
    name: 'Chicken Alfredo',
    price: 79,
    description: 'Pasta with chicken in white sauce',
    image: '/images/chicken-alfredo.png',
    type: 'Main Course'
  },
  {
    id: 1,
    name: 'Chicken Alfredo',
    price: 79,
    description: 'Pasta with chicken in white sauce',
    image: '/images/chicken-alfredo.png',
    type: 'Main Course'
  },
  {
    id: 1,
    name: 'Chicken Alfredo',
    price: 79,
    description: 'Pasta with chicken in white sauce',
    image: '/images/chicken-alfredo.png',
    type: 'Main Course'
  }
];
