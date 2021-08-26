import { useState } from "react";
import { toast } from 'react-toastify'
import styled from "styled-components";
import './Seachbar.scss'
import PropTypes from 'prop-types';


const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const Input = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid palevioletred;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;


function Searchbar({onSubmit}) {
    const [searchQuerry, setSearchQuery] = useState('');

    
    const handleSearchChange = event => {
        setSearchQuery( event.currentTarget.value.toLowerCase() );
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        if (searchQuerry.trim() === '') {
            toast('enter search param', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            return;
        }
        onSubmit(searchQuerry);
        setSearchQuery('');
    }
    
        
        return (

            <header className="Searchbar">
                <form className="SearchForm" onSubmit={handleFormSubmit}>
                    <Button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                    </Button>

                    <Input
                    className="SearchForm-input"
                    type="text"
                    
                    
                    placeholder="Search images and photos"
                    onChange={handleSearchChange}
                    />
                </form>
            </header>
        )
    
}
Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
export default Searchbar;