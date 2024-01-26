import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./pages/Login";
import Main from "./pages/Main";
import SearchPage from "./Mains/SearchPage";
import Home from "./Mains/Home";
import Categories from "./Mains/Categories";
import CategoryPage from "./Mains/CategoryPage";
import ResultSearch from "./Mains/ResultSearch";
import SongList from "./SearchResult/SongList";
import PlaylistsLists from "./SearchResult/PlaylistsLists";
import ArtistsLists from "./SearchResult/ArtistsLists";
import AlbumLists from "./SearchResult/AlbumLists";
import AlbumsPage from "./Mains/AlbumsPage";
import Playlists from "./Mains/PlaylistPage";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="spotify" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="search" element={<SearchPage />}>
              <Route index element={<Categories />} />
              <Route path=":id" element={<ResultSearch />}>
                <Route index element={<SongList />} />
                <Route path="playlists" element={<PlaylistsLists />} />
                <Route path="Artists" element={<ArtistsLists />} />
                <Route path="Album" element={<AlbumLists />} />
              </Route>
            </Route>
            <Route path="category/:id" element={<CategoryPage />} />
            <Route path="playlist/:id" element={<Playlists />} />
            <Route path="albums/:id" element={<AlbumsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
