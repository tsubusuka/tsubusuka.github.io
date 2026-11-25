# 卓上鯨観測所

tsubusukaのブログ用リポジトリ

## 構成

- `index.html` … Top（最初にアクセスするページ・タイトルやメニューを表示）
- `archive/index.html` … archive（記事一覧）
- `archive/*.html` … 各記事（HTMLで作成）
- `note/index.html` … note 一覧（`_notes/` の内容から自動生成）
- `_notes/*.md` … 各 note（Markdownで作成）
- `_layouts/note.html` … note 本文の共通テンプレート
- `_config.yml` … GitHub Pages（Jekyll）の設定
- `about/index.html` … about（このブログについて・ブログの簡単な説明）
- `style.css` … 共通のスタイル
- `assets/img/` … 記事で使う画像ファイル置き場

## 記事の書き方 / 追加方法

1. `archive/` に新しい HTML ファイルを作る  
   例: `archive/2026-01-01-hello.html`
2. `archive/index.html` の `<ul class="post-list">` に、その記事へのリンクを1行追加する

## note の書き方（スマホからでもOK）

1. スマホのブラウザ（またはGitHubアプリ）でこのリポジトリを開く
2. `_notes` フォルダを開き、「Add file」→「Create new file」
3. ファイル名を `日付-好きな英数字.md` にする  
   例: `2026-11-24-memo.md`（日付はファイル名から自動で付きます）
4. 中身を次の形で書いて「Commit changes」

```markdown
---
title: タイトル
---
ここから本文をMarkdownで書く。
改行はそのまま改行になります。
```

1〜2分で `/note/` の一覧に新しい順で自動表示されます（一覧を手で直す必要はありません）。  
直したいときは、そのファイルを開いて鉛筆アイコンから編集します。

- 先頭の `---` と `title:` の行は必須です（無いとページになりません）
- 画像は `assets/img/` に「Add file」→「Upload files」で上げて、`![説明](/assets/img/xxx.jpg)` と書きます

## 画像の貼り方

1. 画像ファイルを `assets/img/` に置く（例: `assets/img/sample.jpg`）
2. 記事のHTMLの中で、次のように書いて参照する

```html
<img src="/assets/img/sample.jpg" alt="サンプル">
```

## サンプル記事

- `archive/2026-01-01-hello.html` にサンプル記事があります。  
  レイアウトや記法の例として自由に書き換えて使ってください。
