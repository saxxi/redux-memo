import * as React from 'react';
import styled from 'styled-components';

const FillBg = styled.div`
  background: #ffffffb3;
  background: #ffcc00b3;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

type Props = {
  loading: boolean
}

export const FillLoading: React.FC<Props> = ({loading}) => (
  <>
    {loading && <FillBg>Loading...</FillBg>}
  </>
)
