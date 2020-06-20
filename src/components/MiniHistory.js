import React from 'react';
// import { BrowserRouter, Link } from 'react-router-dom';

function MiniHistory(props) {
  const historyArr = [];
  let selectedIndex = props.selectedIndex;

  for (let i = 0; i < props.history.length; i++) {
    const currHistory = props.history[i];
    historyArr.push(
      <li
        key={i}
        value={i}
        onClick={updateActiveIndex}
        className={currHistory.error ? 'error' : null}
      >
        {currHistory.reqType} {currHistory.url}
      </li>
    );
  }

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
    <div className="mini-history">
      <h3>History</h3>
      <ul className="history-list">{historyArr}</ul>
      <button id="submit-btn" value={selectedIndex} onClick={handleSubmit}>
        Re-Fetch
      </button>
    </div>
  );
}

export default MiniHistory;
