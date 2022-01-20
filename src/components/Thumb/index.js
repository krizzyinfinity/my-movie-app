import React from 'react';
import { Link} from 'react-router-dom';
import {Image} from './Thumb.styles';
import PropTypes from 'prop-types';
const Thumb = ({ image, movieId, clicable}) =>(
    <div>
    {clicable ? (
        <Link to={`/${movieId}`} >
        <Image src={image}alt='movie-thumb'/>   
        </Link>
    ) : (
        <Image src={image}alt='movie-thumb'/>    
    )}
        
         </div>
);

Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clicable: PropTypes.bool
}

export default Thumb;