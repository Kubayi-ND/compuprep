
import { useState } from "react";
import AdminLayout from "../../../../../components/admin/AdminLayout";
import MarkingRuleBuilder from "../../../../../components/admin/MarkingRuleBuilder";

// This would be fetched from your API based on the test ID
const mockTest = {
  id: "1",
  title: "Basic Word Document Formatting",
  description: "Practice formatting text, paragraphs, and basic document structure.",
  duration: 30,
  passingScore: 70,
  files: {
    questions: "questions.pdf",
    wordFile: "document.docx",
    excelFile: "",
    powerPointFile: "",
    accessFile: "",
  },
  createdAt: "2025-07-05",
};

export default function EditTest() {
  const [testInfo, setTestInfo] = useState({
    title: mockTest.title,
    description: mockTest.description,
    duration: mockTest.duration,
    passingScore: mockTest.passingScore,
  });
  
  const [activeTab, setActiveTab] = useState("details");

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTestInfo({
      ...testInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would update the test
    console.log("Updated test info:", testInfo);
    
    // This would be replaced with your API call
    alert("Test updated successfully!");
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Edit Test: {mockTest.title}
          </h1>
          <p className="mt-2 text-gray-500">
            Update test materials and grading rules.
          </p>
        </div>

        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("details")}
              className={`${
                activeTab === "details"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Test Details
            </button>
            <button
              onClick={() => setActiveTab("marking")}
              className={`${
                activeTab === "marking"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Marking Rules
            </button>
            <button
              onClick={() => setActiveTab("submissions")}
              className={`${
                activeTab === "submissions"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Submissions
            </button>
          </nav>
        </div>

        {/* Test Details Tab */}
        {activeTab === "details" && (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 sm:p-6">
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
                <h2 className="text-lg font-medium text-gray-900">Current Files</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Upload new files to replace the existing ones.
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <div className="space-y-4">
                  {mockTest.files.questions && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <svg 
                          className="h-8 w-8 text-red-500" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <span className="ml-2 text-gray-900">{mockTest.files.questions}</span>
                        <span className="ml-2 text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                          PDF Questions
                        </span>
                      </div>
                      <div className="flex">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">
                          Download
                        </a>
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Replace
                        </a>
                      </div>
                    </div>
                  )}
                  
                  {mockTest.files.wordFile && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <svg 
                          className="h-8 w-8 text-blue-500" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <span className="ml-2 text-gray-900">{mockTest.files.wordFile}</span>
                        <span className="ml-2 text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                          Word Document
                        </span>
                      </div>
                      <div className="flex">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">
                          Download
                        </a>
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Replace
                        </a>
                      </div>
                    </div>
                  )}

                  {!mockTest.files.excelFile && (
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Excel Spreadsheet (.xlsx)
                      </label>
                      <input
                        type="file"
                        name="excelFile"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        accept=".xlsx"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save Changes
              </button>
            </div>
          </form>
        )}

        {/* Marking Rules Tab */}
        {activeTab === "marking" && (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg font-medium text-gray-900">Marking Rules</h2>
              <p className="mt-1 text-sm text-gray-500">
                Define rules for automated grading.
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <div className="space-y-8">
                {mockTest.files.wordFile && (
                  <MarkingRuleBuilder fileType="word" />
                )}
                
                {mockTest.files.excelFile && (
                  <MarkingRuleBuilder fileType="excel" />
                )}
                
                {mockTest.files.powerPointFile && (
                  <MarkingRuleBuilder fileType="powerpoint" />
                )}
                
                {mockTest.files.accessFile && (
                  <MarkingRuleBuilder fileType="access" />
                )}

                {!mockTest.files.wordFile && !mockTest.files.excelFile && 
                  !mockTest.files.powerPointFile && !mockTest.files.accessFile && (
                  <p className="text-gray-500 italic">
                    No office files uploaded yet. Please upload files in the Test Details tab first.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Submissions Tab */}
        {activeTab === "submissions" && (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg font-medium text-gray-900">Student Submissions</h2>
              <p className="mt-1 text-sm text-gray-500">
                View and manage student submissions for this test.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Student
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Submitted
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Score
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">John Smith</div>
                      <div className="text-sm text-gray-500">john.smith@example.com</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">2025-07-12 14:23</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">85%</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Completed
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">
                        View
                      </a>
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Download
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">Sarah Johnson</div>
                      <div className="text-sm text-gray-500">sarah.j@example.com</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">2025-07-12 10:15</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">92%</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Completed
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">
                        View
                      </a>
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Download
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
