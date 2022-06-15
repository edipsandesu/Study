<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>エディップのブログ-ブログ概要</title>
  <link rel="stylesheet" href="CSS/gaiyo.css">
   <!--google上のハンバーガーメニューのリンク-->
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
</head>
<body>
  <header>
    <h1>このブログについて</h1>
  </header>

  <main>
    <p>このサイトでは雑多な話題について発信します。</p>
    <br>

    <div class="category">
      <h1 class="midasi">カテゴリー</h1>
      <ul>
        <li><a href="home.php">トップ</li>
        <li><a href="">仕事</a></li>
        <li><a href="">趣味</a></li>
      <ul>
    </div>

    <div class="month">
      <label>月別アーカイブ</label>
      <select id="select">
        <option>見たい月を選択してください</option>
        <option value="akaibu/akaibu_2022_1.php">1月</option>
        <option>2月</option>
        <option>3月</option>
        <option>4月</option>
        <option>5月</option>
        <option>6月</option>
        <option>7月</option>
        <option>8月</option>
        <option>9月</option>
        <option>10月</option>
        <option>11月</option>
        <option>12月</option>
      </select>
    </div>
  </main>

  <div class="menu">
    <span class="material-icons" id="open">menu</span>
  </div>

  <div class="menu_close">
    <span class="material-icons" id="close">close</span>
    <nav>
      <ul>
        <li><a href="">ブログ概要</a></li>
        <li><a href="">仕事</a></li>
        <li><a href="">趣味</a></li>
        <li><a href="GAME/GAME.php">練習プログラム</a></li>
      </ul>
    <nav>
  </div>

  <br>
  <footer>
    <a href = "home.php">戻る</a>
  </footer>

  <script src="JS/about.js"></script>
</body>
</html>