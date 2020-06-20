import React from 'react';

function MiniHistory(props) {
  const historyArr = [];
  let selectedIndex = null;

  for (let i = 0; i < props.fetchHistory.length; i++) {
    const currHistory = props.fetchHistory[i];
    historyArr.push(
      <li key={i} value={i} onClick={updateActiveIndex}>
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
    console.log('What is e.target?', e.target);
    selectedIndex = e.target.value;
    console.log('selected index is now this:', selectedIndex);
  }

  function handleHistClick(e) {
    console.log('What is e?', e);
    if (selectedIndex !== null) {
      props.onHistClick(selectedIndex);
      const prevSelected = document.querySelector('.selected-btn');
      if (prevSelected) {
        prevSelected.classList.remove('selected-btn');
      }
    }
  }

  return (
    <div className="mini-history">
      <h3>History (click query to re-fetch)</h3>
      <ul className="history-list">{historyArr}</ul>
      <button id="submit-btn" value={selectedIndex} onClick={handleHistClick}>
        Submit
      </button>
    </div>
  );
}

export default MiniHistory;
