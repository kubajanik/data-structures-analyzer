export interface NavigationNode {
  name: string;
  id?: string;
  level: number;
  children?: NavigationNode[];
}

export type Navigation = NavigationNode[];
