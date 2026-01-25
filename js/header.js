// 共通ヘッダーを生成する関数
(function() {
  'use strict';

  // スクリプトファイルのパスからルートへの相対パスを計算（即座に実行）
  const currentScript = document.currentScript;
  let basePath = './';
  
  if (currentScript && currentScript.src) {
    // スクリプトのsrc属性から相対パスを取得（例: "../js/header.js"）
    const scriptRelativePath = currentScript.getAttribute('src');
    if (scriptRelativePath) {
      // "../js/header.js" から "../" を抽出
      const match = scriptRelativePath.match(/^(\.\.\/)+/);
      if (match) {
        basePath = match[0];
      } else if (scriptRelativePath.startsWith('./')) {
        // "./js/header.js" の場合は "./"
        basePath = './';
      }
    }
  }
  
  // フォールバック: 現在のページのパスから計算
  if (basePath === './') {
    const path = window.location.pathname;
    const dirPath = path.replace(/\/[^\/]*$/, '');
    const depth = dirPath.split('/').filter(Boolean).length;
    basePath = depth === 0 ? './' : '../'.repeat(depth);
  }

  // ヘッダーHTMLを生成
  function createHeader() {
    
    // 現在のページに応じたアクティブ状態を判定
    const currentPath = window.location.pathname;
    const isarchive = currentPath.includes('/archive/');
    const isabout = currentPath.includes('/about/');
    
    return `
      <header class="site-header">
        <div class="container">
          <h1 class="site-title"><a href="${basePath}index.html">卓上鯨観測所</a></h1>
          <nav class="site-nav" aria-label="メインメニュー">
            <a href="${basePath}index.html">Top</a>
            <a href="${basePath}archive/">archive</a>
            <a href="${basePath}about/">about</a>
          </nav>
        </div>
      </header>
    `;
  }

  // DOMContentLoaded時にヘッダーを挿入
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      const headerPlaceholder = document.getElementById('header-placeholder');
      if (headerPlaceholder) {
        headerPlaceholder.outerHTML = createHeader();
      }
    });
  } else {
    // すでに読み込み済みの場合
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
      headerPlaceholder.outerHTML = createHeader();
    }
  }
})();