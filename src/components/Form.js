import React from 'react';

/**
 * Main function that returns the JSX for the Form component
 * @param   {object} props typical React props
 * @return  {object}  JSX content to be rendered
 */
function Form(props) {
  /**
   * helper function that works as an event listener for a change in input text
   * @param   {object} e event listener object
   * @return  {void}
   */
  function handleChange(e) {
    props.onChange(e.target.value, props.stateKey);
  }

  /**
   * helper function that works as an event listener for the submit button click or enter press
   * @param   {object} e event listener object
   * @return  {void}
   */
  function handleSubmit(e) {
    if (e.key === 'Enter' || (e.target && e.target.value === 'Submit')) {
      props.onKeyPress();
    }
  }

  /**
   * helper function that works as an event listener for req type button clicks
   * @param   {object} e event listener object
   * @return  {void}
   */
  function handleBtnClick(e) {
    const prevSelected = document.querySelector('.selected-btn');
    prevSelected.classList.remove('selected-btn');
    e.target.classList.add('selected-btn');
    props.onClick(e.target.value);
  }

  return (
    <>
      <div className="req-type">
        <button
          value="GET"
          className="selected-btn"
          id="get-btn"
          onClick={handleBtnClick}
        >
          GET
        </button>
        <button value="POST" id="post-btn" onClick={handleBtnClick}>
          POST
        </button>
        <button value="PUT" id="put-btn" onClick={handleBtnClick}>
          PUT
        </button>
        <button value="PATCH" id="patch-btn" onClick={handleBtnClick}>
          PATCH
        </button>
        <button value="DELETE" id="delete-btn" onClick={handleBtnClick}>
          DELETE
        </button>
      </div>
      <div className="form-input">
        <label>{props.label}</label>
        <input
          className="textbox"
          type={props.type}
          value={props.value}
          onChange={handleChange}
          onKeyPress={handleSubmit}
        />
        <button value="Submit" id="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default Form;
