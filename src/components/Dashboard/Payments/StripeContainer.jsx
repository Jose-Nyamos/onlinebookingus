import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import PaymentsForm from '../UserDashboards/Guest/PaymentsForm';
import PaymentForm from './PaymentForm';


const PUBLIC_KEY = "pk_test_51KMF0eDBrPMc5x7R3pO8u49PVN6mnvMUw1KDQZApih3A6VAwRdQqnZad0QAz3C39NlJahlQwso6DsZ8Mm8pz97SP00VRAe6xw3"

const stripeTestPromise = loadStripe(PUBLIC_KEY)
export default function StripeContainer() {
	return (
        <Elements stripe={stripeTestPromise}>
       <PaymentForm/>
        </Elements>
	)}