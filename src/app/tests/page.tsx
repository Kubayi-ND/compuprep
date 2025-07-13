import Header from "../../components/Navbar";
import Footer from "../../components/Footer";

const testsData = [
  {
    id: 1,
    title: "Basic Word Document Formatting",
    description: "Practice formatting text, paragraphs, and basic document structure.",
    difficulty: "Beginner",
    duration: "30 minutes",
    fileTypes: ["Word"],
  },
  {
    id: 2,
    title: "Excel Formulas and Functions",
    description: "Learn to use common Excel formulas and functions for data analysis.",
    difficulty: "Intermediate",
    duration: "45 minutes",
    fileTypes: ["Excel"],
  },
  {
    id: 3,
    title: "PowerPoint Presentation Design",
    description: "Create an engaging presentation with animations and transitions.",
    difficulty: "Beginner",
    duration: "40 minutes",
    fileTypes: ["PowerPoint"],
  },
  {
    id: 4,
    title: "Access Database Creation",
    description: "Build a basic database with tables, queries, and forms.",
    difficulty: "Advanced",
    duration: "60 minutes",
    fileTypes: ["Access"],
  },
  {
    id: 5,
    title: "Comprehensive Office Suite Test",
    description: "Test your skills across multiple Microsoft Office applications.",
    difficulty: "Advanced",
    duration: "90 minutes",
    fileTypes: ["Word", "Excel", "PowerPoint"],
  },
];

export default function TestsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Available Practice Tests
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Select a test below to begin practicing your computer literacy skills.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {testsData.map((test) => (
              <div key={test.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">{test.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{test.description}</p>
                      <div className="mt-3 flex items-center space-x-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800">
                          {test.difficulty}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                          {test.duration}
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {test.fileTypes.map((fileType) => (
                            <span 
                              key={fileType} 
                              className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800"
                            >
                              {fileType}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <button 
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => {/* Will be implemented later */}}
                      >
                        Start Test
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
