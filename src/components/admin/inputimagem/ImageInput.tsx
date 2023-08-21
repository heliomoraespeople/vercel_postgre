import { useState } from 'react';

interface ImageInputProps {
  onImageSelected: (imageBlob: Blob) => void;
}

const ImageInput: React.FC<ImageInputProps> = ({ onImageSelected }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageBase64 = e.target?.result as string;
        setSelectedImage(imageBase64);
        const imageBlob = new Blob([Uint8Array.from(atob(imageBase64.split(',')[1]), c => c.charCodeAt(0))], { type: file.type });
        onImageSelected(imageBlob);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && <img src={selectedImage} alt="Selected" />}
    </div>
  );
};

export default ImageInput;
