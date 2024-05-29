import React, { useEffect } from 'react';

const GooglePayButton = ({ onPaymentAuthorized }) => {
    useEffect(() => {
        const paymentsClient = new window.google.payments.api.PaymentsClient({
            environment: 'TEST',
        });

        const button = paymentsClient.createButton({
            onClick: onGooglePayButtonClick,
            buttonType: 'long',
        });

        document.getElementById('google-pay-button').appendChild(button);
    }, []);

    const onGooglePayButtonClick = async () => {
        const paymentDataRequest = getGooglePaymentDataRequest();
        try {
            const paymentsClient = new window.google.payments.api.PaymentsClient({
                environment: 'TEST',
            });
            const paymentData = await paymentsClient.loadPaymentData(paymentDataRequest);
            onPaymentAuthorized(paymentData);
        } catch (error) {
            console.error('Payment failed:', error);
        }
    };

    const getGooglePaymentDataRequest = () => ({
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [{
            type: 'CARD',
            parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['AMEX', 'DISCOVER', 'JCB', 'MASTERCARD', 'VISA'],
            },
            tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                    gateway: 'example',
                    gatewayMerchantId: 'exampleGatewayMerchantId',
                },
            },
        }],
        merchantInfo: {
            merchantId: '01234567890123456789',
            merchantName: 'Demo Merchant',
        },
        transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPrice: '1.00',
            currencyCode: 'USD',
            countryCode: 'US',
        },
    });

    return <div id="google-pay-button"></div>;
};

export default GooglePayButton;
