import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Lead from "@/models/Lead";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  await connectMongo();

  const body = await req.json();
  const { name, email, projectType, budget, timeline, description } = body;

  if (!email || !name) {
    return NextResponse.json({ error: "Name and Email are required" }, { status: 400 });
  }

  try {
    // Check if the lead already exists
    const existingLead = await Lead.findOne({ email });

    if (!existingLead) {
      // Save new lead to database
      await Lead.create({ name, email, projectType, budget, timeline, description });

      // Send a welcome email via Resend
      await resend.emails.send({
        from: "hello@digitallab.dev",
        to: email,
        subject: "Welcome to DigitalLab.dev 🚀",
        html: `
          <p>Hi ${name},</p>

          <p>Thank you for reaching out! We're excited to discuss your project and explore how we can help.</p>

          <p>You can schedule a call with us at your convenience:  
          <a href="https://calendly.com/your-link">📅 Book a time</a>.
          </p>

          <h3>Next Steps:</h3>
          <ul>
          <li>📌 <strong>Project Board:</strong> You'll receive access to a Trello board, where you can track the progress of your app and submit any requests.</li>
          <li>💬 <strong>Request Submissions:</strong> If you prefer to skip a call, you can submit project requests directly on Trello.</li>
          <li>💳 <strong>Payment:</strong> A Stripe invoice will be sent shortly. Once paid, we'll begin development.</li>
          </ul>

          <p>We appreciate the opportunity to work with you and look forward to getting started!</p>

          <p>Let's skgooo,</p>
          <p>– The DigitalLab Team</p>

        `,
      });
    }

    return NextResponse.json({ success: true, message: "Lead processed successfully" });
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json({ error: "Failed to process lead" }, { status: 500 });
  }
}



/*
import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Lead from "@/models/Lead";

// This route is used to store the leads that are generated from the landing page.
// The API call is initiated by <ButtonLead /> component
// Duplicate emails just return 200 OK
export async function POST(req) {
  await connectMongo();

  const body = await req.json();

  if (!body.email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    // Here you can add your own logic
    // For instance, sending a welcome email (use the the sendEmail helper function from /libs/resend)
    // For instance, saving the lead in the database (uncomment the code below)

    // const lead = await Lead.findOne({ email: body.email });

    // if (!lead) {
    // 	await Lead.create({ email: body.email });
    // }

    return NextResponse.json({});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
*/