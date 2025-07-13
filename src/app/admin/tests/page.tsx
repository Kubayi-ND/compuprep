import Link from "next/link";
import AdminLayout from "../../../components/admin/AdminLayout";
import AdminTestsTable from "../../../components/admin/AdminTestsTable";

export default function AdminTests() {
  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Manage Tests</h1>
          <Link 
            href="/admin/tests/new"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create New Test
          </Link>
        </div>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900">All Tests</h2>
            <p className="mt-1 text-sm text-gray-500">
              Manage all available tests. You can edit, delete, or view detailed statistics.
            </p>
          </div>
          <AdminTestsTable />
        </div>
      </div>
    </AdminLayout>
  );
}
