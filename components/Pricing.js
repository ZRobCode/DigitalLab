import React, { useState } from 'react';
import { Check } from 'lucide-react';
import WebForm from './webform'; // Import the WebForm Component

const Pricing = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  const pricingTiers = [
    {
      name: "Basic MVP",
      price: "4,000",
      timeframe: "2-4 weeks",
      description: "Perfect for validating your idea quickly",
      features: [
        "One Core feature implementation",
        "User authentication",
        "Basic admin controls",
        "Modern UI/UX design",
        "Mobile-responsive design",
        "Cloud Deployment setup",
        "2 weeks of technical support"
      ]
    },
    {
      name: "Custom Micro SaaS",
      price: "7,500",
      timeframe: "4-6 weeks",
      description: "Full-featured SaaS application",
      popular: true,
      features: [
        "All Basic MVP features",
        "Additional features",
        "Stripe Payment integration",
        "Advanced admin features",
        "Email notifications",
        "Analytics dashboard",
        "API integration & documentation",
        "1 month of support"
      ]
    },
    {
      name: "AI Automation / AI Agent",
      price: "2,000",
      timeframe: "1-2 weeks",
      description: "Streamline your workflow with AI",
      features: [
        "Workflow analysis",
        "Custom AI agent setup",
        "Process automation",
        "API integrations",
        "Documentation",
        "1 week of support",
        "Performance monitoring"
      ]
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-base-200 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-cyan-700 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto">
            Launch your project quickly and efficiently. Choose a package that fits your needs.
          </p>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            All packages include: Code repository, Deployment setup, Basic SEO, Performance optimization
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:max-w-6xl lg:mx-auto">
          {pricingTiers.map((tier) => (
            <div 
              key={tier.name}
              className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1
                ${tier.popular ? 'border-2 border-cyan-500 relative' : ''}
              `}
            >
              {tier.popular && (
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              
              <h3 className="text-2xl font-semibold text-cyan-700 mb-2">{tier.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">${tier.price}</span>
                <span className="text-gray-500 ml-2">starting at</span>
              </div>
              <p className="text-cyan-600 font-medium mb-6">{tier.timeframe}</p>
              <p className="text-gray-600 mb-6">{tier.description}</p>
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-1" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-3 px-6 rounded-lg bg-cyan-600 text-white font-medium hover:bg-purple-700 transition duration-300"
                onClick={openForm} // Open the WebForm on Click
              >
                Tell Us About Your Project
              </button>
            </div>
          ))}
        </div>
      </div>

      {isFormOpen && <WebForm onClose={closeForm} />}
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
