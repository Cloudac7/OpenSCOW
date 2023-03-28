"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[134],{460:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"migrate-to-scow-cli","metadata":{"permalink":"/SCOW/pr-preview/pr-532/blog/migrate-to-scow-cli","editUrl":"https://github.com/PKUHPC/SCOW/edit/main/website/blog/blog/2023-03-29-scow-cli.md","source":"@site/blog/2023-03-29-scow-cli.md","title":"\u4ecescow-deployment\u8fc1\u79fb\u5230scow-cli","description":"\u6211\u4eec\u81f4\u529b\u4e8e\u4ee5\u8ba9\u5927\u5bb6\u66f4\u65b9\u4fbf\u5730\u90e8\u7f72\u3001\u8fd0\u7ef4\u548c\u7ba1\u7406SCOW\u96c6\u7fa4\u3002","date":"2023-03-29T00:00:00.000Z","formattedDate":"March 29, 2023","tags":[{"label":"scow","permalink":"/SCOW/pr-preview/pr-532/blog/tags/scow"},{"label":"scow-cli","permalink":"/SCOW/pr-preview/pr-532/blog/tags/scow-cli"},{"label":"scow-deployment","permalink":"/SCOW/pr-preview/pr-532/blog/tags/scow-deployment"}],"readingTime":2.07,"hasTruncateMarker":false,"authors":[{"name":"Chen Junda","title":"Developer","url":"https://ddadaal.me","imageURL":"https://avatars.githubusercontent.com/u/8363856","key":"chenjunda"}],"frontMatter":{"slug":"migrate-to-scow-cli","title":"\u4ecescow-deployment\u8fc1\u79fb\u5230scow-cli","authors":["chenjunda"],"tags":["scow","scow-cli","scow-deployment"]},"nextItem":{"title":"scow-deployment\u5e73\u6ed1\u5347\u7ea7\u6307\u5bfc","permalink":"/SCOW/pr-preview/pr-532/blog/update-to-python-deployment"}},"content":"\u6211\u4eec\u81f4\u529b\u4e8e\u4ee5\u8ba9\u5927\u5bb6\u66f4\u65b9\u4fbf\u5730\u90e8\u7f72\u3001\u8fd0\u7ef4\u548c\u7ba1\u7406SCOW\u96c6\u7fa4\u3002\\n\\n\u4e4b\u524d\u7684`scow-deployment`\u4e3a\u4e86\u4fdd\u8bc1\u65e0\u9700\u5b89\u88c5\u4f9d\u8d56\u5747\u53ef\u4f7f\u7528\uff0c\u6240\u4ee5\u91c7\u7528\u4e86\u548cSCOW\u5176\u4ed6\u90e8\u5206\u4e0d\u4e00\u6837\u7684python\u8bed\u8a00\u5f00\u53d1\uff0c\u4e14\u65e0\u6cd5\u4f7f\u7528\u7b2c\u4e09\u65b9\u5305\u7684\u529f\u80fd\uff0c\u9650\u5236\u4e86`scow-deployment`\u7684\u529f\u80fd\u3002\\n\\n\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\uff0c\u6211\u4eec\u91cd\u65b0\u7f16\u5199\u4e86`scow-cli`\u3002\u6b64\u5de5\u5177\u6709\u4ee5\u4e0b\u7279\u70b9\uff1a\\n\\n- \u4f7f\u7528`install.yaml`\u8fdb\u884c\u914d\u7f6e\uff0c\u914d\u7f6e\u65b9\u5f0f\u548c\u7cfb\u7edf\u5176\u4ed6\u90e8\u5206\u76f8\u540c\\n- \u53ef\u81ea\u7531\u4f7f\u7528\u7b2c\u4e09\u65b9\u5305\uff0c\u529f\u80fd\u6269\u5c55\u8d77\u6765\u66f4\u52a0\u65b9\u4fbf\\n- \u6b64\u5de5\u5177\u91c7\u7528\u548c\u7cfb\u7edf\u5176\u4ed6\u90e8\u5206\u76f8\u540c\u7684\u6280\u672f\u6808\u7f16\u5199\uff0c\u65b9\u4fbf\u540e\u7eed\u529f\u80fd\u5f00\u53d1\u548c\u7ef4\u62a4\\n- \u6253\u5305\u4e3a\u4e00\u4e2a\u53ef\u4ee5\u76f4\u63a5\u6267\u884c\u7684\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u540c\u6837\u65e0\u9700\u5b89\u88c5\u4efb\u4f55\u4f9d\u8d56\u5373\u53ef\u4f7f\u7528\\n\\n`scow-cli`\u662f\u540e\u7eed\u589e\u52a0\u66f4\u591a\u547d\u4ee4\u884c\u7ef4\u62a4\u529f\u80fd\u7684\u57fa\u7840\uff0c\u5efa\u8bae\u5927\u5bb6\u5c3d\u5feb\u4ece`scow-deployment`\u8fc1\u79fb\u5230`scow-cli`\u3002\\n\\n# \u4ecescow-deployment\u8fc1\u79fb\u5230scow-cli\\n\\n\u4ecescow-deployment\u8fc1\u79fb\u5230scow-cli\u662f\u975e\u5e38\u5bb9\u6613\u7684\u3002\\n\\n\u9996\u5148\uff0c\u8bf7\u5148\u4e0b\u8f7dscow-cli\u5230\u60a8\u7684scow-deployment\u6587\u4ef6\u5939\u4e2d\uff0c\u786e\u4fdd`config.py`\u5b58\u5728\u4e8e\u76ee\u5f55\u4e2d\uff0c\u7136\u540e\u8fd0\u884c\\n\\n```bash\\n./cli migrate\\n```\\n\\n\u6b64\u547d\u4ee4\u5c06\u4f1a\u8bfb\u53d6\u5f53\u524d\u76ee\u5f55\u4e2d`config.py`\u4e2d\u7684\u914d\u7f6e\uff0c\u5e76\u751f\u6210\u5bf9\u5e94\u7684`install.yaml`\u3002\\n\\n\u4e4b\u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u4f7f\u7528scow-cli\u6765\u7ba1\u7406\u60a8\u7684\u96c6\u7fa4\u4e86\u3002\\n\\n# \u5e38\u89c1\u4f7f\u7528\u7684\u5bf9\u7167\\n\\n| \u4f7f\u7528             | `scow-deployment`   | `scow-cli`              |\\n| ---------------- | ------------------- | ----------------------- |\\n| \u542f\u52a8\u7cfb\u7edf         | `./compose up -d`   | `./cli compose up -d`   |\\n| \u505c\u6b62\u7cfb\u7edf         | `./compose down`    | `./cli compose down`    |\\n| \u8ddf\u968f\u67e5\u770b\u6240\u6709\u65e5\u5fd7 | `./compose logs -f` | `./cli compose logs -f` |\\n| \u66f4\u65b0\u955c\u50cf         | `./compose pull`    | `./cli compose pull`    |\\n| \u8fdb\u5165\u6570\u636e\u5e93       | `./db.sh`           | `./cli db`              |"},{"id":"update-to-python-deployment","metadata":{"permalink":"/SCOW/pr-preview/pr-532/blog/update-to-python-deployment","editUrl":"https://github.com/PKUHPC/SCOW/edit/main/website/blog/blog/2022-10-22-update-deployment.md","source":"@site/blog/2022-10-22-update-deployment.md","title":"scow-deployment\u5e73\u6ed1\u5347\u7ea7\u6307\u5bfc","description":"\u4e0a\u4e00\u4e2a\u7248\u672c\uff0cPKUHPC/scow-deployment\u9879\u76ee\u662f\u7eaf\u901a\u8fc7Docker Compose\u5b9e\u73b0\u7684\uff0c\u4e3b\u8981\u7528\u5230\u4e86Docker Compose\u5185\u7f6e\u7684profile\u529f\u80fd\u3001\u8bfb\u53d6\u73af\u5883\u53d8\u91cf\u4ee5\u53ca\u53d8\u91cf\u66ff\u6362\u529f\u80fd\u6765\u5b9e\u73b0\u7c7b\u4f3c\u4e0d\u540c\u914d\u7f6e\u3002\u4f46\u662fDocker Compose\u7684\u8fd9\u4e9b\u529f\u80fd\u8f83\u5f31\uff0c\u65e0\u6cd5\u6ee1\u8db3\u672a\u6765\u66f4\u591a\u81ea\u5b9a\u4e49\u9700\u6c42\u3002","date":"2022-10-22T00:00:00.000Z","formattedDate":"October 22, 2022","tags":[{"label":"scow","permalink":"/SCOW/pr-preview/pr-532/blog/tags/scow"},{"label":"scow-deployment","permalink":"/SCOW/pr-preview/pr-532/blog/tags/scow-deployment"}],"readingTime":2.265,"hasTruncateMarker":false,"authors":[{"name":"Huangjun","title":"Developer","url":"https://blog.csdn.net/huangjun0210?type=blog","imageURL":"https://avatars.githubusercontent.com/u/26295600","key":"huangjun"}],"frontMatter":{"slug":"update-to-python-deployment","title":"scow-deployment\u5e73\u6ed1\u5347\u7ea7\u6307\u5bfc","authors":["huangjun"],"tags":["scow","scow-deployment"]},"prevItem":{"title":"\u4ecescow-deployment\u8fc1\u79fb\u5230scow-cli","permalink":"/SCOW/pr-preview/pr-532/blog/migrate-to-scow-cli"},"nextItem":{"title":"scow\u6587\u6863\u4e0a\u7ebf","permalink":"/SCOW/pr-preview/pr-532/blog/docs-online"}},"content":"\u4e0a\u4e00\u4e2a\u7248\u672c\uff0c`PKUHPC/scow-deployment`\u9879\u76ee\u662f\u7eaf\u901a\u8fc7`Docker Compose`\u5b9e\u73b0\u7684\uff0c\u4e3b\u8981\u7528\u5230\u4e86`Docker Compose`\u5185\u7f6e\u7684`profile`\u529f\u80fd\u3001\u8bfb\u53d6\u73af\u5883\u53d8\u91cf\u4ee5\u53ca\u53d8\u91cf\u66ff\u6362\u529f\u80fd\u6765\u5b9e\u73b0\u7c7b\u4f3c\u4e0d\u540c\u914d\u7f6e\u3002\u4f46\u662f`Docker Compose`\u7684\u8fd9\u4e9b\u529f\u80fd\u8f83\u5f31\uff0c\u65e0\u6cd5\u6ee1\u8db3\u672a\u6765\u66f4\u591a\u81ea\u5b9a\u4e49\u9700\u6c42\u3002\\n\\n\u4e3a\u7b80\u5316\u90e8\u7f72\u7684\u53c2\u6570\u914d\u7f6e\uff0c\u540c\u65f6\u4e3a\u7528\u6237\u63d0\u4f9b\u66f4\u6613\u61c2\u548c\u7075\u6d3b\u7684\u53c2\u6570\u914d\u7f6e\uff0c\u6700\u65b0\u7248\u672c\u7684`PKUHPC/scow-deployment`\u9879\u76ee\u4f7f\u7528`python`\u52a8\u6001\u751f\u6210`Docker Compose`\u6587\u4ef6\uff0c\u6839\u636e\u7528\u6237\u7684\u9700\u6c42\u751f\u6210\u66f4\u6613\u7406\u89e3\u7684`Docker Compose`\u6587\u4ef6\u3002\\n\\n\u63a5\u4e0b\u6765\uff0c\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5e73\u6ed1\u7684\u4ece\u65e7\u7248\u672c\u5347\u7ea7\u81f3\u65b0\u7248\u672c\u3002\\n\\n## 1. \u505c\u6b62scow\u670d\u52a1\\n\\n```shell\\n# \u8fdb\u5165scow-deployment\u9879\u76ee\u76ee\u5f55\\ncd scow-deployment\\n\\n# \u505c\u6b62scow\u670d\u52a1\\ndocker-compose down\\n```\\n\\n## 2. \u5907\u4efd\u914d\u7f6e\u6587\u4ef6\\n\\n\u4e3b\u8981\u5907\u4efd`.env`\u914d\u7f6e\u6587\u4ef6\uff1a\\n\\n```shell\\n# 1. \u521b\u5efa\u5907\u4efd\u76ee\u5f55\\nmkdir /path/to/backup\\n\\n# 2. \u5907\u4efd\u90e8\u7f72\u7684\u73af\u5883\u53d8\u91cf\\ncp .env /path/to/backup\\n\\n```\\n\\n## 3.  \u5347\u7ea7\\n\\n\u62c9\u53d6master\u5206\u652f\u6700\u65b0\u4ee3\u7801\uff1a\\n\\n```shell\\ncd /path/to/scow-deployment\\n# \u540c\u6b65\u6700\u65b0\u4ee3\u7801\\ngit pull\\n```\\n\\n\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a\\n\\n```shell\\ntree -L 1\\n\u251c\u2500\u2500 compose.sh\\t\\t\\t\\t# \u7a0b\u5e8f\u6267\u884c\u5165\u53e3\uff0c\u6267\u884c\u8be5\u811a\u672c\u4f1a\u751f\u6210docker-compose.json\u3001db.sh\u6587\u4ef6\\n\u251c\u2500\u2500 config-example\\t\\t\\t# scow\u4e1a\u52a1\u914d\u7f6e\u6a21\u677f\u6587\u4ef6\u76ee\u5f55\\n\u251c\u2500\u2500 config-example.py\\t\\t# scow\u7cfb\u7edf\u90e8\u7f72\u53c2\u6570\u914d\u7f6e\u6587\u4ef6\u6a21\u677f\\n\u251c\u2500\u2500 fluent\\t\\t\\t\\t\\t# fluent\u914d\u7f6e\u6587\u4ef6\u5b58\u653e\u76ee\u5f55\\n\u251c\u2500\u2500 generate.py\\t\\t\\t\\t# \u90e8\u7f72\u914d\u7f6e\u6587\u4ef6\u751f\u6210python\u811a\u672c\\n\u2514\u2500\u2500 README.md\\n```\\n\\n\u7f16\u5199\u914d\u7f6e\u6587\u4ef6:\\n\\n```shell\\n# 1. \u590d\u5236\u914d\u7f6e\u6587\u4ef6\\ncp config-example.py config.py\\n\\n# 2. \u914d\u7f6e\u53c2\u6570\\n# \u6839\u636e\u548c\u5907\u4efd\u7684.env\u6587\u4ef6\u548cconfig.py\u4e2d\u7684\u53c2\u6570\u8bf4\u660e\uff0c\u4fee\u6539config.py\u6587\u4ef6\u4e2d\u7684\u53c2\u6570\\n\\n```\\n\\n\u670d\u52a1\u542f\u52a8\u4e0e\u505c\u6b62\uff1a\\n\\n```shell\\n# \u542f\u52a8\u670d\u52a1\\n./compose.sh up -d\\n\\n# \u505c\u6b62\u670d\u52a1\\n./compose.sh down\\n```\\n\\n> `./compose.sh`\u652f\u6301\u6240\u6709\u57fa\u4e8e`Docker Compose`\u6587\u4ef6\u7684`docker-compose`\u547d\u4ee4\uff0c\u5982\uff1aup\u3001down\u3001ps\u3001restart\u7b49\u3002\\n\\n\u8be6\u7ec6\u8bf4\u660e\u53ef\u53c2\u8003`PKUHPC/scow-deployment`\u9879\u76ee\u7684[README.md](https://github.com/PKUHPC/scow-deployment/blob/master/README.md)\u3002"},{"id":"docs-online","metadata":{"permalink":"/SCOW/pr-preview/pr-532/blog/docs-online","editUrl":"https://github.com/PKUHPC/SCOW/edit/main/website/blog/blog/2022-04-01-docs-online.md","source":"@site/blog/2022-04-01-docs-online.md","title":"scow\u6587\u6863\u4e0a\u7ebf","description":"scow\u6587\u6863\u7f51\u7ad9\u4e0a\u7ebf\uff01","date":"2022-04-01T00:00:00.000Z","formattedDate":"April 1, 2022","tags":[{"label":"scow","permalink":"/SCOW/pr-preview/pr-532/blog/tags/scow"}],"readingTime":0.035,"hasTruncateMarker":false,"authors":[{"name":"Chen Junda","title":"Developer","url":"https://ddadaal.me","imageURL":"https://avatars.githubusercontent.com/u/8363856","key":"chenjunda"}],"frontMatter":{"slug":"docs-online","title":"scow\u6587\u6863\u4e0a\u7ebf","authors":["chenjunda"],"tags":["scow"]},"prevItem":{"title":"scow-deployment\u5e73\u6ed1\u5347\u7ea7\u6307\u5bfc","permalink":"/SCOW/pr-preview/pr-532/blog/update-to-python-deployment"}},"content":"scow\u6587\u6863\u7f51\u7ad9\u4e0a\u7ebf\uff01"}]}')}}]);