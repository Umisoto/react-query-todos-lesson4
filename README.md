# React-Django Todos

Task及びTagを管理できるTodoアプリです。
フロントエンドはReact、バックエンドはDjango(Django Rest Framework)を使用しています。

[React-django-todos.webm](https://user-images.githubusercontent.com/85279065/185858255-a83f80c4-d50f-457e-8ebb-62beec92aa77.webm)

## `URL`
[React-Django Todos](https://react-django-todos.herokuapp.com/)

## `使い方`
1.タスク一覧画面  
登録済みのタスクが画面左側に一覧表示されます。各タスクはタグと紐づいています。削除ボタンを押すと該当のタスクを消去でき、編集ボタンを押すと画面右側で該当のタスクを編集できます。 また画面右側では新規タスクの作成も可能です。

2.タグ一覧画面  
登録済みのタグが画面左側に一覧表示されます。タスク一覧画面と同様にタグの登録・削除・編集が可能です。

## `アプリ作成の意図`  
react-queryを使ったサーバーデータのキャッシュ管理及び、Redux toolkitを使ったアプリケーションの状態管理を学習するために作成しました。

## `使用技術`
* react: 18.2.0 (create-react-app)
* react-router-dom: 6.3.0
* @reduxjs/toolkit: 1.8.3
* @tanstack/react-query: 4.0.10
* typescript: 4.7.4
* tailwindcss: 3.0.2
* @heroicons/react: 1.0.6
* axios: 0.27.2
* Django: 4.1
* djangorestframework: 3.13.1
* dj-database-url: 1.0.0
* django-heroku: 0.3.1
* gunicorn: 20.1.0
* whitenoise: 6.2.0

## `システム構成図`


## `機能一覧`
* コンポーネントのメモ化によるレンダリング最適化
* 他人がサーバーのデータを書き換えた場合でも、リアルタイムに変更を反映可能

## `工夫した点`
デプロイ時にフロントエンドとバックエンドを別々のサーバーに分けず、同じサーバーに入れておく方が快適な動作になると考え、Djangoの静的ファイルにビルドしたReactファイルを読み込ませる方法を採用しました。そのためCORSの設定も不要となりました。

## `今後の改善点`
* タスクやタグの並び替え
* リマインダー機能
* 状態管理をRecoil等の別の手段でも試してみる
* テスト

## `ローカルでの動作方法`
```bash
$ git clone https://github.com/Shota-mancity/uber-eats-like3.git
```

```bash
$ cd uber-eats-like3
$ bundle install
$ rails db:migrate
$ rails db:seed
$ rails s
```
サーバーサイドはhttp://localhost:3000 を起動

```bash
$ cd frontend
$ npm install
$ npm start
```
フロントエンドはhttp://localhost:3001 を起動  
アプリケーションはhttp://localhost:3001/restaurants にアクセス