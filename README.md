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
   # Edit .env with your Sanity project details
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:4321`

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

## 📝 Content Management

To set up Sanity CMS:

1. Create a new Sanity project at [sanity.io](https://www.sanity.io/)
2. Set up your schemas for projects, blog posts, and profile
3. Add your project ID and dataset to environment variables
4. Deploy your Sanity Studio

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by [mhtoin](https://github.com/mhtoin)