export interface Event {
  id: number,
  title: string,
  description: string,
  date: Date
}

export interface EventJson {
  id: number,

  titleEn: string,
  titleRu: string,

  descriptionEn: string,
  descriptionRu: string,

  date: number; // EPOCH number
}

export class EventClass {
  private _id: number;

  private _titleEn: string;
  private _titleRu: string;

  private _descriptionEn: string;
  private _descriptionRu: string;

  private _date: number; // EPOCH number

  constructor(ej: EventJson) {
    this._id = ej.id;
    this._titleEn = ej.titleEn;
    this._titleRu = ej.titleRu;
    this._descriptionEn = ej.descriptionEn;
    this._descriptionRu = ej.descriptionRu;
    this._date = ej.date;
  }

  getEvent = (language: string | 'en' | 'ru'): Event => {
    if (language === 'en') {
      return {
        id: this._id,
        title: this._titleEn,
        description: this._descriptionEn,
        date: new Date(this._date)
      };
    } else {
      return {
        id: this._id,
        title: this._titleRu,
        description: this._descriptionRu,
        date: new Date(this._date)
      };
    }
  };
}
