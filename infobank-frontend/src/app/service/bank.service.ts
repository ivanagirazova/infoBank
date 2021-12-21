import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {BankEntity} from "../models/BankEntity";

@Injectable({
  providedIn: 'root'
})
export class BankService {

  usersUrl = "http://192.168.0.17:8080/get";
  banks: BankEntity[] = [];

  constructor(private http:HttpClient) {
  }

  getBanks(showBank:boolean, showAtm: boolean, name: string, userLocation:[]): Observable<any> {
    return this.http.get(
      this.usersUrl,
      {params: {'includeBanks': showBank, 'includeAtms': showAtm, 'name': name, 'location': userLocation}}
    );
  }

  getHardCodedBanks(): BankEntity[] {
    return this.banks = [
      {
        "_id": "371129575",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "wikidata": "Q2598067",
          "operator": "Народна банка на Македонија (НРБМ)"
        },
        "lat": 41.9936657,
        "lon": 21.4428736,
        "name": "Народната Банка на Република Македонија",
        "type": "bank"
      },
      {
        "_id": "416030019",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "int_name": "Stopanska Banka",
          "name:en": "Stopanska Banka",
          "operator": "Стопанска Банка АД - Скопје"
        },
        "lat": 41.9881468,
        "lon": 21.4552843,
        "name": "Стопанска Банка",
        "type": "bank"
      },
      {
        "_id": "416030021",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "addr:housenumber": "12",
          "addr:street": "Булевар Јане Сандански"
        },
        "lat": 41.9881141,
        "lon": 21.45507,
        "name": "Охридска Банка",
        "type": "bank"
      },
      {
        "_id": "459670407",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Уни Банка"
        },
        "lat": 41.9947783,
        "lon": 21.4335756,
        "name": "Уни Банка",
        "type": "bank"
      },
      {
        "_id": "459670746",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "int_name": "Stopanska Banka",
          "name:en": "Stopanska Banka",
          "operator": "Стопанска Банка АД - Скопје"
        },
        "lat": 41.9957098,
        "lon": 21.4332758,
        "name": "Стопанска Банка",
        "type": "bank"
      },
      {
        "_id": "547985718",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "addr:housenumber": "20",
          "addr:street": "3та Македонска Бригада бр.1",
          "operator": "Тутунска Банка"
        },
        "lat": 41.9860412,
        "lon": 21.4428016,
        "name": "NLB Банка",
        "type": "bank"
      },
      {
        "_id": "552769113",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 42.0311804,
        "lon": 21.4447847,
        "name": "Halkbank",
        "type": "bank"
      },
      {
        "_id": "1307183572",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "atm": "yes",
          "operator": "НЛБ - Тутунска Банка"
        },
        "lat": 42.005028,
        "lon": 21.3833142,
        "name": "NLB Банка",
        "type": "bank"
      },
      {
        "_id": "1475404508",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "atm": "yes"
        },
        "lat": 42.0073792,
        "lon": 21.3682515,
        "name": "Стопанска Банка",
        "type": "bank"
      },
      {
        "_id": "1475404523",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "atm": "yes"
        },
        "lat": 42.0063452,
        "lon": 21.3681939,
        "name": "NLB Банка",
        "type": "bank"
      },
      {
        "_id": "1475404526",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "atm": "yes"
        },
        "lat": 42.0075172,
        "lon": 21.3683899,
        "name": "Комерцијална Банка",
        "type": "bank"
      },
      {
        "_id": "1475404533",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "atm": "yes"
        },
        "lat": 42.0069351,
        "lon": 21.3650349,
        "name": "Комерцијална Банка",
        "type": "bank"
      },
      {
        "_id": "1615760049",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "name:en": "NLB Tutunska Banka"
        },
        "lat": 42.0036469,
        "lon": 21.3970663,
        "name": "NLB Банка",
        "type": "bank"
      },
      {
        "_id": "1618605216",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "name:en": "Zirat Bank",
          "addr:street": "Јордан Мијалков",
          "brand": "Halkbank"
        },
        "lat": 41.9916695,
        "lon": 21.4244409,
        "name": "Зират Банка",
        "type": "bank"
      },
      {
        "_id": "1747986348",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Стопанска Банка"
        },
        "lat": 41.9876902,
        "lon": 21.4327574,
        "name": "Стопанска Банка",
        "type": "bank"
      },
      {
        "_id": "1851476148",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9941727,
        "lon": 21.4425119,
        "name": "Централен Регистер на РМ",
        "type": "bank"
      },
      {
        "_id": "1860283429",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "int_name": "Stopanska Banka",
          "name:en": "Stopanska banka",
          "atm": "yes",
          "operator": "Стопанска банка АД - Скопје"
        },
        "lat": 42.0029983,
        "lon": 21.4641508,
        "name": "Стопанска Банка",
        "type": "bank"
      },
      {
        "_id": "2276499906",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "int_name": "Komercijalna Banka",
          "name:en": "Komercijalna Banka",
          "atm": "yes",
          "operator": "Комерцијална Банка АД Скопје"
        },
        "lat": 41.9947725,
        "lon": 21.4100251,
        "name": "Комерцијална Банка",
        "type": "bank"
      },
      {
        "_id": "2335276894",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "website": "https://sparkasse.mk",
          "addr:postcode": "1000",
          "name:mk": "Шпаркасе Банка-Ѓорче Петров",
          "int_name": "Šparkase",
          "phone": "+389 2 2050514",
          "opening_hours": "Mo-Fr 08:30-16:30",
          "name:en": "Sparkasse"
        },
        "lat": 42.0064278,
        "lon": 21.357664,
        "name": "Шпаркасе Банка",
        "type": "bank"
      },
      {
        "_id": "2335276905",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "addr:housenumber": "1",
          "website": "http://www.ob.com.mk",
          "phone": "+389 02 2050260",
          "opening_hours": "Mo-Fr 08:30-16:30",
          "addr:street": "Мице Козар",
          "addr:postcode": "1000"
        },
        "lat": 42.0065755,
        "lon": 21.3596919,
        "name": "Шпаркасе Банка",
        "type": "bank"
      },
      {
        "_id": "2335304828",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "addr:country": "MK",
          "addr:city:en": "Skopje",
          "addr:postcode": "1000",
          "operator": "Шпаркасе Банка Македонија АД Скопје",
          "addr:city": "Cкoпje",
          "int_name": "Šparkase",
          "name:en": "Sparkasse",
          "atm": "yes"
        },
        "lat": 41.9818419,
        "lon": 21.4400132,
        "name": "Шпаркасе Банка",
        "type": "bank"
      },
      {
        "_id": "2335304834",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "addr:country": "MK",
          "addr:city:en": "Skopje",
          "addr:postcode": "1000",
          "operator": "Шпаркасе Банка Македонија АД Скопје",
          "addr:city": "Cкoпje",
          "int_name": "Šparkase",
          "name:en": "Sparkasse",
          "addr:street": "Булевар Цветан Димов"
        },
        "lat": 42.0136832,
        "lon": 21.4452794,
        "name": "Шпаркасе Банка",
        "type": "bank"
      },
      {
        "_id": "2365723919",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9967666,
        "lon": 21.4998637,
        "name": "Комерцијална Банка",
        "type": "bank"
      },
      {
        "_id": "2882119234",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.980457,
        "lon": 21.4723253,
        "name": "Комерцијална Банка",
        "type": "bank"
      },
      {
        "_id": "2884502160",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9810724,
        "lon": 21.4752946,
        "name": "Стопанска Банка",
        "type": "bank"
      },
      {
        "_id": "2884502162",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.982843,
        "lon": 21.4724684,
        "name": "Централна Кооперативна Банка",
        "type": "bank"
      },
      {
        "_id": "2884502163",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9741156,
        "lon": 21.4724627,
        "name": "Комерцијална Банка",
        "type": "bank"
      },
      {
        "_id": "2884502164",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9847822,
        "lon": 21.4681788,
        "name": "Прокредит Банка",
        "type": "bank"
      },
      {
        "_id": "2884502165",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9862724,
        "lon": 21.4637512,
        "name": "ТТК Банка",
        "type": "bank"
      },
      {
        "_id": "2884502166",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9867167,
        "lon": 21.4629871,
        "name": "Стопанска Банка",
        "type": "bank"
      },
      {
        "_id": "2884502167",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "atm": "yes"
        },
        "lat": 41.9894468,
        "lon": 21.4600367,
        "name": "NLB Банка",
        "type": "bank"
      },
      {
        "_id": "2884502183",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "atm": "yes"
        },
        "lat": 41.9892067,
        "lon": 21.4502163,
        "name": "Комерцијална Банка",
        "type": "bank"
      },
      {
        "_id": "2886274890",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "atm": "yes"
        },
        "lat": 41.9846465,
        "lon": 21.4390666,
        "name": "NLB Банка",
        "type": "bank"
      },
      {
        "_id": "2887575838",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9870236,
        "lon": 21.4624841,
        "name": "Охридска Банка",
        "type": "bank"
      },
      {
        "_id": "3021908912",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "int_name": "Stopanska Banka",
          "name:en": "Stopanska Banka",
          "atm": "yes",
          "operator": "Стопанска Банка АД - Скопје"
        },
        "lat": 42.0038557,
        "lon": 21.3863849,
        "name": "Стопанска Банка",
        "type": "bank"
      },
      {
        "_id": "3026549094",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "int_name": "Komercijalna Banka",
          "name:en": "Komercijalna Banka",
          "atm": "yes",
          "operator": "Комерцијална Банка АД Скопје"
        },
        "lat": 42.0028422,
        "lon": 21.4011278,
        "name": "Комерцијална Банка",
        "type": "bank"
      },
      {
        "_id": "3101725381",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9940162,
        "lon": 21.4423152,
        "name": "Стопанска Банка",
        "type": "bank"
      },
      {
        "_id": "3341289787",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "int_name": "Komercijalna Banka",
          "name:en": "Komercijalna Bank",
          "addr:street": "Македонија",
          "atm": "yes",
          "addr:postcode": "1000",
          "addr:city": "Скопје"
        },
        "lat": 41.9928192,
        "lon": 21.4299102,
        "name": "Комерцијална Банка",
        "type": "bank"
      },
      {
        "_id": "3787600182",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9809376,
        "lon": 21.4405306,
        "name": "Стопанска Банка",
        "type": "bank"
      },
      {
        "_id": "4012028345",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "int_name": "Stopanska Banka",
          "name:en": "Stopanska Banka",
          "atm": "yes",
          "operator": "Стопанска Банка АД - Скопје"
        },
        "lat": 41.998869,
        "lon": 21.4205887,
        "name": "Стопанска Банка",
        "type": "bank"
      },
      {
        "_id": "4012028346",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "opening_hours": "Mo-Fr 07:30-18:00; Sa 08:00-13:00",
          "name:en": "Komercijalna Bank",
          "atm": "yes",
          "operator": "Комерцијална Банка АД Скопје"
        },
        "lat": 41.9987428,
        "lon": 21.4214196,
        "name": "Комерцијална Банка",
        "type": "bank"
      },
      {
        "_id": "4059895435",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9937486,
        "lon": 21.4177179,
        "name": "Шпаркасе Банка",
        "type": "bank"
      },
      {
        "_id": "4059895436",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9938028,
        "lon": 21.4172424,
        "name": "Охридска Банка",
        "type": "bank"
      },
      {
        "_id": "4144098451",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "wheelchair": "yes",
          "int_name": "Komercijalna Banka",
          "name:en": "Komercijalna Banka",
          "atm": "yes",
          "operator": "Комерцијална Банка АД Скопје"
        },
        "lat": 42.0046642,
        "lon": 21.3909854,
        "name": "Комерцијална Банка",
        "type": "bank"
      },
      {
        "_id": "4266034097",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9846955,
        "lon": 21.4387451,
        "name": "Комерцијална Банка",
        "type": "bank"
      },
      {
        "_id": "4448978289",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "name:mk": "Уни Банка - Кисела Вода"
        },
        "lat": 41.9833896,
        "lon": 21.4392671,
        "name": "Уни Банка",
        "type": "bank"
      },
      {
        "_id": "4459578970",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "addr:country": "MK",
          "addr:city:en": "Skopje",
          "addr:postcode": "1000",
          "addr:city": "Cкoпje",
          "addr:housenumber": "28",
          "int_name": "NLB Tutunska banka",
          "addr:street:en": "Kay 13th November",
          "addr:street": "Кеј 13 Ноември",
          "atm": "yes"
        },
        "lat": 41.9952945,
        "lon": 21.4345705,
        "name": "NLB Банка",
        "type": "bank"
      },
      {
        "_id": "4502199191",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "name:mk": "procredit"
        },
        "lat": 41.9952676,
        "lon": 21.4296796,
        "name": "Прокредит Банка",
        "type": "bank"
      },
      {
        "_id": "4573205007",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "level": "0",
          "atm": "yes"
        },
        "lat": 42.0034052,
        "lon": 21.3964504,
        "name": "Halkbank",
        "type": "bank"
      },
      {
        "_id": "4573205016",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "level": "0",
          "name:en": "Sparkasse",
          "atm": "yes"
        },
        "lat": 42.0033742,
        "lon": 21.3966968,
        "name": "Шпаркасе Банка",
        "type": "bank"
      },
      {
        "_id": "4593947189",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "name:en": "Procredit Bank",
          "name:mk": "Прокредит ванка",
          "name:sq": "Banka \"Procredit\""
        },
        "lat": 42.0072958,
        "lon": 21.3931155,
        "name": "Прокредит Банка",
        "type": "bank"
      },
      {
        "_id": "4594432367",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "int_name": "Stopanska Banka",
          "name:en": "Stopanska Banka",
          "operator": "Стопанска Банка АД - Скопје"
        },
        "lat": 41.9955887,
        "lon": 21.4336687,
        "name": "Стопанска Банка",
        "type": "bank"
      },
      {
        "_id": "4740732822",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "name:en": "Ohridska Banka",
          "name:mk": "Охридска Банка"
        },
        "lat": 42.0024666,
        "lon": 21.3975443,
        "name": "Шпаркасе Банка",
        "type": "bank"
      },
      {
        "_id": "4742916122",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "addr:housenumber": "1",
          "website": "http://www.nlb.mk",
          "phone": "+38923089090",
          "opening_hours": "Mo-Su 08:00-17:00",
          "addr:street": "Франклин Рузвелт",
          "email": "tb.kapistec@nlb.mk"
        },
        "lat": 41.9937698,
        "lon": 21.4111045,
        "name": "NLB Банка",
        "type": "bank"
      },
      {
        "_id": "5054709626",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "website": "http://www.nlbtb.com.mk/",
          "drive_through": "no",
          "atm": "yes"
        },
        "lat": 42.0035989,
        "lon": 21.5041694,
        "name": "NLB Банка",
        "type": "bank"
      },
      {
        "_id": "5131823434",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9948876,
        "lon": 21.4276102,
        "name": "ТТК Банка",
        "type": "bank"
      },
      {
        "_id": "5333318375",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "website": "http://www.unibank.com.mk/",
          "name:en": "UNIBank"
        },
        "lat": 42.0029303,
        "lon": 21.4004646,
        "name": "Уни Банка",
        "type": "bank"
      },
      {
        "_id": "5333318378",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 42.0028742,
        "lon": 21.4008798,
        "name": "ТТК Банка",
        "type": "bank"
      },
      {
        "_id": "5731830652",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9934567,
        "lon": 21.4326259,
        "name": "Halkbank",
        "type": "bank"
      },
      {
        "_id": "6054036209",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "website": "https://nlb.mk/",
          "drive_through": "no",
          "opening_hours": "Mo-Fr 08:00-17:00; Sa 09:00-13:00",
          "name:en": "NLB Bank",
          "atm": "yes",
          "operator": "НЛБ Банка АД Скопје"
        },
        "lat": 41.9963482,
        "lon": 21.4276726,
        "name": "NLB Банка",
        "type": "bank"
      },
      {
        "_id": "6054037094",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9937523,
        "lon": 21.4275923,
        "name": "Шпаркасе Банка",
        "type": "bank"
      },
      {
        "_id": "6054048502",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 42.0067272,
        "lon": 21.356997,
        "name": "Стопанска Банка",
        "type": "bank"
      },
      {
        "_id": "6054048711",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "atm": "yes"
        },
        "lat": 42.0069917,
        "lon": 21.3658492,
        "name": "Комерцијална Банка",
        "type": "bank"
      },
      {
        "_id": "6054048715",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9984708,
        "lon": 21.4225838,
        "name": "Силк Роуд Банка",
        "type": "bank"
      },
      {
        "_id": "6054048723",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "atm": "yes"
        },
        "lat": 41.9993025,
        "lon": 21.4184814,
        "name": "Шпаркасе Банка",
        "type": "bank"
      },
      {
        "_id": "6054049799",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "atm": "yes"
        },
        "lat": 42.0080679,
        "lon": 21.3687237,
        "name": "Силк Роуд Банка",
        "type": "bank"
      },
      {
        "_id": "6054050096",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9991977,
        "lon": 21.4189624,
        "name": "Halkbank",
        "type": "bank"
      },
      {
        "_id": "6137491236",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9876789,
        "lon": 21.4327865,
        "name": "Стопанска Банка",
        "type": "bank"
      },
      {
        "_id": "6275107313",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "addr:street": "Булевар Гоце Делчев"
        },
        "lat": 41.999175,
        "lon": 21.4391635,
        "name": "Western Union",
        "type": "bank"
      },
      {
        "_id": "6277304326",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "addr:street": "Булевар Христијан Тодоровски Карпош",
          "atm": "yes"
        },
        "lat": 42.0142495,
        "lon": 21.4457121,
        "name": "Halkbank",
        "type": "bank"
      },
      {
        "_id": "6279058422",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "atm": "yes"
        },
        "lat": 42.0304003,
        "lon": 21.4447546,
        "name": "NLB Банка",
        "type": "bank"
      },
      {
        "_id": "6279225885",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "addr:housenumber": "27",
          "addr:street": "Булевар Ѓорче Петров"
        },
        "lat": 42.0065882,
        "lon": 21.3590935,
        "name": "Halkbank",
        "type": "bank"
      },
      {
        "_id": "6281492651",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "addr:street": "Булевар Крсте Мисирков"
        },
        "lat": 42.0022117,
        "lon": 21.4401439,
        "name": "Стопанска Банка",
        "type": "bank"
      },
      {
        "_id": "6281672845",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 42.0037315,
        "lon": 21.3318349,
        "name": "NLB Банка",
        "type": "bank"
      },
      {
        "_id": "6281993277",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "addr:street": "Џон Кенеди"
        },
        "lat": 42.0134893,
        "lon": 21.4426424,
        "name": "Охридска Банка",
        "type": "bank"
      },
      {
        "_id": "6287292136",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "name:en": "Sparkasse",
          "addr:street": "Булевар Јане Сандански",
          "atm": "yes"
        },
        "lat": 41.9837535,
        "lon": 21.4701282,
        "name": "Шпаркасе Банка",
        "type": "bank"
      },
      {
        "_id": "6812641691",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9995612,
        "lon": 21.4260008,
        "name": "NLB Банка",
        "type": "bank"
      },
      {
        "_id": "6814246720",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9994143,
        "lon": 21.4373437,
        "name": "NLB Банка",
        "type": "bank"
      },
      {
        "_id": "6814246721",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9994185,
        "lon": 21.4374802,
        "name": "Halkbank",
        "type": "bank"
      },
      {
        "_id": "6815559785",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9995003,
        "lon": 21.4175894,
        "name": "NLB Банка",
        "type": "bank"
      },
      {
        "_id": "6815931290",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9951941,
        "lon": 21.4330782,
        "name": "Стопанска Банка",
        "type": "bank"
      },
      {
        "_id": "6821158391",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.992781,
        "lon": 21.4254378,
        "name": "NLB Банка",
        "type": "bank"
      },
      {
        "_id": "6821158785",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9940018,
        "lon": 21.4310477,
        "name": "Комерцијална Банка",
        "type": "bank"
      },
      {
        "_id": "6913357685",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 42.024698,
        "lon": 21.4294687,
        "name": "Halkbank",
        "type": "bank"
      },
      {
        "_id": "6968735785",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "name:en": "Unibank ATM"
        },
        "lat": 41.9754854,
        "lon": 21.4386821,
        "name": "Уни Банка",
        "type": "bank"
      },
      {
        "_id": "7133065641",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 42.006762,
        "lon": 21.3575237,
        "name": "Уни Банка",
        "type": "bank"
      },
      {
        "_id": "7136180068",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9838482,
        "lon": 21.4699551,
        "name": "Охридска Банка",
        "type": "bank"
      },
      {
        "_id": "7136914206",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "name:en": "Sparkasse"
        },
        "lat": 42.0026088,
        "lon": 21.4616104,
        "name": "Шпаркасе Банка",
        "type": "bank"
      },
      {
        "_id": "7136914207",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "name:en": "Silk Road Bank"
        },
        "lat": 42.0026806,
        "lon": 21.4616919,
        "name": "Силк Роуд Банка",
        "type": "bank"
      },
      {
        "_id": "7876582715",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9839565,
        "lon": 21.4390846,
        "name": "Силк Роуд Банка",
        "type": "bank"
      },
      {
        "_id": "9200216063",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9903066,
        "lon": 21.4317942,
        "name": "Комерцијална Банка",
        "type": "bank"
      },
      {
        "_id": "9200216160",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9978983,
        "lon": 21.4293563,
        "name": "Шпаркасе Банка",
        "type": "bank"
      },
      {
        "_id": "9200216441",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9903752,
        "lon": 21.4316452,
        "name": "Стопанска Банка",
        "type": "bank"
      },
      {
        "_id": "9200216722",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9899741,
        "lon": 21.4352972,
        "name": "Шпаркасе Банка",
        "type": "bank"
      },
      {
        "_id": "9233459229",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "drive_through": "no",
          "name:en": "Stopanska Banka - STB",
          "atm": "yes"
        },
        "lat": 42.0064539,
        "lon": 21.502468,
        "name": "Стопанска Банка",
        "type": "bank"
      },
      {
        "_id": "9249325904",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9866482,
        "lon": 21.46331,
        "name": "NLB Банка",
        "type": "bank"
      },
      {
        "_id": "9249326272",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9866114,
        "lon": 21.4633707,
        "name": "Комерцијална Банка",
        "type": "bank"
      },
      {
        "_id": "310348494",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "addr:housenumber": "70b",
          "int_name": "Stopanska Banka",
          "check_date": "2021-05-25",
          "name:en": "Stopanska Banka",
          "addr:street": "Булевар Партизански Одреди",
          "operator": "Стопанска Банка АД - Скопје"
        },
        "lat": 42.0036936,
        "lon": 21.3946845,
        "name": "Стопанска Банка",
        "type": "atm"
      },
      {
        "_id": "386744780",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "name:en": "Sparkasse",
          "operator": "Шпаркасе"
        },
        "lat": 41.9921343,
        "lon": 21.4266335,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "416411687",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Уни Банка"
        },
        "lat": 42.0079825,
        "lon": 21.3842855,
        "name": "Уни Банка",
        "type": "atm"
      },
      {
        "_id": "416411754",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Уни Банка"
        },
        "lat": 42.0043009,
        "lon": 21.3847909,
        "name": "Уни Банка",
        "type": "atm"
      },
      {
        "_id": "416411856",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "check_date": "2021-03-03",
          "operator": "Уни Банка"
        },
        "lat": 42.0058046,
        "lon": 21.4171593,
        "name": "Уни Банка",
        "type": "atm"
      },
      {
        "_id": "443017395",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Комерцијална Банка"
        },
        "lat": 41.9967167,
        "lon": 21.4998343,
        "name": "Комерцијална Банка",
        "type": "atm"
      },
      {
        "_id": "1615856817",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "addr:country": "MK",
          "addr:city:en": "Skopje",
          "addr:postcode": "1000",
          "operator": "Шпаркасе Банка Македонија АД Скопје",
          "addr:city": "Cкoпje",
          "int_name": "Šparkase",
          "name:en": "Sparkasse"
        },
        "lat": 42.0031153,
        "lon": 21.3989023,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "2335276909",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "addr:country": "MK",
          "addr:city:en": "Skopje",
          "addr:postcode": "1000",
          "operator": "Шпаркасе Банка Македонија АД Скопје",
          "addr:city": "Cкoпje",
          "int_name": "Šparkase",
          "name:en": "Sparkasse"
        },
        "lat": 41.9937422,
        "lon": 21.417619,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "2335276914",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "int_name": "Šparkase",
          "name:en": "Sparkasse"
        },
        "lat": 42.0064284,
        "lon": 21.3577339,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "2335304829",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "addr:country": "MK",
          "addr:city:en": "Skopje",
          "addr:postcode": "1000",
          "operator": "Шпаркасе Банка Македонија АД Скопје",
          "addr:city": "Cкoпje",
          "int_name": "Šparkasse",
          "name:en": "Sparkasse",
          "addr:street": "Булевар Цветан Димов"
        },
        "lat": 42.0136404,
        "lon": 21.4452888,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "2520984629",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "int_name": "Stopanska Banka",
          "drive_through": "no",
          "name:en": "Stopanska Banka",
          "operator": "Стопанска Банка АД - Скопје"
        },
        "lat": 41.9976152,
        "lon": 21.4263503,
        "name": "Стопанска Банка",
        "type": "atm"
      },
      {
        "_id": "2884502161",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9811869,
        "lon": 21.4752453,
        "name": "Стопанска Банка",
        "type": "atm"
      },
      {
        "_id": "2884502184",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Halkbank"
        },
        "lat": 41.9861457,
        "lon": 21.4669741,
        "name": "Halkbank",
        "type": "atm"
      },
      {
        "_id": "3026549093",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "int_name": "Stopanska Banka",
          "check_date": "2021-05-25",
          "name:en": "Stopanska Banka",
          "operator": "Стопанска Банка АД - Скопје"
        },
        "lat": 42.0030413,
        "lon": 21.4000421,
        "name": "Стопанска Банка",
        "type": "atm"
      },
      {
        "_id": "3099334942",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9909328,
        "lon": 21.4455925,
        "name": "Halkbank",
        "type": "atm"
      },
      {
        "_id": "3099553254",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "УниБанка",
          "operator:en": "UniBanka"
        },
        "lat": 41.9612077,
        "lon": 21.6274288,
        "name": "Уни Банка",
        "type": "atm"
      },
      {
        "_id": "3100116013",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "opening_hours": "24/7",
          "operator": "Охридска банка",
          "operator:en": "Ohridska banka"
        },
        "lat": 41.9611559,
        "lon": 21.6274421,
        "name": "Охридска Банка",
        "type": "atm"
      },
      {
        "_id": "3101725359",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Шпаркасе"
        },
        "lat": 41.9989126,
        "lon": 21.435174,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "3101725378",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
        },
        "lat": 41.9993417,
        "lon": 21.4357789,
        "name": "Прокредит Банка",
        "type": "atm"
      },
      {
        "_id": "3101725382",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "name:en": "Uni"
        },
        "lat": 41.9937271,
        "lon": 21.4425083,
        "name": "Уни Банка",
        "type": "atm"
      },
      {
        "_id": "3103985010",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "addr:street:en": "Kay 13th November",
          "addr:country": "MK",
          "addr:street": "Кеј 13 Ноември",
          "addr:city:en": "Skopje",
          "addr:postcode": "1000",
          "addr:city": "Cкoпje"
        },
        "lat": 41.9953834,
        "lon": 21.4345612,
        "name": "NLB Банка",
        "type": "atm"
      },
      {
        "_id": "3497498228",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "opening_hours": "24/7",
          "name:en": "Unibank",
          "brand": "УНИБанка",
          "operator": "УНИБанка"
        },
        "lat": 42.0139201,
        "lon": 21.4062413,
        "name": "Уни Банка",
        "type": "atm"
      },
      {
        "_id": "3497498229",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "int_name": "Komercijalna Banka",
          "opening_hours": "24/7",
          "name:en": "Komercijalna Banka",
          "brand": "Комерцијална банка",
          "operator": "Комерцијална Банка АД Скопје"
        },
        "lat": 42.0139259,
        "lon": 21.4061361,
        "name": "Комерцијална Банка",
        "type": "atm"
      },
      {
        "_id": "3633126812",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "int_name": "Stopanska Banka",
          "opening_hours": "24/7",
          "name:en": "Stopanska Banka",
          "operator": "Стопанска Банка АД - Скопје"
        },
        "lat": 41.9944722,
        "lon": 21.3959313,
        "name": "Стопанска Банка",
        "type": "atm"
      },
      {
        "_id": "3633126813",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "int_name": "Stopanska Banka",
          "check_date": "2021-05-26",
          "opening_hours": "24/7",
          "name:en": "Stopanska Banka",
          "operator": "Стопанска Банка АД - Скопје"
        },
        "lat": 41.996706,
        "lon": 21.4050875,
        "name": "Стопанска Банка",
        "type": "atm"
      },
      {
        "_id": "3634182298",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "int_name": "Komercijalna Banka",
          "opening_hours": "24/7",
          "name:en": "Komercijalna Banka",
          "operator": "Комерцијална Банка АД Скопје"
        },
        "lat": 42.0005737,
        "lon": 21.3916984,
        "name": "Комерцијална Банка",
        "type": "atm"
      },
      {
        "_id": "3634182299",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "int_name": "Komercijalna Banka",
          "name:en": "Komercijalna Banka",
          "operator": "Комерцијална Банка АД Скопје"
        },
        "lat": 42.0010817,
        "lon": 21.3900585,
        "name": "Комерцијална Банка",
        "type": "atm"
      },
      {
        "_id": "3634182400",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "int_name": "NLB Tutunska Banka",
          "name:en": "NLB Tutunska Banka",
          "operator": "НЛБ - Тутунска Банка"
        },
        "lat": 42.001081,
        "lon": 21.3900911,
        "name": "NLB Банка",
        "type": "atm"
      },
      {
        "_id": "3635130200",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "int_name": "Stopanska Banka",
          "name:en": "Stopanska Banka",
          "operator": "Стопанска Банка АД - Скопје"
        },
        "lat": 42.0010181,
        "lon": 21.3900584,
        "name": "Стопанска Банка",
        "type": "atm"
      },
      {
        "_id": "3637351595",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "int_name": "NLB Tutunska Banka",
          "name:en": "NLB Tutunska Banka",
          "operator": "НЛБ - Тутунска Банка"
        },
        "lat": 41.9944772,
        "lon": 21.3959333,
        "name": "NLB Банка",
        "type": "atm"
      },
      {
        "_id": "3673492606",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "addr:country": "MK",
          "addr:city:en": "Skopje",
          "addr:postcode": "1000",
          "operator": "Шпаркасе Банка Македонија АД Скопје",
          "addr:city": "Cкoпje",
          "addr:housenumber": "18",
          "int_name": "Šparkase",
          "name:en": "Sparkasse",
          "addr:street": "Никола Вапцаров"
        },
        "lat": 41.9951423,
        "lon": 21.4292834,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "3673514709",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "addr:country": "MK",
          "name:en": "Sparkasse",
          "addr:city:en": "Skopje",
          "addr:postcode": "1000",
          "operator": "Шпаркасе Банка Македонија АД Скопје",
          "addr:city": "Cкoпje"
        },
        "lat": 41.9757707,
        "lon": 21.443976,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "3673575643",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "level": "1",
          "check_date": "2021-06-09",
          "name:en": "Sparkasse",
          "operator": "Шпаркасе Банка Македонија АД Скопје"
        },
        "lat": 42.0045813,
        "lon": 21.3925292,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "3674607001",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "addr:country": "MK",
          "name:en": "Sparkasse",
          "addr:city:en": "Skopje",
          "addr:postcode": "1000",
          "operator": "Шпаркасе Банка Македонија АД Скопје",
          "addr:city": "Cкoпje"
        },
        "lat": 41.9849643,
        "lon": 21.4658037,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "3787600183",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Stopanska Banka"
        },
        "lat": 41.9809158,
        "lon": 21.4405696,
        "name": "Стопанска Банка",
        "type": "atm"
      },
      {
        "_id": "3787622358",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Sparkasse"
        },
        "lat": 41.981848,
        "lon": 21.4400507,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "4059895433",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Охридска Банка"
        },
        "lat": 41.9938379,
        "lon": 21.4171609,
        "name": "Охридска Банка",
        "type": "atm"
      },
      {
        "_id": "4149490303",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "opening_hours": "24/7",
          "brand": "НЛБ - Тутунска Банка",
          "operator": "НЛБ - Тутунска Банка"
        },
        "lat": 41.9983327,
        "lon": 21.3924412,
        "name": "NLB Банка",
        "type": "atm"
      },
      {
        "_id": "4169882189",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "name:en": "Sparkasse",
          "addr:street": "Македонија",
          "operator": "Шпаркасе"
        },
        "lat": 41.9920274,
        "lon": 21.4295739,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "4169893239",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "addr:housenumber": "53",
          "name:en": "Sparkasse",
          "addr:street": "Козле",
          "operator": "Шпаркасе"
        },
        "lat": 41.9939123,
        "lon": 21.4009084,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "4225448690",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "wheelchair": "yes",
          "opening_hours": "24/7",
          "brand": "NLB Tutunska Banka",
          "operator": "NLB Tutunska Banka"
        },
        "lat": 42.015202,
        "lon": 21.399685,
        "name": "NLB Банка",
        "type": "atm"
      },
      {
        "_id": "4234366920",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "wheelchair": "yes",
          "opening_hours": "24/7",
          "brand": "Стопанска Банка АД - Битола",
          "operator": "Стопанска Банка АД - Битола"
        },
        "lat": 42.0137911,
        "lon": 21.4039823,
        "name": "Стопанска Банка",
        "type": "atm"
      },
      {
        "_id": "4594432368",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "int_name": "Stopanska Banka",
          "check_date": "2021-03-04",
          "name:en": "Stopanska Banka",
          "operator": "Стопанска Банка АД - Скопје"
        },
        "lat": 41.9957551,
        "lon": 21.4333409,
        "name": "Стопанска Банка",
        "type": "atm"
      },
      {
        "_id": "4938101522",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "addr:street": "Булевар Кочо Рацин",
          "operator": "Шпаркасе"
        },
        "lat": 41.9917059,
        "lon": 21.4378292,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "5798860601",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "НЛБ Банка"
        },
        "lat": 41.939374,
        "lon": 21.516183,
        "name": "NLB Банка",
        "type": "atm"
      },
      {
        "_id": "6030006585",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Halkbank"
        },
        "lat": 41.9974347,
        "lon": 21.4344946,
        "name": "Halkbank",
        "type": "atm"
      },
      {
        "_id": "6030006586",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Охридска Банка"
        },
        "lat": 41.9952698,
        "lon": 21.4328457,
        "name": "Охридска Банка",
        "type": "atm"
      },
      {
        "_id": "6054036214",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Охридска Банка"
        },
        "lat": 41.9994044,
        "lon": 21.4200771,
        "name": "Охридска Банка",
        "type": "atm"
      },
      {
        "_id": "6277259440",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "fixme": "addr:street"
        },
        "lat": 41.9944767,
        "lon": 21.5758838,
        "name": "Halkbank",
        "type": "atm"
      },
      {
        "_id": "6788959087",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "opening_hours": "24/7",
          "operator": "Komercbank Skopje"
        },
        "lat": 41.9898922,
        "lon": 21.5874012,
        "name": "Комерцијална Банка",
        "type": "atm"
      },
      {
        "_id": "7133065638",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Охридска Банка"
        },
        "lat": 42.0065804,
        "lon": 21.3597505,
        "name": "Охридска Банка",
        "type": "atm"
      },
      {
        "_id": "7133065639",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Стопанска Банка"
        },
        "lat": 42.0067318,
        "lon": 21.3570683,
        "name": "Стопанска Банка",
        "type": "atm"
      },
      {
        "_id": "7133065640",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Халк Банка"
        },
        "lat": 42.0065931,
        "lon": 21.359169,
        "name": "Halkbank",
        "type": "atm"
      },
      {
        "_id": "7133065642",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Уни Банка"
        },
        "lat": 42.0067621,
        "lon": 21.3575725,
        "name": "Уни Банка",
        "type": "atm"
      },
      {
        "_id": "7133424007",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Шпаркасе"
        },
        "lat": 41.9972771,
        "lon": 21.4087112,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "7133436089",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Шпаркасе"
        },
        "lat": 41.9992882,
        "lon": 21.4185028,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "7133438548",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Шпаркасе"
        },
        "lat": 41.9984598,
        "lon": 21.4252244,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "7133445813",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Шпаркасе"
        },
        "lat": 41.9970916,
        "lon": 21.4297565,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "7133445908",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Шпаркасе"
        },
        "lat": 41.9952018,
        "lon": 21.4323164,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "7136180065",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Шпаркасе"
        },
        "lat": 41.9837158,
        "lon": 21.4701949,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "7136180066",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Охридска банка"
        },
        "lat": 41.9838577,
        "lon": 21.4699015,
        "name": "Охридска Банка",
        "type": "atm"
      },
      {
        "_id": "7136505913",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Шпаркасе",
          "operator:en": "Sparkasse"
        },
        "lat": 42.0033653,
        "lon": 21.3967495,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "7136914205",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Шпаркасе",
          "operator:en": "Sparkasse"
        },
        "lat": 42.0025929,
        "lon": 21.4616683,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "7136914208",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Силк Роуд Банка",
          "operator:en": "Silk Road Bank"
        },
        "lat": 42.0026662,
        "lon": 21.4617348,
        "name": "Силк Роуд Банка",
        "type": "atm"
      },
      {
        "_id": "7136925220",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Шпаркасе",
          "operator:en": "Sparkasse"
        },
        "lat": 41.9610535,
        "lon": 21.6274677,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "7136947040",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Шпаркасе",
          "operator:en": "Sparkasse"
        },
        "lat": 42.0057143,
        "lon": 21.3119917,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "7136956046",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Шпаркасе",
          "operator:en": "Sparkasse"
        },
        "lat": 41.9844079,
        "lon": 21.4837986,
        "name": "Шпаркасе Банка",
        "type": "atm"
      },
      {
        "_id": "7136963072",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Халкбанк",
          "operator:en": "Halkbank"
        },
        "lat": 41.9604729,
        "lon": 21.6277549,
        "name": "Halkbank",
        "type": "atm"
      },
      {
        "_id": "7137056772",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Охридска Банка"
        },
        "lat": 42.0038552,
        "lon": 21.4618738,
        "name": "Охридска Банка",
        "type": "atm"
      },
      {
        "_id": "7137063836",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Охридска Банка"
        },
        "lat": 42.0134867,
        "lon": 21.442704,
        "name": "Охридска Банка",
        "type": "atm"
      },
      {
        "_id": "7137078903",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Охридска Банка"
        },
        "lat": 41.9937895,
        "lon": 21.427607,
        "name": "Охридска Банка",
        "type": "atm"
      },
      {
        "_id": "7137091823",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Охридкса Банка"
        },
        "lat": 42.0024787,
        "lon": 21.3974984,
        "name": "Охридска Банка",
        "type": "atm"
      },
      {
        "_id": "7137106710",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Охридска Банка"
        },
        "lat": 41.9916024,
        "lon": 21.4341214,
        "name": "Охридска Банка",
        "type": "atm"
      },
      {
        "_id": "7137143985",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Охридска Банка"
        },
        "lat": 41.988115,
        "lon": 21.4550178,
        "name": "Охридска Банка",
        "type": "atm"
      },
      {
        "_id": "7138812609",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Охридска Банка"
        },
        "lat": 41.9941588,
        "lon": 21.430463,
        "name": "Охридска Банка",
        "type": "atm"
      },
      {
        "_id": "7138828587",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Охридска Банка"
        },
        "lat": 41.9844901,
        "lon": 21.4838556,
        "name": "Охридска Банка",
        "type": "atm"
      },
      {
        "_id": "7138849110",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Охридска Банка"
        },
        "lat": 41.995781,
        "lon": 21.5008435,
        "name": "Охридска Банка",
        "type": "atm"
      },
      {
        "_id": "7138855081",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Охридска Банка"
        },
        "lat": 41.9928708,
        "lon": 21.4414426,
        "name": "Охридска Банка",
        "type": "atm"
      },
      {
        "_id": "7138883012",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Охридска Банка"
        },
        "lat": 41.9771994,
        "lon": 21.4438029,
        "name": "Охридска Банка",
        "type": "atm"
      },
      {
        "_id": "7138995761",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Охридска Банка"
        },
        "lat": 42.0045231,
        "lon": 21.3925052,
        "name": "Охридска Банка",
        "type": "atm"
      },
      {
        "_id": "7139002051",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Охридска Банка"
        },
        "lat": 41.9941475,
        "lon": 21.5432393,
        "name": "Охридска Банка",
        "type": "atm"
      },
      {
        "_id": "7139048848",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Охридска Банка"
        },
        "lat": 41.9392781,
        "lon": 21.5159734,
        "name": "Охридска Банка",
        "type": "atm"
      },
      {
        "_id": "7139048849",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Комерцијална банка"
        },
        "lat": 41.9391212,
        "lon": 21.5156427,
        "name": "Комерцијална Банка",
        "type": "atm"
      },
      {
        "_id": "7139054635",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Охридска Банка"
        },
        "lat": 42.0028088,
        "lon": 21.4079598,
        "name": "Охридска Банка",
        "type": "atm"
      },
      {
        "_id": "7139055367",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Охридска Банка"
        },
        "lat": 42.0072387,
        "lon": 21.3745188,
        "name": "Охридска Банка",
        "type": "atm"
      },
      {
        "_id": "8187485902",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Охридска Банка"
        },
        "lat": 41.9977389,
        "lon": 21.4293567,
        "name": "Охридска Банка",
        "type": "atm"
      },
      {
        "_id": "9249273476",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Stopanska Banka"
        },
        "lat": 41.9857533,
        "lon": 21.4665047,
        "name": "Стопанска Банка",
        "type": "atm"
      },
      {
        "_id": "9249308305",
        "_class": "mk.finki.ukim.infobank.Model.BankEntity",
        "details": {
          "operator": "Sparkasse"
        },
        "lat": 41.9856903,
        "lon": 21.466611,
        "name": "Шпаркасе Банка",
        "type": "atm"
      }
    ]
  }

  getOperators(): Observable<any> {
    return this.http.get(this.usersUrl+"/operators");
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
