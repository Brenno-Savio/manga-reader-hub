'use client';

import { useSearchParams } from 'next/navigation';

import Navbar from '@/components/Navbar/Navbar';
import ReadingListModal from '@/components/ReadingListModal/ReadingListModal';
import SettingsModal from '@/components/SettingsModal/SettingsModal';
import UploadNovelModal from '@/components/UploadNovelModal/UploadNovelModal';

const UserPage = () => {
  const searchParams = useSearchParams();
  const option = searchParams.get('option');

  let content;

  switch (option) {
    case 'settings':
      content = <SettingsModal />;
      break;
    case 'reading-list':
      content = <ReadingListModal />;
      break;
    case 'upload-novel':
      content = <UploadNovelModal />;
      break;
    default:
      content = <ReadingListModal />;
  }

  return (
    <div>
      <Navbar />
      <div>{content}</div>
    </div>
  );
};

export default UserPage;
