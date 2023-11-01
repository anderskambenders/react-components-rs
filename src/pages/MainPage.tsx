import { Component } from 'react';
import Search from '../components/search/Search';
import ListResult from '../components/list-result/ListResult';
import { Props } from '../components/types';

type State = {
  searchVal: string;
};

export default class MainPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchVal: '',
    };
  }

  updateData = (value: string) => {
    this.setState({ searchVal: value });
  };

  render() {
    return (
      <>
        <Search updateData={this.updateData} />
        <ListResult data={this.state.searchVal} />
      </>
    );
  }
}
