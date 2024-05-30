import React, { useEffect } from 'react';

const GooglePayButton = ({ product, onPaymentAuthorized }) => {
    useEffect(() => {
        const checkGooglePayAvailability = () => {
            if (window.google && window.google.payments && window.google.payments.api) {
                initializeGooglePay();
            } else {
                setTimeout(checkGooglePayAvailability, 100);
            }
        };

        const initializeGooglePay = () => {
            const paymentsClient = new window.google.payments.api.PaymentsClient({
                environment: 'TEST',
            });

            const button = paymentsClient.createButton({
                onClick: onGooglePayButtonClick,
                buttonType: 'long',
            });

            const buttonContainer = document.getElementById(`google-pay-button-${product.id}`);
            if (buttonContainer) {
                buttonContainer.appendChild(button);
            }
        };

        const onGooglePayButtonClick = async () => {
            const paymentDataRequest = getGooglePaymentDataRequest();
            try {
                const paymentsClient = new window.google.payments.api.PaymentsClient({
                    environment: 'TEST',
                });
                const paymentData = await paymentsClient.loadPaymentData(paymentDataRequest);
                onPaymentAuthorized(paymentData, product);
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
                totalPrice: (product.price * 100).toString(), // Convert to string and assume price is in dollars
                currencyCode: 'USD',
                countryCode: 'US',
            },
        });

        checkGooglePayAvailability();
    }, [product, onPaymentAuthorized]);

    return <div id={`google-pay-button-${product.id}`}></div>;
};

export default GooglePayButton;
