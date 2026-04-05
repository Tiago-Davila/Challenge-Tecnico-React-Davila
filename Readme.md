# 🎮 JuegoContador

> Challenge Técnico — Desarrollador Frontend React Junior

¿Cuántas veces podés clickear un botón en 5 segundos? Eso es todo. Simple, adictivo, competitivo contra vos mismo.

Este repositorio contiene **tres versiones** del mismo proyecto, cada una desarrollada con una herramienta distinta.

---

## 📂 Versiones

| Versión | Herramienta | Estructura |
|--------|-------------|------------|
| `claude/` | Claude Sonnet 4.6 (Anthropic) | Un solo archivo HTML |
| `gemini/` | Gemini Pro 3.1 (Google) | Proyecto React con Node.js |
| `sin-ia/` | Sin IA | Proyecto React con Node.js |

---

## 🤖 Sobre el uso de IA

Durante el desarrollo probé distintas herramientas de IA para resolver el mismo challenge. Hubo momentos en los que parecía innecesario recurrir a ellas para algo tan concreto, pero resultaron ser una herramienta útil: ayudaron a acelerar decisiones de estructura, identificar patrones más limpios para manejar los `useEffect`, y pensar en los estados del juego de forma más ordenada.

La versión sin IA tomó como referencia los códigos generados, pero el resultado final fue revisado, ajustado y estilizado de forma manual. El diseño visual, el naming en español y las decisiones de código son propias.

---

---

## 📁 Versión Claude

### Descripción

Claude generó la solución completa en **un único archivo HTML** con React cargado desde CDN, sin necesidad de instalación ni bundler.

### Estructura

```
claude/
└── index.html
```

### ▶️ Cómo correrla

No requiere instalación. Simplemente abrí el archivo en el navegador:

```bash
cd claude
open index.html
```

O hacé doble click en `index.html` desde el explorador de archivos.

### ✅ Pros y ❌ Contras

- ✅ Cero configuración, corre al instante
- ✅ Ideal para probar y entender la lógica rápidamente
- ❌ Todo el código en un archivo no es una estructura mantenible
- ❌ No refleja cómo se trabaja en un proyecto real de React

---

---

## 📁 Versión Gemini

### Descripción

Gemini planteó la solución como un proyecto React real, instalado mediante Node.js y dividido en componentes separados (`App.jsx` y `Contador.jsx`).

### Estructura

```
gemini/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   └── Contador.jsx
├── package.json
└── ...
```

### ⚙️ Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- npm (viene incluido con Node)

Verificá que estén instalados:

```bash
node -v
npm -v
```

### ▶️ Instalación y uso

```bash
cd gemini
npm install
npm run dev
```

Abrí el navegador en `http://localhost:5173`

### ✅ Pros y ❌ Contras

- ✅ Estructura correcta para un proyecto React real
- ✅ Separación en componentes, más mantenible
- ✅ Cumple con los requisitos de la consigna tal como se esperaría en un entorno profesional
- ❌ Requiere más pasos de configuración inicial

---

---

## 📁 Versión Sin IA

### Descripción

Esta versión tomó como base los códigos de las versiones anteriores, los reescribió y ajustó de forma manual. La lógica es similar pero el código fue simplificado y el diseño visual es completamente distinto: tipografías propias, estética brutalista, naming en español.

### Estructura

```
sin-ia/
├── public/
│   └── index.html
├── src/
│   ├── JuegoContador.jsx
│   ├── JuegoContador.css
│   └── main.jsx
├── package.json
└── README.md
```

### ⚙️ Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- npm (viene incluido con Node)

Verificá que estén instalados:

```bash
node -v
npm -v
```

### ▶️ Instalación y uso

```bash
cd sin-ia
npm install
npm run dev
```

Abrí el navegador en `http://localhost:5173`

### ✅ Pros y ❌ Contras

- ✅ Estructura correcta y mantenible
- ✅ Diseño y decisiones de código propias
- ✅ Código más conciso que las versiones generadas por IA
- ❌ Requiere configuración inicial igual que Gemini

---

---

## 🕹️ Cómo se juega (todas las versiones)

1. Presioná **Iniciar juego**
2. Esperá la cuenta regresiva: *Preparados → Listos → Ya*
3. Cuando aparezca **Ya**, clickeá el botón lo más rápido que puedas
4. Tenés **5 segundos**
5. Al terminar, si superaste tu récord, se actualiza automáticamente

---

## 📋 Supuestos considerados

- La cuenta regresiva se muestra en intervalos de 1 segundo por mensaje. El botón de click se habilita junto con el mensaje "Ya" y el contador de 5 segundos arranca en ese momento.
- El puntaje máximo persiste solo durante la sesión activa. Al recargar la página vuelve a 0.
- Los dos botones (iniciar y clickear) son siempre visibles, habilitados o deshabilitados según el estado del juego.