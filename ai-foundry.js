import ModelClient from '@azure-rest/ai-inference';
import { AzureKeyCredential } from '@azure/core-auth';
import dotenv from 'dotenv';

dotenv.config();

const client = new ModelClient(
     process.env.AZURE_INFERENCE_SDK_ENDPOINT ?? "endpoint",new AzureKeyCredential(process.env.AZURE_INFERENCE_SDK_KEY ?? "YOUR_KEY_HERE"));
var message = [
    {role:"developer", content:"You are a helpful assistant."},
    {role:"user", content:"What is the capital of France?"},
];

var response = await client.path("/chat/completions").post({
    body: {
        messages: message,
        max_completion_tokens: 100,
        temperature: 1,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        model: "gpt-4.1",
    },
});

