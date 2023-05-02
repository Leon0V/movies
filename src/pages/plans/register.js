import { useState } from 'react';

export default function Register() {

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [cvc, setCvc] = useState('');

    function handleCardNumberChange(event) {
        let input = event.target.value.replace(/\D/g, '');
        input = input.substring(0, 16);
        input = input.replace(/(\d{4})(?=\d)/g, '$1-');
        setCardNumber(input);
    }

    function handleCvcChange(event) {
        let input = event.target.value.replace(/\D/g, '');
        input = input.substring(0, 3);
        setCvc(input);
    }

    function handleCardHolderChange(event) {
        let input = event.target.value.substring(0, 25);
        setCardHolder(input);
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ maxWidth: '75%', margin: 'auto' }}>
            <form>
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">Name</label>
                    <input type="text" className="form-control" id="nameInput" value={name} onChange={event => setName(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phoneInput" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="phoneInput" value={phoneNumber} onChange={event => setPhoneNumber(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="addressInput" className="form-label">Address</label>
                    <input type="text" className="form-control" id="addressInput" value={address} onChange={event => setAddress(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cardNumberInput" className="form-label">Card Number</label>
                    <input type="text" className="form-control" id="cardNumberInput" value={cardNumber} onChange={handleCardNumberChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cardHolderInput" className="form-label">Card Holder</label>
                    <input type="text" className="form-control" id="cardHolderInput" value={cardHolder} onChange={handleCardHolderChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cvcInput" className="form-label">CVC</label>
                    <input type="text" className="form-control" id="cvcInput" value={cvc} onChange={handleCvcChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
