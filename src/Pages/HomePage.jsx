import { useEffect, useState } from 'react';
import { rapidApiOptions, rapidApiUrl, rapidMovieData, rapidSeriesData } from '../api/api.js'
import { HomeWrapper, CardWrapper } from "../components/styles";
import MediaCard from "../components/MediaCard";
import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const HomePage = () => {

  const [movieData, setMovieData] = useState(null);
  const [seriesData, setSeriesData] = useState(null);

  const splideOptions = {
    gap: '2rem',
    perPage: 5,
    arrows: false,
    pagination: false,
    drag: 'free',
    fixedWidth: '230px',
    lazyLoad: true
  }

  const fetchMovieData = () => {
    fetch(`${rapidApiUrl}?${rapidMovieData}`, rapidApiOptions)
      .then(response => response.json())
      .then((data) => {
        setMovieData(data.results)
      })
      .catch(err => console.error(err))
  }

  const fetchSeriesData = () => {
    fetch(`${rapidApiUrl}?${rapidSeriesData}`, rapidApiOptions)
      .then(response => response.json())
      .then((data) => {
        setSeriesData(data.results)
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    fetchMovieData()
    fetchSeriesData();
  }, [])

  return (
    <HomeWrapper>

      <CardWrapper>
        <header className='splide-titles'>
          <h2>BoxOffice Weekly</h2>
          <h4>No. 1 movies at the BoxOffice just for you</h4>
        </header>


        <Splide options={splideOptions}>
          {movieData && movieData.map((media) => (
            <MediaCard key={media.id} media={media}></MediaCard>
          ))
          }
        </Splide>
        <header className='splide-titles'>
          <h2>Top Rated Series</h2>
          <h4>Most popular TV shows just for you</h4>
        </header>

        <Splide options={splideOptions}>
          {seriesData && seriesData.map((media) => (
            <MediaCard key={media.id} media={media}></MediaCard>
          ))
          }
        </Splide>

      </CardWrapper>
    </HomeWrapper>
  )
}

export default HomePage;