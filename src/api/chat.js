import Groq from "groq-sdk";

export async function handleChatMessage(message, apiKey) {
  try {
    console.log("Sending message to Groq API:", message);
    
    const groq = new Groq({
      apiKey: apiKey
    });

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });

    console.log("Received response from Groq API:", chatCompletion);
    
    return chatCompletion.choices[0]?.message?.content || "I'm not sure how to respond to that.";
  } catch (error) {
    console.error("Groq API error:", error);
    throw new Error("Failed to get response from chat API");
  }
}