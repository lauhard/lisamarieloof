<!-- <script lang="ts">
	import * as prismic from '@prismicio/client';
    import type { Slice } from "@prismicio/client";

    export let slice:Slice;
    let text: prismic.RichTextField = slice.primary.text as prismic.RichTextField;
    let emoji: prismic.KeyTextField = slice.primary.emoji as prismic.KeyTextField;
    const reverse = slice.slice_label === 'emoji_right';
</script>

    <article class:reverse>
        <div class="emoji">{slice.primary.emoji}</div>
		<div class="text">{prismic.asText(text)}</div>
    </article>

<style>
    article {
		display: flex;
		align-items: flex-start;
		gap: 1.2rem;
		padding: 2rem 2rem 2rem 1.4rem;
	}

	.emoji {
		font-size: 2rem;
	}

	.reverse {
		flex-direction: row-reverse;
		padding: 2rem 1.4rem 2rem 2rem;
	}
</style> -->