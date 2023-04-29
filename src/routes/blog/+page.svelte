<!--
 Copyright (C) 2023 David Jones
 
 This file is part of svelte-ghpages-test.
 
 svelte-ghpages-test is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.
 
 svelte-ghpages-test is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public License
 along with svelte-ghpages-test.  If not, see <http://www.gnu.org/licenses/>.
-->

<script>
	export let data;
	import { base } from '$app/paths';
</script>

<h1>blog</h1>

<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="{base}/blog/{slug}">{title}</a></li>
	{/each}
</ul>
