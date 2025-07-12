import Link from "next/link";

const TestResult = () => {
  // Mock data for test result
  const result = {
    testName: "Basic Word Document Formatting",
    score: 85,
    passThreshold: 70,
    completedAt: new Date().toLocaleDateString(),
    timeSpent: "28 minutes",
    feedback: [
      {
        category: "Document Structure",
        score: 90,
        feedback: "Excellent document structure with proper headings and organization.",
      },
      {
        category: "Formatting",
        score: 80,
        feedback: "Good use of styles, but inconsistent font usage in some sections.",
      },
      {
        category: "Page Setup",
        score: 95,
        feedback: "Correct margins, headers, and footers as specified.",
      },
      {
        category: "Tables and Lists",
        score: 75,
        feedback: "Tables were properly created but could use better formatting. Lists were well structured.",
      },
    ],
    nextAvailableAttempt: new Date(new Date().getTime() + 10 * 60000).toLocaleTimeString(), // 10 minutes from now
  };

  const isPassed = result.score >= result.passThreshold;

  return (
    <div className="bg-white py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Test Results</h1>
          <p className="mt-1 text-lg text-gray-500">{result.testName}</p>
        </div>

        {/* Result Summary */}
        <div className="bg-gray-50 rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col items-center">
            <div className="relative">
              <svg className="w-32 h-32" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#EAEAEA"
                  strokeWidth="3"
                  strokeDasharray="100, 100"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke={isPassed ? "#48BB78" : "#F56565"}
                  strokeWidth="3"
                  strokeDasharray={`${result.score}, 100`}
                />
                <text
                  x="18"
                  y="20.35"
                  className="text-xl font-semibold"
                  textAnchor="middle"
                  fill={isPassed ? "#48BB78" : "#F56565"}
                >
                  {result.score}%
                </text>
              </svg>
            </div>
            <div className="mt-4 text-center">
              <p className="text-2xl font-bold">{isPassed ? "Passed!" : "Failed"}</p>
              <p className="text-sm text-gray-500">
                Passing threshold: {result.passThreshold}%
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="text-sm font-medium text-gray-500">Completed On</p>
              <p className="mt-1 font-semibold">{result.completedAt}</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="text-sm font-medium text-gray-500">Time Spent</p>
              <p className="mt-1 font-semibold">{result.timeSpent}</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="text-sm font-medium text-gray-500">Next Attempt Available</p>
              <p className="mt-1 font-semibold">{result.nextAvailableAttempt}</p>
            </div>
          </div>
        </div>

        {/* Detailed Feedback */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Detailed Feedback</h2>
          <div className="space-y-4">
            {result.feedback.map((item, index) => (
              <div key={index} className="border rounded-md p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{item.category}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-medium ${
                      item.score >= 90
                        ? "bg-green-100 text-green-800"
                        : item.score >= 70
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.score}%
                  </span>
                </div>
                <p className="text-gray-600">{item.feedback}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Return to Dashboard
          </Link>
          <Link
            href="/tests"
            className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Try Another Test
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestResult;
