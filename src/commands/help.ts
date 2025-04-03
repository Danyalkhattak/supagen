import chalk from 'chalk';

export function showHelp(): void {
  console.log(chalk.bold('\n⚡ Supagen - Modern Full-Stack App Generator\n'));
  
  console.log('Commands:\n');
  console.log('  create <project-name>  Create a new project');
  console.log('  help                   Show this help message\n');
  
  console.log('Options:\n');
  console.log('  -f, --framework <type>  Framework to use (next/vite)');
  console.log('  -a, --auth             Include authentication');
  console.log('  -d, --db               Include database setup');
  console.log('  -u, --ui <library>     UI library (tailwind/shadcn)\n');
  
  console.log('Examples:\n');
  console.log('  npx supagen create my-app');
  console.log('  npx supagen create my-app --framework next --auth --db');
  console.log('  npx supagen create my-app --framework vite --ui tailwind\n');
}