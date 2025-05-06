import { Info } from "../Myinfo";

const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAwrvhOeQAcOIB6bbPe8nfYFQ6WdE_mxkQ'

export const botMessage = async (message) => {
    
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{  "text": Info + ". Now, answer the following question exactly as if you were me: " + message + ". Use my style of speaking—be direct, simple, and if possible, add a light joke or a real-life example. Respond as if you're actually talking to someone, not just giving a formal answer." }]
                }]
            })
        });

        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't understand your request.";
    } catch (error) {
        console.error("Error fetching bot response:", error);
        return "Sorry, there was an error processing your request.";
    }
};
