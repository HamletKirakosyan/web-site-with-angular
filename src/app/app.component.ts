import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  aboutItems: string[] = ["about", "programe loyality", "price", "contact", "dostavka", "relationship"];
  menuItems: { name: string, url: string }[] = [
    { name: "stock", url: "https://www.britvology.ru/sale/" },
    { name: "gift idea", url: "https://www.britvology.ru/podarki/" },
    { name: "shaver and accessories", url: "https://www.britvology.ru/magazin/accessuary_dlya_britya/" },
    { name: "shaving cosmetics", url: "https://www.britvology.ru/magazin/kosmetika_dlya_britya/" },
    { name: "beard and mustache care", url: "https://www.britvology.ru/magazin/boroda_i_usy/" },
    { name: "face and body care", url: "https://www.britvology.ru/magazin/muzhskaya_kosmetika/" }
  ];
  middleImages: { alt:"BRITVOLOGY", image: string, url: string }[] = [
    { alt:"BRITVOLOGY", image: "	https://www.britvology.ru/upload/resize_cache/webp/iblock/27f/27ffd89c0d0a527f9a440a0749306012.webp", url: "https://www.britvology.ru/magazin/accessuary_dlya_britya/nabory_dlya_britya/bolin-webb/" },
    { alt:"BRITVOLOGY", image: "	https://www.britvology.ru/upload/resize_cache/webp/iblock/013/013d9b0d65f37b8e36c17474c0a9236a.webp", url: "https://www.britvology.ru/magazin/accessuary_dlya_britya/muehle/muehle-traditional/" },
    { alt:"BRITVOLOGY", image: "	https://www.britvology.ru/upload/resize_cache/webp/iblock/137/137cba340fc7bf669f51fe1e9d5d0c3f.webp", url: "https://www.britvology.ru/magazin/accessuary_dlya_britya/premium/" },
    { alt:"BRITVOLOGY", image: "https://www.britvology.ru/upload/resize_cache/webp/iblock/937/937cdba242d36479afde619bdab6df66.webp", url: "https://www.britvology.ru/magazin/accessuary_dlya_britya/britvy/henson-shaving/" },
    { alt:"BRITVOLOGY", image: "https://www.britvology.ru/upload/resize_cache/webp/iblock/3c5/3c5a51daa4106d7d343c03eed0ef3e5a.webp", url: "https://www.britvology.ru/magazin/kosmetika_dlya_britya/drharris/" },
    { alt:"BRITVOLOGY", image: "https://www.britvology.ru/upload/resize_cache/webp/iblock/013/013d9b0d65f37b8e36c17474c0a9236a.webp", url: "https://www.britvology.ru/magazin/accessuary_dlya_britya/britvy/rockwell/" }
  ]
}
