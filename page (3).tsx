@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #1e293b;
  --primary-dark: #2b489a;
  --primary-light: #00a0e3;
  --secondary: #f8fafc;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary-dark: var(--primary-dark);
  --color-primary-light: var(--primary-light);
  --color-secondary: var(--secondary);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans), Arial, Helvetica, sans-serif;
}

/* Article Content Styles */
.article-content p {
  margin-bottom: 1.5rem;
}
.article-content h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: var(--primary-dark);
}
.article-content h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: #1f2937;
}
.article-content ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}
.article-content li {
  margin-bottom: 0.5rem;
}
.article-content img {
  border-radius: 0.75rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
