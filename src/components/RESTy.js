import React from 'react';
import Form from './Form';
import Results from './Results';
import MiniHistory from './MiniHistory';

/**
 * Parent component that passes props to Form and Results components and renders them
 *
 * @component
 * @example
 * return (
 *   <RESTy />
 * )
 */
class RESTy extends React.Component {
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

          /*eslint no-unused-vars: ["error", { "varsIgnorePattern": "entry" }]*/
          for (const entry of res.headers.entries()) {
            newHeaders[entry[0]] = entry[1];
          }

          this.setState({
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
            url: this.state.url,
            reqType: this.state.reqType,
          };

          this.props.fetchHistory.push(currOutput);

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

        this.props.fetchHistory.push(errorOutput);
        this.setState({
          output: errorOutput,
        });
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
  updateURL(val) {
    this.setState({ url: val });
  }

  /**
   * helper function that updates reqType state so that it can be used as a paramter for submission
   * @return  {void}
   */
  updateReqType(val) {
    this.setState({ reqType: val });
  }

  /**
   * helper function that updates reqbody state so that it can be used as a paramter for submission
   * when needed
   * @return  {void}
   */
  updateReqBody(val) {
    this.setState({ reqBody: val });
  }

  async fetchPrevReq(index) {
    const prevReq = this.props.fetchHistory[index];

    await this.setState({
      url: prevReq.url,
      reqType: prevReq.reqType,
      reqBody: prevReq.reqBody,
    });

    await this.apiFetch();
  }

  render() {
    return (
      <div className="content">
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
        <div className="res-and-history">
          <Results
            className="results"
            output={this.state.output}
            loading={this.state.loading}
          />
          <MiniHistory
            fetchHistory={this.props.fetchHistory || []}
            onHistClick={this.fetchPrevReq.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default RESTy;
