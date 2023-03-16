import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import { removeCard } from '../../redux/cardsRedux';


const Card = ({title,isFavorite, id}) => {

  const dispatch = useDispatch();


  const handleSubmit = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite({id, isFavorite}));
    
  
}
const handleSubmit2 = e => {
  e.preventDefault();
 dispatch(removeCard({id}));

}

    return (
        <li className={styles.card}>{title} 
        <div className={styles.icons}>
         <form className={styles.forms} onSubmit={handleSubmit}>
          <button type="submit">
            <span className={clsx("fa fa-star-o",styles.icon, isFavorite ===true && styles.isFavorite)} />  
          </button>
        </form>
        <form className={styles.forms} onSubmit={handleSubmit2}>
          <button type="submit">
            <span className={clsx("fa fa-trash",styles.icon)} />
          </button>
        </form>
        </div>
    </li>
    );
};

export default Card;