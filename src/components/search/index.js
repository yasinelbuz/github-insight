//core
import React, { useRef } from 'react';

//styles
import styles from './styles.module.scss';

//redux
import { useDispatch } from 'react-redux';
import { setSearch } from '@/redux/usersSlice';

//icons
import { SearchIcon } from '@/icons/index.js';


export default function Search(props) {
    const dispatch = useDispatch();
    const searchRef = useRef();

    const handleSearch = (e) => {
        e.preventDefault();
        let searchValue = searchRef.current.value;
        searchValue.trim() && dispatch(setSearch(searchValue.trim()));
    };

    return (
        <form onSubmit={handleSearch} className={styles.search}>
            <SearchIcon />
            <input
                type="text"
                placeholder="Search github users..."
                ref={searchRef}
                className={styles.search__input}
                {...props}
            />
        </form>
    );
}
