import * as React from 'react';
import uuid from 'uuid/v4';

export const withAutcompleteOff = (InputComponent: React.FC) => (props: any) => {
  const newProps = {
    ...props,
    autoComplete: `rnd-${uuid()}`, // Random UUID
  }
  return <InputComponent {...newProps} />
}
