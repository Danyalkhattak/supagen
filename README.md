# ⚡ Supagen

> Lightning-fast full-stack project generator with Next.js/Vite + Supabase integration

[![NPM Version](https://img.shields.io/npm/v/supagen.svg)](https://www.npmjs.com/package/supagen)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🚀 Instant project setup with Next.js or Vite
- 🔐 Built-in Supabase authentication
- 💾 Database integration and migrations
- 🎨 Popular UI libraries (Tailwind CSS, Shadcn/UI)
- 📱 Responsive layouts & components
- ⚙️ Best practices & configurations included

## 🚀 Quick Start

```bash
# Create a new project
npx supagen create my-app

# With specific options
npx supagen create my-app --framework next --auth --db --ui tailwind
```

## 📦 Installation

```bash
# Global installation (optional)
npm install -g supagen

# Or use directly with npx
npx supagen create my-app
```

## 🛠️ Command Options

| Option | Description | Values |
|--------|-------------|--------|
| `--framework` | Choose your framework | `next`, `vite` |
| `--auth` | Include authentication | `true/false` |
| `--db` | Add database integration | `true/false` |
| `--ui` | Select UI library | `tailwind`, `shadcn`, `none` |

## 📁 Project Structure

```
my-app/
├── src/
│   ├── components/        # Reusable components
│   ├── pages/            # Next.js pages (or views for Vite)
│   ├── utils/            # Helper functions
│   └── services/         # API & service integrations
├── public/               # Static assets
├── .env.example          # Environment variables template
└── package.json          # Project configuration
```

## ⚙️ Configuration

The generator includes pre-configured setups for:

- 🔒 Supabase Authentication
- 🎨 TailwindCSS/Shadcn UI
- 📱 Responsive layouts
- 🚀 Deployment configs

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

MIT © [Danyalkhattak](https://github.com/Danyalkhattak)

## 🙏 Support

If you find this project helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🤝 Contributing to the codebase

---

Made with ❤️ by [Danyalkhattak](https://github.com/Danyalkhattak)