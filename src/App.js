import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import History from './components/History/History';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Results from './components/Results/Results';
import MiniHistory from './components/History/MiniHistory';

/**
 * Parent component that returns the header, core content, and footer
 *
 * @component
 * @example
 * return (
 *   <h1>RESTy</h1>
 *   <RESTy />
 *   <div>Created by Earl Jay Caoile</div>
 * )
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: {},
      count: 0,
      results: [],
      url: '',
      reqType: 'GET',
      reqBody: null,
      output: {},
      loading: false,
      history: [],
    };
  }

  /**
   * helper function that updates states on user submission (button click or enter key)
   * @return  {void}
   */
  async apiFetch() {
    let baseURL = this.state.url;
    if (baseURL) {
      try {
        this.setState({
          loading: true,
        });

        const res = await fetch(baseURL, {
          method: this.state.reqType,
          headers: {
            'Content-Type': 'application/json',
          },
          body:
            this.state.reqType === 'POST' ||
            this.state.reqType === 'PUT' ||
            this.state.reqType === 'PATCH'
              ? JSON.stringify(JSON.parse(this.state.reqBody))
              : null,
        });

        if (res) {
          const jsonRes = await res.json();
          const newHeaders = {};

          /*eslint-disable no-unused-vars*/
          for (const entry of res.headers.entries()) {
            newHeaders[entry[0]] = entry[1];
          }
          /*eslint-disable no-unused-vars*/

          await this.setState({
            results: jsonRes.results || jsonRes,
            count: jsonRes.count || 1,
            headers: newHeaders,
          });

          if (this.state.results.error) {
            throw new Error('500 error');
          }

          const currOutput = {
            headers: this.state.headers,
            results: this.state.results,
            count: this.state.count,
            url: baseURL,
            reqType: this.state.reqType,
          };

          // this.state.history.push(currOutput);
          this.updateHistory(currOutput);

          this.setState({
            output: currOutput,
          });
        }
      } catch (e) {
        console.error('Error: could not perform operation.', e.message);

        const errorOutput =
          e.message === '500 error'
            ? this.state.results
            : {
                error: 'could not perform operation',
                message: e.message,
              };

        errorOutput.url = baseURL;
        errorOutput.reqType = this.state.reqType;

        this.setState({
          output: errorOutput,
        });

        // this.state.history.push(errorOutput);
      } finally {
        this.setState({
          loading: false,
        });
      }
    }
  }

  /**
   * helper function that updates url state so that it can be passed to the Form component as props
   * @return  {void}
   */
  async updateURL(val) {
    await this.setState({ url: val });
  }

  /**
   * helper function that updates reqType state so that it can be used as a paramter for submission
   * @return  {void}
   */
  async updateReqType(val) {
    await this.setState({ reqType: val });
  }

  /**
   * helper function that updates reqbody state so that it can be used as a paramter for submission
   * when needed
   * @return  {void}
   */
  async updateReqBody(val) {
    await this.setState({ reqBody: val });
  }

  /**
   * helper function that re-runs a previous request with the same parameters as before
   * @param   {object} index number for the index in the history array
   * @return  {void}
   */
  async fetchPrevReq(index) {
    const prevReq = this.state.history[index];
    if (prevReq) {
      await this.setState({
        url: prevReq.url,
        reqType: prevReq.reqType,
        reqBody: prevReq.reqBody,
      });

      await this.apiFetch();
    }
  }

  /**
   * helper function that determines whether a request should be added to the history array or not
   * @param   {object} currOutput object for the request being done
   * @return  {void}
   */
  updateHistory(currOutput) {
    /*eslint-disable no-unused-vars*/
    for (const prevReq of this.state.history) {
      if (
        prevReq.url === currOutput.url &&
        prevReq.reqType === currOutput.reqType &&
        prevReq.reqBody === currOutput.reqBody
      ) {
        return;
      }
    }
    /*eslint-enable no-unused-vars*/
    this.state.history.push(currOutput);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <div id="resty" className="content">
                <Form
                  className="form-url"
                  label="URL"
                  value={this.state.url}
                  type="text"
                  stateKey="url"
                  onChange={this.updateURL.bind(this)}
                  onReqBoxChange={this.updateReqBody.bind(this)}
                  onSubmit={this.apiFetch.bind(this)}
                  onClick={this.updateReqType.bind(this)}
                />
                <div className="res-and-history flex-row">
                  <Results
                    className="results"
                    output={this.state.output}
                    loading={this.state.loading}
                  />
                  <MiniHistory
                    history={this.state.history || []}
                    onSubmit={this.fetchPrevReq.bind(this)}
                  />
                </div>
              </div>
            </Route>
            <Route exact path="/history">
              <History
                history={this.state.history || []}
                fetchPrevReq={this.fetchPrevReq.bind(this)}
              />
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
