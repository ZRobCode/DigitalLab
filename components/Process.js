"use client";

import React from 'react';
import { 
  FileText, 
  Mail, 
  CreditCard, 
  Code,
  Rocket,
  HeartHandshake
} from 'lucide-react';

const ProcessStep = ({ icon: Icon, step, title, description, isLast = false }) => (

  <div className="flex items-start relative">
    <div className="flex flex-col items-center mr-4">
      <div className="bg-cyan-600 p-3 rounded-full text-white">
        <Icon className="w-6 h-6" />
      </div>
      {!isLast && (
        <div className="h-full w-px bg-cyan-200 my-2" />
      )}
    </div>
    <div className="flex-1 pb-8">
      <p className="text-sm text-cyan-600 font-medium mb-1">Step {step}</p>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Process = () => {
  
    
    // Define handleOpenForm function
    const handleOpenForm = () => {
      // Example: Open a modal, navigate to a form page, or toggle a form component
      console.log("Open project request form");
    };

  const steps = [
    
    {
      icon: FileText,
      title: "Submit Form",
      description: "Fill out our quick project inquiry form with your requirements. Takes less than 3 minutes to complete.",
    },
    {
      icon: Mail,
      title: "Instant Setup",
      description: "Receive immediate access to your project dashboard via email, including a Trello board for progress tracking and an optional Calendly link to discuss your project.",
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Complete the secure payment process to kick off your project. We use Stripe for safe, transparent transactions.",
    },
    {
      icon: Code,
      title: "Development Begins",
      description: "Work starts within 24 hours. Track real-time progress on your Trello board as we build your solution. Submit requests via Trello.",
    },
    {
      icon: Rocket,
      title: "Launch & Deploy",
      description: "We handle the technical deployment process, ensuring your project goes live smoothly and efficiently.",
    },
    {
      icon: HeartHandshake,
      title: "Ongoing Support",
      description: "Enjoy dedicated post-launch support and maintenance to keep your solution running optimally.",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Streamlined Process
          </h2>
          <p className="text-lg text-gray-600">
            From submission to launch in weeks. Automated, transparent, and efficient.
          </p>
        </div>

        <div className="space-y-2">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              step={index + 1}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Process;