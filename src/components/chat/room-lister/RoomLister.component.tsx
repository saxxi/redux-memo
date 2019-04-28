import * as React from 'react';
import styled from 'styled-components';

export const RoomListerComponent: React.FC = () => {
  return (
    <StyledRoomLister>
      <FormGroup>
        <h3>Utenti</h3>
        <ul>
          <li>ciao</li>
          <li>ciao</li>
          <li>ciao</li>
          <li>ciao</li>
        </ul>
      </FormGroup>
      <FormGroup>
        <h3>Utenti</h3>
        <ul>
          <li>ciao</li>
          <li>ciao</li>
          <li>ciao</li>
          <li>ciao</li>
        </ul>
      </FormGroup>
    </StyledRoomLister>
  );
}

const StyledRoomLister = styled.div`
  overflow: auto;
  width: 100px;
`

const FormGroup = styled.div `
  padding: 10px 15px;
`
