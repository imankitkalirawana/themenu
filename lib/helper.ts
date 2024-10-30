export const isImage = (filename: string) => {
  const ext = filename.split('.').pop() || '';
  return ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext);
};
