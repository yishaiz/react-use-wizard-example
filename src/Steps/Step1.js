import { useWizard } from 'react-use-wizard';

const Step1 = () => {
  const { handleStep, previousStep, nextStep } = useWizard();

  handleStep(() => {
    alert('Going to step 2');
  });

  return (
    <>
      <h2>Step 1</h2>
      <input type='text' width='100px' />
      <hr />
      <button onClick={() => previousStep()}>Previous</button>

      <button onClick={() => nextStep()}>Next</button>
    </>
  );
};

export { Step1 };
