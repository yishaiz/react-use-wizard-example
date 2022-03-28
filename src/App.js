import * as React from 'react';
import { Wizard, useWizard } from 'react-use-wizard';
import { Step1 } from './Steps/Step1';
import { Step2 } from './Steps/Step2';
import { Step3 } from './Steps/Step3';

import './App.css';

function App() {
  return (
    <div style={{ margin: '120px' }}>
      <Wizard>
        <Step1 />
        <Step2 />
        <Step3 />
      </Wizard>
    </div>
  );
}

export default App;
