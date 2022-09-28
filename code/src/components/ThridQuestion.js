/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const greenClosets = ['Second Hand', 'Fast Fashion Brand']

const ThridQuestion = ({ nextQuestion, onThridQuestionChange, thrid }) => {
  return (
    <section className="section">
      <div className="content-wrap">
        <h1>Green your closet</h1>
        <p>In what kind of stores do you usually buy your clothes and accessories?</p>
        <form className="form-radio-button" onSubmit={(e) => e.preventDefault()}>
          {greenClosets.map((clothes) => (
            <label key={clothes} htmlFor="green">
              <input
                type="radio"
                value={clothes}
                onChange={onThridQuestionChange}
                checked={clothes}
                id="green"
                name="green" />
              {clothes}
            </label>
          ))}
          <button type="submit" onClick={nextQuestion} className="button" disabled={thrid === ''}>
          Submit Answers!
          </button>
        </form>

      </div>

    </section>

  )
}

export default ThridQuestion;