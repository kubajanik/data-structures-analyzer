import { json, Link, Outlet, useLoaderData, useParams } from "@remix-run/react";

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
    <main className="flex h-screen flex-col font-mono">
      <Header />

      <div className="flex h-full border-neutral-200">
        <nav className="flex-shrink-0 border-r border-neutral-100">
          <ul>
            {algorithms.map((algorithm) => (
              <li
                key={algorithm.id}
                className={`mt-2 rounded-sm px-3 py-1 text-xs text-neutral-500 ${algorithm.id === params.algorithm ? "bg-neutral-100 shadow-sm" : ""}`}
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
