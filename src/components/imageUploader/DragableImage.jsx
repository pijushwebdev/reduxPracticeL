import { useState } from "react";

function ImageUploader() {
  const [images, setImages] = useState([]);
  const [dragging, setDragging] = useState(false);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    processFiles(files);
  };
 
  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const files = Array.from(event.dataTransfer.files);
    processFiles(files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const processFiles = (files) => {
    const imagePreviews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prevImages) => [...prevImages, ...imagePreviews]);
  };

//   const removeImage = (index) => {
//     setImages((prevImages) => prevImages.filter((_, i) => i !== index));
//   };

const removeImage = (index) => {
    setImages((prevImages) => {
      URL.revokeObjectURL(prevImages[index].preview);
      return prevImages.filter((_, i) => i !== index);
    });
  };
  

  return (
    <div className="m-5">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`mb-5 p-5 border-2 rounded-lg text-center cursor-pointer transition-colors duration-300 ${dragging ? "border-gray-500 bg-gray-100" : "border-gray-300 bg-gray-50"}`}
      >
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="hidden"
          id="fileInput"
        />
        <label htmlFor="fileInput" className="cursor-pointer text-gray-700">
          Drag and drop images here or click to select files
        </label>
      </div>

      <div className="flex flex-wrap gap-3">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.preview}
              alt={`preview-${index}`}
              className="w-36 h-36 object-cover rounded-md"
            />
            <button
              onClick={() => removeImage(index)}
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs cursor-pointer"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageUploader;
