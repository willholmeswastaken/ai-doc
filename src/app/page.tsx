'use client'

import { useCompletion } from 'ai/react'
import Head from 'next/head'

export default function Completion() {
  const {
    completion,
    input,
    isLoading,
    handleInputChange,
    handleSubmit
  } = useCompletion({
    api: '/api/chat'
  });

  const metaTitle = "AI Doc";
  const metaDesc = "Get an instant discussion about your symptoms.";

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* Open Graph */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:type" content='website' />

        {/* Twitter Card */}
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <header className="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white p-4">
          <h1 className="text-lg font-bold">AI Doc</h1>
        </header>

        <main className="flex-grow p-4 bg-gray-100">
          <div className="mx-auto w-full max-w-md py-2 flex flex-col gap-y-4">
            <div className="bg-white rounded-md p-4">
              <h1 className='text-xl'>Get an instant response to symptoms.</h1>
            </div>
            <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
              <div className="flex flex-col bg-white rounded-md p-4">
                <label>
                  Tell me about your symptoms and I will try my best to figure out what is wrong.
                  <textarea
                    className="w-full max-w-md bottom-0 border border-gray-300 text-black rounded shadow-xl p-2 mt-4"
                    value={input}
                    onChange={handleInputChange}
                    disabled={isLoading}
                  />
                </label>
                <button className='bg-gray-800 hover:bg-gray-700 disabled:bg-gray-500 disabled:cursor-not-allowed w-fit text-white py-2 px-6 rounded-lg shadow-xl mt-4 self-end' disabled={isLoading} type="submit">
                  Send
                </button>
              </div>
              {completion && <output className='bg-white rounded-md p-4'>{completion}</output>}
            </form>
          </div>
        </main>

        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()} AI Doc. Created by <a href='https://willholmes.dev'>Will Holmes</a>.</p>
        </footer>
      </div>

    </>

  )
}