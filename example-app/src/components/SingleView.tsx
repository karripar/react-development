import { MediaItemWithOwner } from "hybrid-types/DBTypes";

const SingleView = (props: {
  item: MediaItemWithOwner | undefined;
  setSelectedItem: (item: MediaItemWithOwner | undefined) => void;
}) => {
  const {item, setSelectedItem} = props;
  console.log('item:', item);
  return (
    // DONE: Add JSX for displaying a mediafile here
    // - use e.g. a <dialog> element for creating a modal
    // - use item prop to render the media item details
    // - use img tag for displaying images
    // - use video tag for displaying videos
    <>
      {item && (
        <dialog open>
          <div className="media-container">
          <h2>{item.title}</h2>
          {item.media_type.includes('video') ? (
            <video controls src={item.filename} />
          ) : (
            <img src={item.filename} alt={item.title} />
          )}
          <p>{item.description}</p>

          <div className="button-container">
          <button className="close-button" onClick={() => setSelectedItem(undefined)}>Close</button>
          </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default SingleView
