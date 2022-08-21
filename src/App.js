import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './Pages/HomePage';
import DetailsPage from './Pages/DetailsPage';
import { Wrapper } from './components/styles';
import SearchPage from './Pages/SearchPage';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="title/search/:query" element={<SearchPage />} />
          <Route path="title/:id" element={<DetailsPage />} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  )
}
export default App;
