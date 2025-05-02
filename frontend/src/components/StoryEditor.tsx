import React, { useState, useCallback } from 'react';
import { TextEditor } from './TextEditor';
import api from '../utils/api';
import DOMPurify from 'dompurify';

interface StoryEditorProps {
  storyId?: string;
  initialTitle?: string;
  initialContent?: string;
  onSave?: (data: { title: string; content: string }) => void;
  onCancel?: () => void;
  isSaving?: boolean;
}

export function StoryEditor({
  storyId,
  initialTitle = '',
  initialContent = '',
  onSave,
  onCancel,
  isSaving = false,
}: StoryEditorProps) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [isAutoSaving, setIsAutoSaving] = useState(false);

  const handleSave = useCallback(() => {
    if (onSave) {
      // Sanitize the HTML content before saving
      const sanitizedContent = DOMPurify.sanitize(content);
      onSave({ title, content: sanitizedContent });
    }
  }, [title, content, onSave]);

  const handleAutoSave = useCallback(
    async (newContent: string) => {
      if (!storyId) return;

      try {
        setIsAutoSaving(true);
        // Sanitize the HTML content before saving
        const sanitizedContent = DOMPurify.sanitize(newContent);
        await api.put(`/stories/${storyId}`, {
          title,
          content: sanitizedContent,
        });
      } catch (error) {
        console.error('Auto-save failed:', error);
        throw error;
      } finally {
        setIsAutoSaving(false);
      }
    },
    [storyId, title]
  );

  return (
    <div className="story-editor space-y-4">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter story title..."
        className="w-full p-2 text-2xl font-bold border-b focus:outline-none focus:border-blue-500"
      />

      <TextEditor
        initialContent={content}
        onChange={setContent}
        onAutoSave={storyId ? handleAutoSave : undefined}
        placeholder="Start writing your story..."
        minHeight="400px"
        autoSaveInterval={2000} // Auto-save every 2 seconds
      />

      <div className="flex justify-end space-x-4">
        {onCancel && (
          <button
            onClick={onCancel}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
            disabled={isSaving || isAutoSaving}
          >
            Cancel
          </button>
        )}
        <button
          onClick={handleSave}
          disabled={isSaving || isAutoSaving || !title.trim() || !content.trim()}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSaving ? 'Saving...' : 'Save Story'}
        </button>
      </div>
    </div>
  );
}
