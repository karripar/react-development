import {useState} from 'react';

// Upload.tsx
const Upload = () => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
        console.log(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
  };

  const [file, setFile] = useState<File | null>(null);
  return (
      <>
          <h1>Upload</h1>
          <form onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="title">Title</label>
                  <input
                      name="title"
                      type="text"
                      id="title"
                      onChange={handleInputChange}
                  />
              </div>
              <div>
                  <label htmlFor="description">Description</label>
                  <textarea
                      name="description"
                      rows={5}
                      id="description"
                      onChange={handleInputChange}
                  ></textarea>
              </div>
              <div>
                  <label htmlFor="file">File</label>
                  <input
                      name="file"
                      type="file"
                      id="file"
                      accept="image/*, video/*"
                  onChange={handleFileChange}
                  />
              </div>
              <img
                  src={
                      file
                      ? URL.createObjectURL(file)
                      : 'https://via.placeholder.com/200?text=Choose+image'
                  }
                  alt="preview"
                  width="200"
              />
              <button
                  type="submit"
                  disabled={file && inputs.title.length > 3 ? false : true}
              >
                  Upload
              </button>
          </form>
      </>
  );
};
