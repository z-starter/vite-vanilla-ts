# Vite Vanilla TypeScript Starter

A minimal, fast, and modern starter template for building web applications with Vite, TypeScript, and SCSS. This starter kit provides a clean foundation with essential tooling and best practices pre-configured.

## ✨ Features

- **⚡ Lightning Fast Development** - Powered by Vite for instant server start and hot module replacement
- **🔒 Type Safety** - TypeScript configured with strict type checking
- **🎨 Modern Styling** - SCSS support with organized styling structure
- **🚀 Production Ready** - Optimized build configuration for production deployment
- **📏 Code Quality** - Prettier pre-configured for consistent code formatting
- **📦 Efficient Dependency Management** - Yarn package manager with zero-installs setup
- **📁 Organized Structure** - Clean separation of source code, assets, and configuration

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/z-starter/vite-vanilla-ts.git
cd vite-vanilla-ts
```

2. **Install dependencies**
```bash
yarn install
```

3. **Start the development server**
```bash
yarn dev
```

4. **Open your browser**
Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server |
| `yarn build` | Build for production |
| `yarn preview` | Preview production build locally |

## 🔧 Configuration

### Vite Configuration
The project uses a minimal Vite configuration in `vite.config.ts` with TypeScript support and basic optimization settings.

### TypeScript
Strict TypeScript configuration with modern ECMAScript target and module settings. Includes type checking for both source files and configuration files.

### Styling
- SCSS support out of the box
- Organized styles directory structure
- CSS preprocessing for variables, mixins, and nesting

### Code Formatting
Prettier is configured with sensible defaults:
- `.prettierrc` - Prettier configuration
- `.prettierignore` - Files to exclude from formatting

## 🛠️ Development

### Adding Dependencies
```bash
# Add a production dependency
yarn add package-name

# Add a development dependency
yarn add -D package-name
```

## 🏗️ Building for Production

To create a production build:
```bash
yarn build
```

The build process will:
1. Type-check all TypeScript files
2. Bundle and minify your code
3. Optimize assets
4. Generate source maps for debugging
5. Output to the `dist/` directory

To preview the production build:
```bash
yarn preview
```

## 📝 TypeScript Usage

This project uses strict TypeScript configuration. Here are some tips:

- All TypeScript files should have proper type annotations
- Use interfaces and types for better type safety
- Enable strict mode catches common programming errors
- Vite provides type definitions for import statements

## 🔍 Code Quality

### Pre-commit Considerations
Consider setting up pre-commit hooks to:
1. Format code with Prettier
2. Run TypeScript type checking
3. Ensure code quality standards

### Recommended VS Code Extensions
- TypeScript and JavaScript Language Features
- Prettier - Code formatter
- SCSS IntelliSense
- Error Lens

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgements

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Yarn](https://yarnpkg.com/) - Fast, reliable, and secure dependency management
- [Prettier](https://prettier.io/) - Opinionated code formatter

## 📞 Support

For issues, feature requests, or questions:
1. Check existing issues in the repository
2. Create a new issue with detailed description
3. Provide reproduction steps for bugs

---

**Happy coding!** 🚀
