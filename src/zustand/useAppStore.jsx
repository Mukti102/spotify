import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../utils/callDataApi";
import { create } from "zustand";

const useStore = create((set) => ({
  bears: 0,
  idTrack: null,
  track: null,
  setTrack: (item) => set({ track: item }),
  playlists: [],
  token: window.location.hash.substring(14).split("=")[0].split("&")[0],
  getQuery: (url, key) =>
    useQuery({
      queryKey: key,
      queryFn: async () => {
        const res = await axiosInstance.get(url, {
          headers: {
            Authorization: "Bearer " + useStore.getState().token,
          },
        });
        return res;
      },
    }),
  getIdTrack: (id) => {
    set({ idTrack: id });
  },
}));

export default useStore;
