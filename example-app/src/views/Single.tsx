import {MediaItem} from 'hybrid-types/DBTypes';
import {NavigateFunction, useLocation, useNavigate} from 'react-router-dom';

const Single = () => {
  const {state} = useLocation();
  const item: MediaItem = state.item;
  const navigate: NavigateFunction = useNavigate();
  return (
    <>
      <h2>{item.title}</h2>
      {item.media_type.includes('video') ? (
        <video controls src={item.filename} />
      ) : (
        <img src={item.filename} alt={item.title} />
      )}
      <p>{item.description}</p>
      <p>Created at: {new Date(item.created_at).toLocaleString('fi-FI')}</p>
      <p>Filesize: {item.filesize}</p>
      <div className="button-container">
        <button className="close-button" onClick={() => navigate(-1)}>
          Close
        </button>
      </div>
    </>
  );
};

export default Single;
