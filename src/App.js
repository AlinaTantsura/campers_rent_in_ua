import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";

const Home = lazy(() => import('./pages/HomePage'));
const Catalog = lazy(() => import('./pages/CatalogPage'))
const Favorites = lazy(() => import('./pages/FavoritesPage'))
const App = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />}></Route>
          <Route path="favorites" element={<Favorites />}></Route>
          <Route path="*" element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </Suspense>
  )
}



export default App;
