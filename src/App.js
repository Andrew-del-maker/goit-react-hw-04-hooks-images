import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss'
import styled from "styled-components";
import api from './Services/pixabayApi'



import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";
import Button from "./Components/Button";
import Loader from "./Components/Loader";
import Modal from "./Components/Modal";




const Btn = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

function App (){
  const [searchQuerry, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [hits, setHits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  

  useEffect(() => {

    if (searchQuerry==='') {
      return;
    }
    setLoading(true);
    
    api(searchQuerry, page)
      .then(res=>res.json())
      .then(searchPictures => setHits(prevState=>[...prevState,...searchPictures.hits]))
        .then(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      })
        .finally(setLoading(false))
      
      
  }, [searchQuerry, page]);

  
    
  const onSubmit = (searchQuerry) => {
    setSearchQuery(searchQuerry);
    setHits([]);
  }
  const onClickModal = (e) => {
    onModal();
    setModalImg(e.target)
  }
  const onModal = () => {
    setShowModal(!showModal);
  }
   console.log(showModal)
    return (
      <div>
        <Searchbar onSubmit={onSubmit} />
        {loading&&<Loader/>}
        <ImageGallery searchPictures={hits} onClick={onClickModal}/>
        {searchQuerry &&
          <Button onLoadMore={()=> setPage(prevState=>prevState+1)} />}
        {showModal && <Modal onClose={onModal}>
                <img src={modalImg.dataset.img} alt={modalImg.alt} />
                <Btn className="closeIcon" type="button" onClick={onModal}>X</Btn>
            </Modal>}
        <ToastContainer />
      </div>
    )
  
}

export default App;
