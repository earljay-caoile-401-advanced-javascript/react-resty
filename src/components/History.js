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
    console.log('Do we have props?', props);
  }

  fetchPrevReq(index) {
    console.log('Are we getting index here?', index);
  }

  render() {
    return (
      <div className="content flex-row">
        <h2>API Fetch History</h2>
        <div className="big-history">
          <MiniHistory
            fetchHistory={this.props.fetchHistory || []}
            onHistClick={this.fetchPrevReq.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default History;
