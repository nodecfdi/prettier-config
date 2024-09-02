# @nodecfdi/prettier-config

> La libreria `@nodecfdi/prettier-config` exporta la configuración base para Prettier usada en los proyectos de NodeCfdi.

:us: The documentation of this project is in spanish as this is the natural language for intended audience.

:mexico: La documentación del proyecto está en español porque ese es el lenguaje principal de los usuarios.

## Instalación

### NPM

```shell
npm i -D prettier @nodecfdi/prettier-config
```

### Yarn

```shell
yarn add -D prettier @nodecfdi/prettier-config
```

### PNPM

```shell
pnpm add -D prettier @nodecfdi/prettier-config
```

## Uso básico

Para habilitar estás reglas, puedes simplemente agregar la propiedad `prettier` en tu `package.json` y referenciar está configuración compartida como se muestra a continuación:

```json
{
  ///...
  "prettier": "@nodecfdi/prettier-config"
}
```

Si deseas ajustar algúna regla o habilitar alguna no incluida, puedes extender de está configuración pero no puedes hacerlo en el `package.json` en su lugar crea un archivo JS. Y exporta las modificaciones por ejemplo:

```js
// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs
import nodecfdiPrettierConfig from '@nodecfdi/prettier-config';

export default {
  ...nodecfdiPrettierConfig,
  printWidth: 120,
};
```