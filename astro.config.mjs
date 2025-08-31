// @ts-check
import {defineConfig} from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    vite: {
        ssr: {
            // Treat Node built-ins as external for SSR
            external: [
                'node:crypto',
                'node:fs',
                'node:path',
                'node:fs/promises',
                'node:url',
                'node:buffer'
            ],
        }
    },
    adapter: cloudflare({
        platformProxy: {
            enabled: true
        },
        imageService: "cloudflare"
    })
});