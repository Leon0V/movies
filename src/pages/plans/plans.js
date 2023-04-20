import { useEffect, useState } from 'react';

const plans = require('../plans/planList.json')

export default function Plans() {

    const [resourceType, setResourseType] = useState('Free');
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(`'../plans/planList.json'/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType]

    )

    function setSubscription() {
        setResourseType(resourceType == `/plans/${plans.find.Name}`)
        console.log(plans.Name)
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
                                    <button type="button" class="btn btn-lg btn-block btn-outline-primary" onClick={setSubscription}>Sign up for {plan.Name}</button>

                                </div>
                            </div>
                        </div>
                    </div>
                )
                )}
                <h4>Your Current plan is</h4>
                {items.map(item => {
                    return <pre>{JSON.stringify(item)}</pre>
                })}
            </div>
        </div>
    )
}