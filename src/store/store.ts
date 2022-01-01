import { writable } from 'svelte/store';
import type { BreakingBadApi, CharacterType } from 'src/types/types';

export const characters = writable<CharacterType[]>([]);

const fetchCharacters = async () => {
    const url = 'https://www.breakingbadapi.com/api/characters';
    const res = await fetch(url);
    const data: BreakingBadApi[] = await res.json();
    const loadedCharacters = data.map(char => {
        return {
            id: char.char_id,
            name: char.name,
            img: char.img,
            birthday: char.birthday,
            portrayed: char.portrayed
        };
    });
    characters.set(loadedCharacters);
};

fetchCharacters();