import * as React from 'react';
import styled from 'styled-components';

export const RoomListerComponent: React.FC = () => {
  return (
    <StyledRoomLister>
      <FormGroup>
        <h3>Users</h3>
        <ul>
          <li>Pierre</li>
          <li>Philippa</li>
        </ul>
      </FormGroup>
      <FormGroup>
        <h3>Groups</h3>
        <ul>
          <li>Family</li>
          <li>Friends</li>
          <li>Work</li>
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
