# Portfolio

A modern, professional portfolio website built with Astro and Sanity CMS. Features a responsive design with light/dark theme support, showcasing projects, blog posts, and professional information.

## ✨ Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Dark/Light Theme**: Seamless theme switching with system preference detection
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Built with Astro for optimal loading speeds
- **CMS Integration**: Powered by Sanity for easy content management
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Accessible**: Following WCAG guidelines for accessibility

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/mhtoin/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration:
   # - Add your Sanity project details (optional)
   # - Set PUBLIC_GITHUB_USERNAME to your GitHub username
   ```

4. **Create a Sanity project** (if you haven't already)
   - Go to [sanity.io](https://www.sanity.io/) and create a new project
   - Note your Project ID and Dataset name
   - Update the environment variables in `.env`

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Access the CMS**
   - Portfolio: `http://localhost:4321`
   - Sanity Studio: `http://localhost:4321/studio`

## ✨ Features

- **Automatic GitHub Integration** - Projects are automatically fetched from your GitHub repositories
- **Sanity CMS Support** - Optional headless CMS for advanced content management
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode** - Automatic theme switching with system preference detection
- **Fast Performance** - Built with Astro for optimal loading speeds
- **SEO Optimized** - Meta tags, Open Graph, and sitemap generation
- **Type Safety** - Full TypeScript support throughout the codebase

## 🛠️ Built With

- **[Astro](https://astro.build/)** - Static site generator
- **[Sanity](https://www.sanity.io/)** - Headless CMS
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

## 📁 Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   ├── layouts/         # Page layouts
│   ├── lib/             # Utility functions and configurations
│   ├── pages/           # Page components (routes)
│   └── styles/          # Global styles
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## 🐙 GitHub Integration

The portfolio automatically fetches and displays your public repositories from GitHub. This provides a dynamic, always up-to-date project showcase without manual maintenance.

### How it works:
- Fetches public repositories from your GitHub username
- Filters out forks and archived repositories
- Determines featured projects based on stars and recent activity
- Extracts technologies from repository topics and language
- Falls back to Sanity CMS if configured, then to local mock data

### Configuration:
Set the `PUBLIC_GITHUB_USERNAME` environment variable to your GitHub username:
```bash
PUBLIC_GITHUB_USERNAME=your-github-username
```

### Featured Project Logic:
Projects are automatically marked as "featured" if they have:
- More than 0 stars, OR
- Recent activity (commits within the last 6 months)

The homepage shows the 3 most recent featured projects, while the projects page displays all repositories with filtering options.

## 🎨 Pages

- **Home** (`/`) - Landing page with hero section and featured content
- **Projects** (`/projects`) - Portfolio showcase with filtering
- **About** (`/about`) - Professional information and experience
- **Blog** (`/blog`) - Articles and tutorials

## 🔧 Development

### Available Commands

| Command           | Action                                       |
|:------------------|:---------------------------------------------|
| `npm run dev`     | Start development server at `localhost:4321`|
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview build locally before deploying      |

### Customization

1. **Content**: Update the mock data in page files or connect to your Sanity project
2. **Styling**: Modify `tailwind.config.mjs` and `src/styles/globals.css`
3. **Theme**: Customize colors and design tokens in the Tailwind config
4. **Components**: Edit components in `src/components/` for layout changes

## 📝 Content Management

This portfolio includes a **self-hosted Sanity Studio** for easy content management:

### 🎯 Content Types

- **Profile**: Personal information, bio, skills, and contact details
- **Projects**: Portfolio projects with descriptions, technologies, and links
- **Blog Posts**: Articles with rich text content, tags, and metadata

### 🔧 Studio Features

- **Rich Text Editor**: Full-featured editor with code blocks, images, and formatting
- **Media Management**: Upload and organize images with automatic optimization
- **Content Preview**: See how content will look on the live site
- **Version History**: Track changes and revert if needed
- **Collaborative Editing**: Multiple users can edit content simultaneously

### 🚀 Studio Access

- **Development**: Visit `http://localhost:4321/studio` while running `npm run dev`
- **Production**: The studio is deployed alongside your site at `/studio`
- **Security**: Studio access requires Sanity authentication

### 📁 Schema Structure

The studio includes predefined schemas for all content types:
- Rich content blocks with code syntax highlighting
- Image fields with alt text and hotspot support
- SEO-friendly slug generation
- Featured content flags
- Publication status management

To set up Sanity CMS:

1. Create a new Sanity project at [sanity.io](https://www.sanity.io/)
2. Set up your schemas for projects, blog posts, and profile
3. Add your project ID and dataset to environment variables
4. Access the studio at `/studio` to start adding content

## 🌐 Deployment

This site can be deployed to any static hosting service:

- **Vercel** (recommended)
- **Netlify** 
- **GitHub Pages**
- **Cloudflare Pages**

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by [mhtoin](https://github.com/mhtoin)