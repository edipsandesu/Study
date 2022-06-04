<?php
date_default_timezone_set('Asia/Tokyo');
include("head.php");
?>
  <title>ポートフォリオサイト</title>
  <link rel="stylesheet" href="CSS/Home_Style.css">
  <!--google上のハンバーガーメニューのリンク-->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
</head>
<body>
  <header>
    <div class="Home">
      <h1>佐藤のポートフォリオ</h1>
      <p>ポートフォリオサイトです。プログラムの勉強中です</p>
    </div>
  </header>

  <!--ハンバーガーメニュー-->
  <div class="menu">
    <span class="material-icons" id="open">menu</span>
  </div>

  
  <div class="menu_close">
    <span class="material-icons" id="close">close</span>
    <nav>
      <ul>
        <li><a href="gaiyo.php">概要</a></li>
        <li><a href="">仕事</a></li>
        <li><a href="">趣味</a></li>
      </ul>
    </nav>
  </div>

  <main>
    <div class="idou">
      <label>月別アーカイブ</lable>
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

    <div class="box">
      <div class="blog_title">
        <div class="time_2021_12">
          <a href="file/No1.php">はじめまして</a>
          <br><br>
          <a href="file/No2.php">テスト1</a>
          <br><br>
          <a href="file/No3.php">テスト2</a>
        </div>
      </div>

      <div class="category">
        <h1>メニュー</h1>
        <div class="cate-li">
          <ul>
            <li><a href="gaiyo.php">概要</a></li>
            <li><a href="">仕事</a></li>
            <li><a href="">趣味</a></li>
          </ul>
        </div>
      </div>
  </main>
  <script src="JS/home.js"></script>
</body>
</html>