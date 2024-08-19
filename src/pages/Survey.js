// QuestionnaireServingPage.js

/**
QuestionnaireServingPage: Displays the questionnaire and allows 
users to submit their responses. This example uses mock data; 
in a real application, you would fetch the questionnaire data
 from a backend.

*/
import React, { useState } from 'react';

const mockQuestions = [
  { text: 'What is your favorite color?', type: 'multiple-choice', options: ['Red', 'Blue', 'Green'] },
  { text: 'Tell us about your favorite hobby.', type: 'open-ended' },
];

const QuestionnaireServingPage = () => {
  const [responses, setResponses] = useState({});

  const handleResponseChange = (questionIndex, optionIndex, value) => {
    setResponses({
      ...responses,
      [questionIndex]: optionIndex !== undefined ? { optionIndex, value } : { value },
    });
  };

  const handleSubmit = () => {
    console.log('Responses submitted:', responses);
  };

  return (
    <div>
      <h1>Questionnaire</h1>
      {mockQuestions.map((q, index) => (
        <div key={index}>
          <p>{q.text}</p>
          {q.type === 'multiple-choice' ? (
            <div>
              {q.options.map((opt, optIndex) => (
                <div key={optIndex}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={opt}
                    onChange={() => handleResponseChange(index, optIndex, opt)}
                  />
                  {opt}
                </div>
              ))}
            </div>
          ) : (
            <div>
              <textarea
                rows="4"
                cols="50"
                onChange={(e) => handleResponseChange(index, undefined, e.target.value)}
              />
            </div>
          )}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default QuestionnaireServingPage;
