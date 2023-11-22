import { Component } from 'react';

type State = {
  hasError: boolean;
};
export interface Props {
  children?: JSX.Element;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops something went wrong</h1>;
    }

    return this.props.children;
  }
}
