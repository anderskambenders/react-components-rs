import { Component } from 'react';
import Search from '../components/search/Search';
import { ListResult } from '../components/list-result/ListResult';

type Props = {
  children?: JSX.Element;
};

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
      <div className="pc">
        <div className="pageWrapper">
          <div className="mainPage">
            <Search updateData={this.updateData} />
            <ListResult data={this.state.searchVal} />
          </div>
        </div>
      </div>
    );
  }
}
