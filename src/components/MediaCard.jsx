import { Link } from 'react-router-dom';
import { SplideSlide } from '@splidejs/react-splide';
import coverPlaceholder from '../assets/cover-placeholder.png'
import { FiStar, FiTv } from "react-icons/fi";
import { RiFileListFill } from "react-icons/ri";

const MediaCard = ({ media }) => {

  const { id, titleText: { text }, primaryImage, ratingsSummary: { aggregateRating } } = media;

  const addDefaultSrc = (e) => e.target.src = 'covers/cover-placeholder.png';

  return (
    <SplideSlide key={id}>

      <Link to={`title/${id}`}>
        <div className="image-cover">
          {primaryImage && primaryImage && (
            <img onError={addDefaultSrc} src={primaryImage.url} alt={text} />
          ) || <img src={coverPlaceholder} alt="What to Watch" />}
        </div>
        <div className="rating">
          <span><FiTv />{media.titleType.text}</span>
          <span><FiStar />{aggregateRating}</span>
          {
            media.titleType.text === 'TV Series' && (
              <span><RiFileListFill />{media.episodes.seasons.length}</span>
            )
          }
        </div>
        <h2>{text}</h2>
      </Link>

    </SplideSlide>
  );
}

export default MediaCard;