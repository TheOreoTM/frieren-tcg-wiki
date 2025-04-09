import type { DeckCardProps } from "../types";

export class DeckCard implements DeckCardProps {
  readonly EMPOWER_BOOST = 0.1;

  title: string;
  description: string;
  effects: number[];
  emoji: string;
  empowerLevel: number;
  printEmpower: boolean;
  priority: number;
  tags: Record<string, number>;

  constructor(props: DeckCardProps) {
    this.title = props.title;
    this.description = props.description;
    this.effects = props.effects;
    this.emoji = props.emoji;
    this.empowerLevel = props.empowerLevel;
    this.printEmpower = props.printEmpower;
    this.priority = props.priority;
    this.tags = props.tags;
  }
}
