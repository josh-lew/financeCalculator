import './style.scss'

const Splash = () => {


    return (
        <>
            <section className="jumbotron">
                <div className="row">
                    <div className="splashContainer text-white py-3 px-5">
                        <h1 className="display-4">Finance Calculator</h1>
                        <p className="formBlurb">Fill out the form below and we will calculate exactly what you will pay for your tuition at Mayden Academy and how long it will take to pay that back</p>
                        <hr className="my-4"></hr>
                        <p className="instructions fw-bold">
                        You may borrow any amount between £1-£8000.
                        </p>
                        <p className="instructions fw-bold">
                        If you borrow above £6400 an additional charge of £500 will be made.
                        </p>
                        <p className="instructions fw-bold">
                        If you borrow above £7200 a further additional charge of £500 will be made.
                        </p>
                        <p className="instructions fw-bold">
                        An admin fee of 5% will also be charged.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Splash