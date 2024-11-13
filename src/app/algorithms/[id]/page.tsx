import Main from "@/components/main";
import { generateAlgorithms } from "@/analyzer/generate-algorithms";

const algorithms = await generateAlgorithms();

export const generateStaticParams = async () => {
  return algorithms.map((algorithm) => ({ id: algorithm.id }));
};

async function getAlgorithm(id: string) {
  const algorithm = algorithms.find((x) => x.id === id);

  return algorithm;
}

export default async function Algorithm({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const algorithm = await getAlgorithm(id);

  return <Main algorithmData={algorithm!} />;
}
