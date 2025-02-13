import { useContext, useState } from 'react';
import Search from '../search/Search';
import style from './Main.module.scss';
import GalleryItem from '../gallery-item/GalleryItem';
import { paintingsAPI } from '../../services/PaintingsServices';
import Paginate from '../paginate/Paginate';

const Main = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const { data } = paintingsAPI.useFetchAllPaintingsQuery({
    limit: 6,
    page,
    search,
  });

  const { data: count } = paintingsAPI.useGetTotalPaintingsQuery({});
  const pageCount = Math.ceil(count?.length / 6);

  return (
    <main>
      <div className="container">
        <Search search={search} setSearch={setSearch} />
        <div className={style.gelleryItems}>
          {data?.length &&
            data.map(item => <GalleryItem {...item} key={item.id} />)}
        </div>
      </div>
      <Paginate pageCount={pageCount} page={page} setPage={setPage} />
    </main>
  );
};

export default Main;
