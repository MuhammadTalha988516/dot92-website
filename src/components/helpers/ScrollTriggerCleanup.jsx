// src/components/utils/ScrollTriggerCleanup.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollTriggerCleanup() {
  const location = useLocation();

  useEffect(() => {
    // Use a small delay to allow components to clean up their own triggers
    const timer = setTimeout(() => {
      try {
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger && !trigger._killed && trigger.vars && trigger.vars.id) {
            // Only kill triggers that are not currently pinned or active
            if (!trigger.isActive && !trigger.pin) {
              trigger.kill();
            }
          }
        });
      } catch (error) {
        console.warn("ScrollTrigger cleanup error:", error);
      }
    }, 100); // Small delay to allow component cleanup

    return () => clearTimeout(timer);
  }, [location]);

  return null;
}
