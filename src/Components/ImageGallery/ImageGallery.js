import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PropTypes from 'prop-types';
import ImageGalleryItem from "../ImageGalleryItem";
import './ImageGallery.scss'
var shortid = require('shortid');


function ImageGallery({searchPictures, onClick}){
 
   
        return <ul className="ImageGallery">
            
            {searchPictures&& searchPictures.map(pic =>
                <ImageGalleryItem key={shortid.generate()} searchPicture={pic} onClick={onClick}/>)}
            
        </ul>
            
    
}

ImageGallery.propTypes = {
    searchPictures: PropTypes.array,
    onClick: PropTypes.func.isRequired,
}
export default ImageGallery;