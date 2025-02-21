export default function PaymentSuccess() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-lg">
          <h1 className="text-2xl font-bold text-green-600">🎉 Payment Successful!</h1>
          <p className="text-gray-700 mt-4">
            Thank you for your payment. Your order has been processed successfully.
          </p>
          <p className="text-gray-700 mt-2">
            You will receive an email confirmation shortly.
          </p>
  
          <div className="mt-6">
            <a
              href="/dashboard"
              className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg"
            >
              Go to Dashboard
            </a>
          </div>
  
          <div className="mt-4">
            <a href="/" className="text-blue-600 underline">
              Return to Homepage
            </a>
          </div>
        </div>
      </div>
    );
  }
  