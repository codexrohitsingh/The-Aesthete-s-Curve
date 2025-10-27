'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbProps {
  productTitle?: string;
}

export default function Breadcrumb({ productTitle }: BreadcrumbProps) {
  const pathname = usePathname();
  
  // Generate breadcrumb segments
  const generateBreadcrumbs = () => {
    // Remove query parameters
    const path = pathname.split('?')[0];
    
    // Split the path into segments
    const segments = path.split('/').filter(Boolean);
    
    // Create the breadcrumb items
    const breadcrumbs = [
      { name: 'Home', path: '/' },
      ...segments.map((segment, index) => {
        const path = `/${segments.slice(0, index + 1).join('/')}`;
        let name = segment.charAt(0).toUpperCase() + segment.slice(1);
        
        // If this is the last segment and we have a product title, use that instead
        if (index === segments.length - 1 && segment === 'painting' && productTitle) {
          name = productTitle;
        }
        
        return { name, path };
      }),
    ];
    
    return breadcrumbs;
  };
  
  // Generate breadcrumbs and JSON-LD data
  const breadcrumbs = generateBreadcrumbs();
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': breadcrumb.name,
      'item': `https://the-aesthete-curve.vercel.app${breadcrumb.path}`,
    })),
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-2 px-4 sm:px-8 bg-[#FAF7F0] border-b border-[#E8DFD3]">
        <ol className="flex flex-wrap items-center text-sm">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.path} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-[#7D6E5F]">/</span>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-[#3E2A1F] font-medium" aria-current="page">
                {breadcrumb.name}
              </span>
            ) : (
              <Link 
                href={breadcrumb.path}
                className="text-[#5C4033] hover:text-[#3E2A1F] transition-colors font-light"
              >
                {breadcrumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
    </>
  );
}