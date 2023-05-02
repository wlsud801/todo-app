import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../ele/Button'

function ShowCard({value}) {
  
  return (<CardContents>{value}</CardContents>)
}

export default ShowCard

const CardContents = styled.p`
  min-height:170px;
`