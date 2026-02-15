# 🎯 ATS-Friendly CV Analyzer

<div align="center">

![ATS CV Analyzer](https://img.shields.io/badge/ATS-CV%20Analyzer-667eea?style=for-the-badge)
![Version](https://img.shields.io/badge/version-1.0.0-764ba2?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-f093fb?style=for-the-badge)

**Optimize your resume for Applicant Tracking Systems with AI-powered insights**

[Live Demo](#) | [Features](#features) | [Quick Start](#quick-start) | [Deploy](#deploy-to-vercel)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Deploy to Vercel](#deploy-to-vercel)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Usage](#usage)
- [Scoring Algorithm](#scoring-algorithm)
- [AI Integration](#ai-integration)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## 🎯 Overview

The **ATS-Friendly CV Analyzer** is a modern, AI-powered web application that helps job seekers optimize their resumes for Applicant Tracking Systems (ATS). With a beautiful iOS-inspired interface, animated visualizations, and intelligent analysis, it provides actionable insights to improve your CV's compatibility with automated recruitment systems.

### Why Use This Tool?

- **📊 Comprehensive Analysis**: Evaluates 5 critical categories (Formatting, Keywords, Structure, Readability, File Quality)
- **🤖 AI-Powered Insights**: Get personalized recommendations using advanced AI models
- **📈 Visual Reports**: Interactive charts and animated progress indicators
- **🎨 Beautiful UI**: Glass morphism design with smooth animations
- **⚡ Fast & Efficient**: Client-side processing with optional AI enhancement
- **🔒 Privacy-First**: Your CV is processed locally in your browser

---

## ✨ Features

### Core Features
- ✅ **PDF & DOCX Support** - Parse both common resume formats
- 🎯 **ATS Score Calculation** - Get an overall compatibility score out of 100
- 📊 **Category Breakdown** - Detailed analysis across 5 key areas
- 🔍 **Keyword Analysis** - Match your CV against job descriptions
- 📝 **Section Detection** - Identify missing or incomplete sections
- ⚠️ **Issue Detection** - Find and fix ATS-breaking problems

### AI Features
- 🤖 **Personalized Recommendations** - AI-generated improvement suggestions
- 💡 **Smart Insights** - Context-aware advice based on your CV
- 🎓 **Best Practices** - Learn industry-standard resume optimization

### UI/UX Features
- 🎨 **Glass Morphism Design** - Modern iOS-inspired interface
- 🌊 **Smooth Animations** - Floating elements, transitions, and effects
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🌈 **Gradient Backgrounds** - Dynamic animated gradients
- 📈 **Animated Charts** - Beautiful data visualizations with Chart.js
- 🎭 **Lucide Icons** - Clean, animated icon set

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure and semantic markup |
| **CSS3** | Styling with modern features (backdrop-filter, animations) |
| **JavaScript (ES6+)** | Core application logic |
| **PDF.js** | PDF parsing and text extraction |
| **Mammoth.js** | DOCX parsing and text extraction |
| **Chart.js** | Interactive data visualization |
| **Lucide Icons** | Beautiful, animated icon library |
| **Hugging Face API** | AI-powered insights and recommendations |

---

## 📦 Prerequisites

Before deploying, ensure you have:

- A **Vercel account** (free tier works perfectly)
- A **Hugging Face account** and API token (for AI features)
- Basic knowledge of Git and command line
- A modern web browser for testing

---

## 🚀 Quick Start

### Local Development

1. **Clone or Download the Project**
   ```bash
   mkdir ats-cv-analyzer
   cd ats-cv-analyzer
   ```

2. **Create the Project Files**

   Create `index.html` with the complete application code (the HTML file provided earlier).

3. **Get Your Hugging Face API Token**
   - Go to [Hugging Face](https://huggingface.co/)
   - Sign up or log in
   - Navigate to Settings → Access Tokens
   - Create a new token with `read` permissions
   - Copy the token (starts with `hf_`)

4. **Update the API Token**
   
   Open `index.html` and find this line (around line 1520):
   ```javascript
   'Authorization': 'Bearer hf_YOUR_TOKEN_HERE'
   ```
   
   Replace `hf_YOUR_TOKEN_HERE` with your actual token:
   ```javascript
   'Authorization': 'Bearer hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
   ```

5. **Test Locally**
   
   Simply open `index.html` in your browser:
   ```bash
   # On macOS
   open index.html
   
   # On Linux
   xdg-open index.html
   
   # On Windows
   start index.html
   ```

   Or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```
   
   Then open `http://localhost:8000` in your browser.

---

## 🚀 Deploy to Vercel

### Method 1: Deploy via Git (Recommended)

1. **Create a GitHub Repository**
   
   ```bash
   # Initialize git repository
   git init
   
   # Add your files
   git add .
   
   # Commit
   git commit -m "Initial commit: ATS CV Analyzer"
   
   # Create a new repository on GitHub, then:
   git remote add origin https://github.com/YOUR_USERNAME/ats-cv-analyzer.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel**
   
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click **"Add New Project"**
   - Select **"Import Git Repository"**
   - Choose your GitHub repository
   - Click **"Import"**

3. **Configure Project Settings**
   
   - **Framework Preset**: Other (or None)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty
   - **Install Command**: Leave empty

4. **Add Environment Variables** (Optional but Recommended)
   
   In the Vercel project settings:
   - Go to **Settings** → **Environment Variables**
   - Add: `HF_API_TOKEN` = `hf_your_actual_token_here`
   
   Then update your code to use:
   ```javascript
   'Authorization': `Bearer ${process.env.HF_API_TOKEN || 'hf_YOUR_TOKEN_HERE'}`
   ```

5. **Deploy**
   
   - Click **"Deploy"**
   - Wait 30-60 seconds
   - Your app will be live at `https://your-project-name.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # From your project directory
   vercel
   
   # Follow the prompts:
   # - Set up and deploy? Yes
   # - Which scope? Select your account
   # - Link to existing project? No
   # - Project name? ats-cv-analyzer (or your choice)
   # - In which directory is your code? ./
   # - Override settings? No
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Method 3: Deploy via Vercel Dashboard (Drag & Drop)

1. **Prepare Your Files**
   
   Create a project folder with:
   ```
   ats-cv-analyzer/
   ├── index.html
   └── vercel.json (optional)
   ```

2. **Create `vercel.json`** (Optional Configuration)
   ```json
   {
     "version": 2,
     "name": "ats-cv-analyzer",
     "builds": [
       {
         "src": "index.html",
         "use": "@vercel/static"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "/index.html"
       }
     ]
   }
   ```

3. **Deploy**
   - Go to [Vercel Dashboard](https://vercel.com/new)
   - Drag and drop your project folder
   - Wait for deployment to complete

---

## 🔐 Environment Variables

For security and flexibility, use environment variables for sensitive data:

### On Vercel

1. Go to your project's **Settings** → **Environment Variables**
2. Add the following:

| Variable Name | Value | Environment |
|--------------|-------|-------------|
| `HF_API_TOKEN` | `hf_xxxxxxxxxxxxx` | Production, Preview, Development |

### In Your Code

Update the API call to use environment variables (requires a backend or build process):

For a pure static site, you can use Vercel's edge functions or keep the token in the code (less secure but simpler).

**Alternative: Use Vercel Serverless Functions**

Create `api/ai-insights.js`:
```javascript
export default async function handler(req, res) {
  const { prompt } = req.body;
  
  const response = await fetch('https://router.huggingface.co/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.HF_API_TOKEN}`
    },
    body: JSON.stringify({
      model: 'deepseek-ai/DeepSeek-V3.2-Exp:novita',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 500
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}
```

Then update your frontend to call `/api/ai-insights` instead of calling Hugging Face directly.

---

## 📁 Project Structure

```
ats-cv-analyzer/
├── index.html              # Main application file
├── README.md              # This file
├── vercel.json            # Vercel configuration (optional)
├── api/                   # Serverless functions (optional)
│   └── ai-insights.js     # AI API endpoint
├── .gitignore             # Git ignore file
└── package.json           # Node.js dependencies (if using functions)
```

### Recommended `.gitignore`

```gitignore
# Dependencies
node_modules/
package-lock.json
yarn.lock

# Environment variables
.env
.env.local
.env.production

# Vercel
.vercel

# Editor
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db
```

---

## ⚙️ Configuration

### Customize Scoring Weights

In `index.html`, find the `WEIGHTS` object (around line 825):

```javascript
const WEIGHTS = {
    formatting: 30,    // Adjust importance of formatting (0-100)
    keywords: 30,      // Adjust importance of keywords (0-100)
    structure: 15,     // Adjust importance of structure (0-100)
    readability: 15,   // Adjust importance of readability (0-100)
    parsing: 10        // Adjust importance of parsing quality (0-100)
};
```

### Customize Keywords

Update the `COMMON_KEYWORDS` object (around line 831):

```javascript
const COMMON_KEYWORDS = {
    technical: ['Your', 'Custom', 'Keywords'],
    soft_skills: ['Your', 'Soft', 'Skills'],
    action_verbs: ['achieved', 'delivered', 'executed']
};
```

### Customize Colors

Update CSS variables in the `:root` section (around line 18):

```css
:root {
    --primary: #007AFF;         /* Main brand color */
    --primary-dark: #0051D5;    /* Darker shade */
    --primary-light: #4DA2FF;   /* Lighter shade */
    --success: #34C759;         /* Success color */
    --warning: #FF9500;         /* Warning color */
    --danger: #FF3B30;          /* Danger color */
}
```

---

## 📖 Usage

### Basic Usage

1. **Upload Your CV**
   - Click the upload area or drag & drop your PDF/DOCX file
   - Maximum file size: 5MB

2. **Add Job Description** (Optional but Recommended)
   - Paste the job description in the text area
   - This enables better keyword matching and personalized recommendations

3. **Analyze**
   - Click "Analyze CV with AI"
   - Wait for processing (usually 5-10 seconds)

4. **Review Results**
   - Check your overall ATS score
   - Review category breakdowns
   - Read AI-powered insights
   - Examine section analysis
   - Review keyword matches
   - Follow quick tips

5. **Take Action**
   - Download the report (Print/Save as PDF)
   - Update your CV based on recommendations
   - Re-analyze to track improvements

### Advanced Tips

- **Test Multiple Versions**: Upload different CV versions to compare scores
- **Job-Specific Optimization**: Always include the job description for best results
- **Iterative Improvement**: Make changes gradually and re-test frequently
- **Keyword Balance**: Avoid keyword stuffing (the tool will detect it)
- **Format Matters**: Use standard fonts and simple layouts

---

## 🧮 Scoring Algorithm

### Overall Score Calculation

```
Overall Score = (Formatting × 30% + Keywords × 30% + Structure × 15% + 
                Readability × 15% + Parsing × 10%) / 100
```

### Score Interpretation

| Score Range | Rating | Meaning |
|-------------|--------|---------|
| 80-100 | Excellent | Your CV is highly ATS-compatible |
| 60-79 | Good | Solid foundation, minor improvements needed |
| 0-59 | Poor | Significant issues that may cause rejection |

### Category Scoring

#### 1. Formatting (30%)
- ✅ Simple layout without tables
- ✅ Standard bullet points
- ✅ Consistent spacing
- ❌ Special characters (-15 points)
- ❌ Tables detected (-15 points)
- ❌ Excessive spacing (-5 points)

#### 2. Keywords (30%)
- ✅ Match rate vs job description
- ✅ Industry-standard terms
- ✅ Natural keyword integration
- ❌ Low match rate (<30%: -40 points)
- ❌ Keyword stuffing (-15 points)

#### 3. Structure (15%)
- ✅ Required sections present
- ✅ Clear contact information
- ✅ Logical organization
- ❌ Missing sections (-20 points each)
- ❌ Unclear contact info (-15 points)

#### 4. Readability (15%)
- ✅ Bullet points usage
- ✅ Action verbs
- ✅ Quantified achievements
- ❌ Few bullet points (-20 points)
- ❌ Few action verbs (-15 points)
- ❌ No metrics (-10 points)

#### 5. Parsing Quality (10%)
- ✅ Adequate content length
- ✅ Proper encoding
- ✅ Clean text extraction
- ❌ Too short (<500 chars: -30 points)
- ❌ Encoding issues (-15 points)

---

## 🤖 AI Integration

### How It Works

1. **Data Collection**: The analyzer collects scoring data and issues
2. **Prompt Generation**: Creates a context-aware prompt for the AI
3. **API Call**: Sends request to Hugging Face Inference API
4. **Response Processing**: Displays personalized insights

### AI Model

- **Model**: DeepSeek-V3.2-Exp (via Novita)
- **Provider**: Hugging Face Inference Router
- **Max Tokens**: 500
- **Purpose**: Generate actionable, personalized recommendations

### Customizing AI Prompts

Find the `generateAIInsights` function (around line 1480) and modify the prompt:

```javascript
const prompt = `Your custom prompt here...

Overall ATS Score: ${analysis.overallScore}/100
...

Your instructions for the AI...`;
```

### Fallback Behavior

If AI is unavailable:
- The tool still works perfectly
- All core analysis features function normally
- Only AI insights section shows a fallback message
- Users still get comprehensive feedback

---

## 🎨 Customization

### Change Color Scheme

1. **Update CSS Variables**
   ```css
   :root {
       --primary: #YOUR_COLOR;
       --success: #YOUR_COLOR;
       --warning: #YOUR_COLOR;
       --danger: #YOUR_COLOR;
   }
   ```

2. **Update Gradient Background**
   ```css
   body {
       background: linear-gradient(135deg, #COLOR1 0%, #COLOR2 50%, #COLOR3 100%);
   }
   ```

### Add New Sections

1. **Update `detectSections` function**
   ```javascript
   const sections = {
       contact: false,
       summary: false,
       experience: false,
       education: false,
       skills: false,
       certifications: false  // New section
   };
   ```

2. **Add detection regex**
   ```javascript
   const sectionKeywords = {
       // ... existing ...
       certifications: /certifications?|licenses?|credentials/i
   };
   ```

3. **Update display function**
   ```javascript
   const sectionInfo = [
       // ... existing ...
       { key: 'certifications', name: 'Certifications', icon: 'award' }
   ];
   ```

### Modify File Size Limits

Find the validation code (around line 910):

```javascript
const maxSize = 5 * 1024 * 1024; // Change to 10MB: 10 * 1024 * 1024
```

---

## 🐛 Troubleshooting

### Common Issues

#### 1. AI Insights Not Loading

**Problem**: "AI insights are temporarily unavailable" message

**Solutions**:
- ✅ Check your Hugging Face API token is correct
- ✅ Verify you have credits/quota on Hugging Face
- ✅ Check browser console for specific error messages
- ✅ Try using a different AI model
- ✅ Implement the serverless function approach for better security

#### 2. PDF Not Parsing

**Problem**: Error message when uploading PDF

**Solutions**:
- ✅ Ensure PDF is not password-protected
- ✅ Try re-saving the PDF (File → Save As)
- ✅ Check file size is under 5MB
- ✅ Verify PDF is not corrupted
- ✅ Try converting to DOCX and re-uploading

#### 3. Icons Not Showing

**Problem**: Blank squares instead of icons

**Solutions**:
- ✅ Check internet connection (Lucide loads from CDN)
- ✅ Verify CDN is not blocked by firewall
- ✅ Clear browser cache
- ✅ Try a different browser

#### 4. Vercel Deployment Fails

**Problem**: Deployment errors on Vercel

**Solutions**:
- ✅ Ensure `index.html` is in the root directory
- ✅ Check file names are lowercase
- ✅ Verify no syntax errors in HTML
- ✅ Review Vercel build logs for specific errors
- ✅ Try deploying via CLI instead of Git

#### 5. Styles Not Loading

**Problem**: Plain HTML without styling

**Solutions**:
- ✅ Check `<style>` tag is inside `<head>`
- ✅ Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- ✅ Verify no CSS syntax errors
- ✅ Check browser console for errors

### Debug Mode

Enable console logging by adding this at the start of your script:

```javascript
const DEBUG = true;

function log(...args) {
    if (DEBUG) console.log('[ATS Analyzer]', ...args);
}

// Then use throughout code:
log('File parsed:', state.parsedText.length, 'characters');
log('Analysis complete:', analysis);
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Reporting Bugs

1. Check existing issues first
2. Create a new issue with:
   - Clear title
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Browser and OS information

### Suggesting Features

1. Open an issue with the `enhancement` label
2. Describe the feature clearly
3. Explain the use case
4. Provide examples if possible

### Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Development Guidelines

- Follow existing code style
- Comment complex logic
- Test on multiple browsers
- Update README if needed
- Keep commits atomic and descriptive

---

## 📄 License

This project is licensed under the MIT License.

```
MIT License

Copyright (c) 2024 ATS CV Analyzer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 💬 Support

### Get Help

- 📧 **Email**: support@example.com
- 💬 **Discord**: [Join our community](#)
- 🐦 **Twitter**: [@atsanalyzer](#)
- 📖 **Documentation**: [Full docs](#)

### Useful Resources

- [ATS Best Practices Guide](https://www.indeed.com/career-advice/resumes-cover-letters/ats-resume)
- [Resume Writing Tips](https://www.thebalancecareers.com/top-resume-writing-tips-2063314)
- [Hugging Face API Docs](https://huggingface.co/docs/api-inference/index)
- [Vercel Documentation](https://vercel.com/docs)

---

## 🌟 Acknowledgments

- **PDF.js** - Mozilla's PDF parsing library
- **Mammoth.js** - DOCX conversion library
- **Chart.js** - Beautiful charts and graphs
- **Lucide** - Open-source icon system
- **Hugging Face** - AI model hosting and inference
- **Vercel** - Excellent hosting platform

---

## 📊 Roadmap

### Version 1.1 (Coming Soon)
- [ ] Multiple CV comparison
- [ ] Export detailed PDF reports
- [ ] Save analysis history
- [ ] Browser extension

### Version 1.2 (Future)
- [ ] LinkedIn profile import
- [ ] Industry-specific templates
- [ ] Resume builder integration
- [ ] Multi-language support

### Version 2.0 (Vision)
- [ ] Real-time collaboration
- [ ] Interview preparation tools
- [ ] Job board integration
- [ ] Cover letter analysis

---

## 📈 Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/ats-cv-analyzer?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/ats-cv-analyzer?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/ats-cv-analyzer)
![GitHub license](https://img.shields.io/github/license/yourusername/ats-cv-analyzer)

---

<div align="center">

**Made with ❤️ for job seekers everywhere**

⭐ Star us on GitHub — it helps!

[🚀 Deploy Now](https://vercel.com/new) | [📖 Documentation](#) | [🐛 Report Bug](#) | [💡 Request Feature](#)

</div>
