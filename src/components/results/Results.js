import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import If from '../if/If';
import './results.scss';

/**
 * Component that returns the results from the API fetch. Uses JSON.stringify instead of my crummy recursion
 * @param   {object} props typical React props. Expects an output property
 * @return  {object}  JSX content to be rendered
 */
function Results(props) {
  const resContent =
    props.output && Object.keys(props.output).length ? (
      <pre
        className={props.output && props.output.error ? 'error' : 'normal-res'}
      >
        {JSON.stringify(props.output, null, 2)}
      </pre>
    ) : (
      <h3>Please submit an API request to see the results here.</h3>
    );

  return (
    <div className="results">
      <If condition={props}>
        {props.loading ? <LoadingSpinner /> : resContent}
      </If>
    </div>
  );
}

export default Results;
