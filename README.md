# Task Management & Mentor System

A comprehensive task management application with an integrated mentor system, built with React, TypeScript, and MongoDB.

## 🚀 Features

### Task Management
- Create, assign, and track task progress
- Visual progress bars and deadline management
- Category-based organization and filtering
- Time estimation and tracking
- Mentor assignment for guidance

### Mentor System
- Comprehensive mentor profiles with expertise areas
- Rating and review system
- Follow/unfollow functionality
- Mentor search and filtering
- Availability tracking and scheduling

### User Interface
- Modern, responsive design
- Search and filtering capabilities
- Real-time updates and notifications
- Mobile-friendly interface

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: CSS3 with modern design principles
- **Database**: MongoDB with comprehensive schema
- **Build Tool**: Webpack 5
- **Development**: Hot reload with webpack-dev-server

## 📁 Project Structure

This project is now organized into separate frontend and backend folders for independent deployment:

```
├── frontend/               # React frontend application
│   ├── src/               # React source code
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Main page components
│   │   │   ├── MentorsPage.tsx # Mentor exploration page
│   │   │   └── TasksPage.tsx   # Task management page
│   │   ├── types/         # TypeScript type definitions
│   │   ├── services/      # API service functions
│   │   ├── styles/        # CSS stylesheets
│   │   ├── App.tsx        # Main application component
│   │   └── index.tsx      # Application entry point
│   ├── public/            # Static assets
│   ├── package.json       # Frontend dependencies
│   ├── webpack.config.js  # Webpack configuration
│   ├── tsconfig.json      # TypeScript configuration
│   └── vercel.json        # Vercel deployment config
├── backend/               # Node.js backend API
│   ├── api/               # API route handlers
│   ├── server.js          # Express server
│   ├── setup_database.js  # Database setup script
│   ├── test_database.js   # Database testing script
│   ├── database_schema.md # MongoDB schema documentation
│   ├── package.json       # Backend dependencies
│   └── README.md          # Backend deployment guide
└── README.md              # This file
```

## 🚀 Quick Start

### Frontend Development
```bash
cd frontend
npm install
npm start
```
The frontend will open at `http://localhost:3000`

### Backend Development
```bash
cd backend
npm install
npm run setup-db
npm run dev
```
The backend API will run at `http://localhost:4000`

## 📊 Database Setup

### Prerequisites
- MongoDB 5.0 or higher
- Node.js 16.0 or higher

### Setup Commands
```bash
# Setup database and collections
npm run setup-db

# Test database connection
npm run test-db
```

### Database Features
- **14 Collections** for comprehensive data management
- **30+ Indexes** for optimal performance
- **Sample Data** included for testing
- **Linked Entities** between tasks, users, and mentors

## 🎯 Available Scripts

- `npm start` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run dev` - Start development server
- `npm run setup-db` - Setup MongoDB database
- `npm run test-db` - Test database connection

## 🌐 Application Routes

- `/` - Overview page
- `/tasks` - Task management page
- `/mentors` - Mentor exploration page
- `/messages` - Messaging system
- `/settings` - User settings

## 🎨 UI Components

### Navigation
- Sidebar navigation with DNX branding
- User profile and notification system
- Help center integration

### Mentor Page
- Search and filter mentors by category
- Mentor cards with ratings and reviews
- Follow/unfollow functionality
- Recent mentors horizontal scroll

### Task Page
- Task cards with progress tracking
- Category filtering and sorting
- Deadline management
- Time limit section with horizontal scroll

## 🔧 Development

### Adding New Components
1. Create component in `src/components/`
2. Add TypeScript interfaces in `src/types/`
3. Import and use in pages

### Styling
- CSS modules or regular CSS files
- Responsive design with mobile-first approach
- Modern CSS features (Grid, Flexbox, CSS Variables)

### Database Integration
- MongoDB connection through services
- Type-safe data models
- Real-time updates with WebSocket support (future)

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: 768px, 1024px
- Flexible grid layouts
- Touch-friendly interactions

## 🚀 Deployment

### Frontend (Vercel)
1. Navigate to `frontend/` folder
2. Connect to Vercel
3. Deploy automatically

### Backend (Render)
1. Navigate to `backend/` folder
2. Connect to Render
3. Set environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Secret for JWT tokens
   - `PORT`: 4000 (or let Render assign)
4. Deploy!

### API Integration
Once your backend is deployed on Render, update the frontend API calls to use your Render URL:
```typescript
const API_BASE_URL = 'https://your-backend.onrender.com';
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes with proper TypeScript types
4. Test thoroughly
5. Submit pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🆘 Support

For issues or questions:
1. Check MongoDB logs for database issues
2. Verify all dependencies are installed
3. Review webpack configuration
4. Check browser console for frontend errors
