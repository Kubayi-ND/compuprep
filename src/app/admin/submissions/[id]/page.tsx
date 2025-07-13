import Link from "next/link";
import AdminLayout from "../../../../components/admin/AdminLayout";

// Mock data - this would be fetched from your backend in a real application
const mockSubmission = {
  id: "1",
  student: {
    name: "John Smith",
    email: "john.smith@example.com",
    id: "student-1",
  },
  test: {
    title: "Basic Word Document Formatting",
    id: "1",
  },
  submittedAt: "2025-07-12 14:23",
  score: 85,
  status: "Completed",
  fileUrl: "/submissions/document-1.docx",
  detailedReport: [
    {
      ruleId: "1",
      description: "Document has proper heading styles",
      points: 10,
      maxPoints: 10,
      status: "passed",
      details: "Found correct heading styles: Heading 1, Heading 2",
    },
    {
      ruleId: "2",
      description: "Document contains table with formatting",
      points: 15,
      maxPoints: 15,
      status: "passed",
      details: "Found table with proper formatting and borders",
    },
    {
      ruleId: "3",
      description: "Document has footer with page numbers",
      points: 5,
      maxPoints: 10,
      status: "partial",
      details: "Found footer but page numbers are incorrectly formatted",
    },
    {
      ruleId: "4",
      description: "Document uses correct citation style",
      points: 0,
      maxPoints: 10,
      status: "failed",
      details: "No citations found in the document",
    },
    {
      ruleId: "5",
      description: "Document has table of contents",
      points: 10,
      maxPoints: 10,
      status: "passed",
      details: "Table of contents correctly formatted and includes all headings",
    },
  ],
};

export default function SubmissionDetail() {
  const totalPoints = mockSubmission.detailedReport.reduce((sum, item) => sum + item.points, 0);
  const maxPoints = mockSubmission.detailedReport.reduce((sum, item) => sum + item.maxPoints, 0);
  
  return (
    <AdminLayout>
      <div className="p-6">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Submission Details
            </h1>
            <div className="flex space-x-2">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Download Submission
              </button>
            </div>
          </div>
          <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <svg
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {mockSubmission.student.name} ({mockSubmission.student.email})
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <svg
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <Link href={`/admin/tests/${mockSubmission.test.id}`} className="hover:text-indigo-600">
                {mockSubmission.test.title}
              </Link>
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <svg
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Submitted: {mockSubmission.submittedAt}
            </div>
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-md mb-8">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-medium text-gray-900">Grading Summary</h2>
              <p className="mt-1 text-sm text-gray-500">
                Overall score and status.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">{mockSubmission.score}%</div>
              <div className="text-sm text-gray-500">
                {totalPoints} out of {maxPoints} points
              </div>
              <span className={`mt-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                mockSubmission.status === 'Completed' 
                  ? 'bg-green-100 text-green-800' 
                  : mockSubmission.status === 'Failed'
                  ? 'bg-red-100 text-red-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {mockSubmission.status}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900">Detailed Report</h2>
            <p className="mt-1 text-sm text-gray-500">
              Breakdown of automated grading results.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rule
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Points
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockSubmission.detailedReport.map((item) => (
                  <tr key={item.ruleId} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{item.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.status === 'passed' 
                          ? 'bg-green-100 text-green-800' 
                          : item.status === 'partial'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.points} / {item.maxPoints}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">{item.details}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <Link
            href="/admin/submissions"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <svg
              className="-ml-1 mr-2 h-5 w-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Submissions
          </Link>

          <div className="space-x-2">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Edit Score
            </button>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Report
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
