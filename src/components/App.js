
import { useState } from 'react';
import '../assets/scss/App.scss';
import Form from './Form';

function App() {
  const [subs, setSubs] = useState([]);
  const addSubs = (log) => {
    let logs = [...subs, log];
    setSubs(logs);
  }

  return (
    <div className="App container">
      <div className="col-12">
        <div className="main">
          <div className="row">
            <h2 className="title">Sing up for email updates</h2>
          </div>
          <div className="row">
            <p className="requires_field py-3">*Indicates Required Field</p>
          </div>
          <div className="row">
            <Form addSubsLog={addSubs} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

      // <img src={Check} height="20" width="20" alt="check field in form" />
      // <img src={TextExpandArrow} height="20" width="20" alt="check field in form" /> 
