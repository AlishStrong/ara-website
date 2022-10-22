export interface Board {
  id: number,
  title: string,
  name: string
}

export interface BoardJson {
  id: number,

  titleEn: string,
  titleRu: string,

  nameEn: string,
  nameRu: string
}

export class BoardClass {
  private _id: number;

  private _titleEn: string;
  private _titleRu: string;

  private _nameEn: string;
  private _nameRu: string;

  constructor(bj: BoardJson) {
    this._id = bj.id;
    this._titleEn = bj.titleEn;
    this._titleRu = bj.titleRu;
    this._nameEn = bj.nameEn;
    this._nameRu = bj.nameRu;
  }

  getBoard = (language: string | 'en' | 'ru') => {
    if (language === 'en') {
      return {
        id: this._id,
        title: this._titleEn,
        name: this._nameEn
      };
    } else {
      return {
        id: this._id,
        title: this._titleRu,
        name: this._nameRu
      };
    }
  };
}
