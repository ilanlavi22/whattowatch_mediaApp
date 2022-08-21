export const rapidApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
  }
}

export const rapidApiUrl = 'https://moviesdatabase.p.rapidapi.com/titles';

export const rapidMovieData = 'info=base_info&limit=15&page=1&titleType=movie&list=top_boxoffice_200';
export const rapidSeriesData = 'info=base_info&limit=15&page=1&titleType=tvSeries&list=top_rated_series_250';
export const rapidTitleData = 'info=base_info';
export const rapidCastData = 'info=extendedCast';
export const rapidCreatorData = 'info=creators_directors_writers';
export const rapidSearchData = `?info=base_info&limit=20&page=1&titleType=movie&exact=false`;




