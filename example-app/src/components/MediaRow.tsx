import {MediaItem} from 'hybrid-types/DBTypes';
import { Link } from 'react-router-dom';
// src/components/MediaRow.tsx

type MediaRowProps = {
  item: MediaItem;
  setSelectedItem: (item: MediaItem | undefined) => void;
};

const MediaRow = (props: MediaRowProps) => {
  const {item} = props;
  return (
    // TODO: move <tr> element  for each item property from Home.tsx here
    <tr>
      <td>
        <img src={item.thumbnail || ''} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>
        <Link to={'/single'} state={{item}}>Show</Link>
      </td>
    </tr>
  );
};

export default MediaRow;
