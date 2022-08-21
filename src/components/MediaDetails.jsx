import { FiStar, FiTv } from 'react-icons/fi';
import coverPlaceholder from '../assets/cover-placeholder.png'
import { MediaDetailsWrapper } from './styles';


const MediaDetails = ({ data, cast, creators, directors }) => {
  const {
    titleText: { text },
    genres,
    plot,
    ratingsSummary: { aggregateRating },
    titleType,
    releaseDate,
    runtime,
    primaryImage
  } = data;



  const addDefaultSrc = (e) => e.target.src = '../covers/cover-placeholder.png';
  let releaseDateLong = [releaseDate?.month, releaseDate?.day, releaseDate?.year].join('/');
  let releaseDatePublished = new Date(releaseDateLong).toLocaleString('default', { month: 'short', day: 'numeric', year: 'numeric' })

  const languageNames = new Intl.DisplayNames(['en'], {
    type: 'language'
  });


  return (
    <MediaDetailsWrapper>
      <div className='cover-image'>
        { primaryImage && primaryImage && (
          <img onError={ addDefaultSrc } src={ primaryImage.url } alt={ text } />
        ) || <img src={ coverPlaceholder } alt="What to Watch" /> }
      </div>

      <div className='media-content'>
        <h5>
          { creators && creators.map((creator, index) => (<span key={ index }>{ `${creator.name.nameText.text}`.split(' ').join(', ') }</span>)) }
          { directors && directors.map((director, index) => (<span key={ index }>{ `${director.name.nameText.text}` }</span>)) }
        </h5>
        <div className='genres'>
          { genres?.genres &&
            genres.genres.map((genre, index) => (
              <div key={ index }>
                <span>{ genre.text }</span>
              </div>
            )) }
        </div>
        { plot?.plotText.plainText }
      </div>

      <aside>
        <div>
          <span><FiStar /> { aggregateRating }</span>
          <span><FiTv /> { titleType?.text }</span>
        </div>

        <article>
          <h6>Release Date:</h6>
          <p>{ releaseDatePublished !== undefined ? releaseDatePublished : "no date" }</p>
        </article>


        <article>
          <h6>Language</h6>
          {/* <p>{ languageNames.of(`${data.plot.language.id}`) }</p> */ }
        </article>

        { runtime?.seconds && (
          <article>
            <h6>Runtime</h6>
            <p>{ new Date(runtime.seconds * 1000).toISOString().substring(12, 16) } (h:m)</p>
          </article>
        ) }


        { titleType && titleType.text === 'TV Series' && (
          <div>
            <div>Episodes: { data.episodes.episodes.total }</div>
            <div>Seasons: { data.episodes.seasons[0].number }</div>
          </div>
        ) }
        <article>
          <h6>Full Cast and Crew</h6>
          <p>
            { cast && cast.map((actor, index) => (<span key={ index }>{ `${actor.node.name.nameText.text}, ` }</span>)) }
          </p>
        </article>

      </aside>
    </MediaDetailsWrapper>
  );
};

export default MediaDetails;
