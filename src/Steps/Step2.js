import { useWizard } from 'react-use-wizard';

const Step2 = () => {
  const { handleStep, previousStep, nextStep } = useWizard();

  return (
    <>
      <h2>Step 2</h2>
      <input type='text' width='100px' />
      <hr />
      <button onClick={() => previousStep()}>Previous</button>

      <button onClick={() => nextStep()}>Next</button>
    </>
  );
};

export { Step2 };
