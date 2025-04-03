import fs from 'fs/promises';
import path from 'path';
import { ProjectConfig } from '../types';

export async function createProjectStructure(config: ProjectConfig) {
  const projectPath = path.resolve(process.cwd(), config.name);
  
  const directories = [
    'src/components',
    'src/utils',
    'src/services',
    config.framework === 'next' ? 'src/pages' : 'src/views',
  ];

  for (const dir of directories) {
    await fs.mkdir(path.join(projectPath, dir), { recursive: true });
  }
}