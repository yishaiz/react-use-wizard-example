import { useWizard } from 'react-use-wizard';
import { useState } from 'react';

const Step1 = () => {
  const {
    isLoading,
    isLastStep,
    isFirstStep,
    activeStep,
    stepCount,
    previousStep,
    nextStep,
    goToStep,
    handleStep,
  } = useWizard();

  const [data, setData] = useState('');
  handleStep(() => {
    alert('Going to step 2');
  });

  return (
    <>
      <h2>Step 1</h2>
      {isLoading && <p>loading...</p>}
      <input
        type='text'
        width='100px'
        value={data}
        onChange={(event) => setData(event.target.value)}
      />
      <hr />
      <button onClick={() => previousStep()}>Previous</button>
      <button onClick={() => nextStep()}>Next</button>
      <button onClick={() => goToStep(2)}>Go to the last step</button>
      <div>
        Has next step: {!isLastStep ? '✅' : '⛔'}
        <br />
        Has previous step : {!isFirstStep ? '✅' : '⛔'}
      </div>
      Active step: {activeStep + 1} <br />
    </>
  );
};

export { Step1 };
