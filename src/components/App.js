
import '../assets/scss/App.scss';
import Form from './Form';

function App() {


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
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

      // <img src={Check} height="20" width="20" alt="check field in form" />
      // <img src={TextExpandArrow} height="20" width="20" alt="check field in form" /> 
