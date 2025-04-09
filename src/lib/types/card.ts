export type DeckCardProps = {
  title: string;
  description: string;
  priority: number;
  effects: number[];
  emoji: string;
  tags: Record<string, number>;
  printEmpower: boolean;
  empowerLevel: number;
};
