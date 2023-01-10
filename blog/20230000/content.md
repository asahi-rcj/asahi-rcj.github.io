##### 公開:2023/00/00 更新:2023/00/00 writer:あさひ([@asahi_robocuper](https://twitter.com/asahi_robocuper))
---
<br>

# 九州ブロック2023の反省的な何か

<br>
<img src="title.png" class="postpic"> 
<br>

## 九州ブロック、優勝しました
---
<br>

<center>
    <blockquote class="twitter-tweet">
        <p lang="ja" dir="ltr">
            九州ブロック優勝！！！！！！！！！！<br>
            やったぜ！！！！！！！！！！！！！！
            <a href="https://t.co/tuIBvxy5DG">
                https://pbs.twimg.com/media/Fl8wcUaaAAEMb-K?format=jpg&name=4096x4096
            </a>
        </p>
        &mdash; あさひ (@asahi_robocuper) 
        <a href="https://twitter.com/asahi_robocuper/status/1612060493056999424">
            January 23, 2022
        </a>
    </blockquote> 
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8">
    </script>
</center>

<br>
どうも、あさひです。<br>
ついに九州ブロック優勝しました！！！がんばっててよかった。<br>
そんなわけで、九州ブロックの振り返りをしつつ、反省点などをまとめていきたいなと思います。<br>
<br>
<br>

## 九州ブロックの概要
---
九州ブロック2023ではSoccer(LightWeight/OpenLeague/Beginner)、OnStage、Rescue の三種目(?)での試合・発表が行われました。<br>
ライトウェイト、オープンリーグはそれぞれ5チーム、2チーム出てた気がします。<br>
ちなみに総当たりで四試合連続だったのでめちゃくちゃ疲れた記憶があります。(1日前)<br>
<br>
<br>

## ロボット詳細
---
<br>

| 種類 | 使用部品 |
| :---- | :---- |
|メインマイコン|TJ3B Loader 2620|
|サブマイコン|SeeeduinoXiao<br>(ジャイロ・ボールセンサ専用) 
|ボールセンサ|TSSP58038 x 8|
|ジャイロセンサ|MPU6050|
|ラインセンサ|S4282-51 x 16|
|カメラ|OpenMV H7|

<br>
九州ブロックのハードウェアの構成はこんな感じでした。<br>
OpenMVのPWM出力が19%くらいから始まってたりとか、IR Ringの出力が不安定だったりと、改善点がたくさんでしたがひとまずいい感じに動いてたのでよかったと思います。<br>
<br>
<br>

## 大会までに取り組んだこと
---
### 〇カメラのプログラム調整
現状、OpenMVからのPWMが3ピンしか出せないので、ゴールの角度・距離を取ろうとすると黄色か青色のどちらかしか出力できませんでした。<br>
そこで、ゴールの大きさを比較し、大きいほう、小さいほうに合わせて取得するゴールの色を決定することで、プログラムを変更しなくても陣地変更ができるようになりました。<br>
まあ、その結果、どっちのロボットが大きいほうのゴールをとるのかとかがゴッチャになっちゃったんですけどね…。<br>
<br>

### 〇三角関数を利用したボールの回り込み
今までは角度ごとに条件分岐をしてボールにアプローチしていました。<br>
しかし、今回の大会では、ボールの角度を三角関数に代入し、返ってきた値を計算することできれいな回り込み(?)を実現しました。<br>
オウンゴール対策があまりできてなかったので、そこは要修正かなという感じです。<br>
<br>

### 〇ゴール方向への姿勢制御
<center>
    <blockquote class="twitter-tweet">
        <p lang="ja" dir="ltr">
            ゴール方向の姿勢制御<br>
            いい感じでは？？    
            <a href=" https://twitter.com/asahi_robocuper/status/1605537274728284160">
                https://twitter.com/asahi_robocuper/status/1605537274728284160
            </a>
        </p>
        &mdash; あさひ (@asahi_robocuper) 
        <a href=" https://twitter.com/asahi_robocuper/status/1605537274728284160">
            January 23, 2022
        </a>
    </blockquote> 
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8">
    </script>
</center>
<br>
これです。今回の大会でも結構発揮してくれました。<br>
さっきも言った通り、出力値がおかしかったりできれいに制御することはできなかったですが、それでも相手側の中立点に置かれた時のゴール率が格段に上がったのでよかった…！<br>
特にカメラで敵ロボットがいる場所以外のゴールの中心の角度を出力しているため、敵避け的な役割も果たしてくれました。<br>
後はPIDのそれぞれの要素のゲインを調整してきれいにできたらいいなと思ってます。<br>
<br>
<br>

## 電源基板が燃えちゃった(誇張表現)
---
4試合目直前、2機の機体から煙が立ちました。めちゃくちゃ焦った！！<br>
何かと思い抹茶くんに見てもらったところ、電源基盤のパターンがはがれた？らしいです。ﾋｴ~<br>
原因不明の過電流らしい(謎)、まじで火が上がるレベルとかじゃなくてよかった～～！！<br>
ちなみにこれが原因で全国大会までに基板の作り直しが決定しております(死亡)<br>
<br>
<br>

##　まとめ・次に向けて
---
色々反省点がありました。<br>
<br>
<br>
