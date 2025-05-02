import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { StoryEditor } from '../../components/StoryEditor';
import { api } from '../../utils/api';

const NewStoryPage: React.FC = () => {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async (data: { title: string; content: string }) => {
    try {
      setIsSaving(true);
      const response = await api.post('/stories', data);
      router.push(`/stories/${response.data.id}`);
    } catch (error) {
      console.error('Failed to create story:', error);
      alert('Failed to create story. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Create New Story</h1>
      <StoryEditor
        onSave={handleSave}
        onCancel={handleCancel}
        isSaving={isSaving}
      />
    </div>
  );
};

export default NewStoryPage; 