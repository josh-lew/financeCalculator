import FinanceInstructions from "../FinanceInstructions"
import './style.scss'


const FinanceForm = () => {

    



    return (
        <>
                <div>
                    <div class="col-md-10  mt-2 mb-4">
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupPrepend">£</span>
                        </div>
                            <input type="number" class="loanAmount form-control form-control-sm"  placeholder="8000" aria-describedby="inputGroupPrepend" required/>
                            <span class="input-group-text" id="inputGroupPrepend">.00</span>
                        </div>
                    </div>
                    <div class="col-md-10 mb-4">
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupPrepend">£</span>
                        </div>
                            <input type="number" class="expextedSalary form-control form-control-sm" id="" placeholder="30000" aria-describedby="inputGroupPrepend" required/>
                            <span class="input-group-text" id="inputGroupPrepend">.00</span>
                        </div>
                    </div>
                    <div class="col-md-10 mb-4">
                        <div class="input-group">
                            <div class="input-group-prepend">
                        </div>
                            <input type="number" class="percentageSalary form-control form-control-sm" id="" placeholder="10" aria-describedby="inputGroupPrepend" required/>
                            <span class="input-group-text" id="inputGroupPrepend">%</span>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default FinanceForm