import { ReactNode } from "react";

import { generateNavigation } from "@/analyzer/generate-navigation";
import { Header } from "@/components/header";
import { NavigationTree } from "@/components/navigation-tree";

export default function AlgorithmsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const navigation = generateNavigation();

  return (
    <main className="flex h-screen flex-col">
      <Header />

      <div className="flex h-full">
        <nav className="basis-64 border-r-2 border-neutral-100">
          <NavigationTree navigation={navigation} />
        </nav>

        {children}
      </div>
    </main>
  );
}
