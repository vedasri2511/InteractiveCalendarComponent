# Interactive Calendar Component

A modern, interactive calendar component built with React, TypeScript, and Vite. Features a clean UI with day tracking, note management, and navigation controls.

## Features

- 📅 Interactive calendar view with month navigation
- 📝 Note-taking functionality for individual days
- 🎨 Modern UI built with shadcn/ui components
- ⚡ Fast development with Vite
- 🧪 Testing with Vitest and Playwright
- 📱 Responsive design with Tailwind CSS

## Quick Start

### Prerequisites
- Node.js (v18+)
- npm or bun

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The server will start at `http://localhost:8080/`

### Build

```bash
npm run build
```

### Testing

```bash
npm run test          # Run tests once
npm run test:watch   # Watch mode
```

## Project Structure

```
src/
├── components/
│   ├── calendar/      # Calendar-related components
│   ├── ui/           # shadcn/ui components
│   └── NavLink.tsx
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── lib/              # Utilities and helpers
└── test/             # Test files
```

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Vitest** - Testing framework
- **Playwright** - E2E testing
