import fs from 'fs/promises';
import path from 'path';
import { ProjectConfig } from '../types';

export async function setupAuthentication(config: ProjectConfig) {
  const projectPath = path.resolve(process.cwd(), config.name);
  
  // Create auth-related directories
  const authDirs = [
    'src/components/auth',
    'src/utils/auth',
    'src/pages/auth'
  ];

  for (const dir of authDirs) {
    await fs.mkdir(path.join(projectPath, dir), { recursive: true });
  }

  // Create Supabase client configuration
  const supabaseConfig = `
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
`;

  await fs.writeFile(
    path.join(projectPath, 'src/utils/supabase.ts'),
    supabaseConfig
  );
}