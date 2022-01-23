export class BankEntity {
  public id: string;
  public _class: string;
  public lat: number;
  public lon: number;
  public name: string;
  public type: string;
  public details:  { [key: string]: string } = {};

  constructor(id: string, _class: string, lat: number, lon: number, name: string, type: string, details: {}) {
    this.id = id;
    this._class = _class;
    this.lat = lat;
    this.lon = lon;
    this.name = name;
    this.type = type;
    this.details = details;
  }
}
