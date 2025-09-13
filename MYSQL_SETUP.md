# MySQL Database Setup for Career Advisor

This guide will help you set up MySQL database for the Career Advisor application.

## Prerequisites

1. **MySQL Server** installed on your system
2. **Node.js** and **npm** installed
3. **Career Advisor** project cloned and dependencies installed

## Step 1: Install MySQL

### Windows
1. Download MySQL Community Server from [mysql.com](https://dev.mysql.com/downloads/mysql/)
2. Install with default settings
3. Remember the root password you set during installation

### macOS
```bash
# Using Homebrew
brew install mysql
brew services start mysql
```

### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install mysql-server
sudo mysql_secure_installation
```

## Step 2: Create Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=career_advisor
DB_PORT=3306

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random
JWT_EXPIRES_IN=7d

# Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Important:** Replace `your_mysql_password` with your actual MySQL root password.

## Step 3: Setup Database

Run the database setup script to create all tables and insert sample data:

```bash
npm run setup-db
```

This will:
- Create the `career_advisor` database
- Create all required tables (30+ tables)
- Insert sample data for testing

## Step 4: Test Database Connection

Test if the database connection is working:

```bash
npm run db:test
```

You should see: `✅ MySQL database connected successfully`

## Step 5: Start the Application

```bash
npm run dev
```

## Step 6: Access MySQL Authentication

Visit: `http://localhost:3000/mysql-auth`

You can now:
- **Register** new users with different roles (Student, Parent, Teacher, Counselor, Alumni)
- **Login** with registered credentials
- **Test** all authentication features

## Database Schema Overview

The database includes the following main tables:

### Core Tables
- `users` - User authentication and basic info
- `user_sessions` - Active user sessions
- `student_profiles` - Student-specific information
- `parent_profiles` - Parent-specific information
- `teacher_profiles` - Teacher-specific information
- `alumni_profiles` - Alumni-specific information

### Quiz System
- `quizzes` - Quiz definitions
- `quiz_questions` - Individual quiz questions
- `user_quiz_results` - User quiz results and recommendations

### Education Data
- `courses` - Available courses and programs
- `career_paths` - Career options and information
- `colleges` - College and university information
- `college_programs` - Programs offered by colleges
- `college_reviews` - User reviews of colleges

### Scholarships & Events
- `scholarships` - Scholarship opportunities
- `user_scholarship_applications` - User scholarship applications
- `events` - Important dates and deadlines
- `user_notifications` - User notifications

### Community Features
- `forums` - Discussion forums
- `forum_posts` - Forum posts
- `forum_replies` - Forum replies
- `alumni_mentorship` - Mentorship connections

### Gamification
- `badges` - Available badges
- `user_badges` - User earned badges
- `leaderboards` - User rankings

### Security & Logs
- `email_verification` - Email verification tokens
- `phone_verification` - Phone verification OTPs
- `password_reset` - Password reset tokens
- `activity_logs` - User activity logs

## Sample Data

The setup script includes sample data:
- 1 Quiz with 3 sample questions
- 4 Sample courses (BA, BSc, BCom, BTech)
- 4 Sample career paths
- 3 Sample colleges (DU, JNU, IIT Delhi)
- 3 Sample scholarships
- 3 Sample badges

## User Roles

The system supports the following user roles:
- **Student** - Can take quizzes, view recommendations, apply for scholarships
- **Parent** - Can track child's progress, receive notifications
- **Teacher** - Can view student analytics, provide guidance
- **Counselor** - Can provide career guidance, access all features
- **Admin** - Full system access
- **Alumni** - Can provide mentorship, share experiences

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user info

### Example Usage

```javascript
// Register a new student
const response = await fetch('/api/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    fullName: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    role: 'student',
    phone: '+1234567890'
  })
});

// Login
const loginResponse = await fetch('/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'john@example.com',
    password: 'password123'
  })
});
```

## Troubleshooting

### Common Issues

1. **Connection Refused**
   - Ensure MySQL server is running
   - Check if the port (3306) is correct
   - Verify username and password

2. **Database Not Found**
   - Run `npm run setup-db` to create the database
   - Check if the database name in `.env.local` is correct

3. **Permission Denied**
   - Ensure the MySQL user has proper permissions
   - Try using root user for initial setup

4. **Port Already in Use**
   - Change the port in `.env.local` if 3306 is occupied
   - Update MySQL configuration if needed

### Reset Database

To reset the database completely:

```sql
DROP DATABASE IF EXISTS career_advisor;
```

Then run:
```bash
npm run setup-db
```

## Security Notes

1. **Never commit** `.env.local` to version control
2. **Use strong passwords** for MySQL root user
3. **Change JWT_SECRET** to a long, random string
4. **Use HTTPS** in production
5. **Regular backups** of the database

## Production Deployment

For production deployment:

1. Use a managed MySQL service (AWS RDS, Google Cloud SQL, etc.)
2. Set up proper environment variables
3. Use connection pooling
4. Enable SSL connections
5. Set up regular backups
6. Monitor database performance

## Next Steps

After setting up MySQL:

1. Test user registration and login
2. Take the career aptitude quiz
3. Explore college and course data
4. Test scholarship applications
5. Try the forum and mentorship features

The application now has a robust MySQL backend that can handle all the features of the Career Advisor platform!
