import React from 'react';
import MiniHistory from './MiniHistory';

/**
 * Parent component that shows history of API requests
 *
 * @component
 * @example
 * return (
 *   <History />
 * )
 */
class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      historyArr: [],
      currDetails: props.fetchHistory ? props.fetchHistory[0] : null,
      index: null,
    };
  }

  getFetchDetails(index) {
    console.log('Are we getting index here?', index);
    this.setState({ currDetails: this.props.fetchHistory[index] });
  }

  handleSubmit(index) {
    console.log('did we make it back to big history?', index);
  }

  render() {
    return (
      <div className="content margin-1">
        <h2>API Fetch History</h2>
        <div className="flex-row">
          <div className="big-history">
            <MiniHistory
              fetchHistory={this.props.fetchHistory || []}
              onSubmit={this.handleSubmit}
            />
            <div className="fetch-details">Insert Fetch Details Here</div>
          </div>
        </div>
      </div>
    );
  }
}

export default History;
