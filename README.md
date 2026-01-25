# 卓上鯨観測所

tsubusukaのブログ用リポジトリ

## 構成

- `index.html` … Top（最初にアクセスするページ・タイトルやメニューを表示）
- `archive/index.html` … archive（記事一覧）
- `archive/*.html` … 各記事（HTMLで作成）
- `about/index.html` … about（このブログについて・ブログの簡単な説明）
- `style.css` … 共通のスタイル
- `assets/img/` … 記事で使う画像ファイル置き場

## 記事の書き方 / 追加方法

1. `archive/` に新しい HTML ファイルを作る  
   例: `archive/2026-01-01-hello.html`
2. `archive/index.html` の `<ul class="post-list">` に、その記事へのリンクを1行追加する

## 画像の貼り方

1. 画像ファイルを `assets/img/` に置く（例: `assets/img/sample.jpg`）
2. 記事のHTMLの中で、次のように書いて参照する

```html
<img src="/assets/img/sample.jpg" alt="サンプル">
```

## サンプル記事

- `archive/2026-01-01-hello.html` にサンプル記事があります。  
  レイアウトや記法の例として自由に書き換えて使ってください。
