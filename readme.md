# Job Portal API

A robust backend API for a job portal application that allows users to browse job listings and submit job applications. Built with Express.js, TypeScript, and MongoDB.

## Features

- **Job Management**: Browse and filter job listings by company, location, and category
- **Job Applications**: Submit applications for job positions with resume and cover notes
- **MongoDB Integration**: Persistent data storage with Mongoose ODM
- **CORS Support**: Cross-Origin Resource Sharing enabled for client applications
- **Environment Configuration**: Secure configuration management with environment variables
- **Type Safety**: Full TypeScript support for better code quality and IDE support

## Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js v5
- **Database**: MongoDB with Mongoose
- **Package Manager**: pnpm

## Project Structure

```
src/
├── app.ts                 # Express app setup and middleware
├── server.ts              # Server entry point and configuration validation
├── config/
│   └── connectDB.ts       # MongoDB connection setup
├── controllers/
│   ├── application.controller.ts  # Application submission logic
│   └── job.controller.ts          # Job listing logic
├── models/
│   ├── Application.model.ts       # Application schema
│   └── Job.model.ts               # Job schema
├── routes/
│   └── jobsRoute.route.ts         # API routes for jobs
├── middlewares/           # Custom middleware (if any)
├── services/              # Business logic services (if any)
└── utils/
    └── asyncHandler.ts    # Utility for async request handling
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance like MongoDB Atlas)
- pnpm (or npm/yarn as alternative)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd JobMediaBackend
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

   Or with npm:

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/job-portal
   ```

   For MongoDB Atlas cloud:

   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/job-portal?retryWrites=true&w=majority
   ```

### Environment Variables

The application requires the following environment variables:

| Variable    | Description                | Example                                |
| ----------- | -------------------------- | -------------------------------------- |
| `PORT`      | Port number for the server | `5000`                                 |
| `MONGO_URI` | MongoDB connection string  | `mongodb://localhost:27017/job-portal` |

> ⚠️ Both `PORT` and `MONGO_URI` are required. The application will fail to start if either is missing.

## Running the Application

### Development Mode

Uses `ts-node` for hot-reloading during development:

```bash
pnpm run dev
```



```bash
pnpm run start
```

## API Endpoints

### Jobs

- `GET /api/jobs` - Retrieve all job listings
- `GET /api/jobs/:id` - Get a specific job by ID
- `POST /api/jobs` - Create job
- `Delete /api/jobs/:id` - Delete a specific job by ID
- Additional job-related endpoints defined in `jobsRoute.route.ts`

### Applications

- `POST /api/application` - Submit a job application

**Example Application Submission:**

```json
POST /api/application
{
  "job_id": "65a7f1b2c3d4e5f6g7h8i9j0",
  "name": "John Doe",
  "email": "john@example.com",
  "resume_link": "https://example.com/resume.pdf",
  "cover_note": "I'm interested in this position because..."
}
```

## Database Models

### Job Schema

- `title` (String, required)
- `company` (String, required, indexed)
- `location` (String, required, indexed)
- `category` (String, required, indexed)
- `description` (String, required)
- Timestamps (createdAt, updatedAt)

### Application Schema

- `job_id` (ObjectId reference to Job, required, indexed)
- `name` (String, required)
- `email` (String, required, with email validation)
- `resume_link` (String, required)
- `cover_note` (String, optional)
- Timestamps (createdAt, updatedAt)

## Development

### Project Setup

The project uses TypeScript for type safety. All source files are in the `src/` directory and compiled to a `dist/` directory (not included in repo).

### Available Scripts

```bash
pnpm dev       # Run in development mode with ts-node
pnpm start     # Run compiled production build
pnpm test      # Run tests (not yet configured)
```

## Troubleshooting

### Connection Error: `env not found PORT` or `env not found MONGO_URI`

- Ensure your `.env` file exists in the root directory
- Check that all required environment variables are set

### MongoDB Connection Error

- Verify your `MONGO_URI` is correct
- Ensure MongoDB server is running (local) or your IP is whitelisted (Atlas)
- Check your network connectivity

### Port Already in Use

- Change the `PORT` environment variable to an available port
- Or kill the process using the current port

## Contributing

Feel free to open issues and submit pull requests to improve this project.

## License

ISC License - See LICENSE file for details
