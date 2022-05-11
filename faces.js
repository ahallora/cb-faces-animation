const facesRaw = [
  {
    name: "Niels Martin Brochner",
    src: "images/Niels Martin Brochner.png",
  },
  {
    name: "Jarek Owczarek",
    src: "images/Jarek Owczarek.png",
  },
  {
    name: "Viktor Heide",
    src: "images/Viktor Heide.png",
  },
  {
    name: "Yoav Susz",
    src: "images/Yoav Susz.png",
  },
  {
    name: "Ross Roberts",
    src: "images/Ross Roberts.png",
  },
  {
    name: "Alexander Irschenberger",
    src: "images/Alexander Irschenberger.png",
  },
  {
    name: "Bogdan Vuckovic",
    src: "images/Bogdan Vuckovic.png",
  },
  {
    name: "Kristeen Martin",
    src: "images/Kristeen Martin.png",
  },
  {
    name: "Lukas Lukosevicius",
    src: "images/Lukas Lukosevicius.png",
  },
  {
    name: "Bryan Seno",
    src: "images/Bryan Seno.png",
  },
  {
    name: "Lindsay C. Angeles",
    src: "images/Lindsay C. Angeles.png",
  },
  {
    name: "Sophie Valerie Manga",
    src: "images/Sophie Valerie Manga.png",
  },
  {
    name: "Sean N. Jones",
    src: "images/Sean N. Jones.png",
  },
  {
    name: "Carl Weitling",
    src: "images/Carl Weitling.png",
  },
  {
    name: "Mikkel Boris",
    src: "images/Mikkel Boris.png",
  },
  {
    name: "Marcin Michalak",
    src: "images/Marcin Michalak.png",
  },
  {
    name: "Stephanie Sanders",
    src: "images/Stephanie Sanders.png",
  },
  {
    name: "Niklas Hansson",
    src: "images/Niklas Hansson.png",
  },
  {
    name: "Kelly Kirkwood",
    src: "images/Kelly Kirkwood.png",
  },
  {
    name: "Michael Edward Canty",
    src: "images/Michael Edward Canty.png",
  },
  {
    name: "Camillo Gerhardus",
    src: "images/Camillo Gerhardus.png",
  },
  {
    name: "Ryan Sutherland",
    src: "images/Ryan Sutherland.png",
  },
  {
    name: "Mădălina Verdeș",
    src: "images/Mădălina Verdeș.png",
  },
  {
    name: "Cristina Bosom",
    src: "images/Cristina Bosom.png",
  },
  {
    name: "Nikola Zemite",
    src: "images/Nikola Zemite.png",
  },
  {
    name: "Mette Richardson",
    src: "images/Mette Richardson.png",
  },
  {
    name: "Laura Balling Kiil",
    src: "images/Laura Balling Kiil.png",
  },
  {
    name: "Katja Thomsen",
    src: "images/Katja Thomsen.png",
  },
  {
    name: "Tóki Ellefsen",
    src: "images/Tóki Ellefsen.png",
  },
  {
    name: "Thor Rowland Haugaard",
    src: "images/Thor Rowland Haugaard.png",
  },
  {
    name: "Frederik Pheiffer",
    src: "images/Frederik Pheiffer.png",
  },
  {
    name: "Casper Bach",
    src: "images/Casper Bach.png",
  },
  {
    name: "Jeppe Andersen",
    src: "images/Jeppe Andersen.png",
  },
  {
    name: "Eduard Clemens Schulte",
    src: "images/Eduard Clemens Schulte.png",
  },
  {
    name: "Nikolai Skelbo Neldeberg",
    src: "images/Nikolai Skelbo Neldeberg.png",
  },
  {
    name: "Emilie Louise Spliid",
    src: "images/Emilie Louise Spliid.png",
  },
  {
    name: "Frederik Frank Johansen",
    src: "images/Frederik Frank Johansen.png",
  },
  {
    name: "Johan Mortensen",
    src: "images/Johan Mortensen.png",
  },
  {
    name: "Esa N. Jones",
    src: "images/Esa N. Jones.png",
  },
  {
    name: "Anders Spile",
    src: "images/Anders Spile.png",
  },
  {
    name: "Serhii Rosinets",
    src: "images/Serhii Rosinets.png",
  },
  {
    name: "Girish Gopaul",
    src: "images/Girish Gopaul.png",
  },
  {
    name: "Benjamin Gray",
    src: "images/Benjamin Gray.png",
  },
  {
    name: "Boris Kuznetsov",
    src: "images/Boris Kuznetsov.png",
  },
  {
    name: "Daniel Dornelles",
    src: "images/Daniel Dornelles.png",
  },
  {
    name: "Filip Domin",
    src: "images/Filip Domin.png",
  },
  {
    name: "Ammar Naqvi",
    src: "images/Ammar Naqvi.png",
  },
  {
    name: "Dorota Dziedzic",
    src: "images/Dorota Dziedzic.png",
  },
  {
    name: "Krzysztof Palucki",
    src: "images/Krzysztof Palucki.png",
  },
  {
    name: "Michał Wojcieszyk",
    src: "images/Michał Wojcieszyk.png",
  },
  {
    name: "Filip Rec",
    src: "images/Filip Rec.png",
  },
  {
    name: "Emil Rzepiel",
    src: "images/Emil Rzepiel.png",
  },
  {
    name: "Alexey Topolyanskiy",
    src: "images/Alexey Topolyanskiy.png",
  },
  {
    name: "Oliwer Iwanicki",
    src: "images/Oliwer Iwanicki.png",
  },
  {
    name: "Dániel Pataki",
    src: "images/Dániel Pataki.png",
  },
  {
    name: "Denis Peplin",
    src: "images/Denis Peplin.png",
  },
  {
    name: "Bogdana Konovalenko",
    src: "images/Bogdana Konovalenko.png",
  },
  {
    name: "Monika Majkowska",
    src: "images/Monika Majkowska.png",
  },
  {
    name: "Patryk Domałeczny",
    src: "images/Patryk Domałeczny.png",
  },
  {
    name: "Daniel Kanas",
    src: "images/Daniel Kanas.png",
  },
  {
    name: "Paulina Wilk",
    src: "images/Paulina Wilk.png",
  },
  {
    name: "Danijel Vincijanović",
    src: "images/Danijel Vincijanović.png",
  },
  {
    name: "Youenn Bouglouan",
    src: "images/Youenn Bouglouan.png",
  },
  {
    name: "Vlado Rosančić",
    src: "images/Vlado Rosančić.png",
  },
  {
    name: "Bartosz Dobry",
    src: "images/Bartosz Dobry.png",
  },
  {
    name: "Eugene Pirogov",
    src: "images/Eugene Pirogov.png",
  },
  {
    name: "Adam Rozmus",
    src: "images/Adam Rozmus.png",
  },
  {
    name: "Bartek Buk",
    src: "images/Bartek Buk.png",
  },
  {
    name: "Jakub Gajtkowski (Kuba)",
    src: "images/Jakub Gajtkowski (Kuba).png",
  },
  {
    name: "Jan Metrycki",
    src: "images/Jan Metrycki.png",
  },
  {
    name: "Alex de Sousa",
    src: "images/Alex de Sousa.png",
  },
  {
    name: "Anders Holm Jensen",
    src: "images/Anders Holm Jensen.png",
  },
  {
    name: "Wojciech Zawistowski",
    src: "images/Wojciech Zawistowski.png",
  },
  {
    name: "Daniela Muntean",
    src: "images/Daniela Muntean.png",
  },
  {
    name: "Tobias Rudolf Justesen",
    src: "images/Tobias Rudolf Justesen.png",
  },
  {
    name: "Kristina Bilkova",
    src: "images/Kristina Bilkova.png",
  },
  {
    name: "Louise Reinhardt",
    src: "images/Louise Reinhardt.png",
  },
  {
    name: "Malte Geisen",
    src: "images/Malte Geisen.png",
  },
  {
    name: "Nikol Murtingerova",
    src: "images/Nikol Murtingerova.png",
  },
  {
    name: "Andreas Ackermann",
    src: "images/Andreas Ackermann.png",
  },
  {
    name: "Su-Ann Vucko",
    src: "images/Su-Ann Vucko.png",
  },
  {
    name: "Niklas Böcking",
    src: "images/Niklas Böcking.png",
  },
  {
    name: "Josephine Lynggaard Sloth",
    src: "images/Josephine Lynggaard Sloth.png",
  },
  {
    name: "Kelly Strong",
    src: "images/Kelly Strong.png",
  },
  {
    name: "Tony Tan",
    src: "images/Tony Tan.png",
  },
  {
    name: "Kamil Jakubczyk",
    src: "images/Kamil Jakubczyk.png",
  },
  {
    name: "Elly Hsieh",
    src: "images/Elly Hsieh.png",
  },
  {
    name: "Anders Madsen",
    src: "images/Anders Madsen.png",
  },
  {
    name: "Daniel Goberitz",
    src: "images/Daniel Goberitz.png",
  },
  {
    name: "Katherine Cortés",
    src: "images/Katherine Cortés.png",
  },
  {
    name: "Laura Lobato",
    src: "images/Laura Lobato.png",
  },
  {
    name: "Ammar Naqvi",
    src: "images/Ammar Naqvi.png",
  },
  {
    name: "Markku Vuorinen",
    src: "images/Markku Vuorinen.png",
  },
  {
    name: "William Obam",
    src: "images/William Obam.png",
  },
  {
    name: "Nikita Shilenok",
    src: "images/Nikita Shilenok.png",
  },
  {
    name: "Andrei Crnkovic",
    src: "images/Andrei Crnkovic.png",
  },
  {
    name: "Claire Floquet",
    src: "images/Claire Floquet.png",
  },
  {
    name: "Kate Erwin",
    src: "images/Kate Erwin.png",
  },
  {
    name: "Nick Schaefer",
    src: "images/Nick Schaefer.png",
  },
  {
    name: "Andrew Paulo",
    src: "images/Andrew Paulo.png",
  },
  {
    name: "Demsy Iman Mustasyar",
    src: "images/Demsy Iman Mustasyar.png",
  },
  {
    name: "Luke Pachytel",
    src: "images/Luke Pachytel.png",
  },
  {
    name: "Marcelina Kopecka",
    src: "images/Marcelina Kopecka.png",
  },
];
