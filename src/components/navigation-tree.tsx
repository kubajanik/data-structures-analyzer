"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Navigation, NavigationNode } from "@/types";

const getKey = (node: NavigationNode) => {
  if (node.id) {
    return node.id;
  }

  return `${node.name}-${node.level}`;
};

export const NavigationTree = ({ navigation }: { navigation: Navigation }) => {
  return (
    <div className="text-xs text-neutral-500">
      {navigation.map((node) => (
        <TreeNode key={getKey(node)} node={node} />
      ))}
    </div>
  );
};

const levelToPadding: Record<number, `pl-${number}`> = {
  0: "pl-2",
  1: "pl-8",
  2: "pl-16",
  3: "pl-32",
};

const TreeNode = ({ node }: { node: NavigationNode }) => {
  const pathname = usePathname();

  const [isExpanded, setIsExpanded] = useState(node.level === 0);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const style = `flex cursor-pointer items-center gap-4 py-1.5 ${
    levelToPadding[node.level]
  } hover:bg-blue-50 ${
    node.id && pathname.includes(node.id) ? "bg-blue-50 font-semibold" : ""
  }`;

  return (
    <>
      {node.id ? (
        <Link className={style} href={`/algorithms/${node.id}`}>
          {node.name}
        </Link>
      ) : (
        <div className={style} onClick={toggleExpand}>
          {node.children && (isExpanded ? <ArrowDown /> : <ArrowRight />)}
          {node.name}
        </div>
      )}

      {isExpanded &&
        node.children?.map((childNode) => (
          <TreeNode key={getKey(childNode)} node={childNode} />
        ))}
    </>
  );
};

const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="size-4"
  >
    <path
      fillRule="evenodd"
      d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

const ArrowDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="size-4"
  >
    <path
      fillRule="evenodd"
      d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);
