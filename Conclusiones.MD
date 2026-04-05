# Conclusiones - Challenge Técnico React

## Consigna

El challenge pedía desarrollar una app web en React llamada **JuegoContador**, donde el usuario pueda clickear un botón la mayor cantidad de veces posible en 5 segundos. Debía incluir una cuenta regresiva visual, un indicador de puntaje máximo, tiempo restante durante el juego, y estar construida con componentes funcionales.

---

## Claude (Sonnet)

Claude generó una solución funcional en un **único archivo HTML** con todo el código embebido: estilos, lógica y estructura en el mismo lugar.

Lo positivo es que es extremadamente fácil de probar, no requiere instalación ni configuración, simplemente abrís el archivo en el navegador y funciona. Para una demo rápida o para entender la lógica, es muy cómodo.

Sin embargo, meter React, los estilos y el HTML en un solo archivo no es la forma correcta de estructurar un proyecto. No refleja cómo se trabaja en un entorno real, dificulta el mantenimiento a medida que el proyecto crece, y no cumple del todo con el espíritu del requisito 8 de la consigna, que pide un proyecto que se pueda correr en un entorno local con instrucciones claras.

---

## Gemini

Gemini planteó la solución de forma más correcta desde el punto de vista técnico. Indicó instalar React mediante Node.js con `create-react-app` o Vite, y dividió el código en al menos dos archivos: `App.jsx` y `Contador.jsx`.

La instalación es más larga: hay que tener Node instalado, correr los comandos de configuración, instalar dependencias. Pero eso es exactamente lo que pide la consigna. Tener un componente separado para el contador respeta la idea de separación de responsabilidades y hace el código más mantenible, que es uno de los criterios de evaluación explícitos del challenge.

Aunque el proceso inicial sea más engorroso, es la estructura que esperaría ver en un entorno profesional.

---

## Sin IA

Para esta versión tomé como base los códigos generados por los modelos anteriores, entendí la lógica que implementaban y la reescribí por mi cuenta. La estructura final tiene tres archivos separados: `index.html`, `JuegoContador.jsx` y `JuegoContador.css`.

La idea fue usar la IA como punto de partida pero imprimirle un criterio propio, tanto en el diseño como en las decisiones de código.