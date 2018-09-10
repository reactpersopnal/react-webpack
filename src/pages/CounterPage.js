import React from 'react'
import {view as Counter,stateKey,reducer} from "../components/Counter";

const CounterPage = () => {
    return (
        <div>
            <div>Counter</div>
            <Counter caption="any"/>
        </div>
    );
};

const initialState = 100;

export {reducer,initialState,stateKey};
export default CounterPage
