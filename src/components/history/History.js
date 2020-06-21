import React from 'react';
import MiniHistory from './MiniHistory';
import { Redirect } from 'react-router-dom';
import Results from '../Results/Results';
import './history.scss';

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
      currDetails: props.history ? props.history[0] : {},
      selectedIndex: props.history && props.history.length ? 0 : null,
      redirect: false,
    };
  }

  /**
   * helper function that with the onClick event handler from MiniHistory to deploy fetch details
   * @param   {object} e event listener object
   * @return  {void}
   */
  async showFetchDetails(index) {
    await this.setState({
      currDetails: this.props.history[index],
      selectedIndex: index,
    });
  }

  /**
   * helper function that works with the re-fetch button from MiniHistory to re-fetch a
   * previous request
   * @param   {object} e event listener object
   * @return  {void}
   */
  async handleSubmit(index) {
    await this.setState({ redirect: true });
    await this.props.fetchPrevReq(index);
  }

  render() {
    return this.state.redirect ? (
      <Redirect push to="/" />
    ) : (
      <div className="content" id="history">
        <h2>API Fetch History</h2>
        <p></p>
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
