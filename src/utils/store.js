
import create from 'zustand'

//
// stores 
//
export const useGlobalStore = create((set) => ({
  loadedPage: false,
  setLoadedPage: loadedPage => set({loadedPage}),
}));

//
// helpers
//
export const useLoadedPage = () => {
  return useGlobalStore(s => [s.loadedPage, s.setLoadedPage]);
}