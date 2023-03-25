const plans = require('../plans/planList.json')

export default function Plans() {

    return (
        <div className="container-fluid text-center">
            <div class="row">
                {plans.map((plan, i) => (
                    <div className="col-md-4" key={i}>
                        <div className="card">
                            <div className='card-body'>
                                <h1 className='card-tile'>
                                    {plan.Name}
                                </h1>
                                <h3 className='card-text'>{plan.Cost}</h3>
                                <h6>{plan.Description}</h6>
                                <h6>{plan.Max}</h6>
                                <div className='container'>
                                    <a href="*" >
                                        <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for {plan.Name}</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}