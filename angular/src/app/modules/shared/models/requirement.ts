export interface Requirement {
  completed?: boolean;
  req: string;
  sub?: Requirement[]
}