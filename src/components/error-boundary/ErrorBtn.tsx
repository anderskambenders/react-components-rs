import { Component } from 'react';

type Props = {
  children?: JSX.Element;
};

type State = {
  IsClicked: boolean;
};

export default class ErrorBtn extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      IsClicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ IsClicked: true });
  }

  render() {
    if (this.state.IsClicked) {
      throw new Error('This is error');
    }
    return (
      <button className="errBtn" onClick={this.handleClick}>
        For Error
      </button>
    );
  }
}
