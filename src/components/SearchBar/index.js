import React, { useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../../images/search-icon.svg';
import { Wrapper, Content} from './SearchBar.styles';
 

const SearchBar = ({setSearchTerm}) => {
    const [state, setState] = useState('');
    const initial = useRef(true);
    useEffect(() => {
        if(initial.current){
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)
        return () => clearTimeout(timer)

    }, [setSearchTerm, state])
    return (
        <Wrapper>
            <Content>
                <img src={searchIcon}alt='seaarch-icon' />
                <input
                type='text'
                placeholder='search movie' 
                onChange={event => setState(event.currentTarget.value)}
                value={state}
                />
            </Content>
        </Wrapper>
    );
};

SearchBar.propTypes = {
    callback: PropTypes.func
}

export default SearchBar;
    