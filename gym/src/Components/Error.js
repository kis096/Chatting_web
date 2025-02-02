import React from 'react'
import styled from 'styled-components'
import { Button } from './Style/Button'
import { NavLink } from 'react-router-dom'


const Error = () => {
  return (
   <Wrapper>
         <div className="container">
                  <div>
                           <h2>404</h2>
                           <h2>bsdk kya chata h</h2>

                           <p>
                           kya search kar rha h tera baap rakhe gya h kya

                           chup chaap buton pr click kar or ninkal

                           <Button>
                                    <NavLink to="/">
                                    Home
                                    </NavLink>
                           </Button>


                           </p>
                  </div>
         </div>
   </Wrapper>
  )
}

const Wrapper =  styled.section`
 .container {
    padding: 9rem 0;
    text-align: center;

    h2 {
      font-size: 10rem;
    }

    h3 {
      font-size: 4.2rem;
    }

    p {
      margin: 2rem 0;
    }
  }
`

export default Error
