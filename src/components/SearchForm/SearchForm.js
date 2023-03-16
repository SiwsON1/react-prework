import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchCard } from '../../redux/searchRedux';

const SearchForm = () => {

  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();


  const handleSubmit = e => {
    e.preventDefault();
    //dispatch({ type: 'SEARCH_CARD', payload: {searchText} });
    dispatch(searchCard({ searchText }));
  
}

const handleInputChange = (e) => {
  setSearchText(e.target.value);
};

  return (
      <form className={styles.searchForm} onSubmit={handleSubmit}>
           <TextInput placeholder="Search..." value={searchText} onChange={handleInputChange}/>
           <Button>
            <span className="fa fa-search" />
           </Button>
      </form>
  );
};

export default SearchForm;