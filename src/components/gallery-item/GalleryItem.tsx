import { useContext } from 'react';
import style from './GallerryItem.module.scss';
import { IPaintings } from '../../modules/IPaintings';
import { DarkThemeContext } from '../../App';
import { paintingsAPI } from '../../services/PaintingsServices';

const GalleryItem = ({
  authorId,
  created,
  imageUrl,
  locationId,
  name,
}: IPaintings) => {
  const { data: autor } = paintingsAPI.useFetchAllAutorsQuery(authorId);
  const { data: location } = paintingsAPI.useFetchAllLocationQuery(locationId);
  const IMG_BASE_URL = 'https://test-front.framework.team';

  const context = useContext(DarkThemeContext);
  return (
    <article className={style.gelleryItem}>
      <img
        className={style.image}
        src={`${IMG_BASE_URL}${imageUrl}`}
        alt={name}
      />
      <div
        className={`${style.content} ${context?.isDarkTheme ? style.contentDark : ''}`}
      >
        <div className={style.block1}>
          <h2>{name}</h2>
          <p>{created}</p>
        </div>
        <div className={style.block2}>
          <h2>{autor?.name}</h2>
          <p>{location?.location}</p>
        </div>
      </div>
    </article>
  );
};

export default GalleryItem;
