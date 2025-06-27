# 🌐 Configuración de Dominio Personalizado - alansalva.online

## 📋 Pasos para Configurar tu Dominio

### 1. ✅ Archivos de GitHub (Ya Completados)
- [x] Archivo `CNAME` creado con `alansalva.online`
- [x] URLs actualizadas en `index.html`
- [x] Meta tags Open Graph y Twitter Card actualizados
- [x] README actualizado con nuevo dominio

### 2. 🌐 Configuración DNS (Debes Hacer en tu Proveedor de Dominio)

Necesitas configurar los siguientes registros DNS en tu proveedor de dominio:

#### Opción A: Usando CNAME (Recomendado)
```
Tipo: CNAME
Nombre: www
Valor: tyhrr.github.io

Tipo: A (para el dominio raíz)
Nombre: @
Valor: 185.199.108.153
Valor: 185.199.109.153
Valor: 185.199.110.153
Valor: 185.199.111.153
```

#### Opción B: Solo registros A
```
Tipo: A
Nombre: @
Valor: 185.199.108.153

Tipo: A
Nombre: @
Valor: 185.199.109.153

Tipo: A
Nombre: @
Valor: 185.199.110.153

Tipo: A
Nombre: @
Valor: 185.199.111.153
```

### 3. 🔒 Configuración en GitHub Pages

Una vez configurado el DNS:

1. Ve a https://github.com/tyhrr/portfolio-optimized/settings/pages
2. En "Custom domain", ingresa: `alansalva.online`
3. Marca "Enforce HTTPS" cuando esté disponible
4. GitHub verificará automáticamente tu dominio

### 4. ⏱️ Tiempos de Propagación

- **DNS**: 1-48 horas (normalmente 1-4 horas)
- **SSL Certificate**: 10-30 minutos después de la verificación DNS
- **GitHub Pages**: 2-10 minutos para actualizar

### 5. 🧪 Verificación

Puedes verificar el estado con estos comandos:

```bash
# Verificar DNS
nslookup alansalva.online

# Verificar GitHub Pages
gh api repos/tyhrr/portfolio-optimized/pages

# Verificar SSL
curl -I https://alansalva.online
```

### 6. 📱 Proveedores de Dominio Comunes

#### Cloudflare
1. Dashboard > DNS > Records
2. Agregar registros A y CNAME
3. Asegurar que el proxy esté desactivado (nube gris)

#### Namecheap
1. Domain List > Manage > Advanced DNS
2. Agregar registros según la configuración arriba

#### GoDaddy
1. My Products > DNS > Manage Zones
2. Agregar registros DNS

#### Google Domains
1. My Domains > DNS
2. Agregar registros personalizados

### 7. 🎯 URLs Finales

Una vez configurado correctamente:

- **Principal**: https://alansalva.online
- **Alternativo**: https://www.alansalva.online (redirige al principal)
- **GitHub**: https://tyhrr.github.io/portfolio-optimized (redirige al principal)

### 8. 🔧 Solución de Problemas

#### Si el dominio no funciona:
1. Verifica que los registros DNS estén correctos
2. Espera tiempo de propagación (hasta 48h)
3. Verifica en GitHub Pages settings que el dominio esté verificado
4. Revisa que no haya conflictos de CNAME

#### Si hay problemas de SSL:
1. Espera a que GitHub genere el certificado SSL
2. Verifica que "Enforce HTTPS" esté habilitado
3. El certificado puede tardar hasta 24h en generarse

### 9. 📊 Verificación Final

Cuando todo esté configurado:
- ✅ https://alansalva.online debe cargar tu portfolio
- ✅ SSL certificate debe estar activo (candado verde)
- ✅ GitHub Pages settings debe mostrar "Custom domain: alansalva.online ✓"

---

## 🚀 Próximos Pasos

1. **Configurar DNS** en tu proveedor de dominio
2. **Esperar propagación** (1-4 horas típicamente)
3. **Verificar configuración** en GitHub Pages
4. **Habilitar HTTPS** cuando esté disponible
5. **Probar dominio** en diferentes dispositivos

¿Necesitas ayuda con algún paso específico? ¡Avísame!
