This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Chatbot for PDFs</title>
</head>
<body>
  <h1>AI Chatbot for PDFs</h1>

  <h2>Demo</h2>
  <p>Check out the <a href="https://www.loom.com/share/096fa320677344eda713651074b8e0e1">demo video</a> to see the chatbot in action.</p>

  <h2>Stack</h2>
  <ul>
    <li>Next.js</li>
    <li>TypeScript</li>
    <li>Tailwind CSS</li>
    <li>Langchain</li>
    <li>Vercel AI SDK</li>
  </ul>

  <h2>Prerequisites</h2>
  <p>Before running the project, make sure you have the following:</p>
  <ul>
    <li>Node.js (LTS version) installed on your machine.</li>
    <li>OpenAI API Key for accessing the language model.</li>
    <li>Pinecone API Key for the vector store.</li>
  </ul>

  <h2>Installation</h2>
  <ol>
    <li>Clone the repository:</li>
    <code>git clone &lt;repository-url&gt;</code>
    <li>Navigate to the project directory:</li>
    <code>cd pdf-chatbot</code>
    <li>Install the dependencies:</li>
    <code>npm install</code>
    <li>Set up environment variables:</li>
    <ul>
      <li>Create a <code>.env.local</code> file in the project root directory.</li>
      <li>Add the following variables to the <code>.env.local</code> file:</li>
    </ul>
    <pre>
PINECONE_API_KEY="&lt;your-pinecone-api-key&gt;"
PINECONE_INDEX_NAME="&lt;your-pinecone-index-name&gt;"
OPENAI_API_KEY="&lt;your-openai-api-key&gt;"</pre>
    <p>Replace &lt;your-pinecone-api-key&gt;, &lt;your-pinecone-index-name&gt;, and &lt;your-openai-api-key&gt; with your actual API keys.</p>
  </ol>

  <h2>Usage</h2>
  <ol>
    <li>Start the development server:</li>
    <code>npm run dev</code>
    <li>Open your browser and navigate to <a href="http://localhost:3000">http://localhost:3000</a>.</li>
    <li>Upload a PDF file to train the chatbot on.</li>
    <li>Enter a question in the prompt box and click "Submit" to get an answer from the chatbot.</li>
  </ol>

  <h2>Folder Structure</h2>
  <ul>
    <li><code>/app</code> - Contains the Next.js application code.</li>
    <ul>
      <li><code>/api/addData</code> - Endpoint for training the chatbot on a PDF file.</li>
      <li><code>/api/chat</code> - Endpoint for interacting with the chatbot.</li>
    </ul>
    <li><code>/components</code> - Contains the React components used in the application.</li>
    <li><code>/pages</code> - Contains the Next.js page components.</li>
    <li><code>/public</code> - Contains static assets used in the application.</li>
  </ul>

  <h2>Contributing</h2>
  <p>Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.</p>

  <h2>License</h2>
  <p>MIT License</p>
</body>
</html>
