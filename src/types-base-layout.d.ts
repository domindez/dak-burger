declare module '@/layouts/BaseLayout.astro' {
  interface Props {
    title?: string;
    description?: string;
    children?: unknown;
  }

  const BaseLayout: (props: Props) => any;
  export default BaseLayout;
}
