import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://xilefe.github.io",
    base: "/Astro-test",
    i18n: {
        defaultLocale: "es",
        locales: ["es", "en"],
        routing: {
            prefixDefaultLocale: true
        }
    }
});
