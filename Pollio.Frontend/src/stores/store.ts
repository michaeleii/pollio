import { Poll } from "@/types/types";
import { create } from "zustand";

const newId = (() => {
  let id = 0;
  return () => id++;
})();

interface OptionState {
  options: Poll["options"];
  addOption: (text: string) => void;
  updateOption: (id: number, text: string) => void;
  deleteOption: (id: number) => void;
}

const intialOptions = [
  { id: newId(), text: "" },
  { id: newId(), text: "" },
];

export const useOptionStore = create<OptionState>()((set) => ({
  options: intialOptions,
  addOption: (text) =>
    set((state) => ({
      options: [...state.options, { id: newId(), text }],
    })),
  updateOption: (id, text) =>
    set((state) => ({
      options: state.options.map((opt) =>
        opt.id === id ? { ...opt, text } : opt
      ),
    })),
  deleteOption: (id) =>
    set((state) => ({
      options: state.options.filter((opt) => opt.id !== id),
    })),
}));
