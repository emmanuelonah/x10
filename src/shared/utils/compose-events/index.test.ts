import React from 'react';

import { composeEvents } from './index.util';

describe('composeEvents', () => {
  const mockedEvent = { target: { value: 'testValue' } } as unknown as React.SyntheticEvent<object>;

  it('should confirm that eventHandlers gets the rightful events', () => {
    const eventHandler1 = (event: typeof mockedEvent) => expect(event).toEqual(mockedEvent);
    const eventHandler2 = (event: typeof mockedEvent) => expect(event).toEqual(mockedEvent);
    const composedEventHandler = composeEvents(eventHandler1, eventHandler2);

    composedEventHandler(mockedEvent);
  });
});
