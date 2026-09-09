import { create } from 'zustand';

export const useCount = create((set) => ({
  // Define State + Initialize Value
  count: 0,

  // The Actions: functions describe how to change state (Change state using SetStateAction)
  // Immutable State
  reset: () => set({ count: 0 }),

  increment: () => set((prev) => ({ count: prev.count + 1 })),

  decrement: () => set((prev) => ({ count: prev.count - 1 })),

  incrementByValue: (value) => set((prev) => ({ count: prev.count + value })),
}));
