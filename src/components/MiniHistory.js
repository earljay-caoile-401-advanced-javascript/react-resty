import React from 'react';

function MiniHistory(props) {
  const histotryArr = [];

  for (let i = 0; i < props.fetchHistory.length; i++) {
    const currHistory = props.fetchHistory[i];
    histotryArr.push(
      <li key={i} value={i} onClick={handleHistClick}>
        {currHistory.reqType} {currHistory.url}
      </li>
    );
  }

  function handleHistClick(e) {
    props.onHistClick(e.target.value);
  }

  return (
    <div className="mini-history">
      <h3>History</h3>
      <ul className="history-list">{histotryArr}</ul>
    </div>
  );
}

export default MiniHistory;
