export { default as Header } from './Header';
export { default as Footer } from './Footer';
export { default as HeroSection } from './HeroSection';
export { default as BlogSection } from './BlogSection';
export { default as LinksSection } from './LinksSection';
export { default as TypewriterAnimation } from './TypewriterAnimation';
export { default as IndustriesSection } from './Industries/IndustriesSection';

// Theme components
export { ThemeProvider, useTheme } from './providers/ThemeProvider';
export { ClientThemeProvider } from './providers/ClientThemeProvider';
export { ThemeToggle } from './ui/ThemeToggle';
export { SimpleThemeToggle } from './ui/SimpleThemeToggle';

// UI components
export { MetadataBreadcrumb, useBreadcrumbs } from './ui/metadata-breadcrumb';
export { StructuredBreadcrumb } from './ui/structured-breadcrumb';

// MDX components are now handled by @next/mdx automatically via mdx-components.tsx

// Icon components
export { Icon, type IconProps } from './icons/Icon';
export { LinkedInIcon, type LinkedInIconProps } from './icons/LinkedInIcon';
export { FacebookIcon, type FacebookIconProps } from './icons/FacebookIcon';
