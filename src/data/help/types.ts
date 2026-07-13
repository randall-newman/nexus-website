export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; variant: 'tip' | 'note' | 'warning'; text: string };

export interface Article {
  slug: string;
  category: string;
  title: string;
  description: string;
  readTime: number;
  updatedAt: string;
  content: Block[];
}

export interface HelpCategory {
  slug: string;
  title: string;
  description: string;
  icon: string;
}
