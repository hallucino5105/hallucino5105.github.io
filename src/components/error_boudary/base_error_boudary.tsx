import React from "react";

type Props = {
  onError?: (err: unknown) => void;
  fallbackRender: (err: unknown) => React.ReactNode;
  children?: React.ReactNode;
};

type State = {
  caught: unknown;
};

export class BaseErrorBoundary extends React.Component<Props, State> {
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      caught: null,
    };
  }

  static getDerivedStateFromError(caught: unknown) {
    return { caught };
  }

  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    this.props.onError?.(error);
  }

  render() {
    const { caught } = this.state;
    return caught ? this.props.fallbackRender(caught) : this.props.children;
  }
}
