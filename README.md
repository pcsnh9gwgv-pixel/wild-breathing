# Wild Breathing

Sitio web oficial de Wild Breathing - Terapia respiratoria y bienestar.

## 🌐 Sitio en vivo

- **URL Principal**: https://wildbreathing.com
- **Netlify**: https://superlative-queijadas-381e02.netlify.app

## 📋 Características

- ✅ Sitio web estático responsivo
- ✅ Dashboard con autenticación vía Google Sheets
- ✅ Sistema de recuperación de contraseña con emails automáticos
- ✅ Formulario de contacto
- ✅ Páginas legales (Aviso Legal, Privacidad, Cookies)
- ✅ SEO optimizado (robots.txt, sitemap.xml)

## 🚀 Despliegue Automático

Este repositorio está configurado para despliegue automático en Netlify usando GitHub.

### ⚡ Auto-Deploy

Cada vez que hagas `git push` a la rama `main`, el sitio se desplegará automáticamente en Netlify en 1-2 minutos.

### 📖 Configuración inicial

Ver [NETLIFY-SETUP.md](NETLIFY-SETUP.md) para instrucciones completas de cómo conectar este repositorio con Netlify.

### 📋 Archivos de configuración

- `netlify.toml` - Configuración principal, headers de seguridad, optimización de cache
- `_redirects` - Pretty URLs y redirecciones
- `NETLIFY-SETUP.md` - Guía completa de configuración

## 🔄 Workflow

```bash
# Hacer cambios en el código
git add .
git commit -m "feat: nueva funcionalidad"
git push origin main

# Netlify desplegará automáticamente en ~2 minutos
```

## 🛠️ Tecnologías

- HTML5
- CSS3
- JavaScript (Vanilla)
- Google Sheets API (para autenticación)

## 📁 Estructura del proyecto

```
.
├── index.html              # Página principal
├── dashboard.html          # Panel de usuario
├── login.html             # Página de login
├── reset-password.html    # Recuperación de contraseña
├── contacte.html          # Formulario de contacto
├── sobre-mi.html          # Acerca de
├── captacion.html         # Página de captación
├── gracies.html           # Página de agradecimiento
├── avis-legal.html        # Aviso legal
├── privacitat.html        # Política de privacidad
├── cookies.html           # Política de cookies
├── css/                   # Hojas de estilo
├── js/                    # Scripts JavaScript
├── images/                # Recursos gráficos
├── robots.txt             # Configuración para bots
├── sitemap.xml            # Mapa del sitio
├── netlify.toml           # Configuración de Netlify
├── _redirects             # Redirecciones y pretty URLs
└── NETLIFY-SETUP.md       # Guía de despliegue automático
```

## 🔐 Credenciales de prueba

Para probar el dashboard:

- **Usuario**: demo
- **Contraseña**: demo123

## 📝 Licencia

© 2024 Wild Breathing. Todos los derechos reservados.

## 📧 Contacto

Para más información, visita [wildbreathing.com](https://wildbreathing.com)
