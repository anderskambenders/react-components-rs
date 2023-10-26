import { Component } from 'react';

export default class Search extends Component {
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
          />
        </label>
        <button>Search</button>
      </div>
    );
  }
}
