import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction)
    } 
    
    return (
        <React.Fragment>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text..." name='transactionName' value={text} onChange={e => setText(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" placeholder="Enter amount..." name='amount' value={amount} onChange={e => setAmount(e.target.value)}/>
                </div>
                <button className="btn" type='submit'>Add transaction</button>
            </form>
        </React.Fragment>
    )
}
