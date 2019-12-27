define('docs/renderers/Page.md', function(require, exports, module) {

  module.exports = {
    "html": "<h2><a class=\"anchor\" name=\"page\" href=\"#page\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Page</h2><p>页面渲染器，他主要包含标题，副标题，提示信息等设置，需要注意的是，他有三个容器区域分别是：内容区、边栏区和工具条区，在容器里面放不同的渲染器，就能配置出不同的页面来。</p>\n<p>可以配置 <code>initApi</code> 从远端拉取数据，拉取的数据可以在整个页面级别使用。</p>\n<div class=\"amis-preview\" style=\"height: 400px\"><script type=\"text/schema\" height=\"400\">{\n  \"type\": \"page\",\n  \"title\": \"Title\",\n  \"subTitle\": \"SubTitle\",\n  \"remark\": \"Remark\",\n  \"aside\": \"Aside\",\n  \"body\": \"时间: ${date | date}\",\n  \"toolbar\": \"Toolbar\",\n  \"initApi\": \"https://houtai.baidu.com/api/mock2/service/data\"\n}\n</script></div>\n<blockquote>\n<p>PS: 代码支持及时编辑预览</p>\n</blockquote>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>&quot;page&quot;</code></td>\n<td>指定为 Page 渲染器。</td>\n</tr>\n<tr>\n<td>title</td>\n<td><code>string</code></td>\n<td></td>\n<td>页面标题</td>\n</tr>\n<tr>\n<td>subTitle</td>\n<td><code>string</code></td>\n<td></td>\n<td>页面副标题</td>\n</tr>\n<tr>\n<td>remark</td>\n<td><code>string</code></td>\n<td></td>\n<td>标题附近会出现一个提示图标，鼠标放上去会提示该内容。</td>\n</tr>\n<tr>\n<td>aside</td>\n<td><a href=\"/amis/docs/renderers/Types#Container\">Container</a></td>\n<td></td>\n<td>往页面的边栏区域加内容</td>\n</tr>\n<tr>\n<td>toolbar</td>\n<td><a href=\"/amis/docs/renderers/Types#Container\">Container</a></td>\n<td></td>\n<td>往页面的右上角加内容，需要注意的是，当有 Title 是，区域在右上角，没有时区域就在顶部</td>\n</tr>\n<tr>\n<td>body</td>\n<td><a href=\"/amis/docs/renderers/Types#Container\">Container</a></td>\n<td></td>\n<td>往页面的内容区域加内容</td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>外层 dom 类名</td>\n</tr>\n<tr>\n<td>toolbarClassName</td>\n<td><code>string</code></td>\n<td><code>v-middle wrapper text-right bg-light b-b</code></td>\n<td>Toolbar dom 类名</td>\n</tr>\n<tr>\n<td>bodyClassName</td>\n<td><code>string</code></td>\n<td><code>wrapper</code></td>\n<td>Body dom 类名</td>\n</tr>\n<tr>\n<td>asideClassName</td>\n<td><code>string</code></td>\n<td><code>w page-aside-region bg-auto</code></td>\n<td>Aside dom 类名</td>\n</tr>\n<tr>\n<td>headerClassName</td>\n<td><code>string</code></td>\n<td><code>bg-light b-b wrapper</code></td>\n<td>Header 区域 dom 类名</td>\n</tr>\n<tr>\n<td>initApi</td>\n<td><a href=\"/amis/docs/renderers/Types#Api\">Api</a></td>\n<td></td>\n<td>Page 用来获取初始数据的 api。返回的数据可以整个 page 级别使用。</td>\n</tr>\n<tr>\n<td>initFetch</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>是否起始拉取 initApi</td>\n</tr>\n<tr>\n<td>initFetchOn</td>\n<td><code>string</code></td>\n<td></td>\n<td>是否起始拉取 initApi, 通过表达式配置</td>\n</tr>\n<tr>\n<td>interval</td>\n<td><code>number</code></td>\n<td><code>3000</code></td>\n<td>刷新时间(最低 3000)</td>\n</tr>\n<tr>\n<td>silentPolling</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>配置刷新时是否显示加载动画</td>\n</tr>\n<tr>\n<td>stopAutoRefreshWhen</td>\n<td><code>string</code></td>\n<td><code>&quot;&quot;</code></td>\n<td>通过<a href=\"/amis/docs/renderers/Types#表达式\">表达式</a>来配置停止刷新的条件</td>\n</tr>\n</tbody>\n</table>\n<h3><a class=\"anchor\" name=\"%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E\" href=\"#%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>接口说明</h3><p>开始之前请你先阅读<a href=\"/amis/docs/api\">整体要求</a>。</p>\n<h4><a class=\"anchor\" name=\"initapi\" href=\"#initapi\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>initApi</h4><p>Page 渲染器可以配置 initApi 来拉取后端数据。</p>\n<p><strong>发送：</strong></p>\n<p>默认不发送任何参数，如果有需要，在这可以取地址栏上的参数，假如地址栏携带了 id=1 这个参数, 那么接口这么配置就能把 id 作为 query 参数发送给后端。</p>\n<pre><code class=\"lang-json\">{\n  <span class=\"hljs-attr\">\"initApi\"</span>: <span class=\"hljs-string\">\"/api/xxx?id=${id}\"</span>\n}\n</code></pre>\n<p><strong>响应：</strong></p>\n<p>data 返回是对象即可。</p>\n<pre><code class=\"lang-json\">{\n  <span class=\"hljs-attr\">\"status\"</span>: <span class=\"hljs-number\">0</span>,\n  <span class=\"hljs-attr\">\"msg\"</span>: <span class=\"hljs-string\">\"\"</span>,\n  <span class=\"hljs-attr\">\"data\"</span>: {\n    <span class=\"hljs-attr\">\"a\"</span>: <span class=\"hljs-number\">1</span>\n  }\n}\n</code></pre>\n<p>当配置了 initApi 且返回如上数据后，当前 page 渲染器，以及所有孩子渲染器都能取到这个这个变量了如：</p>\n<pre><code class=\"lang-json\">{\n  <span class=\"hljs-attr\">\"type\"</span>: <span class=\"hljs-string\">\"page\"</span>,\n  <span class=\"hljs-attr\">\"initApi\"</span>: <span class=\"hljs-string\">\"/api/xxx\"</span>,\n  <span class=\"hljs-attr\">\"body\"</span>: <span class=\"hljs-string\">\"${a}\"</span>\n}\n</code></pre>\n\n\n<div class=\"m-t-lg b-l b-info b-3x wrapper bg-light dk\">文档内容有误？欢迎大家一起来编写，文档地址：<i class=\"fa fa-github\"></i><a href=\"https://github.com/baidu/amis/tree/master/docs/renderers/Page.md\">/docs/renderers/Page.md</a>。</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "Page",
          "fragment": "page",
          "fullPath": "#page",
          "level": 2,
          "children": [
            {
              "label": "接口说明",
              "fragment": "%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E",
              "fullPath": "#%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E",
              "level": 3,
              "children": [
                {
                  "label": "initApi",
                  "fragment": "initapi",
                  "fullPath": "#initapi",
                  "level": 4
                }
              ]
            }
          ]
        }
      ],
      "level": 0
    }
  };

});
