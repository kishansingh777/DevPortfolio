# Portfolio Website - Full Stack Developer

## Overview

A modern, responsive portfolio website for Kishan Singh, a Full Stack Developer at Softcon Business Solutions. The application showcases professional experience in ERP software development, featuring a dark code-inspired theme with interactive animations. Built as a single-page application with sections for About, Skills, Projects, Experience, and Contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast hot reloading
- **Tailwind CSS** with custom CSS variables for consistent theming
- **shadcn/ui** component library with Radix UI primitives for accessible components
- **Wouter** for client-side routing (lightweight React Router alternative)
- **TanStack Query** for state management and API interaction patterns

### Component Structure
- Modular component architecture with separation of concerns
- Custom UI components built on top of Radix UI primitives
- Section-based layout (Hero, About, Skills, Projects, Experience, Contact)
- Responsive design with mobile-first approach
- Interactive animations and typing effects

### State Management
- React Query for server state and caching
- Local component state using React hooks
- Toast notifications for user feedback
- Form state management with controlled inputs

### Styling System
- Tailwind CSS with custom design tokens
- CSS variables for dynamic theming
- Code-inspired color palette with syntax highlighting colors
- Custom fonts: Inter for text, JetBrains Mono for code elements
- Responsive breakpoints and mobile optimization

### Backend Architecture
- **Express.js** server with TypeScript
- **Drizzle ORM** with PostgreSQL for database operations
- **Neon Database** as the PostgreSQL provider
- RESTful API structure with /api prefix routing
- Session management with connect-pg-simple

### Database Design
- PostgreSQL database with Drizzle schema definitions
- User authentication table structure (currently basic user/password)
- Database migrations managed through Drizzle Kit
- Environment-based database configuration

### Development Workflow
- Hot module replacement in development
- TypeScript compilation and type checking
- ESBuild for production bundling
- Separate client and server build processes

## External Dependencies

### Core Framework Dependencies
- **React 18** - Frontend framework
- **Express.js** - Backend web framework
- **TypeScript** - Type safety across the stack
- **Vite** - Build tool and development server

### Database & ORM
- **Drizzle ORM** - Type-safe database operations
- **@neondatabase/serverless** - PostgreSQL database provider
- **connect-pg-simple** - PostgreSQL session store

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **@radix-ui/*** - Accessible UI primitives (multiple packages)
- **shadcn/ui** - Pre-built component system
- **Lucide React** - Icon library
- **class-variance-authority** - Component variant utilities

### Forms & Validation
- **React Hook Form** - Form state management
- **@hookform/resolvers** - Form validation resolvers
- **Zod** - Schema validation (via drizzle-zod)

### Development Tools
- **tsx** - TypeScript execution for development
- **ESBuild** - JavaScript bundler for production
- **PostCSS** - CSS processing with Autoprefixer

### Replit Integration
- **@replit/vite-plugin-runtime-error-modal** - Development error handling
- **@replit/vite-plugin-cartographer** - Development debugging tools

The application is designed as a static portfolio site that can be easily deployed, with the backend infrastructure prepared for future dynamic features like contact form submissions or content management.