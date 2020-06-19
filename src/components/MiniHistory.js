import React from 'react';

function MiniHistory(props) {
  const histotryArr = [];

  if (props.history && props.history.length) {
    for (let i = 0; i < props.history.length; i++) {
      const currHistory = props.history[i];
      histotryArr.push(
        <li key={i}>
          <div>
            {currHistory.reqType} {currHistory.url}
          </div>
        </li>
      );
    }
  }

  return (
    <div className="mini-history">
      <h3>History</h3>
      <ul className="history-list">{histotryArr}</ul>
    </div>
  );
}

export default MiniHistory;
