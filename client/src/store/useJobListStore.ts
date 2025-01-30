import { create } from "zustand";

type ViewMode = "table" | "square";

interface JobListStore {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

export const useJobListStore = create<JobListStore>((set) => ({
  viewMode: "square",
  setViewMode: (mode) => set({ viewMode: mode }),
}));
