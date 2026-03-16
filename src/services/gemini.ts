import { GoogleGenAI } from '@google/genai';

export async function generateImage(prompt: string, apiKey: string): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: apiKey });

    // Using the current recommended model for image generation
    const response = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001',
      prompt: prompt,
      config: {
        numberOfImages: 1,
        aspectRatio: "1:1",
        outputMimeType: "image/jpeg",
      }
    });

    if (response.generatedImages && response.generatedImages.length > 0) {
      const base64Image = response.generatedImages[0].image.imageBytes;
      return `data:image/jpeg;base64,${base64Image}`;
    } else {
      throw new Error('No image was returned from the API.');
    }
  } catch (error: any) {
    console.error("Gemini Image Gen Error:", error);

    if (error.message?.includes("not found") || error.message?.includes("not supported")) {
      throw new Error(`The image generation model is currently unavailable for your API key. You may need to join the waitlist or try a different region/tier. Original error: ${error.message}`);
    }
    throw new Error(error.message || 'Failed to generate image from Gemini API');
  }
}
