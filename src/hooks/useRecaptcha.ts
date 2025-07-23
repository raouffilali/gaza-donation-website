import { useCallback } from "react";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export const useRecaptcha = () => {
  const executeRecaptcha = useCallback(
    async (action: string): Promise<string> => {
      if (!window.grecaptcha) {
        throw new Error("reCAPTCHA not loaded");
      }

      try {
        const token = await window.grecaptcha.enterprise.execute(
          import.meta.env.VITE_RECAPTCHA_SITE_KEY,
          { action }
        );
        return token;
      } catch (error) {
        console.error("reCAPTCHA execution error:", error);
        throw new Error("فشل في التحقق من الأمان. يرجى المحاولة مرة أخرى.");
      }
    },
    []
  );

  return { executeRecaptcha };
};
