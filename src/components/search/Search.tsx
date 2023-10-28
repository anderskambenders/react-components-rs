import { Component, FormEvent } from 'react';
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

  saveStringToLocalStorage(str: string) {
    const savedStrings =
      JSON.parse(localStorage.getItem('inputKey') as string) || [];
    savedStrings.push(str);
    localStorage.setItem('inputKey', JSON.stringify(savedStrings));
  }

  onChange(event: { target: { value: string } }) {
    this.setState({ value: event.target.value });
    this.inputVal = event.target.value;
    console.log(this.inputVal);
  }

  onSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.saveStringToLocalStorage(this.inputVal);
    this.props.updateData(this.inputVal);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>
            Enter what you want to see:
            <input
              name="key"
              id="key"
              type="text"
              placeholder="enter search param"
              autoComplete="on"
              value={this.state.value}
              onChange={this.onChange.bind(this)}
            />
          </label>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}
