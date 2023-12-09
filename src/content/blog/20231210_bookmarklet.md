---
author: halflite
pubDatetime: 2023-12-10T00:00:00Z
title: ブログ用bookmarkelet
postSlug: 20231210_bookmarklet
featured: false
draft: false
tags:
  - blog
description:
  ほぼ自分用のbookmarkeletのメモ
---

開いたページへのリンクをMarkdown形式で出すbookmarkelet

```javascript
javascript:(function(){var u=location.href;var t=document.title;var tag='['+t+']('+u+' "'+t+'")';prompt('',tag);})();
```

_____

開いたYouTubeへのリンクをMarkdown形式で出すbookmarkelet

```javascript
javascript:(function(){var id=location.href.match(/v=([a-zA-Z0-9_-]{11})/)[1];var t=document.title;var tag='['+t+'](https://youtu.be/'+id+' "'+t+'")';prompt('',tag);})();
```

[TOMOO - Super Ball【OFFICIAL MUSIC VIDEO】 - YouTube](https://youtu.be/SzguJI6S9V4 "TOMOO - Super Ball【OFFICIAL MUSIC VIDEO】 - YouTube")

_____

開いたYouTubeへのサムネイル付きリンクをMarkdown形式で出すbookmarkelet[^1]

```javascript
javascript:(function(){var id=location.href.match(/v=([a-zA-Z0-9_-]{11})/)[1];var t=document.title;var tag='[!['+t+'](https://img.youtube.com/vi/'+id+'/mqdefault.jpg)](https://youtu.be/'+id+' "'+t+'")';prompt('',tag);})();
```

[![TOMOO - Super Ball【OFFICIAL MUSIC VIDEO】 - YouTube](https://img.youtube.com/vi/SzguJI6S9V4/mqdefault.jpg)](https://youtu.be/SzguJI6S9V4 "TOMOO - Super Ball【OFFICIAL MUSIC VIDEO】 - YouTube")

[^1]: [【JS】YouTubeの動画IDからなるべく大きい解像度のサムネイルを取得する方法（API使わずに）](https://zenn.dev/attt/articles/get-yt-thumbnail "【JS】YouTubeの動画IDからなるべく大きい解像度のサムネイルを取得する方法（API使わずに）")