# PROJEXA AI 🎓⚡

> **Plan Smarter. Work Faster. Build Better.**  
> An Intelligent Project Management Assistant designed specifically for college and university students.

---

## 🚀 Quick Start (How to Run)

### 1. Start the Development Server
Open your terminal inside this project folder (`d:\User Data\Desktop\my project`) and run:

```bash
npm run dev
```

### 2. Open in Your Browser
Open your browser and navigate to:
```
http://localhost:3000
```

---

## 🌟 Available Routes & Features

| Route | Page | Description |
|---|---|---|
| `/` | **Landing Page** | Futuristic dark/purple landing page with 3D AI Robot Mascot, features, how it works, and pricing |
| `/login` | **Authentication** | Secure student login with 1-click Preloaded Demo ("Sign in as Aryan") |
| `/signup` | **Sign Up** | Student registration with validation |
| `/dashboard` | **Student Dashboard** | Live stats, today's sprint tasks, recent projects, velocity gauge, and AI recommendations |
| `/projects` | **My Projects** | Project cards with categories, status filters (*All, Active, Completed, On Hold*), file attachments, and modals |
| `/tasks` | **Smart Tasks** | Dual-view task manager: **Interactive Kanban Board** and **List View** with instant progress calculation |
| `/assistant` | **AI Assistant** | Powered by Gemini 1.5: **Study Chat**, **AI Project Blueprint Generator**, **Task Decomposer**, & **Project Ideas** |
| `/calendar` | **Calendar & Deadlines** | Month/Agenda calendar with priority deadline markers and custom event creator |
| `/teams` | **Team Workspaces** | Collaborative groups (*Dev Squad, AI Innovators, Project Masters*) with member invites and roles |
| `/analytics` | **Productivity Analytics** | Spline velocity wave charts, time distribution donuts (*Projects, Tasks, Study*), and filters (*7D, 30D, 3M, 1Y*) |
| `/settings` | **Profile & Settings** | Student course details, theme switcher (Dark/Light), and environment status |

---

## 🔑 Environment Variables Configuration

The application is fully functional out-of-the-box using the built-in local state engine.

To enable live **Cloud Database Synchronization** and real-time **Google Gemini 1.5 AI**, update your `.env.local` file:

```env
# Supabase Database & Auth (from your Supabase Project Settings -> API)
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-secret-key

# Google Gemini API Key (free from https://aistudio.google.com/)
GEMINI_API_KEY=your-gemini-api-key

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 🗄️ Database Setup (Supabase PostgreSQL)

A complete, production-grade migration file containing **all 14 relational tables**, Row-Level Security (RLS) policies, and automatic progress calculation triggers is located at:

```
supabase/migrations/01_initial_schema.sql
```

### Steps to execute:
1. Go to your [Supabase Dashboard](https://supabase.com/dashboard).
2. Open the **SQL Editor**.
3. Copy and paste the contents of `supabase/migrations/01_initial_schema.sql` and click **Run**.
4. All tables (`profiles`, `projects`, `tasks`, `teams`, `events`, `chat_sessions`, `project_files`, etc.) and triggers are immediately active.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Dark Purple Neon Palette `#09090F`, `#8B5CF6`, `#A78BFA`, `#171725`)
- **Icons**: Lucide React
- **AI Integration**: Google Gemini API (`gemini-1.5-flash`)
- **Backend / Database**: Supabase (PostgreSQL, Auth, Storage) & Next.js Server Actions / API Routes
