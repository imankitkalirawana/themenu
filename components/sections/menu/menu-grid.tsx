'use client';
import { Button } from '@nextui-org/react';
import { Plus, Minus } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, decreaseQuantity } from '@/store/slices/cart-slice';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function MenuGrid() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const router = useRouter();

  return (
    <>
      <div>
        <div className="mb-24 mt-12 grid select-none grid-cols-2 gap-4 overflow-scroll px-1 py-4 md:grid-cols-4 lg:grid-cols-6">
          {items.map((item) => {
            const itemInCart = cart.find(
              (cartItem: any) => cartItem.id === item.id
            );
            return (
              <div
                key={item.id}
                className="group cursor-pointer select-none overflow-hidden rounded-2xl border border-divider bg-white shadow-md transition-all hover:scale-105"
                onClick={() => router.push(`/menu/${item.id}`)}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  className="aspect-video w-full overflow-hidden rounded-t-md bg-primary-50 object-contain py-2 transition-all"
                  width={150}
                  height={150}
                />
                <div className="p-2">
                  <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-xs font-medium text-default-500">
                      {item.type}
                    </p>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-default-100 px-2 py-1">
                    <p className="mt-2 flex items-center gap-1 text-default-500">
                      <span>₹</span>
                      <span className="font-semibold text-foreground">
                        {item.price}
                      </span>
                    </p>
                    <div className="flex items-center gap-2 rounded-full bg-primary-100">
                      {itemInCart && itemInCart.quantity > 0 && (
                        <>
                          <Button
                            radius="full"
                            className="text-white"
                            size="sm"
                            color="primary"
                            isIconOnly
                            onClick={(e) => {
                              e.stopPropagation();
                              dispatch(decreaseQuantity(item.id));
                            }}
                          >
                            <Minus />
                          </Button>
                          <span>{itemInCart.quantity}</span>
                        </>
                      )}
                      <Button
                        radius="full"
                        className="text-white"
                        size="sm"
                        color="primary"
                        isIconOnly
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch(addItemToCart(item));
                        }}
                      >
                        <Plus />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
    id: 2,
    name: 'Italian Spaghetti',
    price: 79,
    description: 'Spaghetti with tomato sauce',
    image: '/images/spaghetti.png',
    type: 'Main Course'
  },
  {
    id: 3,
    name: 'Chicken Alfredo',
    price: 79,
    description: 'Pasta with chicken in white sauce',
    image: '/images/chinese.png',
    type: 'Main Course'
  },
  {
    id: 4,
    name: 'Almond Cake',
    price: 79,
    description: 'Almond cake with chocolate topping',
    image: '/images/chicken-alfredo.png',
    type: 'Dessert'
  },
  {
    id: 5,
    name: 'Steak & Caviar',
    price: 79,
    description: 'Steak with caviar and vegetables',
    image: '/images/chicken-alfredo.png',
    type: 'Main Course'
  },
  {
    id: 6,
    name: 'Chicken Alfredo',
    price: 79,
    description: 'Pasta with chicken in white sauce',
    image: '/images/chicken-alfredo.png',
    type: 'Main Course'
  },
  {
    id: 7,
    name: 'Chicken Alfredo',
    price: 79,
    description: 'Pasta with chicken in white sauce',
    image: '/images/chicken-alfredo.png',
    type: 'Main Course'
  },
  {
    id: 8,
    name: 'Chicken Alfredo',
    price: 79,
    description: 'Pasta with chicken in white sauce',
    image: '/images/chicken-alfredo.png',
    type: 'Main Course'
  },
  {
    id: 9,
    name: 'Chicken Alfredo',
    price: 79,
    description: 'Pasta with chicken in white sauce',
    image: '/images/chicken-alfredo.png',
    type: 'Main Course'
  },
  {
    id: 10,
    name: 'Chicken Alfredo',
    price: 79,
    description: 'Pasta with chicken in white sauce',
    image: '/images/chicken-alfredo.png',
    type: 'Main Course'
  },
  {
    id: 11,
    name: 'Chicken Alfredo',
    price: 79,
    description: 'Pasta with chicken in white sauce',
    image: '/images/chicken-alfredo.png',
    type: 'Main Course'
  },
  {
    id: 12,
    name: 'Chicken Alfredo',
    price: 79,
    description: 'Pasta with chicken in white sauce',
    image: '/images/chicken-alfredo.png',
    type: 'Main Course'
  }
];
