'use client';

import { useEffect } from 'react';
import { getAnalytics } from 'firebase/analytics';
import { app } from '@/lib/firebase';

export default function Analytics() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const analytics = getAnalytics(app);
      // Analytics ist jetzt initialisiert und kann verwendet werden
    }
  }, []);

  return null;
} 