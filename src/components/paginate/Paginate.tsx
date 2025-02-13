import { Pagination } from '@mui/material';
import style from './Paginate.module.scss';
import { useContext } from 'react';
import { DarkThemeContext } from '../../App';

interface Props {
  pageCount: number;
  page: number;
  setPage: (num: number) => void;
}

const Paginate = ({ page, setPage, pageCount }: Props) => {
  const context = useContext(DarkThemeContext);
  return (
    <div className={style.paginate}>
      {pageCount > 0 && (
        <Pagination
          className={context?.isDarkTheme ? style.paginateDark : ''}
          sx={{
            '.MuiPaginationItem-root.Mui-selected': {
              backgroundColor: context?.isDarkTheme ? '#1a1818' : '#dedede',
            },
            '.MuiPagination-ul': {
              width: '228px',
            },
            '.MuiPaginationItem-root': {
              minWidth: '24px',
              height: '24px',
              margin: '0 4px',
            },
          }}
          defaultPage={3}
          siblingCount={0}
          shape="rounded"
          count={pageCount}
          page={page}
          color="standard"
          onChange={(_, num) => setPage(num)}
        />
      )}
    </div>
  );
};

export default Paginate;
