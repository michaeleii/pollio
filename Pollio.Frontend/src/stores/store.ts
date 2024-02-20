import { Poll } from "@/types/types";
import { create } from "zustand";

interface OptionState {
  options: Poll["options"];
  addOption: (text: string) => void;
  updateOption: (id: number, text: string) => void;
  deleteOption: (id: number) => void;
}

const intialOptions = [
  { id: 1, text: "" },
  { id: 2, text: "" },
];

export const useOptionState = create<OptionState>()((set) => ({
  options: intialOptions,
  addOption: (text) =>
    set((state) => ({
      options: [...state.options, { id: state.options.length + 1, text }],
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
