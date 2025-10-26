import Groq from "groq-sdk";

// IMPORTANT: Replace with your actual Groq API key
const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY || "";

const groq = new Groq({ apiKey: GROQ_API_KEY, dangerouslyAllowBrowser: true });

export const getGroqCompletion = async (message: string) => {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant for a benefits platform. Your name is BIA (Benefícios Inteligentes Assistant). You should answer questions about the platform, benefits, and how to apply for them. You can also provide information about CRAS and other related services. Be friendly and helpful.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      model: "llama3-8b-8192",
    });

    return completion.choices[0]?.message?.content || "";
  } catch (error) {
    console.error("Error getting completion from Groq:", error);
    return "Sorry, I'm having trouble connecting to the AI. Please try again later.";
  }
};
