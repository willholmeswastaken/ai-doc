import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export const runtime = "edge";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const response = await openai.createCompletion({
    model: "text-curie-001",
    stream: true,
    max_tokens: 200,
    temperature: 0.2,
    prompt: `I want you to act as a doctor. My first request is "${prompt}."`,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
