export async function handleChatMessage(message) {
  try {
    console.log("Sending message to chat endpoint:", message);
    
    const response = await fetch('https://uhbhwuczdtuykmeythsq.supabase.co/functions/v1/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
      },
      body: JSON.stringify({ message })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Received response from chat endpoint:", data);
    
    return data.response || "I'm not sure how to respond to that.";
  } catch (error) {
    console.error("Chat endpoint error:", error);
    throw new Error("Failed to get response from chat API");
  }
}