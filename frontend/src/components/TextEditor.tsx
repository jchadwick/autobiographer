import React, { useState, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';
import debounce from 'lodash/debounce';
import 'react-quill/dist/quill.snow.css';

// Import Quill dynamically to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <div className="h-[150px] w-full animate-pulse bg-gray-100 rounded-lg" />,
});

interface TextEditorProps {
  initialContent?: string;
  onChange?: (content: string) => void;
  onAutoSave?: (content: string) => Promise<void>;
  placeholder?: string;
  minHeight?: string;
  autoSaveInterval?: number; // in milliseconds
}

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, false] }],
  ['bold', 'italic', 'underline', 'strike'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ indent: '-1' }, { indent: '+1' }],
  [{ align: [] }],
  ['clean'],
];

export const TextEditor: React.FC<TextEditorProps> = ({
  initialContent = '',
  onChange,
  onAutoSave,
  placeholder = 'Start writing...',
  minHeight = '150px',
  autoSaveInterval = 3000, // default to 3 seconds
}) => {
  const [content, setContent] = useState(initialContent);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  // Create a debounced auto-save function
  const debouncedAutoSave = useCallback(
    debounce(async (text: string) => {
      if (!onAutoSave) return;

      try {
        setIsSaving(true);
        await onAutoSave(text);
        setLastSaved(new Date());
      } catch (error) {
        console.error('Auto-save failed:', error);
      } finally {
        setIsSaving(false);
      }
    }, autoSaveInterval),
    [onAutoSave, autoSaveInterval]
  );

  // Clean up the debounced function on unmount
  useEffect(() => {
    return () => {
      debouncedAutoSave.cancel();
    };
  }, [debouncedAutoSave]);

  const handleChange = useCallback(
    (newContent: string) => {
      setContent(newContent);
      onChange?.(newContent);

      // Trigger auto-save if enabled
      if (onAutoSave) {
        debouncedAutoSave(newContent);
      }
    },
    [onChange, onAutoSave, debouncedAutoSave]
  );

  return (
    <div className="text-editor">
      <div className="border rounded-lg overflow-hidden" style={{ minHeight }}>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={handleChange}
          placeholder={placeholder}
          modules={{
            toolbar: TOOLBAR_OPTIONS,
          }}
        />
      </div>
      {onAutoSave && (
        <div className="mt-2 text-sm text-gray-500">
          {isSaving
            ? 'Saving...'
            : lastSaved
              ? `Last saved: ${lastSaved.toLocaleTimeString()}`
              : 'Not saved yet'}
        </div>
      )}
    </div>
  );
};
