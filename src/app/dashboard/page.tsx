import Header from "../../components/Header";
import Footer from "../../components/Footer";

const attemptHistory = [
  {
    id: 1,
    testName: "Basic Word Document Formatting",
    date: "2025-07-10",
    score: 85,
    status: "Completed",
  },
  {
    id: 2,
    testName: "Excel Formulas and Functions",
    date: "2025-07-09",
    score: 70,
    status: "Completed",
  },
  {
    id: 3,
    testName: "PowerPoint Presentation Design",
    date: "2025-07-08",
    score: 92,
    status: "Completed",
  },
  {
    id: 4,
    testName: "Comprehensive Office Suite Test",
    date: "2025-07-07",
    score: 78,
    status: "Completed",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900">
              Student Dashboard
            </h1>
            <p className="mt-2 text-gray-600">
              Track your progress and view your test history
            </p>
          </div>

          {/* Stats Overview */}
          <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Tests Completed
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  4
                </dd>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Average Score
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  81%
                </dd>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Best Performance
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  PowerPoint
                </dd>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Area for Improvement
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  Excel
                </dd>
              </div>
            </div>
          </div>

          {/* Test History */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Test History</h2>
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Test Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Score
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Status
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">View Details</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {attemptHistory.map((attempt) => (
                          <tr key={attempt.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">
                                {attempt.testName}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">
                                {new Date(attempt.date).toLocaleDateString()}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {attempt.score}%
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className={`h-2 rounded-full ${
                                    attempt.score >= 90
                                      ? "bg-green-500"
                                      : attempt.score >= 70
                                      ? "bg-yellow-500"
                                      : "bg-red-500"
                                  }`}
                                  style={{ width: `${attempt.score}%` }}
                                ></div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                  attempt.status === "Completed"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {attempt.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button className="text-indigo-600 hover:text-indigo-900">
                                View Details
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
