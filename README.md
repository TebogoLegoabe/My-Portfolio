# Tebogo Legoabe — Portfolio

A modern, interactive developer portfolio built with React, Vite, and Tailwind CSS.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ → [Download](https://nodejs.org)
- **Git** → [Download](https://git-scm.com)
- **GitHub account** → [Sign up](https://github.com)
- **Vercel account** → [Sign up](https://vercel.com) (free, use "Continue with GitHub")

---

### Step 1: Set Up the Project Locally

Open your terminal and run:

```bash
# 1. Navigate into the project folder
cd tebogo-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The site will be running at **http://localhost:5173** — open it in your browser.

---

### Step 2: Customize Your Info

All your portfolio content lives in one file:

```
src/data/portfolio.js
```

Update these fields:
- `personalInfo.github` → Your actual GitHub URL
- Add/remove experience, projects, skills, etc.
- Everything updates automatically!

---

### Step 3: Push to GitHub

```bash
# 1. Initialize git
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Initial portfolio"

# 4. Create a repo on GitHub (go to github.com → New Repository)
#    Name it: tebogo-portfolio
#    Leave it empty (no README, no .gitignore)

# 5. Connect and push
git remote add origin https://github.com/YOUR_USERNAME/tebogo-portfolio.git
git branch -M main
git push -u origin main
```

---

### Step 4: Deploy to Vercel

#### Option A: One-Click (Recommended)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Select your `tebogo-portfolio` repo
4. Vercel auto-detects Vite — just click **"Deploy"**
5. Wait ~60 seconds → your site is live! 🎉

#### Option B: Vercel CLI

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Deploy (follow the prompts)
vercel

# 3. For production deployment
vercel --prod
```

---

### Step 5: Custom Domain (Optional)

1. In Vercel dashboard → your project → **Settings → Domains**
2. Add your domain (e.g., `tebogolegoabe.com`)
3. Update your domain's DNS as instructed by Vercel
4. SSL certificate is automatic

---

## 📁 Project Structure

```
tebogo-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.jsx            # Bio + stats
│   │   ├── AnimatedCounter.jsx   # Number animation
│   │   ├── Contact.jsx           # Contact info + CTAs
│   │   ├── Education.jsx         # Degrees
│   │   ├── Experience.jsx        # Work timeline
│   │   ├── Footer.jsx            # Social links + copyright
│   │   ├── Hero.jsx              # Landing section
│   │   ├── Navbar.jsx            # Navigation + mobile menu
│   │   ├── ParticleBackground.jsx # Animated canvas
│   │   ├── Projects.jsx          # Featured work
│   │   ├── Reveal.jsx            # Scroll animation wrapper
│   │   ├── SectionHeader.jsx     # Reusable section title
│   │   └── Skills.jsx            # Technical skills grid
│   ├── data/
│   │   └── portfolio.js          # ← ALL your content lives here
│   ├── hooks/
│   │   ├── useActiveSection.js   # Nav highlight tracking
│   │   ├── useInView.js          # Intersection observer
│   │   └── useTypingEffect.js    # Typewriter animation
│   ├── styles/
│   │   └── index.css             # Tailwind + custom styles
│   ├── App.jsx                   # Root component
│   └── main.jsx                  # Entry point
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🛠 Available Commands

| Command         | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Start development server       |
| `npm run build` | Build for production           |
| `npm run preview` | Preview production build     |

---

## 🔧 Tech Stack

- **React 18** — UI framework
- **Vite 6** — Build tool (fast HMR)
- **Tailwind CSS 3** — Utility-first styling
- **Lucide React** — Icon library
- **Canvas API** — Particle background

---

## ✏️ Making Changes After Deployment

Any push to `main` on GitHub automatically triggers a new Vercel deployment:

```bash
# Edit something, then:
git add .
git commit -m "Update experience section"
git push
```

Vercel redeploys in ~30 seconds. Zero config needed.
