const data = {};

data.suraPageStart = [
	1, 2, 50, 77, 106, 128, 151, 177, 187, 208, 221, 235, 249, 255, 262, 267, 282, 293, 305, 312, 322,
	332, 342, 350, 359, 367, 377, 385, 396, 404, 411, 415, 418, 428, 434, 440, 446, 453, 458, 467,
	477, 483, 489, 496, 499, 502, 507, 511, 515, 518, 520, 523, 526, 528, 531, 534, 537, 542, 545,
	549, 551, 553, 554, 556, 558, 560, 562, 564, 566, 568, 570, 572, 574, 575, 577, 578, 580, 582,
	583, 585, 586, 587, 587, 589, 590, 591, 591, 592, 593, 594, 595, 595, 596, 596, 597, 597, 598,
	598, 599, 599, 600, 600, 601, 601, 601, 602, 602, 602, 603, 603, 603, 604, 604, 604
];

data.pageSuraStart = [
	1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
	2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
	3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6,
	6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
	7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
	9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11,
	11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13,
	13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16,
	16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18,
	18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20,
	21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23,
	23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26,
	26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28,
	28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 30, 30, 30, 30, 30, 30, 31, 31, 31, 31, 32, 32, 32,
	33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 34, 34, 34, 34, 34, 34, 34, 35, 35, 35, 35, 35, 35, 36,
	36, 36, 36, 36, 37, 37, 37, 37, 37, 37, 37, 38, 38, 38, 38, 38, 38, 39, 39, 39, 39, 39, 39, 39,
	39, 39, 40, 40, 40, 40, 40, 40, 40, 40, 40, 41, 41, 41, 41, 41, 41, 42, 42, 42, 42, 42, 42, 42,
	43, 43, 43, 43, 43, 43, 44, 44, 44, 45, 45, 45, 45, 46, 46, 46, 46, 47, 47, 47, 47, 48, 48, 48,
	48, 48, 49, 49, 50, 50, 50, 51, 51, 51, 52, 52, 53, 53, 53, 54, 54, 54, 55, 55, 55, 56, 56, 56,
	57, 57, 57, 57, 58, 58, 58, 58, 59, 59, 59, 60, 60, 60, 61, 62, 62, 63, 64, 64, 65, 65, 66, 66,
	67, 67, 67, 68, 68, 69, 69, 70, 70, 71, 72, 72, 73, 73, 74, 74, 75, 76, 76, 77, 78, 78, 79, 80,
	81, 82, 83, 83, 85, 86, 87, 89, 89, 91, 92, 95, 97, 98, 100, 103, 106, 109, 112
];

data.pageAyaStart = [
	1, 1, 6, 17, 25, 30, 38, 49, 58, 62, 70, 77, 84, 89, 94, 102, 106, 113, 120, 127, 135, 142, 146,
	154, 164, 170, 177, 182, 187, 191, 197, 203, 211, 216, 220, 225, 231, 234, 238, 246, 249, 253,
	257, 260, 265, 270, 275, 282, 283, 1, 10, 16, 23, 30, 38, 46, 53, 62, 71, 78, 84, 92, 101, 109,
	116, 122, 133, 141, 149, 154, 158, 166, 174, 181, 187, 195, 1, 7, 12, 15, 20, 24, 27, 34, 38, 45,
	52, 60, 66, 75, 80, 87, 92, 95, 102, 106, 114, 122, 128, 135, 141, 148, 155, 163, 171, 176, 3, 6,
	10, 14, 18, 24, 32, 37, 42, 46, 51, 58, 65, 71, 77, 83, 90, 96, 104, 109, 114, 1, 9, 19, 28, 36,
	45, 53, 60, 69, 74, 82, 91, 95, 102, 111, 119, 125, 132, 138, 143, 147, 152, 158, 1, 12, 23, 31,
	38, 44, 52, 58, 68, 74, 82, 88, 96, 105, 121, 131, 138, 144, 150, 156, 160, 164, 171, 179, 188,
	196, 1, 9, 17, 26, 34, 41, 46, 53, 62, 70, 1, 7, 14, 21, 27, 32, 37, 41, 48, 55, 62, 69, 73, 80,
	87, 94, 100, 107, 112, 118, 123, 1, 7, 15, 21, 26, 34, 43, 54, 62, 71, 79, 89, 98, 107, 6, 13, 20,
	29, 38, 46, 54, 63, 72, 82, 89, 98, 109, 118, 5, 15, 23, 31, 38, 44, 53, 64, 70, 79, 87, 96, 104,
	1, 6, 14, 19, 29, 35, 43, 6, 11, 19, 25, 34, 43, 1, 16, 32, 52, 71, 91, 7, 15, 27, 35, 43, 55, 65,
	73, 80, 88, 94, 103, 111, 119, 1, 8, 18, 28, 39, 50, 59, 67, 76, 87, 97, 105, 5, 16, 21, 28, 35,
	46, 54, 62, 75, 84, 98, 1, 12, 26, 39, 52, 65, 77, 96, 13, 38, 52, 65, 77, 88, 99, 114, 126, 1,
	11, 25, 36, 45, 58, 73, 82, 91, 102, 1, 6, 16, 24, 31, 39, 47, 56, 65, 73, 1, 18, 28, 43, 60, 75,
	90, 105, 1, 11, 21, 28, 32, 37, 44, 54, 59, 62, 3, 12, 21, 33, 44, 56, 68, 1, 20, 40, 61, 84, 112,
	137, 160, 184, 207, 1, 14, 23, 36, 45, 56, 64, 77, 89, 6, 14, 22, 29, 36, 44, 51, 60, 71, 78, 85,
	7, 15, 24, 31, 39, 46, 53, 64, 6, 16, 25, 33, 42, 51, 1, 12, 20, 29, 1, 12, 21, 1, 7, 16, 23, 31,
	36, 44, 51, 55, 63, 1, 8, 15, 23, 32, 40, 49, 4, 12, 19, 31, 39, 45, 13, 28, 41, 55, 71, 1, 25,
	52, 77, 103, 127, 154, 1, 17, 27, 43, 62, 84, 6, 11, 22, 32, 41, 48, 57, 68, 75, 8, 17, 26, 34,
	41, 50, 59, 67, 78, 1, 12, 21, 30, 39, 47, 1, 11, 16, 23, 32, 45, 52, 11, 23, 34, 48, 61, 74, 1,
	19, 40, 1, 14, 23, 33, 6, 15, 21, 29, 1, 12, 20, 30, 1, 10, 16, 24, 29, 5, 12, 1, 16, 36, 7, 31,
	52, 15, 32, 1, 27, 45, 7, 28, 50, 17, 41, 68, 17, 51, 77, 4, 12, 19, 25, 1, 7, 12, 22, 4, 10, 17,
	1, 6, 12, 6, 1, 9, 5, 1, 10, 1, 6, 1, 8, 1, 13, 27, 16, 43, 9, 35, 11, 40, 11, 1, 14, 1, 20, 18,
	48, 20, 6, 26, 20, 1, 31, 16, 1, 1, 1, 7, 35, 1, 1, 16, 1, 24, 1, 15, 1, 1, 8, 10, 1, 1, 1, 1
];

data.suraNumAyas = [
	7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135, 112,
	78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37,
	35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52,
	44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8,
	8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6
];

data.juzSuraAya = [
	[1, 1],
	[2, 142],
	[2, 253],
	[3, 93],
	[4, 24],
	[4, 148],
	[5, 82],
	[6, 111],
	[7, 88],
	[8, 41],
	[9, 93],
	[11, 6],
	[12, 53],
	[15, 1],
	[17, 1],
	[18, 75],
	[21, 1],
	[23, 1],
	[25, 21],
	[27, 56],
	[29, 46],
	[33, 31],
	[36, 28],
	[39, 32],
	[41, 47],
	[46, 1],
	[51, 31],
	[58, 1],
	[67, 1],
	[78, 1]
];

data.suraNames = [
	'Al-Fatihah',
	'Al-Baqarah',
	'Ali Imran',
	'An-Nisa',
	"Al-Ma'idah",
	"Al-An'am",
	"Al-A'raf",
	'Al-Anfal',
	'At-Taubah',
	'Yunus',
	'Hud',
	'Yusuf',
	"Ar-Ra'd",
	'Ibrahim',
	'Al-Hijr',
	'An-Nahl',
	"Al-Isra'",
	'Al-Kahf',
	'Maryam',
	'Ta Ha',
	'Al-Anbiya',
	'Al-Hajj',
	"Al-Mu'minun",
	'An-Nur',
	'Al-Furqan',
	"Asy-Syu'ara'",
	'An-Naml',
	'Al-Qasas',
	"Al-'Ankabut",
	'Ar-Rum',
	'Luqman',
	'As-Sajdah',
	'Al-Ahzab',
	"Saba'",
	'Fatir',
	'Yasin',
	'As-Saffat',
	'Sad',
	'Az-Zumar',
	'Ghafir',
	'Fussilat',
	'Asy-Syura',
	'Az-Zukhruf',
	'Ad-Dukhan',
	'Al-Jasiyah',
	'Al-Ahqaf',
	'Muhammad',
	'Al-Fath',
	'Al-Hujurat',
	'Qaf',
	'Az-Zariyat',
	'At-Tur',
	'An-Najm',
	'Al-Qamar',
	'Ar-Rahman',
	"Al-Waqi'ah",
	'Al-Hadid',
	'Al-Mujadalah',
	'Al-Hasyr',
	'Al-Mumtahanah',
	'As-Saff',
	"Al-Jumu'ah",
	'Al-Munafiqun',
	'At-Taghabun',
	'At-Talaq',
	'At-Tahrim',
	'Al-Mulk',
	'Al-Qalam',
	'Al-Haqqah',
	"Al-Ma'arij",
	'Nuh',
	'Al-Jinn',
	'Al-Muzzammil',
	'Al-Muddassir',
	'Al-Qiyamah',
	'Al-Insan',
	'Al-Mursalat',
	"An-Naba'",
	"An-Nazi'at",
	"'Abasa",
	'At-Takwir',
	'Al-Infitar',
	'Al-Mutaffifin',
	'Al-Insyiqaq',
	'Al-Buruj',
	'At-Thariq',
	"Al-A'la",
	'Al-Ghasyiyah',
	'Al-Fajr',
	'Al-Balad',
	'Asy-Syams',
	'Al-Lail',
	'Ad-Dhuha',
	'Al-Insyirah',
	'At-Tin',
	"Al-'Alaq",
	'Al-Qadr',
	'Al-Bayyinah',
	'Az-Zalzalah',
	"Al-'Adiyat",
	"Al-Qari'ah",
	'At-Takasur',
	"Al-'Asr",
	'Al-Humazah',
	'Al-Fil',
	'Quraisy',
	"Al-Ma'un",
	'Al-Kausar',
	'Al-Kafirun',
	'An-Nasr',
	'Al-Lahab',
	'Al-Ikhlas',
	'Al-Falaq',
	'An-Nas'
];

/**
 *
 * @param {number} ayaIdx
 * @returns {boolean}
 */
function needBasmala(ayaIdx) {
	const [sura, aya] = data.ayaIndex[ayaIdx];
	return aya == 0 && sura != 0 && sura != 8;
}

/**
 *
 * @param {number} ayaIdx
 * @returns {number}
 */
function getPageFromIndex(ayaIdx) {
	const [sura, aya] = data.ayaIndex[ayaIdx];
	return getPageFromSuraAya(sura + 1, aya + 1);
}

/**
 *
 * @param {number} ayaIdx
 * @returns {number}
 */
function getJuzFromIndex(ayaIdx) {
	if (ayaIdx > data.ayaIndex.length - 1) return 0;

	let foundIdx = -1;
	data.juzAyaIndex.forEach((val, idx) => {
		if (ayaIdx >= val) foundIdx = idx;
	});
	return foundIdx >= 0 ? foundIdx + 1 : 0;
}

/**
 *
 * @param {number} sura
 * @param {number} aya
 * @returns {number}
 */
function getPageFromSuraAya(sura, aya) {
	// basic bounds checking
	if (aya === 0) aya = 1;
	if (sura < 1 || sura > 114 || aya < 1 || aya > 286) {
		return -1;
	}

	// what page does the sura start on?
	let index = data.suraPageStart[sura - 1] - 1;
	while (index < 604) {
		// what's the first sura in that page?
		const ss = data.pageSuraStart[index];

		// if we've passed the sura, return the previous page
		// or, if we're at the same sura and passed the ayah
		if (ss > sura || (ss === sura && data.pageAyaStart[index] > aya)) {
			break;
		}

		// otherwise, look at the next page
		index++;
	}

	return index;
}

/**
 *
 * @param {number} sura
 * @returns
 */
function getSuraData(sura) {
	return {
		name: data.suraNames[sura - 1],
		ayaIndex: getAyaIndexFromSura(sura)
	};
}

/**
 *
 * @param {number} page
 * @returns {number}
 */
function getAyaIndexFromPage(page) {
	return data.ayaIndex.findIndex((value) => {
		return (
			value[0] == data.pageSuraStart[page - 1] - 1 && value[1] == data.pageAyaStart[page - 1] - 1
		);
	});
}

/**
 *
 * @param {number} sura
 * @returns {number}
 */
function getAyaIndexFromSura(sura) {
	return data.ayaIndex.findIndex((value) => {
		return value[0] == sura - 1 && value[1] == 0;
	});
}

/**
 *
 * @param {number} sura
 * @param {number} aya
 * @returns {number}
 */
function getAyaIndexFromSuraAya(sura, aya) {
	return data.ayaIndex.findIndex((value) => {
		return value[0] == sura - 1 && value[1] == aya - 1;
	});
}

/**
 *
 * @param {number} juz
 * @returns {number}
 */
function getAyaIndexFromJuz(juz) {
	const [sura, aya] = data.juzSuraAya[juz - 1];
	return getAyaIndexFromSuraAya(sura, aya);
}

/**
 *
 * @param {number} ayaIdx
 * @returns {number}
 */
function getSuraFromAyaIndex(ayaIdx) {
	const [sura] = data.ayaIndex[ayaIdx];
	return sura + 1;
}

/** @type {Array<Array<number>>} */
data.ayaIndex = [];
/** @type {Array<number>} */
data.juzAyaIndex = [];
/** @type {Array<number>} */
data.suraStarts = [];

(function () {
	for (let sura = 0; sura < data.suraNumAyas.length; sura++) {
		const n = data.suraNumAyas[sura];

		data.suraStarts.push(data.ayaIndex.length);
		for (let aya = 0; aya < n; aya++) {
			data.ayaIndex.push([sura, aya]);
		}
	}
	data.juzSuraAya.forEach((val, idx) => {
		data.juzAyaIndex[idx] = getAyaIndexFromSuraAya(val[0], val[1]);
	});
})();

/**
 *
 * @param {number} idx
 * @returns {string}
 */
function getAudioUrl(idx) {
	const [suraIdx, ayaIdx] = data.ayaIndex[idx];
	const sura = (suraIdx + 1).toString().padStart(3, '0');
	const aya = (ayaIdx + 1).toString().padStart(3, '0');
	const filename = `${sura}${aya}.mp3`;
	// alternatives: muaiqly, afasy
	return `https://tanzil.net/res/audio/afasy/${filename}`;
	// return `https://everyayah.com/data/Maher_AlMuaiqly_64kbps/${filename}`;
}

/**
 *
 * @param {number} sura
 * @returns {string}
 */
function getBasmalaUrl(sura) {
	const suraStr = sura.toString().padStart(3, '0');
	const filename = `${suraStr}000.mp3`;
	return `https://tanzil.net/res/audio/afasy/${filename}`;
}

export {
	data,
	needBasmala,
	getAudioUrl,
	getBasmalaUrl,
	getAyaIndexFromJuz,
	getAyaIndexFromPage,
	getAyaIndexFromSura,
	getAyaIndexFromSuraAya,
	getJuzFromIndex,
	getPageFromIndex,
	getPageFromSuraAya,
	getSuraData,
	getSuraFromAyaIndex
};
