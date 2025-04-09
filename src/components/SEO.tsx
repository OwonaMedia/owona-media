import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  structuredData?: any
}

export default function SEO({
  title,
  description,
  keywords = 'digital marketing, social media, content creation, video production, owona media',
  ogImage = '/images/og-image.jpg',
  structuredData
}: SEOProps) {
  const siteUrl = 'https://owona-media.vercel.app'
  const fullTitle = `${title} | Owona Media`
  const fullDescription = description
  const fullOgImage = `${siteUrl}${ogImage}`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={fullOgImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  )
} 