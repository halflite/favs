---
author: halflite
pubDatetime: 2023-12-09T21:10:00Z
title: 新しいブログの始め方
postSlug: 20231209_how_to_create_blog
featured: false
draft: false
tags:
  - blog
description:
  新しいブログの始め方
---

2023年も暮れになりましたが、この時点でブログを作ろうとすると、実は選択肢狭かったりもしますね…。
無料コースで、広告がうざくないのと言うと、[note](https://note.com/ "note ――つくる、つながる、とどける。")か[Tumblr](https://www.tumblr.com/ "Tumblr")位でしょうか？

自分の大前提として、以下があります。

* 自分用のメモ書き
    * (所謂)バズを狙わない、他者の反応を気にしない
* 広告を出さない
    * 見ている人が不快になる広告をコントロール出来ないのは嫌ですよね
* モバイルで投稿、修正はしない
    * おうちで考えながら投稿する前提です
* Markdownで記事を書ける
* できるだけ安価で

となると、GitHubとNetlify連携で、静的なHTMLを書き出すのが、一番良いのかな、と。

…で、作り始めたら、30分位で公開出来ましたわ。 うわ！今だとこんなに簡単なのか！って。

_____


1. GitHubを開く
2. .gitigonoreとREADME.mdだけ入ったリポジトリを新規作成
3. ローカルで、[RancerDesktop](https://rancherdesktop.io/ "Rancher Desktop by SUSE")と[VSCode](https://azure.microsoft.com/ja-jp/products/visual-studio-code "Visual Studio Code – コード エディター | Microsoft Azure")を立ち上げる
4. VSCodeを使って、GitHubからリポジトリをクローン
5. .devcontainer配下に、Dockerfileで実行環境、devcontainer.jsonに拡張機能設定＆エディタ設定を書く。ここらは以前やったことあるのでほぼコピペ。
6. テンプレート込みのブログエンジンをインストール、今回はAstroだったので一行。
7. ローカルで起動確認
8. GitHubにプッシュ
9. NetlifyにGitHubとのリポジトリ連携を行う
10. もう公開できた！
11. 後は、タイトルとか記事表示設定の変更、ドメイン連携の設定。記事を書く。

_____

Dockerfileは、こんな感じ。Debian 12(bookworm)をベースに、gitと自分の設定を追加する、ですね。

```dockerfile
FROM node:21.4-bookworm-slim
RUN apt update && apt -y install git && \
    git config --global user.name "halflite" && \
    git config --global user.email shingo@halflite.net
```

devcontainer.jsonは、こんな感じ。でも、ここらは人それぞれがあるかも。

```json
{
  "name": "favs",
  "build": {
    "dockerfile": "Dockerfile"
  },
  "customizations": {
    "vscode": {
      "extensions": [
        "ms-ceintl.vscode-language-pack-ja",
        "mhutchie.git-graph"
      ],
      "settings": {
        "editor.formatOnSave": true,
        "editor.tabSize": 2,
        "editor.wordWrapColumn": 200,
        "editor.wordWrap": "wordWrapColumn",
        "files.trimTrailingWhitespace": true
      }
    }
  }
}
```
