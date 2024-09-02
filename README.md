# @nodecfdi/prettier-config

[![Source Code][badge-source]][source]
[![Discord][badge-discord]][discord]
[![Latest Version][badge-release]][release]
[![Software License][badge-license]][license]
[![Total Downloads][badge-downloads]][downloads]

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

## Soporte

Puedes obtener soporte abriendo un ticket en Github.

Adicionalmente, esta librería pertenece a la comunidad [OcelotlStudio](https://ocelotlstudio.com), así que puedes usar los mismos canales de comunicación para obtener ayuda de algún miembro de la comunidad.

## Compatibilidad

Esta librería se mantendrá compatible con al menos la versión con
[soporte activo de Node](https://nodejs.org/es/about/releases/) más reciente y [soporte activo de Typescript](https://www.typescriptlang.org/) más reciente.

También utilizamos [Versionado Semántico 2.0.0](https://semver.org/lang/es/) por lo que puedes usar esta librería sin temor a romper tu aplicación.

## Contribuciones

Las contribuciones con bienvenidas. Por favor lee [CONTRIBUTING][] para más detalles y recuerda revisar el archivo [CHANGELOG][].

## Copyright and License

The `@nodecfdi/prettier-config` library is copyright © [NodeCfdi](https://github.com/nodecfdi) - [OcelotlStudio](https://ocelotlstudio.com) and licensed for use under the MIT License (MIT). Please see [LICENSE][] for more information.

[contributing]: https://github.com/nodecfdi/.github/blob/main/docs/CONTRIBUTING.md
[changelog]: https://github.com/nodecfdi/prettier-config/blob/main/CHANGELOG.md
[source]: https://github.com/nodecfdi/prettier-config
[discord]: https://discord.gg/AsqX8fkW2k
[release]: https://www.npmjs.com/package/@nodecfdi/prettier-config
[license]: https://github.com/nodecfdi/prettier-config/blob/main/LICENSE.md
[downloads]: https://www.npmjs.com/package/@nodecfdi/prettier-config
[badge-source]: https://img.shields.io/badge/source-nodecfdi/prettier--config-blue?logo=github
[badge-discord]: https://img.shields.io/discord/459860554090283019?logo=discord
[badge-release]: https://img.shields.io/npm/v/@nodecfdi/prettier-config?logo=npm
[badge-license]: https://img.shields.io/github/license/nodecfdi/prettier-config?logo=open-source-initiative
[badge-downloads]: https://img.shields.io/npm/dm/@nodecfdi/prettier-config?logo=npm
