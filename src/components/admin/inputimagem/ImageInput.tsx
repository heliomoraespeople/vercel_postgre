import React, { useEffect, useState } from 'react';
import styles from './ImageInput.module.css';

interface ImageInputProps {
  onImageSelected: (imageBlob: Blob) => void;
  image?: string;
}

const ImageInput: React.FC<ImageInputProps> = ({ onImageSelected, image }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (image) {
      setSelectedImage(image);
    }
  }, [image]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = e => {
        const imageBase64 = e.target?.result as string;
        setSelectedImage(imageBase64);
        const imageBlob = new Blob(
          [
            Uint8Array.from(atob(imageBase64.split(',')[1]), c =>
              c.charCodeAt(0)
            )
          ],
          { type: file.type }
        );
        onImageSelected(imageBlob);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleFileButtonClick = () => {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  };

  return (
    <div>
      {selectedImage ? (
        <>
          <img
            className="my-12"
            src={selectedImage}
            alt="Selected"
            width={200}
          />
          <input
            type="file"
            id="fileInput"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
          <button className={styles.buttonSend} onClick={handleFileButtonClick}>
            Alterar imagem
          </button>
        </>
      ) : (
        <>
          <input
            type="file"
            id="fileInput"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
          <button className={styles.buttonSend} onClick={handleFileButtonClick}>
            Selecione uma imagem
          </button>
        </>
      )}
    </div>
  );
};

export default ImageInput;
