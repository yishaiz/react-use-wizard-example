import * as React from 'react';
import { Wizard, useWizard } from 'react-use-wizard';
import { Step1 } from './Steps/Step1';
import { Step2 } from './Steps/Step2';
import { Step3 } from './Steps/Step3';

import './App.css';

const Header = () => <p>I am the header component</p>;
const Footer = () => <p>I am the footer component</p>;

function App() {
  return (
    <div style={{ margin: '120px' }}>
    <Wizard startIndex={0} header={<Header />} footer={<Footer />}>
      <Step1 />
        <Step2 />
        <Step3 />
      </Wizard>
    </div>
  );
}

export default App;
