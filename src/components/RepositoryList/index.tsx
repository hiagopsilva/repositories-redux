import React, { Component } from 'react';

interface Repository {
  id: Number;
  name: String;
}
interface Props {
  repositories: Repository[]
}

interface State {
  newRepository?: string
}

export default class RepositoryList extends Component {

  componentDidMount() {}
  render() {    
    return (
      <ul>

      </ul>
    );
  }
}
