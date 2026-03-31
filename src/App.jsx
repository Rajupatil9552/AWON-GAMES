import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import CategoriesPage from './pages/CategoriesPage';
import PromotionsPage from './pages/PromotionsPage';
import GameDetailPage from './pages/GameDetailPage';
import BlogDetailPage from './pages/BlogDetailPage';
import CollectionsPage from './pages/CollectionsPage';
import UserDashboardPage from './pages/UserDashboardPage';

function App() {
  return (
    <Router>
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-display selection:bg-primary selection:text-background-dark">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/games/:id" element={<GameDetailPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/promotions" element={<PromotionsPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/dashboard" element={<UserDashboardPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
