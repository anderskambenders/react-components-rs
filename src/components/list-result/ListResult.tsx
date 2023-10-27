import { Component } from 'react';
import { Character } from '../types';

type State = {
  items: Array<Character>;
};

type Props = {
  children?: JSX.Element;
  data?: string;
};

export class ListResult extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      items: [],
    };
  }

  async getData() {
    const url = this.props.data
      ? `https://swapi.dev/api/people/?search=${this.props.data}`
      : 'https://swapi.dev/api/people/';
    console.log(url);
    const response = await fetch(url);
    const result = await response.json();
    this.setState({
      items: result.results,
    });
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps: { data: string | undefined }): void {
    if (this.props.data !== prevProps.data) {
      this.getData();
      console.log(this.props);
    }
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
