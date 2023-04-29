// Copyright (C) 2023 David Jones
// 
// This file is part of svelte-ghpages-test.
// 
// svelte-ghpages-test is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// svelte-ghpages-test is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with svelte-ghpages-test.  If not, see <http://www.gnu.org/licenses/>.

export const posts = [
	{
		slug: 'welcome',
		title: 'Welcome to the Aperture Science computer-aided enrichment center',
		content:
			'<p>We hope your brief detention in the relaxation vault has been a pleasant one.</p><p>Your specimen has been processed and we are now ready to begin the test proper.</p>'
	},

	{
		slug: 'safety',
		title: 'Safety notice',
		content:
			'<p>While safety is one of many Enrichment Center Goals, the Aperture Science High Energy Pellet, seen to the left of the chamber, can and has caused permanent disabilities, such as vaporization. Please be careful.</p>'
	},

	{
		slug: 'cake',
		title: 'This was a triumph',
		content: "<p>I'm making a note here: HUGE SUCCESS.</p>"
	}
];
