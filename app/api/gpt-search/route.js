// app/api/gpt-search/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  const { query } = await request.json();

  if (!query) {
    return NextResponse.json({ text: "Please provide a query." });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: query }],
        max_tokens: 150,
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error("OpenAI API Error:", data.error);
      return NextResponse.json({ text: "OpenAI Error: " + data.error.message });
    }

    const gptText = data.choices[0].message.content;

    return NextResponse.json({ text: gptText });
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return NextResponse.json({ text: "Error: Unable to get a response." });
  }
}
