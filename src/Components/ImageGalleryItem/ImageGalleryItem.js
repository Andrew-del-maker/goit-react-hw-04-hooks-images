import './ImageGalleryItem.scss';
import PropTypes from 'prop-types';


function ImageGalleryItem ({searchPicture, onClick}){
    
    
        return <li  className="ImageGalleryItem" onClick={onClick}>
                <img src={searchPicture.previewURL} alt={searchPicture.tags} className="ImageGalleryItem-image" data-img={searchPicture.largeImageURL}></img>
            </li>
        
    
}

ImageGalleryItem.propTypes = {
    searchPicture: PropTypes.any,
    onClick: PropTypes.func.isRequired,
}
export default ImageGalleryItem;