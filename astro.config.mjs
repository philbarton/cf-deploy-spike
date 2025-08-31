// @ts-check
import {defineConfig, envField} from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    env: {
        schema: {
            API_URL: envField.string({ context: "client", access: "public", optional: true, default: "URL_Default" }),
            PORT: envField.number({ context: "server", access: "public", default: 4321 }),
            API_SECRET: envField.string({ context: "server", access: "secret", default: "default" }),
        }
    },
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