import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";

const Home = lazy(() => import('./pages/HomePage'));
const Catalog = lazy(() => import('./pages/CatalogPage'))
const Favorites = lazy(() => import('./pages/FavoritesPage'))
const FeaturesPath = lazy(() => import('./components/Features/Features'))
const ReviewsPath = lazy(() => import('./components/Reviews/Reviews'))

const App = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />}>
            <Route path="features" element={<FeaturesPath />} />
            <Route path="reviews" element={<ReviewsPath />} />
          </Route>
          <Route path="favorites" element={<Favorites />}></Route>
          <Route path="*" element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </Suspense>
  )
}



export default App;
