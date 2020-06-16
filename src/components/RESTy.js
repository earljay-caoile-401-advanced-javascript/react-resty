import React from 'react';
import Form from './Form';
import Results from './Results';

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
      output: {},
    };
  }

  /**
   * helper function that updates states on user submission (button click or enter key)
   * @return  {void}
   */
  async apiFetch() {
    let baseURL = this.state.url;
    console.log('Did we make it to apiFetch?', baseURL);
    if (baseURL) {
      try {
        console.log('beginning of try block');
        let res = await fetch(baseURL, {
          method: this.state.reqType,
          headers: {
            Accept: 'application/json',
          },
        });
        console.log('Did we get a res?', res);
        const jsonRes = await res.json();
        const newHeaders = {};
        console.log('did we get jsonRes?', jsonRes);
        for (let entry of res.headers.entries()) {
          newHeaders[entry[0]] = entry[1];
        }

        await this.setState({
          results: jsonRes.results || jsonRes,
          count: jsonRes.count || 1,
          headers: newHeaders,
        });

        await this.setState({
          output: {
            headers: this.state.headers,
            results: this.state.results,
            count: this.state.count,
            url: this.state.url,
            reqType: this.state.reqType,
          },
        });
      } catch (e) {
        console.error('Error: could not perform operation', e.message);
        this.setState({
          output: { error: 'could not perform operation!' },
        });
      }
    }
  }

  /**
   * helper function that updates url state so that it can be passed to the Form component as props
   * @return  {void}
   */
  async updateURL(val) {
    await this.setState({ ...this.state, url: val });
  }

  /**
   * helper function that updates reqType state so that it can be used as a paramter for submission
   * @return  {void}
   */
  async updateReqType(val) {
    await this.setState({ reqType: val });
  }

  render() {
    return (
      <>
        <Form
          className="form-url"
          label="URL"
          value={this.state.url}
          type="text"
          stateKey="url"
          onChange={this.updateURL.bind(this)}
          onKeyPress={this.apiFetch.bind(this)}
          onClick={this.updateReqType.bind(this)}
        />
        <Results className="results" output={this.state.output} />
      </>
    );
  }
}

export default RESTy;
