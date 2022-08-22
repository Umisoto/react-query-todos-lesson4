# React-Django Todos

タスク及びタグを管理できるTodoアプリです。
フロントエンドはReact、バックエンドはDjango(Django Rest Framework)を使用しています。

[React-django-todos.webm](https://user-images.githubusercontent.com/85279065/185858255-a83f80c4-d50f-457e-8ebb-62beec92aa77.webm)

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

## `URL`

[React-Django Todos](https://react-django-todos.herokuapp.com/)

## `アプリの使い方`
1.タスク一覧画面  
登録済みのタスクが画面左側に一覧表示されます。各タスクはタグと紐づいています。削除ボタンを押すと該当のタスクを消去でき、編集ボタンを押すと画面右側で該当のタスクを編集できます。 また画面右側では新規タスクの作成も可能です。

2.タグ一覧画面  
登録済みのタグが画面左側に一覧表示されます。タスク一覧画面と同様にタグの登録・削除・編集が可能です。

## `アプリ作成の意図`  
react-queryを使ったサーバーデータのキャッシュ管理及び、Redux toolkitを使ったアプリケーションの状態管理を学習するために作成しました。
