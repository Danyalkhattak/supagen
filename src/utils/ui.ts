import { execa } from 'execa';
import { ProjectConfig } from '../types';

export async function setupUI(config: ProjectConfig) {
  if (!config.ui || config.ui === 'none') return;

  const commands = [];
  
  if (config.ui === 'tailwind') {
    commands.push(['npm', 'install', '-D', 'tailwindcss', 'postcss', 'autoprefixer']);
    commands.push(['npx', 'tailwindcss', 'init', '-p']);
  } else if (config.ui === 'shadcn') {
    commands.push(['npx', 'shadcn-ui@latest', 'init']);
  }

  for (const [cmd, ...args] of commands) {
    await execa(cmd, args, { stdio: 'inherit', cwd: config.name });
  }
}