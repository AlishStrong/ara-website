import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import boardImg from '../../assets/ara_board.jpg';
import { Board, BoardClass, BoardJson } from '../../models/Board.model';

const BoardView = () => {
  const { t, i18n } = useTranslation();
  const [board, setBoard] = useState<Board[]>([]);

  useEffect(() => {
    axios.get('/board_mock.json')
      .then(result => result.data)
      .then((bjArr: BoardJson[]) => bjArr.map(bj => new BoardClass(bj)))
      .then((bcArr: BoardClass[]) => bcArr.map(bc => bc.getBoard(i18n.resolvedLanguage.toLocaleLowerCase())))
      .then((boardArr: Board[]) => setBoard(boardArr));
  }, [i18n.resolvedLanguage]);

  return (
    <div className='grid grid-cols-1'>
      <div id='intro' className='p-4'>
        <img src={boardImg} className='max-w-[16em] float-left mr-4'></img>
        <h2 className='font-bold'>{t('ui.about_view.sidebar.board')}</h2>
        <p>{t('ui.about_view.board_info')}</p>
      </div>
      <div className='p-4'>
        <ul className='list-disc list-inside leading-loose'>
          { board.map(b => (
            <li key={b.id}>
              <span className='font-bold'>{b.name}</span> - {b.title}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default BoardView;
