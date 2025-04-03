# ⚡ Supagen

> Modern full-stack app generator with Next.js/Vite + Supabase

## Features

- 🚀 Next.js or Vite project scaffolding
- 🔐 Authentication setup with Supabase
- 💾 Database integration
- 🎨 UI libraries (Tailwind, Shadcn)
- 📱 Responsive layouts
- 🔧 Best practices and configuration

## Quick Start

```bash
# Create a new project
npx supagen create my-app

# Or with options
npx supagen create my-app --framework next --auth --db
```

## Options

- `--framework`: Choose between Next.js or Vite
- `--auth`: Include authentication setup
- `--db`: Include database integration
- `--ui`: Include UI library (tailwind/shadcn)

## Installation

```bash
# Install globally (optional)
npm install -g supagen

# Or use directly with npx
npx supagen create my-app
```

## Project Structure

```
my-app/
├── src/
│   ├── components/
│   ├── pages/ (Next.js) or views/ (Vite)
│   ├── utils/
│   └── services/
├── public/
├── .env
└── package.json
```

## License

MIT © [Danyalkhattak](https://github.com/Danyalkhattak)