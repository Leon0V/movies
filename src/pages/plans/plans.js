import { useState } from 'react';

const plans = require('../plans/planList.json')

export default function Plans() {

    let [resourceType, setResourseType] = useState('Free');

    function setSub(planName) {
        // console.log(event)
        // console.log(plans.filter(e => e.Name === event.target.id)[0].Name)
        // setResourseType(resourceType = plans.filter(e => e.Name === event.target.id)[0].Name)
        setResourseType(resourceType = planName)
    }
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
                                    {/* <a href={`/plans/${plan.name}`}>
                                    </a> */}
                                    <button type="button" id={plan.Name} class="btn btn-lg btn-block btn-outline-primary" onClick={() => setSub(plan.Name)}>Sign up for {plan.Name}</button>

                                </div>
                            </div>
                        </div>
                    </div>
                )
                )}
                <h4>Your Current plan is {resourceType}</h4>
            </div>
        </div>
    )
}