import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '../../utils/api';

interface Story {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

function StoriesPage(): JSX.Element {
  const [stories, setStories] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStories = async (): Promise<void> => {
      try {
        const response = await api.get<Story[]>('/stories');
        setStories(response.data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch stories:', err);
        setError('Failed to load stories. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    void fetchStories();
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Stories</h1>
        <p>Loading stories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Stories</h1>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Stories</h1>
        <Link
          href="/stories/new"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          New Story
        </Link>
      </div>

      {stories.length === 0 ? (
        <p className="text-gray-600">
          You haven&apos;t created any stories yet.{' '}
          <Link href="/stories/new" className="text-blue-500 hover:underline">
            Create your first story
          </Link>
          .
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map(story => (
            <Link
              key={story.id}
              href={`/stories/${story.id}`}
              className="block p-6 border rounded-lg hover:border-blue-500 transition-colors"
            >
              <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
              <p className="text-sm text-gray-500">
                Last updated: {new Date(story.updatedAt).toLocaleDateString()}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default StoriesPage;
