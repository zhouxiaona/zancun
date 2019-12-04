import React from 'react';
import { withRouter } from 'react-router-dom';

class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <h1>NotFound</h1>
    );
  }
}

export default withRouter(NotFound);
