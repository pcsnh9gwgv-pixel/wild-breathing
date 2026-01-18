# 🚀 Guía de Despliegue Automático en Netlify

Esta guía te ayudará a configurar el despliegue automático de Wild Breathing en Netlify desde GitHub.

## 📋 Requisitos Previos

- Una cuenta de GitHub
- Una cuenta de Netlify (gratuita)
- Este repositorio subido a GitHub

## 🔧 Configuración Inicial

### Paso 1: Crear repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Crea un nuevo repositorio:
   - Nombre: `wild-breathing` (o el que prefieras)
   - Visibilidad: Público o Privado (según prefieras)
   - NO inicialices con README (ya tienes uno)

3. Sube el código a GitHub:
```bash
git remote add origin https://github.com/TU-USUARIO/wild-breathing.git
git branch -M main
git push -u origin main
```

### Paso 2: Conectar Netlify con GitHub

1. Ve a [Netlify](https://app.netlify.com) e inicia sesión
2. Click en "Add new site" → "Import an existing project"
3. Selecciona "Deploy with GitHub"
4. Autoriza a Netlify para acceder a tu cuenta de GitHub
5. Selecciona el repositorio `wild-breathing`

### Paso 3: Configurar el despliegue

Netlify detectará automáticamente la configuración de `netlify.toml`, pero verifica:

- **Branch to deploy**: `main`
- **Build command**: (dejar vacío o `echo 'No build required'`)
- **Publish directory**: `.` (punto, ya que es la raíz)

Click en "Deploy site"

### Paso 4: Configurar dominio personalizado (Opcional)

1. En el dashboard de Netlify, ve a "Domain settings"
2. Click en "Add custom domain"
3. Ingresa `wildbreathing.com`
4. Sigue las instrucciones para configurar los DNS:

#### Configuración DNS recomendada:

**Para dominio root (wildbreathing.com):**
```
Type: A
Name: @
Value: 75.2.60.5
```

**Para www:**
```
Type: CNAME
Name: www
Value: [tu-sitio].netlify.app
```

5. Espera a que se propague el DNS (puede tardar hasta 48 horas)
6. Netlify configurará automáticamente el certificado SSL (HTTPS)

## ⚡ Auto-Deploy

Una vez configurado, cada vez que hagas `git push` a la rama `main`:

1. GitHub notificará a Netlify
2. Netlify iniciará el despliegue automáticamente
3. En 1-2 minutos, los cambios estarán en vivo

### Workflow de desarrollo:

```bash
# 1. Hacer cambios en el código
# 2. Guardar y probar localmente

# 3. Commit y push
git add .
git commit -m "feat: descripción de cambios"
git push origin main

# 4. Netlify desplegará automáticamente
# 5. Verificar en https://tu-sitio.netlify.app
```

## 🔍 Monitoreo de Despliegues

1. Ve al dashboard de Netlify
2. Click en "Deploys" para ver el historial
3. Cada deploy muestra:
   - Estado (Success, Failed, Building)
   - Duración
   - Log completo
   - Preview del sitio

## 🛠️ Configuración Avanzada

### Variables de Entorno

Si necesitas variables de entorno (API keys, etc.):

1. En Netlify dashboard → "Site settings"
2. "Environment variables"
3. Click "Add a variable"
4. Añade: `KEY=value`

### Notificaciones

Configurar notificaciones para despliegues:

1. "Site settings" → "Build & deploy"
2. "Deploy notifications"
3. Añadir notificación (Email, Slack, Discord, etc.)

### Build Hooks

Para desplegar desde otros servicios:

1. "Site settings" → "Build & deploy"
2. "Build hooks"
3. "Add build hook"
4. Usa la URL webhook generada

## 📊 Headers de Seguridad

El archivo `netlify.toml` ya incluye headers de seguridad:

- `X-Frame-Options`: Protege contra clickjacking
- `X-Content-Type-Options`: Previene MIME sniffing
- `X-XSS-Protection`: Protección XSS
- `Referrer-Policy`: Control de información de referencia
- `Permissions-Policy`: Control de APIs del navegador

## 🔄 Redirecciones y Pretty URLs

El archivo `_redirects` configura:

- URLs limpias sin `.html`
- Redirecciones 301/302
- Fallback a index.html para SPA

## 📱 Preview Deploys

Netlify crea previews automáticos para:

- **Pull Requests**: Cada PR tiene su preview único
- **Branch deploys**: Otras ramas pueden tener deploys automáticos

Configurar en: "Site settings" → "Build & deploy" → "Deploy contexts"

## 🐛 Troubleshooting

### El sitio no se actualiza

1. Verifica que el push se haya completado en GitHub
2. Revisa el log de deploy en Netlify
3. Limpia el caché: "Deploys" → "Trigger deploy" → "Clear cache and deploy"

### Error 404

- Verifica `_redirects` y `netlify.toml`
- Asegúrate de que `publish = "."` apunta al directorio correcto

### Errores de Build

- Revisa el log completo en Netlify
- Verifica que todos los archivos estén en el repositorio
- Asegúrate de que `netlify.toml` esté en la raíz

## 📞 Soporte

- [Documentación de Netlify](https://docs.netlify.com/)
- [Foro de la comunidad](https://answers.netlify.com/)
- [Estado de Netlify](https://www.netlifystatus.com/)

## ✅ Checklist de Configuración

- [ ] Repositorio creado en GitHub
- [ ] Código subido a GitHub
- [ ] Sitio creado en Netlify
- [ ] Despliegue inicial exitoso
- [ ] Dominio personalizado configurado (opcional)
- [ ] SSL/HTTPS activo
- [ ] Auto-deploy funcionando
- [ ] Notificaciones configuradas (opcional)

## 🎉 ¡Listo!

Tu sitio ahora se despliega automáticamente cada vez que haces push a GitHub.

**URLs importantes:**
- Sitio Netlify: https://[tu-sitio].netlify.app
- Dashboard: https://app.netlify.com/sites/[tu-sitio]
- Dominio personalizado: https://wildbreathing.com (cuando esté configurado)

---

**Última actualización**: Enero 2024
