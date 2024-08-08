
import create from 'zustand'

export const useGlobalStore = create((set) => ({
  loadedPage: false,
  setLoadedPage: loadedPage => set({loadedPage}),
}));