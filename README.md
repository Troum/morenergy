# morEnergy Webseite: Frontend

## Hinweise zum Hosting

Webseiten können nicht über einen direkten Link aufgerufen werden, solange die Serverseite nicht entsprechend konfiguriert ist. Da es sich um eine Single-Page Webseite handelt, funktioniert das Routing anders als bei Standard-Webseiten.

Bei einem Apache Server, kann das Routing mittels einer `.htaccess`-Datei konfiguriert werden.

    <IfModule mod_rewrite.c>
      RewriteEngine On
      RewriteBase /
      RewriteRule ^index\.html$ - [L]
      RewriteCond %{REQUEST_FILENAME} !-f
      RewriteCond %{REQUEST_FILENAME} !-d
      RewriteRule . /index.html [L]
    </IfModule>

Weitere Informationen findet man auf https://cli.vuejs.org/config/#publicpath.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
