# Reloj PWA

Este proyecto es una **Progressive Web App (PWA)** que muestra la hora actual en tiempo real y permite instalarse en dispositivos móviles, similar a una aplicación nativa. Está desarrollada únicamente con **HTML, CSS y JavaScript puro**, sin frameworks ni servidores adicionales.

---

## 📌 Características

- Reloj en tiempo real con actualización cada segundo.
- Fecha en español debajo del reloj, con formato largo (día, mes, año, día de la semana).
- Diseño moderno con recuadros, fondo degradado y tipografía grande.
- Botón de instalación para añadir la app al dispositivo móvil.
- Implementación completa de **service worker** para cacheo offline.
- Archivo **manifest.json** configurado para permitir la instalación y mostrar iconos.

---

## 🛠 Archivos del proyecto

| Archivo            | Descripción |
|-------------------|-------------|
| `index.html`       | Archivo principal de la aplicación. Contiene la estructura del reloj y el botón de instalación. |
| `style.css`        | Estilos CSS que replican el diseño moderno del reloj y la interfaz. |
| `app.js`           | Lógica para actualizar el reloj y manejar la instalación de la PWA. |
| `sw.js`            | Service Worker para cacheo offline y funcionamiento como PWA. |
| `sw-register.js`   | Registro del Service Worker en el navegador. |
| `manifest.json`    | Configuración de la PWA (nombre, iconos, colores, orientación). |
| `icon-192.png`     | Icono de la app tamaño 192x192 px. |
| `icon-512.png`     | Icono de la app tamaño 512x512 px. |

---

## 🚀 Cómo usar

1. Clona o descarga este repositorio:

```bash
git clone https://github.com/PabloVReyes/pwa-hora.git