import  { useState } from "react";

function ImageUploader() {
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
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
    <div style={{ margin: "20px" }}>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        style={{
          marginBottom: "20px",
          padding: "10px",
          border: "2px dashed #ccc",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "#f9f9f9",
          outline: "none",
          transition: "border-color 0.3s",
        }}
        onMouseEnter={(e) => e.target.style.borderColor = "#888"}
        onMouseLeave={(e) => e.target.style.borderColor = "#ccc"}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {images.map((image, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              src={image.preview}
              alt={`preview-${index}`}
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <button
              onClick={() => removeImage(index)}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "50%",
                cursor: "pointer",
                padding: "5px",
              }}
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
