
import { GoogleGenAI, Type, GenerateContentResponse, Content } from "@google/genai";
import { ChatMessage, Transaction } from "../types.ts";

// Always initialize with named parameter apiKey from process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Provides financial advice based on transaction history (for DashboardScreen).
 */
export const getFinancialAdvice = async (transactions: Transaction[], budgetLimit: number): Promise<string> => {
  const prompt = `You are Cybee, a financial mentor bee. The user has the following transactions: ${JSON.stringify(transactions)}. 
  Their monthly budget limit is $${budgetLimit}. 
  Provide a short, encouraging, and helpful tip (max 2 sentences) to help them manage their "honey" better. Buzz buzz!`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text || "Your honey stash is looking good! Keep an eye on those extra flowers. Buzz!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Keep saving your honey! Consistency is key to a sweet future. Buzz!";
  }
};

/**
 * Provides a personalized security tip based on quiz performance.
 */
export const getPersonalizedTip = async (missedTopics: string[]): Promise<string> => {
  const prompt = `You are Cybee, a cybersecurity mentor bee. The user missed some topics in a cybersecurity quiz: ${missedTopics.join(', ')}. 
  Provide a short, encouraging, and helpful tip (max 2 sentences) to help them improve in these specific areas. Buzz buzz!`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text || "Every mistake is a chance to grow stronger. Keep focusing on your digital safety!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Keep practicing! Consistency is key to becoming a cybersecurity expert. Buzz!";
  }
};

/**
 * Generates responses for the general Cybee Mentor assistant.
 */
export const getCybeeMentorResponse = async (history: ChatMessage[], userContext: any): Promise<string> => {
  const contents = history.map(msg => ({
    role: msg.role === 'ai' ? 'model' : 'user',
    parts: [{ text: msg.text }]
  }));

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: contents,
      config: {
        systemInstruction: `You are Cybee Mentor, a friendly and expert cybersecurity guide. 
        Current user data: ${JSON.stringify(userContext)}. 
        Be encouraging, use bee puns, and provide clear advice on digital safety and phishing prevention.`,
      }
    });
    return response.text || "I'm here to help you stay safe online! What else can I buzz about for you?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Oops! My wings are a bit tired. Let's try chatting again in a moment.";
  }
};

// Function declaration for profile updates
const updateUserProfileDeclaration = {
  name: 'updateUserProfile',
  parameters: {
    type: Type.OBJECT,
    description: 'Update the user profile fields.',
    properties: {
      name: { type: Type.STRING, description: 'User full name' },
      username: { type: Type.STRING, description: 'User handle' },
      email: { type: Type.STRING, description: 'User email' },
      bio: { type: Type.STRING, description: 'User biography' },
      theme: { type: Type.STRING, enum: ['light', 'dark'], description: 'App theme preference' },
      language: { type: Type.STRING, description: 'App language preference' },
    },
  },
};

/**
 * Generates responses for the Profile Mentor, supporting function calls for profile updates.
 */
export const getProfileMentorResponse = async (history: Content[], userName: string): Promise<GenerateContentResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: history,
      config: {
        systemInstruction: `You are the Profile Mentor for CyBee. Help user ${userName} manage their settings. 
        Use the updateUserProfile tool when they ask to change their name, bio, theme, or other profile details. 
        Provide helpful suggestions for their bio if they ask.`,
        tools: [{ functionDeclarations: [updateUserProfileDeclaration] }],
      }
    });
    return response;
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};
