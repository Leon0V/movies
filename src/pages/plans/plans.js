import { useState } from 'react';
import Register from './register';

const plans = require('../plans/planList.json')

export default function Plans() {

    let [resourceType, setResourseType] = useState('Free');
    let [selectedPlanIndex, setSelectedPlanIndex] = useState(-1);

    function setSub(planName, index) {
        setResourseType(resourceType = planName);
        setSelectedPlanIndex(index);
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
                                    <button type="button" id={plan.Name} class={`btn btn-lg btn-block ${selectedPlanIndex === i ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setSub(plan.Name, i)}>Sign up for {plan.Name}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <h4>You are going to sign up for the {resourceType} plan.</h4>
                <Register />
            </div>
        </div>
    )
}
