import './style.scss'

const FinanceInstructions = () => {


    return (
        <>
            <div>
                <p className="fw-semibold">The amount you would like to borrow to pay for your course:</p>
                <p className="conditionalText">Must be between £1-£8000.</p>
                <p className="fw-semibold">Your expected salary:</p>
                <p className="conditionalText">Annual income after tax.</p>
                <p className="fw-semibold">Monthly repayment percentage:</p>
                <p className="conditionalText">Must be between 10-100%.</p>
            </div>
        </>
    )
}

export default FinanceInstructions