"use client";

import { useState, useEffect } from "react";
import Header from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";

// Mock user data - would be fetched from auth system
const userData = {
  firstName: "Maria",
  lastName: "Johnson",
  email: "maria.johnson@university.edu",
  enrollmentYear: 2023,
  avatarUrl: "/hero-image.jpeg", // Using existing image for placeholder
  completedTests: 4,
  totalTests: 12,
  averageScore: 81,
  bestSubject: "PowerPoint",
  weakestSubject: "Excel"
};

const attemptHistory = [
  {
    id: 1,
    testName: "Basic Word Document Formatting",
    date: "2025-07-10",
    score: 85,
    status: "Completed",
  },
  {
    id: 2,
    testName: "Excel Formulas and Functions",
    date: "2025-07-09",
    score: 70,
    status: "Completed",
  },
  {
    id: 3,
    testName: "PowerPoint Presentation Design",
    date: "2025-07-08",
    score: 92,
    status: "Completed",
  },
  {
    id: 4,
    testName: "Comprehensive Office Suite Test",
    date: "2025-07-07",
    score: 78,
    status: "Completed",
  },
];

// Achievement badges
const achievements = [
  { id: 1, name: "First Test", icon: "🚀", description: "Completed your first test", earned: true },
  { id: 2, name: "Perfect Score", icon: "🏆", description: "Achieved 100% on a test", earned: false },
  { id: 3, name: "Excel Master", icon: "📊", description: "Scored 90%+ on Excel tests", earned: false },
  { id: 4, name: "Word Wizard", icon: "📝", description: "Completed all Word tests", earned: true },
  { id: 5, name: "PowerPoint Pro", icon: "📺", description: "Scored 90%+ on PowerPoint", earned: true }
];

// Recommended tests based on performance
const recommendedTests = [
  { 
    id: 1, 
    title: "Excel Advanced Formulas",
    description: "Improve your Excel skills with advanced formula techniques",
    difficulty: "Intermediate",
    reason: "Based on your Excel performance"
  },
  { 
    id: 2, 
    title: "Word Templates and Styles",
    description: "Master document templates and style consistency",
    difficulty: "Intermediate",
    reason: "Continue your Word progress"
  }
];

export default function Dashboard() {
  const [greeting, setGreeting] = useState("Good day");
  
  useEffect(() => {
    // Set greeting based on time of day
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-30 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Personal Greeting Section */}
          <div className="bg-white rounded-2xl shadow-md mb-8 p-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-extrabold text-gray-900">
                  {greeting}, {userData.firstName}!
                </h1>
                <p className="mt-2 text-gray-600">
                  Welcome back to your personal dashboard. Here's an overview of your progress.
                </p>
              </div>
             
            </div>
          </div>

          {/* Stats Overview */}
          <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white overflow-hidden shadow rounded-lg border-l-4 border-blue-500">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                  Tests Completed
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900 flex items-baseline">
                  {userData.completedTests}
                  <span className="ml-2 text-sm text-gray-500">of {userData.totalTests}</span>
                </dd>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: `${(userData.completedTests/userData.totalTests)*100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg border-l-4 border-green-500">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  Average Score
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {userData.averageScore}%
                </dd>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      userData.averageScore >= 90 ? 'bg-green-500' : 
                      userData.averageScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${userData.averageScore}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg border-l-4 border-purple-500">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Best Performance
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {userData.bestSubject}
                </dd>
                <div className="mt-2 text-sm text-green-600 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  92% Proficiency
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg border-l-4 border-amber-500">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  Needs Improvement
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {userData.weakestSubject}
                </dd>
                <div className="mt-2 text-sm text-amber-600 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                  </svg>
                  70% Proficiency
                </div>
              </div>
            </div>
          </div>

          {/* Test History */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Recent Test Activity</h2>
              <Link 
                href="/tests/history"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center"
              >
                View all history
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Test Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Score
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {attemptHistory.map((attempt) => (
                      <tr key={attempt.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                              {attempt.testName.includes("Word") ? "W" : 
                               attempt.testName.includes("Excel") ? "X" : 
                               attempt.testName.includes("PowerPoint") ? "P" : "O"}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{attempt.testName}</div>
                              <div className="text-xs text-gray-500">
                                {attempt.testName.includes("Word") ? "Microsoft Word" : 
                                 attempt.testName.includes("Excel") ? "Microsoft Excel" : 
                                 attempt.testName.includes("PowerPoint") ? "Microsoft PowerPoint" : 
                                 "Office Suite"}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">{new Date(attempt.date).toLocaleDateString()}</div>
                          <div className="text-xs text-gray-500">{new Date(attempt.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="mr-2 text-sm font-medium">
                              <span className={`${
                                attempt.score >= 90 ? 'text-green-600' : 
                                attempt.score >= 70 ? 'text-yellow-600' : 'text-red-600'
                              }`}>
                                {attempt.score}%
                              </span>
                            </div>
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${
                                  attempt.score >= 90 ? "bg-green-500" : 
                                  attempt.score >= 70 ? "bg-yellow-500" : "bg-red-500"
                                }`}
                                style={{ width: `${attempt.score}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              attempt.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {attempt.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right space-x-2">
                          <Link 
                            href={`/tests/results/${attempt.id}`}
                            className="text-xs inline-flex items-center px-2.5 py-1.5 border border-transparent font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            View Results
                          </Link>
                          <Link 
                            href={`/tests/${attempt.testName.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-xs inline-flex items-center px-2.5 py-1.5 border border-gray-300 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Retry
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Achievement Badges */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Achievements</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {achievements.map((achievement) => (
                <div 
                  key={achievement.id}
                  className={`p-4 rounded-lg border-2 text-center ${
                    achievement.earned 
                      ? "border-indigo-500 bg-indigo-50" 
                      : "border-gray-200 bg-gray-50 opacity-60"
                  }`}
                >
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <h3 className="font-bold text-sm mb-1">{achievement.name}</h3>
                  <p className="text-xs text-gray-600">{achievement.description}</p>
                  {!achievement.earned && (
                    <span className="inline-block mt-2 px-2 py-1 bg-gray-200 rounded text-xs text-gray-600">
                      Locked
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>


          {/* Recommended Tests */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommended For You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendedTests.map((test) => (
                <div key={test.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{test.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{test.description}</p>
                        <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                          {test.difficulty}
                        </span>
                        <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full ml-2">
                          {test.reason}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link 
                        href={`/tests/${test.id}`}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Take Test
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Matrix */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Skills Matrix</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                      <path d="M3 8a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                    </svg>
                    Microsoft Word
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Basic Formatting</span>
                      <span className="font-medium text-green-600">Advanced</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span>Styles & Templates</span>
                      <span className="font-medium text-green-600">Intermediate</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span>Mail Merge</span>
                      <span className="font-medium text-amber-600">Beginner</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-amber-500 h-2 rounded-full" style={{ width: "40%" }}></div>
                    </div>

                    <div className="mt-2 flex items-center text-xs text-gray-500 justify-between">
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Access Level: Full
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded">
                        Last tested: 5 days ago
                      </span>
                    </div>
                  </div>
                </div>
                
              
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z" clipRule="evenodd" />
                    </svg>
                    Microsoft PowerPoint
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Slide Design</span>
                      <span className="font-medium text-green-600">Advanced</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span>Animations</span>
                      <span className="font-medium text-green-600">Advanced</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span>Advanced Features</span>
                      <span className="font-medium text-green-600">Intermediate</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                    </div>

                    <div className="mt-2 flex items-center text-xs text-gray-500 justify-between">
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Access Level: Premium
                      </span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">
                        Last tested: 3 days ago
                      </span>
                    </div>
                  </div>
                </div>

                  <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
                    </svg>
                    Microsoft Excel
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Basic Functions</span>
                      <span className="font-medium text-green-600">Intermediate</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span>PivotTables</span>
                      <span className="font-medium text-amber-600">Beginner</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-amber-500 h-2 rounded-full" style={{ width: "35%" }}></div>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span>Data Analysis</span>
                      <span className="font-medium text-red-600">Not Started</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: "10%" }}></div>
                    </div>

                    <div className="mt-2 flex items-center text-xs text-gray-500 justify-between">
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v-1l1-1 1-1-1.743-.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                        </svg>
                        Access Level: Standard
                      </span>
                      <span className="bg-amber-100 text-amber-800 text-xs px-2 py-0.5 rounded">
                        Last tested: 6 days ago
                      </span>
                    </div>
                  </div>
                </div>
               
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-700" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>
                    Microsoft Access
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Database Creation</span>
                        <span className="font-medium text-amber-600">Beginner</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span>Queries & Forms</span>
                        <span className="font-medium text-red-600">Not Started</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-amber-500 h-2 rounded-full" style={{ width: "5%" }}></div>
                      </div>
                    </div>
                  
                    
                    <div className="col-span-1 md:col-span-2 mt-2 flex items-center text-xs text-gray-500 justify-between">
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        Access Level: full
                      </span>
                    </div>
                  </div>
                </div>
              
              </div>

              
              

            
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link 
                  href="/learning-path" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  View Detailed Learning Path
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 -mr-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
