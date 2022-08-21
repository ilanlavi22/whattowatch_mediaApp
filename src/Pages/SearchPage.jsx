import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { rapidApiOptions, rapidApiUrl, rapidSearchData } from '../api/api.js';
import MediaList from '../components/MediaList.jsx';


const SearchPage = () => {
  const params = useParams();
  const { query } = params;

  const [data, setData] = useState(null);
  const [resultsCount, setResultsCount] = useState(0);

  const fetchData = () => {
    fetch(`${rapidApiUrl}/search/title/${query}${rapidSearchData}`, rapidApiOptions)
      .then((response) => response.json())
      .then((data) => {
        setResultsCount(data.entries);
        setData(data.results);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <MediaList data={ data } query={ query } resultsCount={ resultsCount }></MediaList>
  );
};

export default SearchPage;
