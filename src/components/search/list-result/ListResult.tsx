import { Component } from 'react';
import { Character } from '../../types';

type Props = {
  children?: JSX.Element;
  data?: number;
};

type State = {
  items: Array<Character>;
};

export class ListResult extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      items: [],
    };
  }

  async getData() {
    const url = 'https://swapi.dev/api/people/';
    const response = await fetch(url);
    const result = await response.json();
    this.setState({
      items: result.results,
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <>
        <ul>
          {this.state.items.map((item) => (
            <li key={item.name}>
              <ul>
                <li>{`Name: ${item.name}`}</li>
                <li>{`Gender: ${item.gender} cm`}</li>
                <li>{`Eye color: ${item.eye_color}`}</li>
                <li>{`Birth year: ${item.birth_year}`}</li>
              </ul>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
