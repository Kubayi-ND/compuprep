import SplitScreenTest from "../../../components/SplitScreenTest";

export default function TestPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch test details based on params.id
  return <SplitScreenTest />;
}
