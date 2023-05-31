import { Link } from 'react-router-dom';
import css from './LinksAddInfo.module.css';

const LinksAddInfo = () => {
  return (
    <div className={css.wrap}>
      <h4>Additional information</h4>
      <Link className={css.linkAddInfo} to="cast">Cast</Link>
      <Link className={css.linkAddInfo} to="reviews">Reviews</Link>
    </div>
  );
};

export default LinksAddInfo;
