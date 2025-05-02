import React from 'react';
import Link from 'next/link';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Autobiographer</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Start writing your life story, one chapter at a time.
        </p>
        <div className="flex justify-center">
          <Link
            href="/stories"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Your Stories
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
