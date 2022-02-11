# wordpress-dev-create-block

# 環境構築
```
$ npx @wordpress/create-block block-name
$ cd block-name
use wp-env
$ npm install @wordpress/env --save-dev
```

# 動作確認
```
$ npm start

web: http://localhost:8888/

admin: http://localhost:8888/wp-admin
user: admin
password: password
```

# you can run several commands
```
Starts the build for development.
$ npm start

Builds the code for production.
$ npm run build

Formats files.
$ npm run format

Lints CSS files.
$ npm run lint:css

Lints JavaScript files.
$ npm run lint:js

Updates WordPress packages to the latest version.
$ npm run packages-update
```
