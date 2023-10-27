import { Component } from 'react';
// import { Props } from '../types';

type State = {
  value: string;
};

type Props = {
  children?: JSX.Element;
  updateData: (value: string) => void;
};

export default class Search extends Component<Props, State> {
  inputVal: string;
  constructor(props: Props) {
    super(props);
    this.state = {
      value: '',
    };
    this.inputVal = '';
  }

  onChange(event: { target: { value: string } }) {
    this.setState({ value: event.target.value });
    this.inputVal = event.target.value;
    localStorage.setItem('inputKey', this.inputVal);
    console.log(this.inputVal);
  }

  onSubmit() {
    this.props.updateData(this.inputVal);
  }

  render() {
    return (
      <div>
        <label>
          Enter what you want to see:
          <input
            name="key"
            id="key"
            type="text"
            placeholder="enter search param"
            value={this.state.value}
            onChange={this.onChange.bind(this)}
          />
        </label>
        <button onClick={this.onSubmit.bind(this)}>Search</button>
      </div>
    );
  }
}
