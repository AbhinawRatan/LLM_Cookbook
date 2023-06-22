"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useCompletion } from "ai/react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  // When a file is dropped in the dropzone, call the `/api/addData` API to train our bot on a new PDF File
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setIsLoading(true);
    setMessage("");

    const file = acceptedFiles[0];

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF");
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.set("file", file);

    let response;
    try {
      response = await fetch("/api/appData", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`An error occurred: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      setMessage(`An error occurred: ${(error as Error).message}`);
      setIsLoading(false);
      return;
    }
    

    if (response) {
      const body = await response.json();

      if (body.success) {
        setMessage("Data added successfully");
      }
    }

    setIsLoading(false);
  }, []);

  // Configure react-dropzone
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  // Vercel AI hook for generating completions through an AI model
  const { completion, input, handleInputChange, handleSubmit } =
    useCompletion({
      api: "/api/chat",
    });

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div
        {...getRootProps({
          className:
            "dropzone bg-gray-900 border border-gray-800 p-10 rounded-md hover:bg-gray-800 transition-colors duration-200 ease-in-out cursor-pointer",
        })}
      >
        <input {...getInputProps()} />
        <p>Upload a PDF to add new data</p>
      </div>

      {isLoading && <p>Loading...</p>}
      {message && <p>{message}</p>}

      <div className="mx-auto w-full items-center max-w-md py-24 flex flex-col stretch">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className=" w-full max-w-md text-black border border-gray-300 rounded shadow-xl p-2"
            value={input}
            placeholder="Enter your prompt..."
            onChange={handleInputChange}
          />

          <button
            disabled={isLoading}
            type="submit"
            className="py-2 border rounded-lg bg-gray-900 text-sm px-6"
          >
            Submit
          </button>

          <p className="text-center">
            Completion result: {completion === "" ? "Thinking..." : completion}
          </p>
        </form>
      </div>
    </main>
  );
}
