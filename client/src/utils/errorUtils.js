/**
 * Transforms Firebase Auth error codes into friendly user messages
 */
export const getFriendlyAuthErrorMessage = (error) => {
  if (!error) return '';
  const code = error.code || error;

  switch (code) {
    case 'auth/popup-closed-by-user':
      return 'Sign-in cancelled: The Google sign-in window was closed before completing authentication.';
    case 'auth/popup-blocked':
      return 'Pop-up blocked: Please allow pop-ups for this site in your browser settings to sign in with Google.';
    case 'auth/unauthorized-domain':
      return "Domain unauthorized: 'localhost' is not listed in the authorized domains for this Firebase project. To fix this, navigate to Firebase Console > Authentication > Settings > Authorized domains, and add 'localhost'.";
    case 'auth/network-request-failed':
      return 'Network error: Unable to connect to Google authentication services. Please verify your internet connection.';
    case 'auth/cancelled-popup-request':
      return 'Sign-in request was cancelled as another popup was already open.';
    case 'auth/operation-not-allowed':
      return 'Google Sign-In is not enabled in your Firebase project. Please go to Firebase Console > Authentication > Sign-in method, and enable Google.';
    case 'auth/account-exists-with-different-credential':
      return 'An account already exists with the same email address using a different sign-in method.';
    case 'auth/user-disabled':
      return 'This user account has been disabled by an administrator.';
    case 'auth/config-missing':
      return 'Firebase credentials are missing. Please add your Firebase configuration to client/.env.local.';
    default:
      return error.message || 'Authentication failed. Please try again.';
  }
};

