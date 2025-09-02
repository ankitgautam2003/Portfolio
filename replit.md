# Portfolio Website

## Overview

This is a modern, responsive portfolio website built as a full-stack application showcasing a developer's skills, experience, and work. The application features a sleek single-page design with animated sections, a contact form, and a dark theme aesthetic. It combines a React-based frontend with an Express backend, utilizing PostgreSQL for data persistence and modern web technologies for optimal performance and user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, professional UI components
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds
- **Theme System**: Custom dark/light theme provider with localStorage persistence

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript for type safety across the full stack
- **Architecture Pattern**: RESTful API with clear separation of concerns
- **Request Handling**: Express middleware for JSON parsing, logging, and error handling
- **Development Setup**: Hot reload with tsx for development efficiency

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Migration System**: Drizzle Kit for database schema management and migrations
- **Connection**: Neon Database serverless PostgreSQL for cloud-based data persistence
- **Fallback Storage**: In-memory storage implementation for development/testing scenarios
- **Schema Design**: Centralized schema definitions in shared directory for consistency

### Authentication and Authorization
- **Current State**: No authentication system implemented
- **Data Access**: Open API endpoints for contact form submissions and data retrieval
- **Security Considerations**: Basic error handling and input validation using Zod schemas

### Development and Deployment
- **Monorepo Structure**: Shared types and schemas between client and server
- **Development Server**: Concurrent client and server development with Vite integration
- **Build Process**: Separate client (Vite) and server (esbuild) build pipelines
- **Static Assets**: Vite handles client-side asset optimization and bundling

## External Dependencies

### UI and Styling
- **shadcn/ui**: Comprehensive React component library built on Radix UI primitives
- **Radix UI**: Headless UI components for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe variant API for component styling

### Data and API Management
- **TanStack Query**: Server state management with caching and synchronization
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL support
- **Zod**: Schema validation for API requests and database operations
- **Neon Database**: Serverless PostgreSQL hosting service

### Development Tools
- **Vite**: Frontend build tool with HMR and optimization
- **TypeScript**: Static type checking across the entire application
- **esbuild**: Fast JavaScript bundler for server-side code
- **tsx**: TypeScript execution engine for development

### Form and Interaction
- **React Hook Form**: Performant form handling with minimal re-renders
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation
- **Wouter**: Minimalist routing library for single-page navigation

### Additional Utilities
- **date-fns**: Date manipulation and formatting library
- **clsx**: Conditional className utility for dynamic styling
- **nanoid**: Unique ID generation for various application needs