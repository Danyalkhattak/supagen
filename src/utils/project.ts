import { execa } from 'execa';
import chalk from 'chalk';
import { ProjectConfig } from '../types/index.js';

export async function initializeProject(config: ProjectConfig) {
  try {
    console.log(chalk.blue('\nInitializing project...'));
    
    if (config.framework === 'next') {
      // Use npx to run create-next-app
      await execa('npx', [
        'create-next-app@latest',
        config.name,
        '--typescript',
        '--tailwind',
        '--eslint',
        '--app',
        '--src-dir',
        '--import-alias', '@/*'
      ], { stdio: 'inherit' });
    } else {
      // Use npm create for Vite
      await execa('npm', [
        'create',
        'vite@latest',
        config.name,
        '--',
        '--template',
        `react-${config.language}`
      ], { stdio: 'inherit' });
    }

    console.log(chalk.green('\n✓ Project initialized successfully'));
  } catch (error) {
    console.error(chalk.red('\nFailed to initialize project:'), error);
    throw error;
  }
}