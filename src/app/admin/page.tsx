import AdminLayout from "../../components/admin/AdminLayout";
import AdminTestsTable from "../../components/admin/AdminTestsTable";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <Link 
            href="/admin/tests/new"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create New Test
          </Link>
        </div>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900">Test Management</h2>
            <p className="mt-1 text-sm text-gray-500">
              View, edit, and manage all available tests.
            </p>
          </div>
          <AdminTestsTable />
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-md mt-8">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900">Student Submissions</h2>
            <p className="mt-1 text-sm text-gray-500">
              View and manage recent student submissions.
            </p>
          </div>
          <div className="border-t border-gray-200">
            {/* We'll implement the submissions table in a future step */}
            <p className="p-4 text-gray-500 italic">No recent submissions found.</p>
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-md mt-8">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900">System Status</h2>
            <p className="mt-1 text-sm text-gray-500">
              Current system statistics and status.
            </p>
          </div>
          <div className="border-t border-gray-200 p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm font-medium text-gray-500">Total Tests</p>
                <p className="mt-1 text-3xl font-semibold text-gray-900">12</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm font-medium text-gray-500">Recent Submissions</p>
                <p className="mt-1 text-3xl font-semibold text-gray-900">48</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm font-medium text-gray-500">Active Students</p>
                <p className="mt-1 text-3xl font-semibold text-gray-900">156</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
