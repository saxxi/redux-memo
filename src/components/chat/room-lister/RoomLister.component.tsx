import * as React from 'react';
import styled from 'styled-components';

export const RoomListerComponent: React.FC = () => {
  return (
    <StyledRoomLister>
      <div className="room-group">
        <h3>Utenti</h3>
        <ul>
          <li>ciao</li>
          <li>ciao</li>
          <li>ciao</li>
          <li>ciao</li>
        </ul>
      </div>
      <div className="room-group">
        <h3>Utenti</h3>
        <ul>
          <li>ciao</li>
          <li>ciao</li>
          <li>ciao</li>
          <li>ciao</li>
        </ul>
      </div>
    </StyledRoomLister>
  );
}

const StyledRoomLister = styled.div`
  overflow: auto;
  width: 100px;
`
