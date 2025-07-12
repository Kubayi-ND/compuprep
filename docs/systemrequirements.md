```markdown
# University Computer Literacy Practice Platform — Project Specification

---

## Overview

A Next.js web application with Supabase backend/storage, designed for university students to practice computer literacy tests. The platform enables students to:

- Download test files (PDF questions + Microsoft 365 documents)
- Work alongside a split-screen timer interface
- Upload completed files for **fully automated grading**
- Track progress and multiple test attempts

---

## Tech Stack

- Frontend + Backend API: **Next.js** (React + API Routes)
- Authentication & Storage: **Supabase** (PostgreSQL, Auth, Storage buckets)
- PDF Text Extraction: `pdf-lib` or `pdfjs-dist`
- Microsoft Office File Parsing & Validation:  
  - Word (.docx): `docx` or `mammoth.js`  
  - Excel (.xlsx): `exceljs`  
  - PowerPoint (.pptx): `pptxgenjs` + custom parsing  
  - Access (.accdb): Backend script with `node-adodb` or similar (may require Windows environment or alternative)
- File Uploads: Supabase Storage API
- UI Components: React + Tailwind CSS (recommended)
- Video playback: HTML5 `<video>` element or embedded player

---

## Features

### 1. Admin Panel

- **Upload Tests**: Upload PDFs (questions) and MS Office files (Word, Excel, PowerPoint, Access).
- **Marking Rule Builder GUI**:
  - Define rules per test and per file type.
  - Rules can check for text content, formatting, formulas, slide elements, DB schema, etc.
- **Manage Tests**: Edit/delete tests, view submissions.

### 2. Student Portal

- **Authentication**:
  - Email/password registration, login, logout.
  - Email verification and password reset.
- **Test Selection**:
  - Choose from available tests.
  - Option to enable timer.
- **Timer & Split Screen**:
  - On timer start, show a **video guide popup** (skippable).
  - Automatically arrange split screen:
    - Left pane (40%): PDF questions (parsed and displayed).
    - Right pane: Auto-download & prompt to open first Microsoft 365 file.
- **File Submission & Grading**:
  - Upload completed file.
  - Show polite "grading in progress" message.
  - Display detailed automated grading results.
- **Attempts & Cooldown**:
  - Multiple attempts allowed with 10-minute cooldown between submissions.
- **Progress Dashboard**:
  - View past attempts, scores, feedback.

---

## Data Models (Supabase Schema)

### Users

| Column          | Type       | Notes                    |
|-----------------|------------|--------------------------|
| id              | uuid       | Primary Key              |
| email           | text       | Unique                   |
| password_hash   | text       | Managed by Supabase Auth |
| created_at      | timestamp  |                          |

### Tests

| Column          | Type       | Notes                    |
|-----------------|------------|--------------------------|
| id              | uuid       | Primary Key              |
| title           | text       | Test title               |
| description     | text       |                          |
| pdf_questions_url | text     | Supabase storage URL     |
| office_files    | jsonb      | Array of {filename, url} |
| created_at      | timestamp  |                          |

### MarkingRules

| Column          | Type       | Notes                                  |
|-----------------|------------|--------------------------------------|
| id              | uuid       | Primary Key                          |
| test_id         | uuid       | Foreign key to Tests                 |
| file_type       | text       | e.g. "word", "excel", "powerpoint"  |
| rule_config     | jsonb      | Rule definitions (conditions, marks)|
| created_at      | timestamp  |                                      |

### Submissions

| Column          | Type       | Notes                               |
|-----------------|------------|-----------------------------------|
| id              | uuid       | Primary Key                       |
| user_id         | uuid       | Foreign key to Users              |
| test_id         | uuid       | Foreign key to Tests              |
| submitted_at    | timestamp  |                                 |
| file_url        | text       | Supabase storage URL              |
| score           | numeric    | Computed score                   |
| detailed_report | jsonb      | Breakdown of marks               |
| grading_status  | text       | "pending", "completed"           |

---

## API Routes (Next.js Backend)

- `POST /api/auth/signup` — User registration
- `POST /api/auth/login` — User login
- `GET /api/tests` — List available tests
- `GET /api/tests/[id]` — Fetch test info + questions + files
- `POST /api/tests/[id]/upload` — Upload student completed file
- `GET /api/tests/[id]/grading-status` — Check grading progress
- `GET /api/tests/[id]/results` — Get grading results
- `POST /api/admin/tests` — Admin upload new test
- `POST /api/admin/marking-rules` — Admin create/update rules

---

## Frontend Components

### Common

- **AuthForms** — Signup, Login, Password Reset
- **Dashboard** — Student progress & history

### Admin

- **TestUploadForm** — Upload PDFs and MS Office files
- **MarkingRuleBuilder** — GUI to create/edit marking rules per test

### Student

- **TestSelection** — List and select tests
- **TimerAndSplitScreen** — Timer UI with video modal and split screen layout
- **QuestionViewer** — Render extracted PDF questions
- **FileSubmissionForm** — Upload completed file and view grading status/results
- **ResultDisplay** — Show detailed scoring and feedback

---

## UX Notes & Edge Cases

- **Auto-Open Files:**  
  Browsers can't reliably auto-open downloaded files due to security restrictions. Provide clear instructions and a large visible download button on the right pane. Consider integrating Microsoft 365 Online embedded editors in future iterations.

- **Video Guide:**  
  Use a skippable modal on timer start. Store "do not show again" preference in local storage.

- **Cooldown Timer:**  
  Prevent test retake if under 10 minutes. Show countdown timer to next allowed attempt.

- **File Parsing Limitations:**  
  Complex Access file parsing may require backend services or admin manual review.

- **Accessibility:**  
  Ensure keyboard navigation and screen reader support for all UI components.

---

## Suggested Libraries & Tools

| Task                 | Library/Tool          | Notes                        |
|----------------------|----------------------|------------------------------|
| PDF Parsing          | `pdf-lib`, `pdfjs-dist` | Client or server side         |
| Word Parsing         | `mammoth.js`, `docx` | For .docx content extraction |
| Excel Parsing        | `exceljs`            | Read formulas and values     |
| PowerPoint Parsing   | Custom with `pptxgenjs` | Basic slide content          |
| File Upload/Storage  | Supabase Storage API | Secure uploads/downloads     |
| Authentication       | Supabase Auth        | Email/password login flow    |
| Timer & Split Screen | React + CSS          | Use CSS Grid or Flexbox      |
| Video Playback       | HTML5 `<video>`      | Lightweight and easy         |

---

## Development Milestones

1. **Setup Next.js + Supabase Authentication**
2. **Build Admin Panel for Uploading Tests**
3. **Implement PDF extraction and question rendering**
4. **Develop Marking Rule Builder GUI**
5. **Create automated grading logic per file type**
6. **Design student timer + split-screen + video modal flow**
7. **File submission and real-time grading feedback**
8. **Student dashboard with progress and attempts history**
9. **Test and optimize UI/UX and accessibility**
10. **Prepare deployment and documentation**

---

# End of Specification

---

If you want, I can help you generate example code snippets for any section next — just let me know!
```
