import React from 'react';

/**
 * Main function that returns the JSX for the results component. Calls a helper function to do all the real magic
 * @param   {object} props typical React props. Expects an output property
 * @return  {object}  JSX content to be rendered
 */
function Results(props) {
  const resContent =
    props.output && Object.keys(props.output).length
      ? objHandler(props.output, 0)
      : null;
  return <div className="res-border">{resContent}</div>;
}

/**
 * Helper function that produces the HTML to be rendered in the results box.
 * Yeah, it uses recursion. You jealous?
 * @param   {object} obj event listener object triggered from the input textbox change
 * @param   {number} level number that helps determine the amount to "indent" on a given element

 * @return  {object}  JSX content to be rendered
 */
function objHandler(obj, level) {
  const resToRender = [];
  const rootLevel = level++;

  if (obj) {
    Object.keys(obj).forEach((key) => {
      const val = obj[key];
      const str = `"${key}": ${val}`;
      resToRender.push(
        Array.isArray(val) ? (
          <div key={key + level}>
            <div style={{ textIndent: 20 * rootLevel + 'px' }}>"{key}": [</div>
            <div>{objHandler(val, level)} ]</div>
          </div>
        ) : typeof val === 'object' ? (
          <div key={key + level}>
            <div style={{ textIndent: 20 * rootLevel + 'px' }}>
              "{key}": <>{'{'}</>
              {objHandler(val, level)} <div>{'}'}</div>
            </div>
          </div>
        ) : (
          <div style={{ textIndent: 20 * rootLevel + 'px' }} key={key + level}>
            {str}
          </div>
        )
      );
    });
  }

  return (
    <div key={rootLevel + 'rootdiv'} className={'result-root-' + rootLevel}>
      {resToRender.length ? resToRender : null}
    </div>
  );
}

export default Results;
