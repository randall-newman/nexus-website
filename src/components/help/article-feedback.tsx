'use client';

import { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

export default function ArticleFeedback() {
  const [voted, setVoted] = useState<'yes' | 'no' | null>(null);

  if (voted === 'yes') {
    return (
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
          <ThumbsUp className="h-5 w-5 text-emerald-600" />
        </div>
        <div>
          <p className="font-medium text-gray-900">Thanks for the feedback!</p>
          <p className="text-sm text-gray-500">Glad this article helped you.</p>
        </div>
      </div>
    );
  }

  if (voted === 'no') {
    return (
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
          <ThumbsDown className="h-5 w-5 text-amber-600" />
        </div>
        <div>
          <p className="font-medium text-gray-900">Thanks for letting us know.</p>
          <p className="text-sm text-gray-500">
            We&apos;ll work on improving this article. For immediate help,{' '}
            <a href="/help/contact-support" className="text-blue-600 hover:underline">
              contact support
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <p className="text-sm font-medium text-gray-700">Was this article helpful?</p>
      <div className="flex gap-2">
        <button
          onClick={() => setVoted('yes')}
          className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
        >
          <ThumbsUp className="h-4 w-4" />
          Yes
        </button>
        <button
          onClick={() => setVoted('no')}
          className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-700"
        >
          <ThumbsDown className="h-4 w-4" />
          No
        </button>
      </div>
    </div>
  );
}
