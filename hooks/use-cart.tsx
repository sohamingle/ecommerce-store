import {create} from 'zustand'

import { Product } from '@/types';
import { createJSONStorage, persist } from 'zustand/middleware';
import toast from 'react-hot-toast';

interface Props{
    items: Product[]
    addItem:(data:Product) => void
    removeItem:(id:string) => void
    removeAll:()=> void
}

const useCart = create(
    persist<Props>((set, get) => ({
    items: [],
    addItem: (data: Product) => {
      set({ items: [...get().items, data] });
      toast.success('Item added to cart.');
    },
    removeItem: (id: string) => {
      set({ items: [...get().items.filter((item) => item.id !== id)] });
      toast.success('Item removed from cart.');
    },
    removeAll: () => set({ items: [] }),
  }), {
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage)
  }));
  
  export default useCart;