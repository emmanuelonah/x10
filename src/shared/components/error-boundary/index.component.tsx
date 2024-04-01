import React from 'react';

import { __DEV__ } from 'shared/utils';
import { Heading2 } from 'shared/components';

import iconJson from './icon-json.png';
import iconRefresh from './icon-refresh.png';

import { Wrapper, Refresh } from './index.styles';

type ErrorBoundaryPropTypes = {
  children: React.ReactNode;
};

type ErrorBoundaryStateTypes = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<
  ErrorBoundaryPropTypes,
  ErrorBoundaryStateTypes
> {
  constructor(props: ErrorBoundaryPropTypes) {
    super(props);

    this.state = { hasError: false } as ErrorBoundaryStateTypes;
  }
  public static getDerivedStateFromError(_error: Error) {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    window.x10.println?.group('COMPONENT RENDERING ERROR 🚨');
    window.x10.println?.error({ error, errorInfo });
    window.x10.println?.groupEnd();
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Wrapper>
          <img src={iconJson} alt="" />
          <Heading2>Oops, compilation error {`</>`}</Heading2>
          <Refresh type="button" onClick={window.location.reload}>
            <img src={iconRefresh} alt="" />
            <span>Try again?</span>
          </Refresh>
        </Wrapper>
      );
    }

    return this.props.children;
  }
}
