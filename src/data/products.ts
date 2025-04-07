export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
}

export const products: Product[] = [
  {
    id: 'master-resell-rights',
    name: 'Master Resell Rights',
    description: 'Erhalten Sie die exklusiven Rechte, um dieses digitale Produkt zu verkaufen und weiterzuverkaufen. Perfekt für Ihren eigenen Online-Shop.',
    price: 99.99,
    image: '/images/products/master-resell-rights.jpg',
    category: 'Business'
  },
  {
    id: 'new-york-videos',
    name: 'New York - 273 Videos',
    description: 'Eine umfangreiche Sammlung von 273 hochwertigen Videos aus New York City. Perfekt für Content Creator und Social Media Marketing.',
    price: 149.99,
    image: '/images/products/new-york-videos.jpg',
    category: 'Videos'
  },
  {
    id: 'caribbean-bundle',
    name: 'The Caribbean Bundle',
    description: 'Das komplette Caribbean Bundle mit allen 3 Volumes. Über 300 Videos von traumhaften Stränden und tropischen Landschaften.',
    price: 199.99,
    image: '/images/products/caribbean-bundle.jpg',
    category: 'Videos'
  }
] 