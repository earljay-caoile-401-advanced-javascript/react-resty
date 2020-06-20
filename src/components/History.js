import React from 'react';
import MiniHistory from './MiniHistory';
import { Redirect } from 'react-router-dom';
import Results from './Results';
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
      currDetails: props.history ? props.history[0] : null,
      selectedIndex: null,
      redirect: false,
    };
  }

  async showFetchDetails(index) {
    await this.setState({
      currDetails: this.props.history[index],
      selectedIndex: index,
    });
  }

  async handleSubmit() {
    await this.setState({ redirect: true });
    await this.props.fetchPrevReq(this.state.selectedIndex);
  }

  render() {
    return this.state.redirect ? (
      <Redirect push to="/" />
    ) : (
      <div className="content margin-1">
        <h2>API Fetch History</h2>
        <div className="big-history flex-row">
          <MiniHistory
            history={this.props.history || []}
            showFetchDetails={this.showFetchDetails.bind(this)}
            onSubmit={this.handleSubmit.bind(this)}
            selectedIndex={this.state.selectedIndex}
          />
          <Results className="results" output={this.state.currDetails} />
        </div>
      </div>
    );
  }
}

export default History;
