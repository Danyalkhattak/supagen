import fs from 'fs/promises';
import path from 'path';
import { ProjectConfig } from '../types';

export async function setupDatabase(config: ProjectConfig) {
  const projectPath = path.resolve(process.cwd(), config.name);
  
  // Create basic schema file
  const schemaSQL = `
-- Create users table extension
create extension if not exists "uuid-ossp";

-- Create users table
create table public.users (
  id uuid default uuid_generate_v4() primary key,
  email text unique,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.users enable row level security;
`;

  await fs.writeFile(
    path.join(projectPath, 'supabase/migrations/0001_initial_schema.sql'),
    schemaSQL
  );

  // Create .env template
  const envTemplate = `
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
`;

  await fs.writeFile(
    path.join(projectPath, '.env.example'),
    envTemplate
  );
}