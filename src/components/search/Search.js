import React, { useRef } from 'react';
import { SearchIcon } from '@/icons/icons.js';
import styles from './Search.module.scss';
import { useDispatch } from 'react-redux';
import { setSearchUser } from '@/redux/usersSlice';

const Search = ({ isError }) => {
    const dispatch = useDispatch();
    const searchRef = useRef();

    const handleSearch = (e) => {
        e.preventDefault();
        let searchValue = searchRef.current.value;
        dispatch(setSearchUser(searchValue));
    };

    return (
        <section>
            <div className="container">
                <div className={styles.search}>
                    <form>
                        <div className={styles['search-area']}>
                            <SearchIcon />
                            <input
                                type="text"
                                placeholder="Search Github User"
                                ref={searchRef}
                            />
                            <button type="submit" onClick={handleSearch}>
                                Search
                            </button>
                        </div>
                    </form>
                    <h3 className={styles.h3}>requests : 56 / 60</h3>
                </div>
                
                {isError ? <p className={styles.error}>There Is No User With That Username</p> : <p className={styles.error}></p>}
            </div>
        </section>
    );
};

export default Search;
