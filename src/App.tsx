import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Header />
          <main>
            <Routes>
              {/* Route principale avec les sections */}
              <Route path="/" element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Contact />
                </>
              } />
              {/* Page détail d'un projet */}
              <Route path="/projects/:id" element={<ProjectDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
