import {DivIconOptions} from "leaflet";

export class BankMarkerDiv implements DivIconOptions {
  html?: string | HTMLElement | false | undefined;
  className?: string | undefined;
  bankId? : string | undefined
}
