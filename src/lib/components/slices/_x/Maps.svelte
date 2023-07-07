<!-- <script lang="ts">
    import { browser } from '$app/environment';
	import Modal from '$lib/components/Modal.svelte';
	import * as prismic from '@prismicio/client';
    import type { Slice } from "@prismicio/client";
    import { onMount } from 'svelte';
	// import L from 'leaflet';
	// import L from 'svelte-leafletjs';

    export let slice:Slice;

//     let text: prismic.RichTextField = slice.primary.text as prismic.RichTextField;
//     let emoji: prismic.KeyTextField = slice.primary.emoji as prismic.KeyTextField;
	let geopoint:any = slice.items[0]?.geopoint;
	let latitude = geopoint.latitude;
	let longitude = geopoint.longitude;

	onMount(async ()=>{
        if(browser) {
            const L = await import('leaflet');
			var map = L.map('map').setView([latitude, longitude], 15);
			L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
				maxZoom: 30,
			}).addTo(map);
			var marker = L.marker([latitude, longitude]).addTo(map)
		}
	})
	
</script>
<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
	integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
	crossorigin=""/>
	<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
	integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
	crossorigin=""></script>
</svelte:head>

{geopoint.latitude}
{geopoint.longitude}

<div id="map"></div>

<style lang="scss">

</style> -->