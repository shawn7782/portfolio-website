
# Nazmul Hasan Shawon - Portfolio

A professional, high-performance portfolio for a Video Editor & AI Content Maker.

## Features
- ✨ Modern React + Tailwind CSS UI
- 🌓 Dark/Light Mode with System Detection
- 🎬 High-performance Video Lightbox (YouTube/Local Support)
- 📱 Fully Responsive Mobile-first Design
- 🔍 SEO Optimized with JSON-LD (Person & VideoObject)
- 🚀 Ready for Vercel/Netlify

## Getting Started

### Local Development
1. Clone this repository
2. Run `npm install`
3. Run `npm run dev` to start the development server

### Deployment
To deploy to Vercel or Netlify:
1. Connect your GitHub repository to the platform.
2. Set the build command: `npm run build`
3. Set the output directory: `dist` (or `build`)

## Customization Checklist

### Replace Personal Content
- [ ] **Headshot**: Update the `src` in `components/About.tsx`.
- [ ] **CV**: Replace the CV download button link in `components/About.tsx`.
- [ ] **Email**: Update `contact@nazmulshawon.com` in `components/Contact.tsx`.
- [ ] **SEO**: Update `index.html` meta tags and `App.tsx` JSON-LD schema with your real domain.

### Video Management
- [ ] **Portfolio Videos**: Edit `constants.tsx` to include your YouTube video IDs or video file paths.
- [ ] **Thumbnails**: Replace `https://picsum.photos/...` with your real poster images (WebP recommended).
- [ ] **Transcripts**: Add your actual video transcripts in the `PROJECTS` constant for better accessibility.

### Analytics
- [ ] Add your Google Analytics script or GTM ID in `index.html`.

## Video Encoding Recommendations
For best performance, use:
- **Codec**: H.264 (MP4) or H.265
- **Bitrate**: 2-5 Mbps for 1080p
- **WebM Fallback**: Always provide a `.webm` version for better browser support.
- **Lazy Loading**: Iframes are already configured for performance, but ensure poster images are optimized WebP.

## License
MIT
