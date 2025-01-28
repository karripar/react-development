import {MediaItem} from 'hybrid-types/DBTypes';
import {NavigateFunction, useLocation, useNavigate} from 'react-router-dom';

// Utility function to format filesize, made by CoPilot
const formatFileSize = (size: number) => {
  if (size < 1024) return size + ' B';
  const i = Math.floor(Math.log(size) / Math.log(1024));
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  return (size / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
};

const Single = () => {
  const {state} = useLocation();
  const item: MediaItem = state.item;
  const navigate: NavigateFunction = useNavigate();
  return (
    <>
    <div className="media-container">
      <h2>{item.title}</h2>
      {item.media_type.includes('video') ? (
        <video controls src={item.filename} crossOrigin='anonymous' />
      ) : (
        <img src={item.filename} alt={item.title} />
      )}
      <div className="media-info">
      <p>{item.description}</p>
      <p>Created at: {new Date(item.created_at).toLocaleString('fi-FI')}</p>
      <p>Filesize: {formatFileSize(item.filesize)}</p>
      <div className="button-container">
        <button className="close-button" onClick={() => navigate(-1)}>Close</button>
      </div>
      </div>
    </div>
    </>
  );
};

export default Single;
