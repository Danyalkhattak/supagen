#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import { createProject } from './commands/create.js';
import { showHelp } from './commands/help.js';

const program = new Command();

program
  .name('supagen')
  .description('⚡ Modern full-stack app generator with Next.js/Vite + Supabase')
  .version('1.0.0');

program
  .command('create <project-name>')
  .description('Create a new full-stack project')
  .option('-f, --framework <type>', 'framework to use (next/vite)')
  .option('-a, --auth', 'include authentication')
  .option('-d, --db', 'include database setup')
  .option('-u, --ui <library>', 'UI library (tailwind/shadcn)')
  .action(createProject);

program
  .command('help')
  .description('Display help information')
  .action(showHelp);

program.parse();