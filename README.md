# One-Stop Personalized Career & Education Advisor

A comprehensive web application designed to guide students (mainly after Class 10 and 12) in making better career and education choices, with special focus on government colleges.

## 🎯 Features

### Core Features
- **Aptitude & Interest Quiz**: AI/ML-based recommendation of streams (Arts, Science, Commerce, Vocational)
- **Course-to-Career Mapping**: Visual charts mapping degree → career options
- **Government College Directory**: Location-based listing with filters and reviews
- **Timeline & Notifications**: Admission deadlines, scholarships, counseling alerts
- **Customization & Personalization**: User profiles with personalized recommendations

### Advanced Features
- **AI Chatbot**: 24x7 student Q&A on careers, courses, exams
- **Career Simulation**: "Day in the Life" profession previews
- **Skill Gap Analyzer**: Suggest free/affordable resources
- **Scholarship Advisor**: Filtered database with eligibility check
- **Peer & Alumni Connect**: Discussion forums and mentorship
- **Gamification**: Badges for quizzes, milestones, leaderboard

## 🚀 Tech Stack

### Frontend
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Hook Form** for form handling
- **Framer Motion** for animations

### Backend & Database
- **Firebase** for authentication and database
- **Firestore** for data storage
- **Firebase Auth** for user management

### UI Components
- **Heroicons** for icons
- **Headless UI** for accessible components
- **Recharts** for data visualization

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd career-advisor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password)
   - Enable Firestore Database
   - Get your Firebase config

4. **Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication page
│   ├── careers/           # Career mapping page
│   ├── chatbot/           # AI chatbot page
│   ├── colleges/          # College directory page
│   ├── quiz/              # Aptitude quiz page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── auth/              # Authentication components
│   ├── careers/           # Career mapping components
│   ├── chatbot/           # Chatbot components
│   ├── colleges/          # College directory components
│   ├── layout/            # Layout components
│   └── quiz/              # Quiz components
├── lib/                   # Utility libraries
│   └── firebase.ts        # Firebase configuration
└── types/                 # TypeScript type definitions
    └── index.ts           # Main type definitions
```

## 🎨 Key Components

### Quiz Component
- Interactive aptitude assessment
- AI-based stream recommendations
- Progress tracking and results visualization
- Integration with user profiles

### College Directory
- Search and filter functionality
- Location-based college listings
- Detailed college information
- Student reviews and ratings

### Career Mapping
- Visual career roadmaps
- Salary information and growth potential
- Government exam opportunities
- Stream-based filtering

### AI Chatbot
- Real-time career guidance
- Quick question suggestions
- Chat history persistence
- Intelligent response generation

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project
2. Enable Authentication with Email/Password
3. Create Firestore database
4. Set up security rules for Firestore
5. Configure Firebase hosting (optional)

### Database Schema
The application uses the following Firestore collections:
- `users`: User profiles and preferences
- `quizResults`: Quiz responses and recommendations
- `colleges`: College information and details
- `careers`: Career path information
- `chats`: Chatbot conversation history

## 🚀 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Firebase Hosting
```bash
npm run build
firebase deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Firebase for backend services
- Tailwind CSS for styling utilities
- Heroicons for beautiful icons

- GitHub Issues: [Create an issue](https://github.com/your-repo/issues)

---

**Built with ❤️ for students' career success**
