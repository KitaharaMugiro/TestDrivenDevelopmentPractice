# TypeScript Node.js
ここを参考に環境構築しました
https://qiita.com/n-oshiro/items/3bbd2293e2ff286d9f49

## 環境構築
### Dockerの起動
Dockerを[インストール](https://docs.docker.com/install/)して起動してください。
Macの場合は以下のコマンドで立ち上がると思います。

```
open -a Docker
```

### 本プロジェクトのクローン

```
git clone url
```

### npm run build
TypeScriptPractice(本プロジェクト)で`npm run build`を実行してください
docker-composeファイルに従って環境構築済みのコンテナの作成が始まります。
Dockerを誤って終了してしまった時はここからスタートしてください。

３、`npm run start`を実行してください。
コンテナの中に入ることができます。

４、`npm install`を実行してください(1回だけでOK)
必要なライブラリがインストールされます。

## テストファイルの実行
`npm run test`でテストを実行できます。
testフォルダに入っているtsファイルをmochaで実行します。

## tsファイルの実行
ts-nodeコマンドで実行できます。

```
ts-node src/XXXX.ts
```