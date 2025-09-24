import {
  defineConfig,
  presetIcons,
  presetWind,
  presetTypography,
} from "unocss";

export default defineConfig({
  theme: {
    colors: {
      // Paleta personalizada para psicologiaemoutradimensao
      primary: "#4CA6DF", // Azul confiável/calmante
      secondary: "#BFFF00", // Verde esperança/crescimento
      accent: "#FF6B00", // Laranja energia/motivação
      tertiary: "#EE99B8", // Rosa empatia/conexão
      deep: "#5E18EB", // Roxo profundidade/inconsciente
    },
  },
  presets: [
    presetWind(),
    presetIcons({
      collections: {
        logos: () =>
          import("@iconify-json/logos/icons.json").then((i) => i.default),
        uil: () =>
          import("@iconify-json/uil/icons.json").then((l) => l.default),
      },
    }),
    presetTypography(),
  ],
});
