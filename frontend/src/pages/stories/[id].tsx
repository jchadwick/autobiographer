import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { StoryEditor } from '../../components/StoryEditor';
import api from '../../utils/api';
import DOMPurify from 'dompurify';

interface Story {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const StoryPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };

  const [story, setStory] = useState<Story | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchStory = async () => {
      if (!id) return;

      try {
        const response = await api.get(`/stories/${id}`);
        setStory(response.data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch story:', err);
        setError('Failed to load story. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchStory();
  }, [id]);

  const handleSave = async (data: { title: string; content: string }) => {
    if (!id) return;

    try {
      setIsSaving(true);
      const response = await api.put(`/stories/${id}`, data);
      setStory(response.data);
      setIsEditing(false);
      setError(null);
    } catch (err) {
      console.error('Failed to update story:', err);
      setError('Failed to save story. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!id || !window.confirm('Are you sure you want to delete this story?')) {
      return;
    }

    try {
      await api.delete(`/stories/${id}`);
      router.push('/stories');
    } catch (err) {
      console.error('Failed to delete story:', err);
      setError('Failed to delete story. Please try again.');
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Loading story...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Story not found.</p>
      </div>
    );
  }

  if (isEditing) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Edit Story</h1>
        <StoryEditor
          storyId={story.id}
          initialTitle={story.title}
          initialContent={story.content}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
          isSaving={isSaving}
        />
      </div>
    );
  }

  // Sanitize the HTML content before rendering
  const sanitizedContent = DOMPurify.sanitize(story.content);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{story.title}</h1>
        <div className="space-x-4">
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-50"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 text-red-500 border border-red-500 rounded hover:bg-red-50"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="prose max-w-none">
        <p className="text-gray-500 mb-8">
          Last updated: {new Date(story.updatedAt).toLocaleDateString()}
        </p>
        <div className="ql-editor p-0" dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
      </div>
    </div>
  );
};

export default StoryPage;
