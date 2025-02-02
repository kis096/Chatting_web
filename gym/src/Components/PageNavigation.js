import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const PageNavigation = ({title}) => {
  return (
         <Wrapper>
         <NavLink to="/">
Home
         </NavLink>    {title}
    </Wrapper>
  

  )
    
};
const Wrapper = styled.section`



`

export default PageNavigation
