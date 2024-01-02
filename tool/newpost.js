const fs = require("fs");

// 現在時刻
const now = new Date();
const pubDatetime = `${now.getFullYear()}-${new String(now.getMonth() + 1).padStart(2, 0)}-${now.getDay().toString().padStart(2, 0)}T${now.getHours().toString().padStart(2, 0)}:00:00+09:00`;
const slugPrefix = pubDatetime.replace(/^(\d{4})-(\d{2})-(\d{2}).*/g, '$1$2$3');
const slug = slugPrefix + '_' + process.argv[2];

// テンプレート
const temp = `---
author: halflite
pubDatetime: ${pubDatetime}
title: 仮タイトル
postSlug: ${slug}
featured: false
draft: false
tags:
  - blog
description: 仮タイトル
---
`;

const filename = 'src/content/blog/' + slug + '.md';

// 非同期で書き込みを行う
fs.writeFile(filename, temp, (err, data) => {
  if (err) {
    console.log(err);
  }

  else console.log(`${filename} completed!`);
});
