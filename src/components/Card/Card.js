import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';


const Card = ({title,isFavorite, id}) => {

  const dispatch = useDispatch();


  const handleSubmit = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite({id, isFavorite}));
  
}
    return (
        <li className={styles.card}>{title}  <form onSubmit={handleSubmit}>
        <button type="submit"><span className={clsx("fa fa-star-o",styles.icon, isFavorite ===true && styles.isFavorite)} /></button>
    </form></li>
    );
};

export default Card;