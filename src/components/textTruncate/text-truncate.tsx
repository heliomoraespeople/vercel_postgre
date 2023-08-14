import React from 'react';

interface ITextTruncateProps {
  text: string;
  limit: number;
  className?: string;
}

const TextTruncate: React.FC<ITextTruncateProps> = ({ text, limit, className }) => {
  if (text.length <= limit) {
    return <span className={className}>{text}</span>;
  }

  const truncatedText = text.slice(0, limit) + '...';

  return <span className={className}>{truncatedText}</span>;
};

export default TextTruncate;