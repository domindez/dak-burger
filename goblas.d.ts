// types/globals.d.ts
export {}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    _hors: Array<[string, string]>;
  }
}
