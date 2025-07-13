import Link from "next/link";

// Mock data - this would be fetched from your backend in a real application
const mockTests = [
  {
    id: "1",
    title: "Basic Word Document Formatting",
    createdAt: "2025-07-05",
    submissions: 24,
    averageScore: 76,
    status: "Active",
  },
  {
    id: "2",
    title: "Excel Formulas and Functions",
    createdAt: "2025-07-08",
    submissions: 15,
    averageScore: 68,
    status: "Active",
  },
  {
    id: "3",
    title: "PowerPoint Presentation Design",
    createdAt: "2025-07-10",
    submissions: 8,
    averageScore: 72,
    status: "Active",
  },
  {
    id: "4",
    title: "Access Database Queries",
    createdAt: "2025-07-12",
    submissions: 5,
    averageScore: 65,
    status: "Draft",
  },
];

const AdminTestsTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Test Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Created
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Submissions
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Avg. Score
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
          {mockTests.map((test) => (
            <tr key={test.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  <Link href={`/admin/tests/${test.id}`} className="hover:text-indigo-600">
                    {test.title}
                  </Link>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{test.createdAt}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{test.submissions}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{test.averageScore}%</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  test.status === 'Active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {test.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Link href={`/admin/tests/${test.id}/edit`} className="text-indigo-600 hover:text-indigo-900 mr-4">
                  Edit
                </Link>
                <button className="text-red-600 hover:text-red-900">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTestsTable;
