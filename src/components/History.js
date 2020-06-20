import React from 'react';
// import MiniHistory from './MiniHistory';
// import { Link } from 'react-router-dom';

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
    this.state = {
      historyArr: [],
      currDetails: {},
    };

    for (let i = 0; i < props.fetchHistory.length; i++) {
      const currHistory = props.fetchHistory[i];
      this.state.historyArr.push(
        <li key={i} value={i} onClick={this.getFetchDetails(i)}>
          {currHistory.reqType} {currHistory.url}
        </li>
      );
    }

    this.setState({ currDetails: props.fetchHistory[0] });
  }

  getFetchDetails(index) {
    console.log('Are we getting index here?', index);
    this.setState({ currDetails: this.props.fetchHistory[index] });
  }

  render() {
    return (
      <div className="content margin-1">
        <h2>API Fetch History</h2>
        <div className="flex-row">
          <div className="big-history">
            <div className="mini-history">
              <h3>History</h3>
              <ul className="history-list">{this.state.historyArr}</ul>
            </div>
            <div className="fetch-details">
              <h3>Dem Details</h3>
              <div>{this.currDetails}</div>
            </div>
          </div>
        </div>
      </div>
    );

    // return (
    //   <div className="content margin-1">
    //     <h2>API Fetch History</h2>
    //     <div className="flex-row">
    //       <div className="big-history">
    //         <div className="mini-history">
    //           <h3>History</h3>
    //           <ul className="history-list">{this.state.historyArr}</ul>
    //         </div>
    //         <div className="fetch-details">
    //           <h3>Dem Details</h3>
    //           <div>{this.currDetails}</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

export default History;
