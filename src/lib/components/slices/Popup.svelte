<script lang="ts">
	import Modal from "$lib/components/Modal.svelte";
	import type { Slice } from "@prismicio/client";

	export let slice: Slice;

	// let text: prismic.RichTextField = slice.primary.text as prismic.RichTextField;
	// let emoji: prismic.KeyTextField = slice.primary.emoji as prismic.KeyTextField;
	let from = slice.items[0].from;
	let to = slice.items[0].to;
	let slices: any | null = slice?.items[0];
	let title: any | null = slices?.popuptitle[0]?.text;
	let popuptext: any | null = slices?.popuptext;
	let dates: any | null = slices?.dates;
	let image: any = slice.items[0]?.image;
	let url: any = image.url;
	let dialog: HTMLDialogElement;
</script>

<svelte:head />

<!-- <article class:reverse>
        <div class="emoji">{slice.primary.emoji}</div>
		<div class="text">{prismic.asText(text)}</div>
    </article> -->
<!-- {from}
	{to}
	{image} -->
<!-- <pre>
		{JSON.stringify(slice, null, 2)}
	</pre> -->
<Modal bind:dialog>
	<span slot="header" class="header">
		<img src={url} alt="" srcset="" />
		<h2>{title}</h2>
	</span>
	<div slot="body" class="block">
		<!-- <img src="{url}" alt="" srcset=""> -->
		<div class="information">
			{#each popuptext as text}
				<p>{text.text}</p>
			{/each}
		</div>
		<div class="dates">
			<ul>
				{#each dates as date}
					<li>{date.text}</li>
				{/each}
			</ul>
		</div>
	</div>
</Modal>
<button
	type="button"
	on:click={() => {
		dialog.show();
	}}
/>

<style lang="scss">
	.header {
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
		h2 {
			// max-width: 250px;
			font-size: 1.5rem;
			text-align: center;
			width: 80%;
		}
		img {
			width: 120px;
			height: 120px;
		}
	}
	.block {
		.information {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			p {
				margin: 0.5rem;
				text-align: center;
			}
		}
		.dates {
			margin-top: 1rem;
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			ul {
				li {
					text-align: center;
				}
			}
		}
	}

	@media screen and (max-width: 450px) {
		.header {
			display: flex;
			align-items: center;
			flex-direction: row;
			justify-content: space-between;
			h2 {
				// max-width: 250px;
				font-size: 1.1rem;
				text-align: center;
				width: 80%;
			}
			img {
				width: 60px;
				height: 60px;
			}
		}
		.information {
			
			p {
				font-size: .9rem;
			}
		}
		.dates {
			
			ul {
				li {
					font-size: .9rem;
				}
			}
		}
	}
</style>
