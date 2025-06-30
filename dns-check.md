# 🔍 Verificación de DNS para alansalva.online

## Comandos para verificar DNS (ejecutar en PowerShell)

### 1. Verificar registros A:
```powershell
nslookup alansalva.online
```

### 2. Verificar registro CNAME:
```powershell
nslookup www.alansalva.online
```

### 3. Verificar desde diferentes servidores DNS:
```powershell
nslookup alansalva.online 8.8.8.8
nslookup alansalva.online 1.1.1.1
```

## Herramientas online para verificar DNS:
- https://www.whatsmydns.net/
- https://dnschecker.org/
- https://www.nslookup.io/

## Resultados esperados:

### Para `alansalva.online`:
```
alansalva.online
Address: 185.199.108.153
Address: 185.199.109.153
Address: 185.199.110.153
Address: 185.199.111.153
```

### Para `www.alansalva.online`:
```
www.alansalva.online
canonical name = tyhrr.github.io
```

## ✅ Checklist de verificación:
- [x] Registros A configurados correctamente ✅
- [x] Registro CNAME configurado ✅
- [x] DNS propagado globalmente ✅
- [x] Sitio accesible en alansalva.online ✅
- [x] DNS local actualizado ✅
- [ ] Certificado SSL generado (en proceso)
- [ ] HTTPS funcionando correctamente
- [ ] "Enforce HTTPS" habilitado en GitHub

## 🎉 VERIFICACIÓN EXITOSA ($(Get-Date -Format "dd/MM/yyyy HH:mm")):

### ✅ Resultados positivos:
- **Google DNS (8.8.8.8)**: ✅ Resuelve a GitHub Pages
- **Cloudflare DNS (1.1.1.1)**: ✅ Resuelve a GitHub Pages
- **CNAME www**: ✅ Configurado correctamente
- **Propagación global**: ✅ Completada

### ⚠️ Caché local:
- Tu DNS local aún muestra la IP antigua (normal, puede tardar hasta 24h)
- Recomendación: Reinicia tu router o usa `ipconfig /flushdns`
