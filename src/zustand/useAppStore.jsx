import { create } from "zustand";

const useStore = create((set) => ({
  bears: 0,
  token: window.location.hash.substring(14).split("=")[0].split("&")[0],
}));

export default useStore;
