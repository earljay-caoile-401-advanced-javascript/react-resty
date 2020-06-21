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
  const resContent = (
    <If
      condition={
        props.output && Object.keys(props.output).length && !props.loading
      }
    >
      <pre
        className={props.output && props.output.error ? 'error' : 'normal-res'}
      >
        {JSON.stringify(props.output, null, 2)}
      </pre>
    </If>
  );

  return (
    <If condition={props}>
      <div className="results">
        {props.loading ? <LoadingSpinner /> : resContent}
      </div>
    </If>
  );
}

export default Results;
