import * as React from 'react';
import uuid from 'uuid/v4';

export const withAutcompleteOff = (InputComponent) => (props) => {
  const newProps = {
    ...props,
    autoComplete: `rnd-${uuid()}`, // Random UUID
  }
  return <InputComponent {...newProps} />
}
