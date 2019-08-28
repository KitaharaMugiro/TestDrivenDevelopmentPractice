# テスト駆動開発をしよう

## スライド資料
[Google Slide](https://docs.google.com/presentation/d/1J9T74p9ICDHaHnq6hox37qt2ydaFUu4_iBlOH0RvtMg/edit?usp=sharing)


## 環境構築
### 事前にインストールが必要な環境
* Docker
* git (optional)
* node (optional)

### Dockerの起動
Dockerを[インストール](https://docs.docker.com/install/)して起動します。
Macの場合は以下のコマンドで立ち上がると思います。

```
open -a Docker
```

### TypeScriptPracticeのクローン

```
git clone https://github.com/KitaharaMugiro/TypeScriptPractice
```

上記のコマンドでホームディレクトリにTypeScriptPracticeがクローンされます。
gitコマンドが使えない場合はURLから直接ダウンロードします。

### コンテナを立ち上げる
以下コマンドでTypeScriptPracticeに移動します。

```
cd TypeScriptPractice
```

次に、以下のコマンドを実行するとdocker-composeファイルに従って環境構築済みのコンテナの作成が始まります。

```
npm run build
```

npmコマンドが実行できない場合は次のコマンドを直接実行してください。

```
docker-compose up --build -d
```

### 開発環境の中に入る
以下のコマンドでコンテナの中に入ることができます。今回の研修で必要なnode, typescript,ts-nodeなどがインストールされています。

```
npm run start
```
 
npmコマンドが実行できない場合は次のコマンドを直接実行してください。

```
docker exec -it typescript-practice sh
```

### 必要なライブラリをインストールする
コンテナ内で`npm install`を実行してください。
mochaなど今回の研修で必要なライブラリがインストールされます。

## テストファイルの実行
`npm run test -s`で全てのテストを実行できます。

FizzBuzzのテスト `npm run test:fizzbuzz -s`
WordCounterのテスト `npm run test:wordcounter -s`
VendingMachineのテスト `npm run test:vendingmachine -s`
RockPaperScissorのテスト `npm run test:rockpaperscissor -s`

## tsファイルの実行
ts-nodeコマンドで実行できます。

```
ts-node src/XXXX.ts
```

##　参考サイト

環境構築の参考にしたサイト
https://qiita.com/n-oshiro/items/3bbd2293e2ff286d9f49