# expressとreactのサンプル

## USAGE

モジュールのinstall

```
npm i
```

サーバ側とフロントの開発用サーバをそれぞれ起動
```
$ npm run serve
$ npm run dev
```
これでapiサーバが localhost:3000
フロント側が localhost:3001
で起動するはず

## DBマイグレーション
DBマイグレーションとサンプルデータの挿入ができる
```
$ npm run db:migrate
$ npm run db:seed
```
※ dbへの接続設定は/config/config.jsonの中を各自の環境に合わせて変更すること