<script lang="ts" context="module">
	// This query will run before the page is rendered (SSR)
	export async function load({ params }) {
		const id = params.id;
		const url = `https://www.breakingbadapi.com/api/characters/${id}`;
		const res = await fetch(url);
		const [character] = await res.json();
		return { props: { character } };
	}
</script>

<script lang="ts">
	import type { CharacterType } from '../../../types/types';
	export let character: CharacterType;
</script>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{character.name}</h1>
	<p>Portrayed by: <strong>{character.portrayed}</strong></p>
	<img src={character.img} alt={character.name} />
</div>
