/**
 * Utility to defer loading of non-critical JavaScript
 */

export function loadScript(src: string, async = true, defer = true): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      const script = document.createElement('script');
      script.src = src;
      script.async = async;
      script.defer = defer;
      
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
      
      document.head.appendChild(script);
    } catch (error) {
      reject(error);
    }
  });
}

export function deferThirdPartyScripts(): void {
  if (typeof window === 'undefined') return;
  
  // Wait until the page is fully loaded and idle
  if (window.requestIdleCallback) {
    window.requestIdleCallback(() => {
      loadThirdPartyScripts();
    });
  } else {
    // Fallback for browsers that don't support requestIdleCallback
    setTimeout(loadThirdPartyScripts, 2000);
  }
}

function loadThirdPartyScripts(): void {
  // Add any third-party scripts that should be deferred
  const scripts = [
    // Example: Google Analytics, Facebook Pixel, etc.
    // 'https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID',
  ];
  
  scripts.forEach(src => {
    loadScript(src).catch(error => {
      console.error(`Failed to load deferred script: ${error.message}`);
    });
  });
}
