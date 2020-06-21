import React from 'react';
import If from '../if/If';

/**
 * Component that returns a list of fetched api calls
 * @param   {object} props typical React props. Expects a history property
 * (array) and a selectedIndex property (number)
 * @return  {object}  JSX content to be rendered
 */
function MiniHistory(props) {
  const historyArr = [];
  let selectedIndex = props.selectedIndex;

  for (let i = 0; i < props.history.length; i++) {
    const currHistory = props.history[i];
    historyArr.push(
      <li key={i} value={i} onClick={updateActiveIndex}>
        {currHistory.reqType} {currHistory.url}
      </li>
    );
  }

  /**
   * function that works as a event listener for a mouse click on a list item
   * @param   {object} e event listener object
   * @return  {void}
   */
  function updateActiveIndex(e) {
    const prevSelected = document.querySelector('.selected-btn');

    if (prevSelected) {
      prevSelected.classList.remove('selected-btn');
    }

    e.target.classList.add('selected-btn');
    selectedIndex = e.target.value;

    if (props.showFetchDetails) {
      props.showFetchDetails(selectedIndex);
    }
  }

  /**
   * function that works as a event listener for a mouse click on the re-fetch button
   * @param   {object} e event listener object
   * @return  {void}
   */
  function handleSubmit() {
    if (selectedIndex !== null) {
      const prevSelected = document.querySelector('.selected-btn');

      if (prevSelected) {
        prevSelected.classList.remove('selected-btn');
      }
      props.onSubmit(selectedIndex);
    }
  }

  return (
    <If condition={props}>
      <div className="mini-history">
        <h3>History</h3>
        <ul className="history-list">{historyArr}</ul>
        <button className="submit-btn" onClick={handleSubmit}>
          Re-Fetch
        </button>
      </div>
    </If>
  );
}

export default MiniHistory;
