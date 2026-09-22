/**
 * Reusable GTM dataLayer helper. Never let analytics failures break app flow.
 */
export function trackDataLayerEvent(eventName, data = {}) {
  try {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...data,
    });
  } catch {
    // Swallow analytics errors — tracking must never break the appointment flow.
  }
}
