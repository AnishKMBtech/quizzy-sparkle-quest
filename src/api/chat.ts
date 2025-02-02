import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

export async function handleChatMessage(message: string) {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });

    return chatCompletion.choices[0]?.message?.content || "I'm not sure how to respond to that.";
  } catch (error) {
    console.error("Groq API error:", error);
    throw new Error("Failed to get response from chat API");
  }
}