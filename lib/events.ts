// Islamic events with expected Gregorian dates (Umm al-Qura based).
// Actual dates depend on moon sighting and may shift by a day.

export interface EventFaq {
  q: string;
  a: string;
}

export interface IslamicEvent {
  slug: string;
  nameEn: string;
  nameUr: string;
  hijriEn: string;
  hijriUr: string;
  /** Expected Gregorian dates (YYYY-MM-DD), earliest first */
  dates: string[];
  blurbEn: string;
  blurbUr: string;
  faqsEn: EventFaq[];
  faqsUr: EventFaq[];
}

export const EVENTS: IslamicEvent[] = [
  {
    slug: "shab-e-miraj-countdown",
    nameEn: "Shab-e-Miraj",
    nameUr: "شب معراج",
    hijriEn: "27 Rajab",
    hijriUr: "27 رجب",
    dates: ["2027-01-06", "2027-12-26"],
    blurbEn:
      "Shab-e-Miraj marks the Prophet Muhammad's ﷺ miraculous night journey from Makkah to Jerusalem and ascension to the heavens. Muslims observe it with night prayers, dua and remembrance.",
    blurbUr:
      "شب معراج وہ بابرکت رات ہے جس میں نبی کریم ﷺ کو معراج کا شرف حاصل ہوا۔ مسلمان اس رات نوافل، دعا اور ذکر و اذکار کا اہتمام کرتے ہیں۔",
    faqsEn: [
      { q: "When is Shab-e-Miraj 2027?", a: "Shab-e-Miraj is expected on the night of 27 Rajab, around 6 January 2027 (subject to moon sighting)." },
      { q: "What happened on Shab-e-Miraj?", a: "The Prophet Muhammad ﷺ was taken on the night journey (Isra) from Makkah to Al-Aqsa and then ascended (Miraj) through the heavens, where the five daily prayers were ordained." },
    ],
    faqsUr: [
      { q: "شب معراج 2027 کب ہے؟", a: "شب معراج 27 رجب کی رات متوقع ہے، تقریباً 6 جنوری 2027 (چاند نظر آنے پر منحصر)۔" },
      { q: "شب معراج میں کیا ہوا تھا؟", a: "نبی کریم ﷺ کو مسجد حرام سے مسجد اقصیٰ تک سیر کرائی گئی اور پھر آسمانوں کی سیر (معراج) ہوئی، جہاں پانچ وقت کی نماز فرض ہوئی۔" },
    ],
  },
  {
    slug: "shab-e-barat-countdown",
    nameEn: "Shab-e-Barat",
    nameUr: "شب برات",
    hijriEn: "15 Shaban",
    hijriUr: "15 شعبان",
    dates: ["2027-01-23", "2028-01-12"],
    blurbEn:
      "Shab-e-Barat, the night of mid-Shaban, is observed with night worship, seeking forgiveness and dua. Many Muslims fast on the 15th of Shaban.",
    blurbUr:
      "شب برات شعبان کی پندرہویں رات ہے، جس میں عبادت، استغفار اور دعا کا اہتمام کیا جاتا ہے۔ بہت سے مسلمان 15 شعبان کا روزہ بھی رکھتے ہیں۔",
    faqsEn: [
      { q: "When is Shab-e-Barat 2027?", a: "Shab-e-Barat is expected on the night of 15 Shaban, around 23 January 2027 (subject to moon sighting)." },
      { q: "What do Muslims do on Shab-e-Barat?", a: "Night prayers (nawafil), recitation of the Quran, dua for forgiveness, and visiting graveyards are common observances." },
    ],
    faqsUr: [
      { q: "شب برات 2027 کب ہے؟", a: "شب برات 15 شعبان کی رات متوقع ہے، تقریباً 23 جنوری 2027 (چاند نظر آنے پر منحصر)۔" },
      { q: "شب برات میں کیا کرنا چاہیے؟", a: "نوافل، تلاوت قرآن، دعا و استغفار اور قبرستان کی زیارت معمول ہے۔" },
    ],
  },
  {
    slug: "ramadan-countdown",
    nameEn: "Ramadan",
    nameUr: "رمضان",
    hijriEn: "1 Ramadan",
    hijriUr: "1 رمضان",
    dates: ["2027-02-08", "2028-01-28"],
    blurbEn:
      "Ramadan is the ninth month of the Islamic calendar, when Muslims fast from dawn to sunset, increase prayer and Quran recitation, and give charity. It ends with Eid al-Fitr.",
    blurbUr:
      "رمضان اسلامی کیلنڈر کا نواں مہینہ ہے، جس میں مسلمان صبح صادق سے غروب آفتاب تک روزہ رکھتے ہیں، نماز و تلاوت کا اہتمام کرتے ہیں اور صدقہ و خیرات کرتے ہیں۔ اس کا اختتام عید الفطر پر ہوتا ہے۔",
    faqsEn: [
      { q: "How many days until Ramadan 2027?", a: "Use the live countdown above — Ramadan 2027 is expected to begin on 8 February 2027 (subject to moon sighting)." },
      { q: "Why does Ramadan's date change every year?", a: "The Islamic calendar is lunar and about 11 days shorter than the solar year, so Ramadan moves earlier each year." },
      { q: "How long is Ramadan?", a: "29 or 30 days, depending on the sighting of the Shawwal crescent." },
    ],
    faqsUr: [
      { q: "رمضان 2027 میں کتنے دن باقی ہیں؟", a: "اوپر لائیو کاؤنٹ ڈاؤن دیکھیں — رمضان 2027 کا آغاز متوقع طور پر 8 فروری 2027 ہے (چاند نظر آنے پر منحصر)۔" },
      { q: "رمضان کی تاریخ ہر سال کیوں بدلتی ہے؟", a: "اسلامی کیلنڈر چاند پر مبنی ہے اور شمسی سال سے تقریباً 11 دن چھوٹا ہے، اس لیے رمضان ہر سال پہلے آتا ہے۔" },
      { q: "رمضان کتنے دن کا ہوتا ہے؟", a: "29 یا 30 دن، شوال کا چاند نظر آنے پر منحصر ہے۔" },
    ],
  },
  {
    slug: "laylat-al-qadr-countdown",
    nameEn: "Laylat al-Qadr",
    nameUr: "لیلۃ القدر",
    hijriEn: "Last 10 nights of Ramadan",
    hijriUr: "رمضان کے آخری عشرے کی طاق راتیں",
    dates: ["2027-02-28", "2028-02-17"],
    blurbEn:
      "Laylat al-Qadr, the Night of Decree, is better than a thousand months (Quran 97:3). Muslims seek it in the odd nights of Ramadan's last ten nights — the 21st, 23rd, 25th, 27th and 29th.",
    blurbUr:
      "لیلۃ القدر ہزار مہینوں سے بہتر ہے (قرآن 97:3)۔ مسلمان اسے رمضان کے آخری عشرے کی طاق راتوں — 21، 23، 25، 27 اور 29 ویں شب — میں تلاش کرتے ہیں۔",
    faqsEn: [
      { q: "When is Laylat al-Qadr 2027?", a: "It is sought in the last ten nights of Ramadan, expected to begin around 28 February 2027, with emphasis on the odd nights." },
      { q: "What should I do on Laylat al-Qadr?", a: "Night prayer (qiyam), dua, Quran recitation and seeking forgiveness — the well-known dua is: Allahumma innaka afuwwun tuhibbul-afwa fa'fu anni." },
    ],
    faqsUr: [
      { q: "لیلۃ القدر 2027 کب ہے؟", a: "رمضان کے آخری عشرے کی طاق راتوں میں تلاش کی جاتی ہے، جو متوقع طور پر 28 فروری 2027 سے شروع ہوں گی۔" },
      { q: "لیلۃ القدر میں کیا کرنا چاہیے؟", a: "قیام اللیل، دعا، تلاوت قرآن اور استغفار — مشہور دعا ہے: اللّٰھم انک عفو تحب العفو فاعف عنی۔" },
    ],
  },
  {
    slug: "eid-al-fitr-countdown",
    nameEn: "Eid al-Fitr",
    nameUr: "عید الفطر",
    hijriEn: "1 Shawwal",
    hijriUr: "1 شوال",
    dates: ["2027-03-10", "2028-02-27"],
    blurbEn:
      "Eid al-Fitr, the Festival of Breaking the Fast, celebrates the end of Ramadan with the Eid prayer, festive meals and giving Zakat al-Fitr so the poor can celebrate too.",
    blurbUr:
      "عید الفطر رمضان کے اختتام پر منائی جاتی ہے — نماز عید، خوشیوں بھرے کھانے اور زکوٰۃ الفطر کی ادائیگی تاکہ غریب بھی عید منا سکیں۔",
    faqsEn: [
      { q: "When is Eid al-Fitr 2027?", a: "Eid al-Fitr is expected on 10 March 2027, on the 1st of Shawwal after Ramadan (subject to moon sighting)." },
      { q: "What is Zakat al-Fitr?", a: "An obligatory charity paid per person before the Eid prayer, so that the poor can also celebrate Eid." },
    ],
    faqsUr: [
      { q: "عید الفطر 2027 کب ہے؟", a: "عید الفطر متوقع طور پر 10 مارچ 2027 کو ہوگی، یکم شوال کو (چاند نظر آنے پر منحصر)۔" },
      { q: "زکوٰۃ الفطر کیا ہے؟", a: "نماز عید سے پہلے ہر فرد کی طرف سے واجب صدقہ، تاکہ غریب بھی عید منا سکیں۔" },
    ],
  },
  {
    slug: "hajj-countdown",
    nameEn: "Hajj",
    nameUr: "حج",
    hijriEn: "8 Dhul-Hijjah",
    hijriUr: "8 ذوالحجہ",
    dates: ["2027-05-14", "2028-05-03"],
    blurbEn:
      "Hajj is the annual pilgrimage to Makkah, obligatory once in a lifetime for every able Muslim. The rites begin on 8 Dhul-Hijjah with the journey to Mina.",
    blurbUr:
      "حج ہر صاحب استطاعت مسلمان پر زندگی میں ایک بار فرض ہے۔ مناسک حج 8 ذوالحجہ کو منیٰ روانگی سے شروع ہوتے ہیں۔",
    faqsEn: [
      { q: "When is Hajj 2027?", a: "Hajj 2027 is expected to begin on 14 May 2027 (8 Dhul-Hijjah 1448), subject to moon sighting." },
      { q: "How long does Hajj last?", a: "The main rites run from 8 to 12 or 13 Dhul-Hijjah — five to six days." },
    ],
    faqsUr: [
      { q: "حج 2027 کب ہے؟", a: "حج 2027 کا آغاز متوقع طور پر 14 مئی 2027 (8 ذوالحجہ 1448) سے ہوگا۔" },
      { q: "حج کتنے دن کا ہوتا ہے؟", a: "اہم مناسک 8 سے 12 یا 13 ذوالحجہ تک — پانچ سے چھ دن۔" },
    ],
  },
  {
    slug: "arafah-countdown",
    nameEn: "Day of Arafah",
    nameUr: "یوم عرفہ",
    hijriEn: "9 Dhul-Hijjah",
    hijriUr: "9 ذوالحجہ",
    dates: ["2027-05-15", "2028-05-04"],
    blurbEn:
      "The Day of Arafah is the pinnacle of Hajj, when pilgrims stand in prayer on the plain of Arafat. Fasting on this day expiates the sins of the past and coming year (Sahih Muslim).",
    blurbUr:
      "یوم عرفہ حج کا سب سے اہم دن ہے، جب حاجی میدان عرفات میں وقوف کرتے ہیں۔ اس دن کا روزہ پچھلے اور اگلے سال کے گناہوں کا کفارہ ہے (صحیح مسلم)۔",
    faqsEn: [
      { q: "When is the Day of Arafah 2027?", a: "The Day of Arafah is expected on 15 May 2027 (9 Dhul-Hijjah 1448)." },
      { q: "Should I fast on the Day of Arafah?", a: "For non-pilgrims, fasting on this day is highly recommended — it expiates sins of the previous and coming year." },
    ],
    faqsUr: [
      { q: "یوم عرفہ 2027 کب ہے؟", a: "یوم عرفہ متوقع طور پر 15 مئی 2027 (9 ذوالحجہ 1448) کو ہوگا۔" },
      { q: "کیا یوم عرفہ کا روزہ رکھنا چاہیے؟", a: "غیر حاجیوں کے لیے اس دن کا روزہ بہت فضیلت والا ہے — پچھلے اور اگلے سال کے گناہوں کا کفارہ ہے۔" },
    ],
  },
  {
    slug: "eid-al-adha-countdown",
    nameEn: "Eid al-Adha",
    nameUr: "عید الاضحی",
    hijriEn: "10 Dhul-Hijjah",
    hijriUr: "10 ذوالحجہ",
    dates: ["2027-05-16", "2028-05-05"],
    blurbEn:
      "Eid al-Adha, the Festival of Sacrifice, honours Prophet Ibrahim's willingness to sacrifice his son. Muslims offer qurbani, share meat with the poor, and celebrate for three days.",
    blurbUr:
      "عید الاضحی حضرت ابراہیم علیہ السلام کی قربانی کی یاد میں منائی جاتی ہے۔ مسلمان قربانی کرتے ہیں، گوشت غریبوں میں بانٹتے ہیں اور تین دن خوشیاں مناتے ہیں۔",
    faqsEn: [
      { q: "When is Eid al-Adha 2027?", a: "Eid al-Adha is expected on 16 May 2027 (10 Dhul-Hijjah 1448), subject to moon sighting." },
      { q: "What is qurbani?", a: "The sacrificial offering of an animal on Eid al-Adha, with meat divided among family, relatives and the poor." },
    ],
    faqsUr: [
      { q: "عید الاضحی 2027 کب ہے؟", a: "عید الاضحی متوقع طور پر 16 مئی 2027 (10 ذوالحجہ 1448) کو ہوگی۔" },
      { q: "قربانی کیا ہے؟", a: "عید الاضحی پر جانور کی قربانی، جس کا گوشت خاندان، رشتہ داروں اور غریبوں میں تقسیم کیا جاتا ہے۔" },
    ],
  },
  {
    slug: "islamic-new-year-countdown",
    nameEn: "Islamic New Year",
    nameUr: "اسلامی نیا سال",
    hijriEn: "1 Muharram",
    hijriUr: "1 محرم",
    dates: ["2027-06-16", "2028-06-05"],
    blurbEn:
      "The Islamic New Year begins on 1 Muharram, marking the Hijrah — the Prophet's ﷺ migration from Makkah to Madinah, from which the Hijri calendar is counted.",
    blurbUr:
      "اسلامی نیا سال یکم محرم سے شروع ہوتا ہے، جو ہجرت نبوی ﷺ کی یاد دلاتا ہے — اسی واقعے سے ہجری کیلنڈر کا آغاز ہوا۔",
    faqsEn: [
      { q: "When is the Islamic New Year 1449?", a: "1 Muharram 1449 is expected on 16 June 2027 (subject to moon sighting)." },
      { q: "Why is it called the Hijri calendar?", a: "It counts years from the Hijrah, the Prophet Muhammad's ﷺ migration from Makkah to Madinah in 622 CE." },
    ],
    faqsUr: [
      { q: "اسلامی نیا سال 1449 کب شروع ہوگا؟", a: "یکم محرم 1449 متوقع طور پر 16 جون 2027 کو ہوگا۔" },
      { q: "اسے ہجری کیلنڈر کیوں کہتے ہیں؟", a: "یہ ہجرت نبوی ﷺ — مکہ سے مدینہ منتقلی — سے سال گنتا ہے۔" },
    ],
  },
  {
    slug: "ashura-countdown",
    nameEn: "Ashura",
    nameUr: "عاشورہ",
    hijriEn: "10 Muharram",
    hijriUr: "10 محرم",
    dates: ["2027-06-25", "2028-06-14"],
    blurbEn:
      "Ashura, the 10th of Muharram, is a day of fasting — the Prophet ﷺ fasted it and encouraged fasting the 9th or 11th alongside it. It also marks the martyrdom of Imam Hussain at Karbala.",
    blurbUr:
      "عاشورہ 10 محرم کا دن ہے — نبی کریم ﷺ نے اس کا روزہ رکھا اور 9 یا 11 محرم کا روزہ بھی ساتھ رکھنے کی ترغیب دی۔ یہی دن واقعہ کربلا میں امام حسین کی شہادت کا دن بھی ہے۔",
    faqsEn: [
      { q: "When is Ashura 2027?", a: "Ashura (10 Muharram 1449) is expected on 25 June 2027." },
      { q: "Should I fast on Ashura?", a: "Yes — fasting Ashura expiates the sins of the previous year, ideally with the 9th or 11th of Muharram." },
    ],
    faqsUr: [
      { q: "عاشورہ 2027 کب ہے؟", a: "عاشورہ (10 محرم 1449) متوقع طور پر 25 جون 2027 کو ہوگا۔" },
      { q: "کیا عاشورے کا روزہ رکھنا چاہیے؟", a: "جی ہاں — عاشورے کا روزہ پچھلے سال کے گناہوں کا کفارہ ہے، بہتر ہے 9 یا 11 محرم کا روزہ بھی ساتھ رکھیں۔" },
    ],
  },
  {
    slug: "mawlid-countdown",
    nameEn: "Mawlid al-Nabi ﷺ",
    nameUr: "عید میلاد النبی ﷺ",
    hijriEn: "12 Rabi al-Awwal",
    hijriUr: "12 ربیع الاول",
    dates: ["2027-08-25", "2028-08-14"],
    blurbEn:
      "Mawlid al-Nabi marks the birth of the Prophet Muhammad ﷺ on 12 Rabi al-Awwal. It is observed with gatherings of durood, seerah talks and charity.",
    blurbUr:
      "عید میلاد النبی ﷺ 12 ربیع الاول کو نبی کریم ﷺ کی ولادت کی خوشی میں منائی جاتی ہے — درود و سلام کی محافل، سیرت کے بیانات اور صدقہ و خیرات کے ساتھ۔",
    faqsEn: [
      { q: "When is Mawlid 2027?", a: "12 Rabi al-Awwal 1449 is expected on 25 August 2027 (subject to moon sighting)." },
      { q: "How is Mawlid observed?", a: "With durood gatherings, talks on the Prophet's ﷺ life, charity and festive lights in many Muslim countries." },
    ],
    faqsUr: [
      { q: "عید میلاد النبی 2027 کب ہے؟", a: "12 ربیع الاول 1449 متوقع طور پر 25 اگست 2027 کو ہوگی۔" },
      { q: "میلاد کیسے منایا جاتا ہے؟", a: "درود و سلام کی محافل، سیرت النبی ﷺ کے بیانات، صدقہ و خیرات اور چراغاں کے ساتھ۔" },
    ],
  },
];

/** Next upcoming date for an event (YYYY-MM-DD), or null if all passed. */
export function nextOccurrence(ev: IslamicEvent, now = new Date()): string | null {
  const today = now.toISOString().slice(0, 10);
  for (const d of ev.dates) {
    if (d >= today) return d;
  }
  return null;
}

/** Days from today until date (YYYY-MM-DD). */
export function daysUntil(dateStr: string, now = new Date()): number {
  const target = new Date(dateStr + "T00:00:00");
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.max(0, Math.round((target.getTime() - start.getTime()) / 86400000));
}

export function getEvent(slug: string): IslamicEvent | undefined {
  return EVENTS.find((e) => e.slug === slug);
}
