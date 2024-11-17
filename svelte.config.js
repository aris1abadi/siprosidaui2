/*
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null, // gunakan 'index.html' jika ada routing dinamis
    }),
    paths: {
      base: '/siprosidaui2', // Ganti <repository-name> dengan nama repository GitHub Anda
    },
    alias: {
      $lib: 'src/lib',
      $routes: 'src/routes'
    },
   
    prerender: {
      entries: ['*'], // Ini memprerender semua halaman
    },
  },
};
*/
import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};