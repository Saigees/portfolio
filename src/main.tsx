import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Helmet from "react-helmet";
import "./styles/global.css";
import "./styles/components/index.css";
import Landing from './pages';
import Navbar from './components/Navbar';
import Prns from './pages/prns';
import Redirects from './pages/redirect';
import Blog from './pages/blog';
import BlogSlug from './pages/blog/[slug]';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Helmet></Helmet>
      <div className="global">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/prns" element={<Prns />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogSlug />} />
          <Route path="/:slug" element={<Redirects />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);
