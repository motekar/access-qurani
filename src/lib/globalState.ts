import { derived, type Writable } from "svelte/store";
import { localStore } from "./localStore";
import { data, getJuzFromIndex, getPageFromIndex, getSuraData, getAudioUrl} from '$lib/quranData';

export const currentIndex: Writable<number> = localStore('index', 0);

export const current = derived(currentIndex, ($currentIndex) => {
  const [sura, aya] = data.ayaIndex[$currentIndex];
  return {
    juz: getJuzFromIndex($currentIndex),
    page: getPageFromIndex($currentIndex),
    sura: sura + 1,
    suraName: getSuraData(sura + 1).name,
    aya: aya + 1,
    url: getAudioUrl($currentIndex)
  };
});
