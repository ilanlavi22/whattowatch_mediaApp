import logo from '../assets/logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import { HeaderWrapper } from '../components/styles/index';

const Header = () => {

  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('search');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
    navigate(`title/search/${query}`);
  }


  return (
    <HeaderWrapper>
      <Link to='/'><img src={logo} alt="WTW What to Watch" /></Link>
      <div className='logo-text'>
        <Link to='/'>
          <span>WTW</span>
          <span>What to Watch</span>
        </Link>
      </div>

      <div className='search-form'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='query'
            id='query'
            value={query}
            placeholder='Search'
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type='submit'><FiSearch /></button>

        </form>
      </div>
    </HeaderWrapper>
  );
}

export default Header;