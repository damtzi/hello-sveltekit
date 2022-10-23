<script lang="ts">
	import { characters } from '../store/store';
	import CharacterCard from '../components/characterCard.svelte';

	let searchTerm = '';
	let filteredCharacters = [];

    // This runs every time 'searchTerm' is updated
    $: {
		if (searchTerm) {
			filteredCharacters = $characters.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()));
		} else {
			filteredCharacters = [ ...$characters ];
		}
	}
</script>

<svelte:head>
	<title>Breaking Bad Characters</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Breaking Bad Characters</h1>

<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	type="text"
	bind:value={searchTerm}
	placeholder="Search Character"
/>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredCharacters as character}
		<CharacterCard {character} />
	{/each}
</div>
