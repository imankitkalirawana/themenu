'use client';
import { cn } from '@/lib/utils';
import { addItemToCart, decreaseQuantity } from '@/store/slices/cart-slice';
import { RootState } from '@/store/store';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Button, Divider } from '@nextui-org/react';
import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface MenuItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
    type: string;
  };
}

export default function MenuItem({ item }: MenuItemProps) {
  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart);

  const itemInCart = cart.find((cartItem: any) => cartItem.id === 1);

  return (
    <>
      <div className="mt-14 flex flex-col gap-8 pb-24 md:flex-row">
        <div className="flex bg-[#f8f8f8] p-8 md:bg-transparent">
          <Image
            src={item.image}
            className="mx-auto aspect-square w-[90%] object-contain"
            alt="Food"
            width={800}
            height={600}
          />
        </div>
        <div className="flex flex-col gap-4 px-4">
          <div className="flex items-start justify-between">
            <h3 className="max-w-[50%] text-xl font-bold">{item.name}</h3>
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <Icon
                  icon="streamline:half-star-1-solid"
                  className="text-yellow-500"
                />
                <p className="whitespace-nowrap">4.5 rating</p>
              </div>
              <div>
                <Button isIconOnly variant="bordered" radius="full">
                  <Icon icon="lucide:heart" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 md:flex-col md:items-start">
            <p className="mt-2 flex items-center gap-1 text-default-500">
              <span>₹</span>
              <span className="text-xl font-semibold text-foreground">
                {item.price}
              </span>
            </p>
            <div className="flex justify-end">
              <div className="flex items-center gap-2 rounded-full bg-primary-100">
                {itemInCart && itemInCart.quantity > 0 && (
                  <>
                    <Button
                      radius="full"
                      className="text-white"
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
                  radius={itemInCart && itemInCart.quantity > 0 ? 'full' : 'md'}
                  className="text-white"
                  color="primary"
                  isIconOnly={itemInCart && itemInCart.quantity > 0}
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(addItemToCart(item));
                  }}
                  startContent={<Plus />}
                >
                  {(itemInCart && itemInCart.quantity > 0) || 'Add to Cart'}
                </Button>
              </div>
            </div>
          </div>
          <Divider />
          <div>
            <h4 className="mb-2 text-lg font-bold">Description</h4>
            <p className="font-medium text-default-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis,
              consequuntur nisi? Ad repellat impedit perspiciatis architecto eum
              molestiae voluptas maiores minima sit est. Iure architecto iste ea
              eos perspiciatis hic autem dolor mollitia obcaecati totam, culpa
              consectetur explicabo ab magnam? Velit totam asperiores veniam
              similique blanditiis dolorem non quis molestiae?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
