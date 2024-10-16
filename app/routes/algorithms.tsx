import {
  json,
  Link,
  Outlet,
  ShouldRevalidateFunction,
  useLoaderData,
  useParams,
} from "@remix-run/react";

import { Header } from "~/components";
import { AlgorithmData } from "~/types";
import { db } from "~/utils/db.server";

export const loader = async () => {
  const algorithms = await db
    .collection<AlgorithmData>("algorithms")
    .find()
    .toArray();

  return json({ algorithms });
};

export default function AlgorithmsLayout() {
  const params = useParams();
  const { algorithms } = useLoaderData<typeof loader>();

  return (
    <main className="flex h-screen flex-col">
      <Header />

      <div className="flex h-full border-neutral-200">
        <nav className="flex-shrink-0 border-r border-neutral-100">
          <ul>
            {algorithms.map((algorithm) => (
              <li
                key={algorithm.id}
                className={`mt-2 max-w-56 rounded-sm px-3 py-1 text-xs text-neutral-500 ${algorithm.id === params.algorithm ? "bg-blue-50 shadow-sm" : ""}`}
              >
                <Link to={`/algorithms/${algorithm.id}`}>{algorithm.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Outlet />
      </div>
    </main>
  );
}

export const shouldRevalidate: ShouldRevalidateFunction = () => false;
