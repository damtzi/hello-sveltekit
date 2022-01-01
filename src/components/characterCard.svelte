<script lang="ts">
	import type { CharacterType } from '../types/types';
	import { fade } from 'svelte/transition';
	export let character: CharacterType;
</script>

<a
	class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href={`/characters/${character.id}`}
    transition:fade
>
	<img class="h-40" src={character.img} alt={character.name} />
	<h2 class="text-xl">{character.id}. {character.name}</h2>
</a>
