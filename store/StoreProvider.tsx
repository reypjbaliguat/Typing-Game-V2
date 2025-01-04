'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SessionProvider } from 'next-auth/react';
import { persistor, store } from '.';

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <SessionProvider>
            <Provider store={store}>
                <PersistGate persistor={persistor}>{children}</PersistGate>
            </Provider>
        </SessionProvider>
    );
};

export default StoreProvider;
