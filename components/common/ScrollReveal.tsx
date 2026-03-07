'use client';

/**
 *   components/common/ScrollReveal.tsx (new)
 *   - IntersectionObserver-based client component
 *   - Props: delay (ms), from (bottom | left | right | fade), className
 *   - Triggers once when entering viewport, disconnects observer after
 */
import { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
  delay?: number;
  from?: 'bottom' | 'left' | 'right' | 'fade';
  className?: string;
};

export default function ScrollReveal({
  children,
  delay = 0,
  from = 'bottom',
  className = '',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenClass = {
    bottom: 'opacity-0 translate-y-7',
    left: 'opacity-0 -translate-x-7',
    right: 'opacity-0 translate-x-7',
    fade: 'opacity-0',
  }[from];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-x-0 translate-y-0' : hiddenClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
