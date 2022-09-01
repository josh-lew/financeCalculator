import logo from './logo.svg';
import './App.scss';
import Splash from './Components/Splash';
import FinanceInstructions from './Components/FinanceInstructions';
import FinanceForm from './Components/FinanceForm';
import FormContainer from './Components/FormContainer';
import SubmitButton from './Components/SubmitButton';

function App() {
  return (
      <>
      <section className="container col-7">
        <div className='row justify-content-center'>
          <Splash />
        </div>
        <div>
          <FormContainer />
        </div>
        <div>
          <SubmitButton />
        </div>
        
         
      </section>
      </>
  );
}

export default App;
