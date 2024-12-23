import { useState } from 'react';
import SideBar from '../src/components/Sidebar/Sidebar';
import Repositories from '../src/components/Repositories/Repositories';
import ContentHeader from '../src/components/ContentHeader/ContentHeader';
import Navbar from '../src/components/Navbar/Navbar';
import Banner from '../src/components/Banner/Banner';

import SignUp from '../src/components/SignUp/SignUp';

import './styles/App.css';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [bannerUser, setBannerUser] = useState('UtkarshDhairyaPanwar');
  const [activeLink, setActiveLink] = useState<string>('Repositories');
  const [currentPage, setCurrentPage] = useState<string>('signup');

  const toggleSidebar = (): void => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSignUpClick = (): void => {
    setCurrentPage('main'); 
  };

  return (
    <div className="app">
      {currentPage === 'signup' ? (
        <SignUp onSignUpClick={handleSignUpClick} /> 
      ) : (
        <>
          <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="main-container">
            {isSidebarOpen && <div className="overlay" onClick={toggleSidebar} />}
            <SideBar isSidebarOpen={isSidebarOpen} setBannerUser={setBannerUser} activeLink={activeLink} setActiveLink={setActiveLink} />
            <main className="content">
              <ContentHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              <Banner bannerUser={bannerUser} />
              <Repositories searchQuery={searchQuery} />
            </main>
          </div>
        </>
      )}
    </div>
  );
}

export default App;