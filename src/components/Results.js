import React from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

/**
 * Component that returns the results from the API fetch. Uses JSON.stringify instead of my crummy recursion
 * @param   {object} props typical React props. Expects an output property
 * @return  {object}  JSX content to be rendered
 */
function Results(props) {
  const resContent =
    props.output && Object.keys(props.output).length && !props.loading ? (
      <pre>{JSON.stringify(props.output, null, 2)}</pre>
    ) : null;

  return (
    <div className="res-border">
      {props.loading ? <LoadingSpinner /> : resContent}
    </div>
  );
}

export default Results;
