// services/questionnaireService.js

import axios from 'axios';

const isMock = process.env.REACT_APP_MOCK_API === 'true';

// Mock data
const mockQuestionnaires = [
  { id: 1, questions: [{ text: 'What is your favorite color?', type: 'multiple-choice', options: ['Red', 'Blue', 'Green'] }] },
  { id: 2, questions: [{ text: 'Tell us about your favorite hobby.', type: 'open-ended' }] },
];

const mockSubmissions = [
  { id: 1, responses: [{ question: 'What is your favorite color?', answer: 'Blue' }] },
];

// Real API calls
const api = {
  createQuestionnaire: async (questionnaire) => {
    const response = await axios.post('/api/questionnaires', questionnaire);
    return response.data;
  },
  submitQuestionnaire: async (submission) => {
    const response = await axios.post('/api/submissions', submission);
    return response.data;
  },
  getQuestionnaires: async () => {
    const response = await axios.get('/api/questionnaires');
    return response.data;
  },
};

// Mock API calls
const mockApi = {
  createQuestionnaire: async (questionnaire) => {
    const id = mockQuestionnaires.length + 1;
    mockQuestionnaires.push({ ...questionnaire, id });
    return { id };
  },
  submitQuestionnaire: async (submission) => {
    const id = mockSubmissions.length + 1;
    mockSubmissions.push({ ...submission, id });
    return { id };
  },
  getQuestionnaires: async () => {
    return mockQuestionnaires;
  },
};

// Service functions
const createQuestionnaire = async (questionnaire) => {
  return isMock ? mockApi.createQuestionnaire(questionnaire) : api.createQuestionnaire(questionnaire);
};

const submitQuestionnaire = async (submission) => {
  return isMock ? mockApi.submitQuestionnaire(submission) : api.submitQuestionnaire(submission);
};

const getQuestionnaires = async () => {
  return isMock ? mockApi.getQuestionnaires() : api.getQuestionnaires();
};

export { createQuestionnaire, submitQuestionnaire, getQuestionnaires };



////////////////////////////////
// ExampleComponent.js
// import React, { useState, useEffect } from 'react';
// import { createQuestionnaire, submitQuestionnaire, getQuestionnaires } from './services/questionnaireService';

// const ExampleComponent = () => {
//   const [questionnaires, setQuestionnaires] = useState([]);
//   const [newQuestionnaire, setNewQuestionnaire] = useState({ questions: [] });

//   useEffect(() => {
//     const fetchQuestionnaires = async () => {
//       const data = await getQuestionnaires();
//       setQuestionnaires(data);
//     };
//     fetchQuestionnaires();
//   }, []);

//   const handleCreateQuestionnaire = async () => {
//     const result = await createQuestionnaire(newQuestionnaire);
//     console.log('Created Questionnaire ID:', result.id);
//     // Optionally fetch updated list of questionnaires
//   };

//   const handleSubmitQuestionnaire = async (submission) => {
//     const result = await submitQuestionnaire(submission);
//     console.log('Submitted Questionnaire ID:', result.id);
//   };

//   return (
//     <div>
//       <h1>Questionnaires</h1>
//       <button onClick={handleCreateQuestionnaire}>Create Questionnaire</button>
//       {/* Render list of questionnaires and other components */}
//     </div>
//   );
// };

// export default ExampleComponent;
