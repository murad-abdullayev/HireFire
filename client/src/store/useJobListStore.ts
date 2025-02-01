import { create } from "zustand";

type ViewMode = "table" | "square";

interface ListStore {
  jobViewMode: ViewMode;
  companyViewMode: ViewMode;
  setJobViewMode: (mode: ViewMode) => void;
  setCompanyViewMode: (mode: ViewMode) => void;
}

export const useListStore = create<ListStore>((set) => ({
  jobViewMode: "square",
  companyViewMode: "square",

  setJobViewMode: (mode) => set({ jobViewMode: mode }),

  setCompanyViewMode: (mode) => set({ companyViewMode: mode }),
}));
