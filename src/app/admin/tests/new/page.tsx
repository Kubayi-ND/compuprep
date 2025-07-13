import { useState } from "react";
import AdminLayout from "../../../../components/admin/AdminLayout";

export default function CreateTest() {
  const [testInfo, setTestInfo] = useState({
    title: "",
    description: "",
    duration: 30,
    passingScore: 70,
  });
  
  const [files, setFiles] = useState({
    questions: null,
    wordFile: null,
    excelFile: null,
    powerPointFile: null,
    accessFile: null,
  });

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTestInfo({
      ...testInfo,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    
    const { name } = e.target;
    setFiles({
      ...files,
      [name]: e.target.files[0],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would upload files and create the test
    console.log("Test info:", testInfo);
    console.log("Files:", files);
    
    // This would be replaced with your API call
    alert("Test created successfully!");
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Create New Test</h1>
          <p className="mt-2 text-gray-500">
            Upload test materials and define grading rules.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg font-medium text-gray-900">Test Information</h2>
              <p className="mt-1 text-sm text-gray-500">
                Basic details about the test.
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="col-span-2">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Test Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={testInfo.title}
                    onChange={handleInfoChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>

                <div className="col-span-2">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    value={testInfo.description}
                    onChange={handleInfoChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                    Duration (minutes)
                  </label>
                  <input
                    type="number"
                    name="duration"
                    id="duration"
                    value={testInfo.duration}
                    onChange={handleInfoChange}
                    min="5"
                    max="180"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="passingScore" className="block text-sm font-medium text-gray-700">
                    Passing Score (%)
                  </label>
                  <input
                    type="number"
                    name="passingScore"
                    id="passingScore"
                    value={testInfo.passingScore}
                    onChange={handleInfoChange}
                    min="1"
                    max="100"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg font-medium text-gray-900">Test Files</h2>
              <p className="mt-1 text-sm text-gray-500">
                Upload PDF questions and Microsoft Office files.
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    PDF Questions
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg 
                        className="mx-auto h-12 w-12 text-gray-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="questions" className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                          <span>Upload a file</span>
                          <input 
                            id="questions" 
                            name="questions" 
                            type="file" 
                            className="sr-only" 
                            accept=".pdf"
                            onChange={handleFileChange}
                            required
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PDF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Word Document (.docx)
                  </label>
                  <input
                    type="file"
                    name="wordFile"
                    id="wordFile"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    accept=".docx"
                    onChange={handleFileChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Excel Spreadsheet (.xlsx)
                  </label>
                  <input
                    type="file"
                    name="excelFile"
                    id="excelFile"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    accept=".xlsx"
                    onChange={handleFileChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    PowerPoint Presentation (.pptx)
                  </label>
                  <input
                    type="file"
                    name="powerPointFile"
                    id="powerPointFile"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    accept=".pptx"
                    onChange={handleFileChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Access Database (.accdb)
                  </label>
                  <input
                    type="file"
                    name="accessFile"
                    id="accessFile"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    accept=".accdb"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-3"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Test
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
