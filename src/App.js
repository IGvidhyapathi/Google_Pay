import logo from './logo.svg';
import './App.css';
import GooglepayButton from '@google-pay/button-react';
import React from 'react';

function App() {
 return(
  <div className="App">
    <h1><img src={logo} className='App-logo' />Google Pay React App</h1>
    <hr/>
    <GooglepayButton
    environment='TEST'
    paymentRequest={{
      apiVersion:2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods : ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks : ['MASTERCARD' ,'VISA', 'AMEX'],
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: 'exampleGatewayMerchantId'
            },
          },
        },
      ],
      merchantInfo: {
        merchantId: '123456789123456789',
        merchantName: 'Demo Merchant',
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPriceLabel: 'TOTAL',
        totalPrice: '1',
        currencyCode: 'INR',
        countryCode: 'IN'
      },
      shippingAddressRequired: true,
      callbackIntents: ['PAYMENT_AUTHORIZATION']
    }}
    onLoadPaymentData={paymentRequest => {
      console.log('success' , paymentRequest);
    }}
    onPaymentAuthorized={paymentData => {
      console.log('Payment Authorized successfully' , paymentData);
      return{transactionState: 'SUCCESS'}
    }
  }
  existingPaymentMethodRequired='false'
  buttonColor='black'
  buttonType='buy'
     />
  </div>
 );
}

export default App;
