const auth = window.firebaseAuth;
const database = window.firebaseDatabase;

// Initialize Auth UI
function initializeAuthUI() {
  auth.onAuthStateChanged(user => {
    updateAuthUI(user);
  });
}

// Update UI based on login state
function updateAuthUI(user) {
  const authButton = document.getElementById("authButton");
  const userMenu = document.getElementById("userMenu");
  const loginLink = document.getElementById("loginLink");
  const logoutLink = document.getElementById("logoutLink");
  const userNameDisplay = document.getElementById("userNameDisplay");

  if (user) {
    // User is logged in
    if (authButton) authButton.style.display = "none";
    if (userMenu) userMenu.style.display = "flex";
    if (userNameDisplay) {
      userNameDisplay.textContent = user.displayName || user.email;
    }
  } else {
    // User is logged out
    if (authButton) authButton.style.display = "inline-block";
    if (userMenu) userMenu.style.display = "none";
  }
}

// Logout handler
function handleLogout() {
  if (confirm("Are you sure you want to logout?")) {
    auth.signOut()
      .then(() => {
        window.location.href = "index.html";
      })
      .catch(error => {
        console.error("Logout error:", error);
      });
  }
}

// Get current user
function getCurrentUser() {
  return auth.currentUser;
}

// Save user progress
async function saveUserProgress(subject, progress) {
  const user = auth.currentUser;
  if (user) {
    try {
      await database.ref("users/" + user.uid + "/progress/" + subject).set(progress);
      return true;
    } catch (error) {
      console.error("Error saving progress:", error);
      return false;
    }
  }
  return false;
}

// Get user progress
async function getUserProgress() {
  const user = auth.currentUser;
  if (user) {
    try {
      const snapshot = await database.ref("users/" + user.uid + "/progress").once("value");
      return snapshot.val();
    } catch (error) {
      console.error("Error fetching progress:", error);
      return null;
    }
  }
  return null;
}

// Save quiz result
async function saveQuizResult(quizData) {
  const user = auth.currentUser;
  if (user) {
    try {
      await database.ref("users/" + user.uid + "/quizzes").push({
        ...quizData,
        timestamp: new Date().toISOString()
      });
      return true;
    } catch (error) {
      console.error("Error saving quiz result:", error);
      return false;
    }
  }
  return false;
}

// Initialize auth UI on page load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeAuthUI);
} else {
  initializeAuthUI();
}
