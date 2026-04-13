# SEO Checklist for Onleadify.com

## ✅ Completed

### Technical SEO
- [x] Added comprehensive meta tags (title, description, keywords)
- [x] Implemented Open Graph tags for social media sharing
- [x] Added Twitter Card meta tags
- [x] Created robots.txt file
- [x] Created sitemap.xml
- [x] Added canonical URLs
- [x] Implemented JSON-LD structured data (Organization, WebSite)
- [x] Added theme-color meta tag
- [x] Set proper language attribute (lang="ru")
- [x] Configured site URL in astro.config.mjs

### DNS & Domain Configuration
- [x] Configured apex domain (onleadify.com) in DigitalOcean
- [x] Added www subdomain in DigitalOcean
- [ ] **PENDING**: Add CNAME record in Hostinger DNS (see instructions below)

## 🔄 Pending Actions

### 1. Hostinger DNS Configuration (CRITICAL)
Add this CNAME record in Hostinger:
```
Type:   CNAME
Name:   www
Points to: onleadify-4wpuq.ondigitalocean.app
TTL:    14400
```

### 2. Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: https://onleadify.com
3. Verify ownership (HTML file or DNS TXT record)
4. Submit sitemap: https://onleadify.com/sitemap.xml

### 3. Google Analytics (Optional)
1. Create GA4 property
2. Add tracking code to Layout.astro

### 4. Performance Optimization
- [ ] Optimize images (use WebP format)
- [ ] Add lazy loading for images
- [ ] Minimize JavaScript bundles
- [ ] Enable compression (Gzip/Brotli) on server

### 5. Content SEO
- [ ] Add alt text to all images
- [ ] Use proper heading hierarchy (H1, H2, H3)
- [ ] Add internal linking between pages
- [ ] Create blog/content section for regular updates

### 6. Social Media
- [ ] Create social media profiles
- [ ] Add social media links to structured data
- [ ] Create Open Graph image (1200x630px)

## 📊 SEO Testing Tools

After deployment, test with:
- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Schema Markup Validator**: https://validator.schema.org/
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- **SSL Test**: https://www.ssllabs.com/ssltest/

## 🔍 Keywords Targeting

Current keywords in meta tags:
- веб-разработка
- AI автоматизация
- создание сайтов
- лидогенерация
- веб-студия
- автоматизация бизнеса
- разработка под ключ

## 📈 Next Steps for Better Rankings

1. **Content Strategy**: Create blog posts about web development, AI automation
2. **Backlinks**: Get links from relevant industry websites
3. **Local SEO**: Add business to Google My Business (if applicable)
4. **Regular Updates**: Update sitemap.xml when adding new pages
5. **Monitor**: Track rankings and traffic in Google Search Console

## 🚀 Deployment Checklist

Before deploying:
- [x] Update www.onleadify.com in allowedHosts
- [x] Add site URL to astro.config.mjs
- [x] Create robots.txt
- [x] Create sitemap.xml
- [ ] Add Hostinger DNS CNAME record
- [ ] Test all pages after deployment
- [ ] Submit to Google Search Console
