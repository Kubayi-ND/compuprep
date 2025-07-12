import { useState } from "react";
import Image from "next/image";

// This is just a UI mockup without actual functionality
const SplitScreenTest = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState("30:00");
  const [activeFile, setActiveFile] = useState("questions.pdf");

  return (
    <div className="h-screen flex flex-col">
      {/* Timer and controls */}
      <div className="bg-white border-b shadow-sm py-3 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            onClick={() => {/* Will be implemented later */}}
          >
            Start Timer
          </button>
          <div className="text-2xl font-semibold">{timeRemaining}</div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="px-4 py-2 border rounded-md hover:bg-gray-50"
            onClick={() => setShowVideo(true)}
          >
            Show Video Guide
          </button>
          <button 
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            onClick={() => {/* Will be implemented later */}}
          >
            End Test
          </button>
        </div>
      </div>

      {/* Split Screen Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left pane (40%) - PDF Questions */}
        <div className="w-2/5 bg-gray-100 p-4 overflow-auto">
          <div className="bg-white rounded-lg shadow-md p-4 h-full flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Test Questions (PDF)</h2>
            <div className="flex-1 bg-gray-50 rounded border p-4 overflow-auto">
              {/* This is where the PDF would be displayed */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Question 1</h3>
                <p className="mb-2">Create a new Word document with the following formatting:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Title with Heading 1 style</li>
                  <li>Three paragraphs of text with proper spacing</li>
                  <li>Add page numbers in the footer</li>
                  <li>Create a table of contents</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Question 2</h3>
                <p className="mb-2">Format the document according to these specifications:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Change font to Arial 12pt</li>
                  <li>Add 1.5 line spacing</li>
                  <li>Create a bulleted list for the items</li>
                  <li>Add a header with your name</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Question 3</h3>
                <p className="mb-2">Insert the following elements:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>A table with 4 columns and 5 rows</li>
                  <li>A properly formatted citation</li>
                  <li>Page breaks between sections</li>
                  <li>A properly formatted bibliography</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right pane (60%) - Office files */}
        <div className="w-3/5 bg-white p-4 overflow-auto">
          <div className="bg-gray-50 rounded-lg shadow-md p-4 h-full flex flex-col">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Working Files</h2>
              <div className="flex space-x-2">
                <button 
                  className={`px-3 py-1 rounded-md ${activeFile === "questions.pdf" ? "bg-indigo-100 text-indigo-700" : "bg-gray-200"}`}
                  onClick={() => setActiveFile("questions.pdf")}
                >
                  questions.pdf
                </button>
                <button 
                  className={`px-3 py-1 rounded-md ${activeFile === "document.docx" ? "bg-indigo-100 text-indigo-700" : "bg-gray-200"}`}
                  onClick={() => setActiveFile("document.docx")}
                >
                  document.docx
                </button>
              </div>
            </div>
            
            <div className="flex-1 bg-white border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-center p-6">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Open Microsoft Word to start working</h3>
              <p className="text-gray-500 mb-4 max-w-md">
                Download the document and open it in Microsoft Word. Once you've completed your work, save it and upload it here.
              </p>
              <div className="space-x-2">
                <button 
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  onClick={() => {/* Will be implemented later */}}
                >
                  Download Document
                </button>
                <button 
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                  onClick={() => {/* Will be implemented later */}}
                >
                  Upload Completed Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Guide Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-semibold">Getting Started Guide</h3>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setShowVideo(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4">
                {/* Video player placeholder */}
                <div className="w-full h-96 bg-gray-800 flex items-center justify-center text-white">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-xl">Video Guide Would Play Here</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-indigo-600 rounded" />
                  <span className="ml-2 text-sm text-gray-600">Don't show this again</span>
                </label>
                <button 
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                  onClick={() => setShowVideo(false)}
                >
                  Start Test
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SplitScreenTest;
