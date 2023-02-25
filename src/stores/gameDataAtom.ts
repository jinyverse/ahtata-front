import { atom } from 'recoil';

export const todoAtom = atom({
    key: 'todo',
    default: ['a', 'b', 'c', 'd', 'e', 'f'],
});
