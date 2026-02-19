import 'react';

declare module 'react' {
  interface HTMLAttributes<T> {
    class?: string;
    style?: string | CSSProperties;
  }

  interface SVGAttributes<T> {
    class?: string;
    'stroke-width'?: string | number;
  }

  interface MetaHTMLAttributes<T> {
    charset?: string;
  }

  interface LinkHTMLAttributes<T> {
    crossorigin?: string | boolean;
  }

  interface IframeHTMLAttributes<T> {
    allowfullscreen?: boolean;
    referrerpolicy?: string;
    frameborder?: string | number;
  }
}
