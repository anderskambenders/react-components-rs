import { Component, FormEvent } from 'react';
import ErrorBtn from '../error-boundary/ErrorBtn';
import { Props } from '../types';
import './search.css';

type State = {
  value: string;
};

interface SearchProps extends Props {
  updateData?: (value: string) => void;
}

export default class Search extends Component<SearchProps, State> {
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
    console.log(this.inputVal);
  }

  onSubmit = (e: FormEvent) => {
    e.preventDefault();
    localStorage.setItem('valueKey', this.inputVal);
    if (this.props.updateData) {
      this.props.updateData(this.inputVal);
    }
  };

  componentDidMount(): void {
    if (localStorage.getItem('inputKey') !== null) {
      this.setState({ value: localStorage.getItem('inputKey') as string });
    }
  }

  render() {
    return (
      <div className="search__container">
        <form onSubmit={this.onSubmit.bind(this)}>
          <label className="search__label">
            Enter what you want to see:
            <input
              className="search__input"
              name="key"
              id="key"
              type="text"
              placeholder="enter search param"
              autoComplete="on"
              value={this.state.value}
              onChange={this.onChange.bind(this)}
            />
          </label>
          <button className="search__btn" type="submit">
            Search
          </button>
        </form>
        <ErrorBtn />
      </div>
    );
  }
}
