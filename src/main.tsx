import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { AppProvider, useApp } from './context/AppContext';
import { VisualCanvas } from './components/VisualCanvas';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';

import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { TalentsPage } from './pages/TalentsPage';
import { HubPage } from './pages/HubPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';

const PageRouter: React.FC = () => {
  const { route } = useApp();

  switch (route) {
    case 'work':
      return <WorkPage />;
    case 'talents':
      return <TalentsPage />;
    case 'hub':
      return <HubPage />;
    case 'reviews':
      return <ReviewsPage />;
    case 'contact':
      return <ContactPage />;
    case 'home':
    default:
      return <HomePage />;
  }
};

const AppShell: React.FC = () => {
  const { route } = useApp();

  return (
    <>
      <VisualCanvas />
      <Navbar />
      <main
        id="main-content"
        className="relative z-10 min-h-screen pt-24 pb-16"
        key={route}
      >
        <PageRouter />
      </main>
      <Footer />
      <CaseStudyModal />
    </>
  );
};

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(
    <React.StrictMode>
      <AppProvider>
        <AppShell />
      </AppProvider>
    </React.StrictMode>,
  );
}
