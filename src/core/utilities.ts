// Import required functions
import fine_grained_password from '@erichsia7/pwdgen2/src/core/fine-grained-password';

function checkTouchFeatures(): boolean {
  if ('ontouchstart' in window || navigator.maxTouchPoints) {
    return true;
  } else {
    return false;
  }
}

function qe(selector) {
  return document.querySelector(selector);
}

function qeAll(selector) {
  return document.querySelectorAll(selector);
}

function isDarkMode(): boolean {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return true;
  } else {
    return false;
  }
}

// Expose functions to the global scope
window.utilities = {
  qe,
  qeAll,
  isDarkMode,
  checkTouchFeatures
};

export default window.utilities;
