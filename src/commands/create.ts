import inquirer from 'inquirer';
import chalk from 'chalk';
import { ProjectOptions, ProjectConfig } from '../types/index.js';
import { initializeProject } from '../utils/project.js';
import { setupAuthentication } from '../utils/auth.js';
import { setupDatabase } from '../utils/database.js';
import { setupUI } from '../utils/ui.js';

async function promptForMissingOptions(projectName: string, options: ProjectOptions): Promise<ProjectConfig> {
  const questions = [];

  if (!options.framework) {
    questions.push({
      type: 'list',
      name: 'framework',
      message: 'Which framework would you like to use?',
      choices: ['next', 'vite'],
    });
  }

  // Add remaining prompts
  const answers = await inquirer.prompt(questions);
  
  return {
    name: projectName,
    framework: options.framework || answers.framework,
    language: options.framework === 'next' ? 'ts' : 'js',
    auth: !!options.auth,
    db: !!options.db,
    ui: options.ui || 'none',
    deployment: 'vercel'
  };
}

export async function createProject(projectName: string, options: ProjectOptions): Promise<void> {
  try {
    console.log(chalk.blue(`\nCreating project: ${projectName}`));
    
    const config = await promptForMissingOptions(projectName, options);
    
    // Initialize project first
    await initializeProject(config);
    
    // Setup additional features
    if (config.ui && config.ui !== 'none') {
      console.log(chalk.blue('\nSetting up UI...'));
      await setupUI(config);
    }
    
    if (config.auth) {
      console.log(chalk.blue('\nSetting up authentication...'));
      await setupAuthentication(config);
    }
    
    if (config.db) {
      console.log(chalk.blue('\nSetting up database...'));
      await setupDatabase(config);
    }
    
    console.log(chalk.green('\n✨ Project created successfully!'));
    console.log(chalk.blue('\nNext steps:'));
    console.log(`  cd ${projectName}`);
    console.log('  npm install');
    console.log('  npm run dev');
    
  } catch (error) {
    console.error(chalk.red('\nError creating project:'));
    if (error instanceof Error) {
      console.error(chalk.red(error.message));
    }
    process.exit(1);
  }
}

