import React from 'react';

import icnEmpty from 'design-system/assets/icn-empty.png';

type EmptyPropTypes = {
  alt?: string;
};

export function Empty(props: EmptyPropTypes) {
  return <img src={icnEmpty} alt={props.alt ?? 'Empty'} />;
}
