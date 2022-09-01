import FinanceForm from "../FinanceForm"
import FinanceInstructions from "../FinanceInstructions"



const FormContainer = () => {



    return (
        <>
        <hr></hr>
        <div className='row justify-content-between'>
            
          <div className="col-6 align-self-start">
            <FinanceInstructions />
            </div>
        <div className="col-6 justify-content-end">
            <FinanceForm />
        </div>
        <hr></hr>
        </div>
        
        
        
        </>


    )
}

export default FormContainer