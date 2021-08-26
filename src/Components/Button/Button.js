import './Button.scss';
import styled from "styled-components";
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

function ButtonComponent ({onLoadMore}) {
       
  
        return (
            <Button type='button' className='btn' onClick={onLoadMore}>
            Load more
        </Button>
        )
    
}

ButtonComponent.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
}

export default ButtonComponent;