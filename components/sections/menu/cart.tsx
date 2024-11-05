'use client';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  deleteAllItems,
  addItemToCart
} from '@/store/slices/cart-slice';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@nextui-org/react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useEffect } from 'react';
import React from 'react';

export default function Cart() {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  // Calculate total amount and total quantity
  const totalAmount = cart.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0
  );
  const totalQuantity = cart.reduce(
    (acc: number, item: any) => acc + item.quantity,
    0
  );

  useEffect(() => {
    const loadCartFromLocalStorage = () => {
      try {
        const serializedState = localStorage.getItem('cart');
        if (serializedState) {
          const savedCart = JSON.parse(serializedState);
          savedCart.forEach((item: any) => {
            // Add each item along with its quantity
            dispatch(addItemToCart({ ...item, quantity: item.quantity }));
          });
        }
      } catch (e) {
        console.warn('Could not load cart from localStorage', e);
      }
    };

    loadCartFromLocalStorage();
  }, [dispatch]);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    try {
      const serializedState = JSON.stringify(cart);
      localStorage.setItem('cart', serializedState);
    } catch (e) {
      console.warn('Could not save cart to localStorage', e);
    }
  }, [cart]);

  return (
    <AnimatePresence>
      {cart.length > 0 && (
        <motion.div
          className="fixed bottom-5 left-0 z-[99] h-16 w-full px-2"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mx-auto h-full w-full max-w-7xl items-center rounded-2xl border border-divider bg-background/30 p-2 pl-4 text-foreground shadow-xl backdrop-blur-lg">
            <div className="flex items-center justify-between gap-2">
              <div className="flex max-w-[80%] flex-col overflow-hidden overflow-ellipsis">
                <p className="text-sm font-semibold">
                  {totalQuantity} Items selected
                </p>
                <p className="h-fit whitespace-nowrap text-xs text-default-500">
                  {cart.map((item: any, index: number) => (
                    <React.Fragment key={item.id}>
                      <span className="inline-block max-w-[10ch] overflow-hidden text-ellipsis whitespace-nowrap">
                        {item.name}
                      </span>
                      <span className="inline-block -translate-y-1">
                        {index < cart.length - 1 && ','}
                      </span>
                    </React.Fragment>
                  ))}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="light"
                  color="danger"
                  isIconOnly
                  onClick={() => dispatch(deleteAllItems())}
                >
                  <Icon icon="lucide:trash-2" />
                </Button>
                <Button
                  color="primary"
                  className="flex items-center gap-1 text-lg text-white"
                  endContent={<Icon icon="lucide:arrow-right" />}
                >
                  <span className="text-white/80">₹</span>
                  <span className="font-semibold text-white">
                    {totalAmount}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
