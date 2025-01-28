const englishNames = [
  "Al-Fatiha",
  "Al-Baqarah",
  "Al-Imran",
  "An-Nisa",
  "Al-Ma'idah",
  "Al-Anam",
  "Al-A'raf",
  "Al-Anfal",
  "At-Taubah",
  "Yunus",
  "Hud",
  "Yusuf",
  "Ar-Ra'd",
  "Ibrahim",
  "Al-Hijr",
  "An-Nahl",
  "Al-Isra",
  "Al-Kahf",
  "Maryam",
  "Ta-Ha",
  "Al-Anbiya",
  "Al-Hajj",
  "Al-Mu'minun",
  "An-Nur",
  "Al-Furqan",
  "Ash-Shu'ara",
  "An-Naml",
  "Al-Qasas",
  "Al-Ankabut",
  "Ar-Rum",
  "Luqman",
  "As-Sajdah",
  "Al-Ahzab",
  "Saba",
  "Fatir",
  "Ya-Sin",
  "As-Saffat",
  "Sad",
  "Az-Zumar",
  "Ghafir",
  "Fussilat",
  "Ash-Shura",
  "Az-Zukhruf",
  "Ad-Dukhan",
  "Al-Jathiyah",
  "Al-Ahqaf",
  "Muhammad",
  "Al-Fath",
  "Al-Hujurat",
  "Qaf",
  "Adh-Dhariyat",
  "At-Tur",
  "An-Najm",
  "Al-Qamar",
  "Ar-Rahman",
  "Al-Waqi'ah",
  "Al-Hadid",
  "Al-Mujadila",
  "Al-Hashr",
  "Al-Mumtahanah",
  "As-Saff",
  "Al-Jumu'ah",
  "Al-Munafiqun",
  "At-Taghabun",
  "At-Talaq",
  "At-Tahrim",
  "Al-Mulk",
  "Al-Qalam",
  "Al-Haqqah",
  "Al-Ma'arij",
  "Nuh",
  "Al-Jinn",
  "Al-Muzzammil",
  "Al-Muddaththir",
  "Al-Qiyamah",
  "Al-Insan",
  "Al-Mursalat",
  "An-Naba",
  "An-Nazi'at",
  "Abasa",
  "At-Takwir",
  "Al-Infitar",
  "Al-Mutaffifin",
  "Al-Inshiqaq",
  "Al-Buruj",
  "At-Tariq",
  "Al-Ala",
  "Al-Ghashiyah",
  "Al-Fajr",
  "Al-Balad",
  "Ash-Shams",
  "Al-Lail",
  "Ad-Duha",
  "Ash-Sharh",
  "At-Tin",
  "Al-Alaq",
  "Al-Qadr",
  "Al-Bayyina",
  "Az-Zalzalah",
  "Al-Adiyat",
  "Al-Qari'ah",
  "At-Takathur",
  "Al-Asr",
  "Al-Humazah",
  "Al-Fil",
  "Quraysh",
  "Al-Ma'un",
  "Al-Kawthar",
  "Al-Kafirun",
  "An-Nasr",
  "Al-Masad",
  "Al-Ikhlas",
  "Al-Falaq",
  "An-Nas",
];

const arabicNames = [
  "الفاتحة",
  "البقرة",
  "آل عمران",
  "النساء",
  "المائدة",
  "الأنعام",
  "الأعراف",
  "الأنفال",
  "التوبة",
  "يونس",
  "هود",
  "يوسف",
  "الرعد",
  "إبراهيم",
  "الحجر",
  "النحل",
  "الإسراء",
  "الكهف",
  "مريم",
  "طه",
  "الأنبياء",
  "الحج",
  "المؤمنون",
  "النور",
  "الفرقان",
  "الشعراء",
  "النمل",
  "القصص",
  "العنكبوت",
  "الروم",
  "لقمان",
  "السجدة",
  "الأحزاب",
  "سبأ",
  "فاطر",
  "يس",
  "الصافات",
  "ص",
  "الزمر",
  "غافر",
  "فصلت",
  "الشورى",
  "الزخرف",
  "الدخان",
  "الجاثية",
  "الأحقاف",
  "محمد",
  "الفتح",
  "الحجرات",
  "ق",
  "الذاريات",
  "الطور",
  "النجم",
  "القمر",
  "الرحمن",
  "الواقعة",
  "الحديد",
  "المجادلة",
  "الحشر",
  "الممتحنة",
  "الصف",
  "الجمعة",
  "المنافقون",
  "التغابن",
  "الطلاق",
  "التحريم",
  "الملك",
  "القلم",
  "الحاقة",
  "المعارج",
  "نوح",
  "الجن",
  "المزمل",
  "المدثر",
  "القيامة",
  "الإنسان",
  "المرسلات",
  "النبأ",
  "النازعات",
  "عبس",
  "التكوير",
  "الانفطار",
  "المطففين",
  "الانشقاق",
  "البروج",
  "الطارق",
  "الأعلى",
  "الغاشية",
  "الفجر",
  "البلد",
  "الشمس",
  "الليل",
  "الضحى",
  "الشرح",
  "التين",
  "العلق",
  "القدر",
  "البينة",
  "الزلزلة",
  "العاديات",
  "القارعة",
  "التكاثر",
  "العصر",
  "الهمزة",
  "الفيل",
  "قريش",
  "الماعون",
  "الكوثر",
  "الكافرون",
  "النصر",
  "المسد",
  "الإخلاص",
  "الفلق",
  "الناس",
];

// function toDefault() {

// }

function returnToWhite() {
  const divS = document.querySelectorAll("#surah");
  const links = document.querySelectorAll("a");
  // console.log(divS);
  for (let div of divS) {
    div.style.backgroundColor = "#fffff0";
    div.style.cssText = "border: solid 1px; background-color: #fffff0;";
  }
  for (let link of links) {
    link.target = "_self";
    link.href = "#";
  }
}

const container = document.getElementById("container");

const combinedArray = englishNames.map((english, index) => {
  const div = document.createElement("div");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const link = document.createElement("a");
  link.href = "#";
  link.id = "link" + index;
  div.ondblclick = () => {
    window.open("https://quran.com/ar/" + (index + 1), "_blank")
  };
  p1.innerHTML = english;
  p2.innerHTML = arabicNames[index];
  link.appendChild(p1);
  link.appendChild(p2);
  div.id = "surah";
  div.className = "surah" + index;
  div.appendChild(link);
  container.appendChild(div);
});

function randomSurah(start, end) {
  returnToWhite();
  console.log(start);
  let n = Math.floor(Math.random() * 113);
  let surahClass = "surah" + n;
  console.log(surahClass);
  let surah = document.querySelector("." + surahClass);
  surah.style.backgroundColor = "#40E0D0";
  if (start <= end) {
    setTimeout(() => randomSurah(start + 50, end), start);
  }
  if (start > end) {
    setTimeout(() => {
      surah.style.border = "solid 4px rgb(60, 191, 178)";
      const a = document.getElementById("link" + n);
      a.target = "_blank";
      a.href = "https://quran.com/ar/" + (n + 1);
    }, 1000);
  }
}

randomSurah(50, 600);

function sum(n) {
  if (n == 0) {
    return n;
  }
  return n + sum(n - 100);
}

console.log(sum(400));

// dblClick for go to chose surah
// One click to go to the surah that chose randomly
