import { atom } from 'recoil';
import { IArtistData, IArtistClickData } from '@/types/artist.type';

export const artistDataAtom = atom<IArtistData[] | null>({
    key: 'artistData',
    default: null,
});

export const artistClickDataAtom = atom<IArtistClickData | null>({
    key: 'artistClickData',
    default: null,
});
