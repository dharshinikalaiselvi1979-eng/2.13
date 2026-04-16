# README Generator AI

## The Problem
I struggled with writing structured README files for my projects. Every time I finished a coding assignment or small project, I wasted time trying to organize what I built into proper documentation. This was repetitive and frustrating.

## What It Does
This tool takes raw project descriptions as input and uses AI to convert them into a structured, professional README format with sections like Title, Description, Features, and Tech Stack.

## AI Integration
**API:** OpenRouter  
**Model:** openai/gpt-4o-mini  
**Location:** backend/server.js → /generate-readme endpoint  
**What the AI does:** Converts unstructured project text into a well-formatted README file

## What I Intentionally Excluded
- User login system (not needed because tool works without accounts)  
- Database (no need to store data, everything is generated instantly)  
- Advanced UI design (kept simple to focus on core AI functionality)

## Monthly Cost Calculation
Model: openai/gpt-4o-mini  
Input: $0.15 per 1M tokens  
Output: $0.60 per 1M tokens  
Avg tokens per call: ~600 input + ~400 output  

Cost per call:
(600/1,000,000 × $0.15) + (400/1,000,000 × $0.60)
= $0.000090 + $0.000240
= $0.000330  

Expected monthly calls: 300  

Monthly total:
300 × $0.000330 = $0.099 (~$0.10/month)

## Live Deployment
**Frontend:** https://your-frontend-url  
**Backend:** https://your-backend-url

thisis my project for assignment 2.13,project engineering track

Problem:
I struggled to write structured README files for my projects.

Solution:
This project uses AI to convert raw project descriptions into structured README files.

Backend:
Express server handles OpenRouter API call.

Frontend:
Simple UI that sends input to backend and displays AI-generated README.

Checklist:
- API key stored only in backend (.env)
- AI call only in backend (not frontend)
- App fully functional end-to-endCRUD Gym App
