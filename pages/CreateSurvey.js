// QuestionnaireCreationPage.js

/**
QuestionnaireCreationPage: Use this page to create questionnaires. 
Questions are stored in the component state and can be previewed.
In a real application, you would likely save these questions
to a backend or context.
*/
import React, { useState } from 'react';

const QuestionnaireCreationPage = () => {
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState('');
  const [questionType, setQuestionType] = useState('multiple-choice');
  const [options, setOptions] = useState(['']);

  const handleAddQuestion = () => {
    setQuestions([...questions, { text: questionText, type: questionType, options }]);
    setQuestionText('');
    setOptions(['']);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  return (
    <div>
      <h1>Create Questionnaire</h1>
      <div>
        <label>Question Text:</label>
        <input
          type="text"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
        />
      </div>
      <div>
        <label>Question Type:</label>
        <select
          value={questionType}
          onChange={(e) => setQuestionType(e.target.value)}
        >
          <option value="multiple-choice">Multiple Choice</option>
          <option value="open-ended">Open Ended</option>
        </select>
      </div>
      {questionType === 'multiple-choice' && (
        <div>
          <label>Options:</label>
          {options.map((option, index) => (
            <div key={index}>
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
            </div>
          ))}
          <button onClick={handleAddOption}>Add Option</button>
        </div>
      )}
      <button onClick={handleAddQuestion}>Add Question</button>

      <div>
        <h2>Questions Preview:</h2>
        <ul>
          {questions.map((q, index) => (
            <li key={index}>
              <strong>{q.text}</strong> - {q.type}
              {q.type === 'multiple-choice' && (
                <ul>
                  {q.options.map((opt, i) => (
                    <li key={i}>{opt}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestionnaireCreationPage;
