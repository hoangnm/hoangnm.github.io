import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	site: 'https://hoangnm.github.io',
	integrations: [
		starlight({
			title: 'My Blog',
			social: {
				github: 'https://github.com/hoangnm',
			},
			plugins: [starlightBlog({
				title: 'My Blog',
			})],
		}),
	],
});
