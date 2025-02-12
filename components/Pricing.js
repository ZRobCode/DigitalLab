
const Pricing = () => {
  return (
    <section className="py-16 bg-base-200 text-center">
      <h2 className="text-cyan-700 text-4xl font-bold mb-8">Our Pricing</h2>
      <p className="text-lg text-gray-600 mb-8">
      We want to give you an idea of costs. And, we provide you full pricing tailored to fit your project needs.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-8 md:px-20">
        
        {/* Micro SaaS App Development */} 
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
          <h3 className="text-cyan-700 text-2xl font-semibold mb-4">Micro SaaS App</h3>
          <p className="text-xl font-bold text-cyan-500 mb-4">Starting at $2,500</p>
          <p className="text-gray-700 mb-4">Basic version with essential features, scalable options available.</p>
        </div>

        {/* One-Page App (OPA) */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
          <h3 className="text-cyan-700 text-2xl font-semibold mb-4">One-Page App (OPA)</h3>
          <p className="text-xl font-bold text-cyan-500 mb-4">Starting at $1,500</p>
          <p className="text-gray-700 mb-4">Fast, single-purpose apps with minimal UI/UX.</p>
        </div>

        {/* Niche App Development */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
          <h3 className="text-cyan-700 text-2xl font-semibold mb-4">Niche App Development</h3>
          <p className="text-xl font-bold text-cyan-500 mb-4">Starting at $4,500</p>
          <p className="text-gray-700 mb-4">More complex, tailored apps with specific market fit.</p>
        </div>

        {/* Automation Workflow Setup */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
          <h3 className="text-cyan-700 text-2xl font-semibold mb-4">Automation Workflow</h3>
          <p className="text-xl font-bold text-cyan-500 mb-4">Starting at $750</p>
          <p className="text-gray-700 mb-4">Pre-built or custom automations for business processes.</p>
        </div>
        
      </div>
    </section>
  );
};

export default Pricing;


/*
import config from "@/config";
import ButtonCheckout from "./ButtonCheckout";

// <Pricing/> displays the pricing plans for your app
// It's your Stripe config in config.js.stripe.plans[] that will be used to display the plans
// <ButtonCheckout /> renders a button that will redirect the user to Stripe checkout called the /api/stripe/create-checkout API endpoint with the correct priceId

/*
const Pricing = () => {
  return (
    <section className="bg-base-200 overflow-hidden" id="pricing">
      <div className="py-24 px-8 max-w-5xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <p className="font-medium text-primary mb-8">Pricing</p>
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
            Save hours of repetitive code and ship faster!
          </h2>
        </div>

        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {config.stripe.plans.map((plan) => (
            <div key={plan.priceId} className="relative w-full max-w-lg">
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span
                    className={`badge text-xs text-primary-content font-semibold border-0 bg-primary`}
                  >
                    POPULAR
                  </span>
                </div>
              )}

              {plan.isFeatured && (
                <div
                  className={`absolute -inset-[1px] rounded-[9px] bg-primary z-10`}
                ></div>
              )}

              <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg">
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <p className="text-lg lg:text-xl font-bold">{plan.name}</p>
                    {plan.description && (
                      <p className="text-base-content/80 mt-2">
                        {plan.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  {plan.priceAnchor && (
                    <div className="flex flex-col justify-end mb-[4px] text-lg ">
                      <p className="relative">
                        <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[53%]"></span>
                        <span className="text-base-content/80">
                          ${plan.priceAnchor}
                        </span>
                      </p>
                    </div>
                  )}
                  <p className={`text-5xl tracking-tight font-extrabold`}>
                    ${plan.price}
                  </p>
                  <div className="flex flex-col justify-end mb-[4px]">
                    <p className="text-xs text-base-content/60 uppercase font-semibold">
                      USD
                    </p>
                  </div>
                </div>
                {plan.features && (
                  <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-[18px] h-[18px] opacity-80 shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span>{feature.name} </span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="space-y-2">
                  <ButtonCheckout priceId={plan.priceId} />

                  <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
                    Pay once. Access forever.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
*/
