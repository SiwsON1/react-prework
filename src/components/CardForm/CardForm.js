import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardsRedux';

const CardForm = ({columnId}) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
      e.preventDefault();
      //props.action({ title: title}, props.columnId);
     // dispatch({ type: 'ADD_CARD', payload: {title, columnId } });
      dispatch(addCard({ title, columnId }));
      setTitle('');
      
  }

return (
  <form className={styles.cardForm} onSubmit={handleSubmit}>
  <TextInput value={title} onChange={e => setTitle(e.target.value)} />
  <Button>Add card</Button>
</form>
);
};


export default CardForm;