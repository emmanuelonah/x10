import React from 'react';

import { Helmet } from 'react-helmet';

import { Router } from 'routes/index.route';

export function App() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="x10: The ultimate search engine leveraging AI, Chrome, Bing, and Yandex for unparalleled text, image, and video search results. Simplify your search across all needs with optimal outcomes."
        />
        <meta
          name="keywords"
          content="x10 search engine, AI search, comprehensive search, text search, image search, video search, Chrome, Bing, Yandex, optimal search results"
        />
        <meta property="og:title" content="x10: Comprehensive AI-Powered Search Engine" />
        <meta
          property="og:description"
          content="Discover unparalleled search results for text, images, and videos across Chrome, Bing, and Yandex with x10. Simplify your search for all needs with optimal outcomes."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.x10.com" />
        <meta property="og:image" content="https://www.yourwebsite.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="x10: Comprehensive AI-Powered Search Engine" />
        <meta
          name="twitter:description"
          content="Discover unparalleled search results for text, images, and videos across Chrome, Bing, and Yandex with x10. Simplify your search for all needs with optimal outcomes."
        />
      </Helmet>

      <Router />
    </>
  );
}
