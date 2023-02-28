import {createContext, useContext, useState, useEffect} from 'react';
import { DataStore } from 'aws-amplify';
import {Order, OrderDish, Basket} from '../models';

const OrderContext = createContext({});

const OrderContextProvider = ({children}) => {
    return (
        <OrderContext.Provider value={{}}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContextProvider;

export const useOrderContext = () => useContext(OrderContext);