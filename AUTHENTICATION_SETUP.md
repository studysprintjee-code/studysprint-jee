# StudySprint JEE - Authentication System Setup Guide

## 🔐 What Has Been Added

Your website now has a complete authentication system with:

✅ **User Registration** - New users can create accounts with email & password
✅ **User Login** - Existing users can securely log in
✅ **Forgot Password** - Users can reset their password via email
✅ **User Profile Display** - Shows logged-in user name in navbar
✅ **Logout Functionality** - Users can safely log out
✅ **User Data Storage** - Progress tracking and quiz results stored in Firebase

## 📁 New Files Created

1. **auth.html** - Complete authentication page with 3 forms:
   - Login form
   - Registration form
   - Forgot password form

2. **authentication.js** - Authentication logic that handles:
   - Firebase initialization
   - User login/signup/password reset
   - User session management
   - Progress tracking

## 🔧 Required Setup: Firebase Configuration

Your current authentication uses **DEMO Firebase credentials**. To make it work properly, you need to set up your own Firebase project:

### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" and name it "StudySprint JEE"
3. Follow the setup wizard

### Step 2: Enable Authentication
1. In Firebase Console, go to **Authentication** > **Sign-in method**
2. Enable **Email/Password** provider
3. Click **Save**

### Step 3: Create Realtime Database
1. In Firebase Console, go to **Realtime Database**
2. Click **Create Database**
3. Choose location (select closest to you)
4. Start in **Test Mode** (for development)
5. Click **Enable**

### Step 4: Get Your Firebase Config
1. In Firebase Console, go to **Project Settings** (gear icon)
2. Scroll down to **Your apps** section
3. Click the **Web icon** (if not already created, add it)
4. Copy the configuration object

### Step 5: Update Configuration
Replace the Firebase config in these files:

**In auth.html (lines ~195):**
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

**In authentication.js (lines ~1):**
```javascript
const firebaseConfig = {
  // Same configuration as auth.html
};
```

Replace with values from your Firebase project's Web SDK code.

## 🚀 How It Works

### User Registration Flow
1. User clicks "Login" button in navbar
2. User fills registration form with name, email, password
3. System creates Firebase auth account
4. User data stored in Realtime Database
5. User automatically logged in

### User Login Flow
1. User clicks "Login" button
2. User enters email and password
3. System verifies credentials with Firebase
4. User redirected to home page with logged-in status

### Logout Flow
1. User clicks "Logout" in navbar
2. Session terminated
3. User returned to home page with login button visible

## 🎯 Key Features

### Progress Tracking
```javascript
// Save progress for a subject
saveUserProgress('physics', 75);

// Get user's all progress
const progress = await getUserProgress();
```

### Quiz Results
```javascript
// Save quiz result
saveQuizResult({
  subject: 'physics',
  score: 15,
  total: 20,
  duration: 300
});
```

### User Data Structure in Firebase
```
users/
  {userId}/
    name: "John Doe"
    email: "john@example.com"
    createdAt: "2026-08-16..."
    progress/
      physics: 75
      chemistry: 60
      mathematics: 80
    quizzes/
      {quizId1}: { score, subject, timestamp... }
      {quizId2}: { score, subject, timestamp... }
```

## 🔒 Security Rules for Production

When going live, update your Realtime Database rules:

**Go to: Firebase Console > Realtime Database > Rules**

Replace with:
```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

## 🎨 UI Elements Added

### Login Button
- Appears in navbar when user is logged out
- Click to navigate to auth.html

### User Menu
- Shows username when logged in
- Displays logout button
- Automatically hides when user logs out

### Auth Pages
- Responsive design (works on mobile & desktop)
- Beautiful gradient backgrounds
- Error/success alerts
- Loading states with animations

## 📱 Mobile Responsive

Authentication system is fully responsive:
- Desktop: Full 2-column layout (info + form)
- Tablet: Responsive grid adjustments
- Mobile: Single column layout with full width form

## 🆘 Troubleshooting

### "auth is not defined" Error
**Solution:** Check that Firebase SDK scripts are loaded in correct order:
1. firebase-app.js
2. firebase-auth.js  
3. firebase-database.js
4. authentication.js

### Redirect Loop on auth.html
**Solution:** Make sure Firebase config is correct. Check:
- API Key is valid
- Auth Domain matches your project
- Database URL is correct

### Logout not working
**Solution:** Ensure `handleLogout()` function is accessible. Check:
- authentication.js is loaded on page
- No console errors in browser DevTools

## ✅ Testing Your Setup

After configuration:

1. **Test Registration:**
   - Click Login → Sign Up
   - Enter name, email, password
   - Should create account and log in

2. **Test Login:**
   - Click Logout
   - Click Login → Login form
   - Enter email and password
   - Should authenticate

3. **Test Forgot Password:**
   - Click Login → "Forgot password?"
   - Enter email
   - Should send reset email (check spam folder)

## 📚 Next Steps

1. ✅ Set up Firebase project (follow steps above)
2. ✅ Update config in auth.html and authentication.js
3. ✅ Test registration and login
4. ✅ Set up proper security rules for production
5. ✅ Add email verification (optional)
6. ✅ Integrate progress tracking with quiz.js

## 📞 Need Help?

- Firebase Docs: https://firebase.google.com/docs/auth
- JavaScript SDK Guide: https://firebase.google.com/docs/database/web/start
- Contact: Support or create an issue

---

**Note:** The Telegram channel link appears on all pages below the main content. Users see the Telegram call-to-action even before logging in!
