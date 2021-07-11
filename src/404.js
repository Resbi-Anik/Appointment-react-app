import React from 'react'
import styled from "styled-components";

const Not= styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
`

const NotFound=()=>{
    return(
        <Not>404 not found</Not>
    )
}

export default NotFound