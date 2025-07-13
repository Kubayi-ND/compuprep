import Header from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import TestResult from "../../../../components/TestResult";

export default function ResultsPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch result details based on params.id
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <TestResult />
      </main>
      <Footer />
    </div>
  );
}
