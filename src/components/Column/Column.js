import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsRedux';

const Column = props => {

  //const searchText = useSelector(state => state.searchText.searchText.toLowerCase());
  //const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id && card.title.toLowerCase().includes(searchText)));
  const cards = useSelector(state => getFilteredCards(state, props.id));
  console.log('Column render');

  return <article className={styles.column}> 
            <span className={styles.icon + ' fa fa-' + props.icon}></span> 
            <h2 className={styles.title}>{props.title}</h2> 
            <ul className={styles.cards}>
            {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id} />)}
            </ul>
            <CardForm columnId={props.id}  />
          </article>
}

export default Column;