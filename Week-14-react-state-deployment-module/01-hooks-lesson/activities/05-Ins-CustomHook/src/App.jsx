import { useState, useEffect } from 'react';
import './App.css';
// Importing the custom hook from the utils folder.
import useUserStatus from './utils/useUserStatus';

function App() {
  const [developerState, setDeveloperState] = useState({
    excitementLevel: 1000,
    lifeLongLearner: true,
    name: 'Riley',
  });

  // Destructing the state and method from the custom hook.
  const { statusState, status } = useUserStatus();

  useEffect(() => {
    // Display the value in the console. Initially it is empty.
    console.log(statusState);
    // useEffect will trigger when the state changes.
  }, [statusState]);

  return (
    <div className="card pt-3">
      <div>Name: {developerState.name}</div>
      {/* JSX below to display the statusState from the hook. */}
      <div>Status: {statusState}</div>
      <div>Lifelong learner: {developerState.lifeLongLearner.toString()}</div>
      <div>Excitement Level: {developerState.excitementLevel}</div>
      <form className="mb-3 px-5">
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Enter your Status:{' '}
          </label>
          <input
            className="form-control mb-4 mt-3"
            id="status"
            // Using the spread operator on the status property from the custom hook will insert
            // the value attribute and the onChange event handler.
            {...status}
          />
        </div>
      </form>
      <div className="d-grid gap-2 mb-4 px-5">
        <button
          onClick={() =>
            setDeveloperState({
              ...developerState,
              excitementLevel: developerState.excitementLevel + 1000,
            })
          }
          className="btn btn-success"
        >
          Increase Excitement Level
        </button>

        <button
          onClick={() =>
            setDeveloperState({
              ...developerState,
              excitementLevel: developerState.excitementLevel - 1000,
            })
          }
          className="btn btn-success"
        >
          Decrease Excitement Level
        </button>
      </div>
    </div>
  );
}

export default App;
