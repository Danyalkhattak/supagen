export interface ProjectOptions {
  framework?: string;
  auth?: boolean;
  db?: boolean;
  ui?: string;
  language?: 'js' | 'ts';
  deployment?: string;
}

export interface ProjectConfig {
  name: string;
  framework: string;
  language: 'js' | 'ts';
  auth: boolean;
  db: boolean;
  ui: string | null;
  deployment: string;
}