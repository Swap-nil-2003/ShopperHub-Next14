"use client";

import {CartProvider} from 'use-shopping-cart';
import { ReactNode } from 'react';

export default function Provider({children}:{children: ReactNode}){
    return(
        <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
        successUrl="https://https://shopper-hub-next14.vercel.app/stripe/success"
        cancelUrl="https://https://shopper-hub-next14.vercel.app/stripe/error"
        currency="INR"
        billingAddressCollection={false}
        shouldPersist={true}
        language="en-US">
            {children}
        </CartProvider>
    )
}
