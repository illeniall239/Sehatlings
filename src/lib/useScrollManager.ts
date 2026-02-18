import { useEffect, useRef } from 'react';

type ScrollCallback = (scrollData: { scrollY: number; direction: 'up' | 'down' }) => void;

class ScrollManager {
  private static instance: ScrollManager;
  private callbacks: Map<string, ScrollCallback> = new Map();
  private rafId: number | null = null;
  private lastScrollY = 0;
  private direction: 'up' | 'down' = 'down';

  private constructor() {
    if (typeof window !== 'undefined') {
      this.lastScrollY = window.scrollY;
    }
  }

  static getInstance(): ScrollManager {
    if (!ScrollManager.instance) {
      ScrollManager.instance = new ScrollManager();
    }
    return ScrollManager.instance;
  }

  // Event-driven: only schedule rAF when a scroll event fires
  private handleScroll = () => {
    if (this.rafId !== null) return; // already scheduled
    this.rafId = requestAnimationFrame(this.processScroll);
  };

  private processScroll = () => {
    this.rafId = null;

    const currentScrollY = window.scrollY;
    if (currentScrollY !== this.lastScrollY) {
      this.direction = currentScrollY > this.lastScrollY ? 'down' : 'up';

      const scrollData = {
        scrollY: currentScrollY,
        direction: this.direction
      };

      this.callbacks.forEach(callback => callback(scrollData));
      this.lastScrollY = currentScrollY;
    }
  };

  subscribe(id: string, callback: ScrollCallback): () => void {
    const wasEmpty = this.callbacks.size === 0;
    this.callbacks.set(id, callback);

    if (wasEmpty) {
      window.addEventListener('scroll', this.handleScroll, { passive: true });
    }

    return () => {
      this.callbacks.delete(id);
      if (this.callbacks.size === 0) {
        window.removeEventListener('scroll', this.handleScroll);
        if (this.rafId !== null) {
          cancelAnimationFrame(this.rafId);
          this.rafId = null;
        }
      }
    };
  }
}

export function useScrollManager(callback: ScrollCallback, id: string = Math.random().toString(36)) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const manager = ScrollManager.getInstance();
    const unsubscribe = manager.subscribe(id, (data) => {
      callbackRef.current(data);
    });

    return unsubscribe;
  }, [id]);
}
