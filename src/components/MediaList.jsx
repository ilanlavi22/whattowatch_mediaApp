import { MediaListWrapper } from './styles';
import coverPlaceholder from '../assets/cover-placeholder.png'
import { Link } from 'react-router-dom';

const MediaList = ({ data, query, resultsCount }) => {

  const addDefaultSrc = (e) => e.target.src = '../covers/cover-placeholder.png';

  return (
    <MediaListWrapper>
      <h2>{ `Displaying ${resultsCount} results for "${query}"` }</h2>
      { data &&
        data.map((media) => (
          <Link key={ media.id } to={ `/title/${media.id}` } className='list-row'>
            <div className='list-row' key={ media.id }>

              <div className='list-image'>
                { media.primaryImage?.url && (
                  <img onError={ addDefaultSrc } src={ media.primaryImage.url } alt={ media.primaryImage.caption.plainText } />
                ) || <img src={ coverPlaceholder } alt="What to Watch" />
                }
              </div>
              <div>
                { media.primaryImage?.caption && (
                  <h4>{ media.titleText.text }:{ media.primaryImage.caption.plainText }</h4>
                ) }
                <p>
                  { media.ratingsSummary?.aggregateRating }
                  { media.titleType.text }
                </p>
              </div>
            </div>
          </Link>
        )) }
    </MediaListWrapper>


  );
}

export default MediaList;