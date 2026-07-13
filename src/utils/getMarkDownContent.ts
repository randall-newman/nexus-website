import fs from 'fs';
import { notFound } from 'next/navigation';
import path from 'path';
import matter from 'gray-matter';

const getMarkDownContent = (folder: string, slug: string) => {
  const filePath = path.join(process.cwd(), folder, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    notFound();
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

export default getMarkDownContent;
