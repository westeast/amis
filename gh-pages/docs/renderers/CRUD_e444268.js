define('docs/renderers/CRUD.md', function(require, exports, module) {

  module.exports = {
    "html": "<h2><a class=\"anchor\" name=\"crud\" href=\"#crud\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>CRUD</h2><p>增删改查模型，主要用来展现列表，并支持各类【增】【删】【改】【查】的操作。</p>\n<p>CRUD 支持三种模式：<code>table</code>、<code>cards</code>、<code>list</code>，默认为 <code>table</code>。</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td><code>string</code></td>\n<td></td>\n<td><code>type</code> 指定为 CRUD 渲染器</td>\n</tr>\n<tr>\n<td>mode</td>\n<td><code>string</code></td>\n<td><code>&quot;table&quot;</code></td>\n<td><code>&quot;table&quot; 、 &quot;cards&quot; 或者 &quot;list&quot;</code></td>\n</tr>\n<tr>\n<td>title</td>\n<td><code>string</code></td>\n<td><code>&quot;&quot;</code></td>\n<td>可设置成空，当设置成空时，没有标题栏</td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>表格外层 Dom 的类名</td>\n</tr>\n<tr>\n<td><a href=\"#api\">api</a></td>\n<td><a href=\"/amis/docs/renderers/Types#Api\">Api</a></td>\n<td></td>\n<td>CRUD 用来获取列表数据的 api。</td>\n</tr>\n<tr>\n<td>loadDataOnce</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>是否一次性加载所有数据（前端分页）</td>\n</tr>\n<tr>\n<td>source</td>\n<td><code>string</code></td>\n<td></td>\n<td>数据映射接口返回某字段的值，不设置会默认把接口返回的<code>items</code>或者<code>rows</code>填充进<code>mode</code>区域</td>\n</tr>\n<tr>\n<td>filter</td>\n<td><a href=\"/amis/docs/renderers/Form/Form\">Form</a></td>\n<td></td>\n<td>设置过滤器，当该表单提交后，会把数据带给当前 <code>mode</code> 刷新列表。</td>\n</tr>\n<tr>\n<td>filterTogglable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否可显隐过滤器</td>\n</tr>\n<tr>\n<td>filterDefaultVisible</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>设置过滤器默认是否可见。</td>\n</tr>\n<tr>\n<td>initFetch</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>是否初始化的时候拉取数据, 只针对有 filter 的情况, 没有 filter 初始都会拉取数据</td>\n</tr>\n<tr>\n<td>interval</td>\n<td><code>number</code></td>\n<td><code>3000</code></td>\n<td>刷新时间(最低 3000)</td>\n</tr>\n<tr>\n<td>silentPolling</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>配置刷新时是否隐藏加载动画</td>\n</tr>\n<tr>\n<td>stopAutoRefreshWhen</td>\n<td><code>string</code></td>\n<td><code>&quot;&quot;</code></td>\n<td>通过<a href=\"/amis/docs/renderers/Types#表达式\">表达式</a>来配置停止刷新的条件</td>\n</tr>\n<tr>\n<td>stopAutoRefreshWhenModalIsOpen</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>当有弹框时关闭自动刷新，关闭弹框又恢复</td>\n</tr>\n<tr>\n<td>syncLocation</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>是否将过滤条件的参数同步到地址栏</td>\n</tr>\n<tr>\n<td>draggable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否可通过拖拽排序</td>\n</tr>\n<tr>\n<td>itemDraggableOn</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>用<a href=\"/amis/docs/renderers/Types#表达式\">表达式</a>来配置是否可拖拽排序</td>\n</tr>\n<tr>\n<td><a href=\"#saveorderapi\">saveOrderApi</a></td>\n<td><a href=\"/amis/docs/renderers/Types#Api\">Api</a></td>\n<td></td>\n<td>保存排序的 api。</td>\n</tr>\n<tr>\n<td><a href=\"#quicksaveapi\">quickSaveApi</a></td>\n<td><a href=\"/amis/docs/renderers/Types#Api\">Api</a></td>\n<td></td>\n<td>快速编辑后用来批量保存的 API。</td>\n</tr>\n<tr>\n<td><a href=\"#quicksaveitemapi\">quickSaveItemApi</a></td>\n<td><a href=\"/amis/docs/renderers/Types#Api\">Api</a></td>\n<td></td>\n<td>快速编辑配置成及时保存时使用的 API。</td>\n</tr>\n<tr>\n<td>bulkActions</td>\n<td>Array Of <a href=\"/amis/docs/renderers/Action\">Action</a></td>\n<td></td>\n<td>批量操作列表，配置后，表格可进行选中操作。</td>\n</tr>\n<tr>\n<td>defaultChecked</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>当可批量操作时，默认是否全部勾选。</td>\n</tr>\n<tr>\n<td>messages</td>\n<td><code>Object</code></td>\n<td></td>\n<td>覆盖消息提示，如果不指定，将采用 api 返回的 message</td>\n</tr>\n<tr>\n<td>messages.fetchFailed</td>\n<td><code>string</code></td>\n<td></td>\n<td>获取失败时提示</td>\n</tr>\n<tr>\n<td>messages.saveOrderFailed</td>\n<td><code>string</code></td>\n<td></td>\n<td>保存顺序失败提示</td>\n</tr>\n<tr>\n<td>messages.saveOrderSuccess</td>\n<td><code>string</code></td>\n<td></td>\n<td>保存顺序成功提示</td>\n</tr>\n<tr>\n<td>messages.quickSaveFailed</td>\n<td><code>string</code></td>\n<td></td>\n<td>快速保存失败提示</td>\n</tr>\n<tr>\n<td>messages.quickSaveSuccess</td>\n<td><code>string</code></td>\n<td></td>\n<td>快速保存成功提示</td>\n</tr>\n<tr>\n<td>primaryField</td>\n<td><code>string</code></td>\n<td><code>&quot;id&quot;</code></td>\n<td>设置 ID 字段名。</td>\n</tr>\n<tr>\n<td>defaultParams</td>\n<td><code>Object</code></td>\n<td></td>\n<td>设置默认 filter 默认参数，会在查询的时候一起发给后端</td>\n</tr>\n<tr>\n<td>pageField</td>\n<td><code>string</code></td>\n<td><code>&quot;page&quot;</code></td>\n<td>设置分页页码字段名。</td>\n</tr>\n<tr>\n<td>perPageField</td>\n<td><code>string</code></td>\n<td><code>&quot;perPage&quot;</code></td>\n<td>设置分页一页显示的多少条数据的字段名。注意：最好与 defaultParams 一起使用，请看下面例子。</td>\n</tr>\n<tr>\n<td>perPageAvailable</td>\n<td><code>Array&lt;number&gt;</code></td>\n<td><code>[5, 10, 20, 50, 100]</code></td>\n<td>设置一页显示多少条数据下拉框可选条数。</td>\n</tr>\n<tr>\n<td>orderField</td>\n<td><code>string</code></td>\n<td></td>\n<td>设置用来确定位置的字段名，设置后新的顺序将被赋值到该字段中。</td>\n</tr>\n<tr>\n<td>hideQuickSaveBtn</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>隐藏顶部快速保存提示</td>\n</tr>\n<tr>\n<td>autoJumpToTopOnPagerChange</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>当切分页的时候，是否自动跳顶部。</td>\n</tr>\n<tr>\n<td>syncResponse2Query</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>将返回数据同步到过滤器上。</td>\n</tr>\n<tr>\n<td>keepItemSelectionOnPageChange</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>保留条目选择，默认分页、搜素后，用户选择条目会被清空，开启此选项后会保留用户选择，可以实现跨页面批量操作。</td>\n</tr>\n<tr>\n<td>labelTpl</td>\n<td><code>string</code></td>\n<td></td>\n<td>单条描述模板，<code>keepItemSelectionOnPageChange</code>设置为<code>true</code>后会把所有已选择条目列出来，此选项可以用来定制条目展示文案。</td>\n</tr>\n<tr>\n<td>headerToolbar</td>\n<td>Array</td>\n<td><code>[&#39;bulkActions&#39;, &#39;pagination&#39;]</code></td>\n<td>顶部工具栏配置</td>\n</tr>\n<tr>\n<td>footerToolbar</td>\n<td>Array</td>\n<td><code>[&#39;statistics&#39;, &#39;pagination&#39;]</code></td>\n<td>顶部工具栏配置</td>\n</tr>\n</tbody>\n</table>\n<h3><a class=\"anchor\" name=\"%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E\" href=\"#%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>接口说明</h3><p>开始之前请你先阅读<a href=\"/amis/docs/api\">整体要求</a>。</p>\n<h4><a class=\"anchor\" name=\"api\" href=\"#api\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>api</h4><p>用来返回列表数据。</p>\n<p><strong>发送：</strong></p>\n<p>可能会包含以下信息。</p>\n<ul>\n<li><code>page</code> 页码，从 <code>1</code> 开始,  表示当前请求第几页的信息。 字段名对应 <code>pageField</code> 如果配成这样 <code>{pageField: &quot;pn&quot;}</code> 发送的时候字段名会变成类似 <code>/api/xxx?pn=1</code>。</li>\n<li><code>perPage</code> 每页多少条数据，默认假定是 10. 如果想修改请配置 <code>defaultParams: {perPage: 20}</code>。 另外字段名对应 <code>perPageField</code> 的配置。</li>\n<li><code>orderBy</code> 用来告知以什么方式排序。字段名对应 <code>orderField</code></li>\n<li><code>orderDir</code>  不是 <code>asc</code> 就是 <code>desc</code>。分别表示正序还是倒序。</li>\n</ul>\n<p>另外如果 CRUD 配置了 Filter，即过滤器表单，表单里面的数据也会自动 merge 到这个请求里面。前提是：你没有干预接口参数。</p>\n<p>什么意思？来个对比 <code>/api/xxxx</code> 和 <code>/api/xxxx?a=${a}</code>。第二个配置方式就是干预了，如果你配置接口的时候有明确指定要发送什么参数，那么 amis 则不再默认把所有你可能要的参数都发过去了。这个时候如果想要接收原来的那些参数，你需要进一步配置 api，把你需要的参数写上如：<code>/api/xxxx?a=${a}&amp;page=${page}&amp;perPage=${perPage}</code></p>\n<p><strong>响应：</strong></p>\n<p>常规返回格式如下：</p>\n<pre><code class=\"lang-json\">{\n  <span class=\"hljs-string\">\"status\"</span>: <span class=\"hljs-number\">0</span>,\n  <span class=\"hljs-string\">\"msg\"</span>: <span class=\"hljs-string\">\"\"</span>,\n  <span class=\"hljs-string\">\"data\"</span>: {\n    <span class=\"hljs-string\">\"items\"</span>: [\n        { // 每个成员的数据。\n            <span class=\"hljs-string\">\"id\"</span>: <span class=\"hljs-number\">1</span>,\n            <span class=\"hljs-string\">\"xxx\"</span>: <span class=\"hljs-string\">\"xxxx\"</span>\n        }\n    ],\n\n    <span class=\"hljs-string\">\"total\"</span>: <span class=\"hljs-number\">200</span> // 注意这里不是当前请求返回的 items 的长度，而是一共有多少条数据，用于生成分页，\n    // 如果你不想要分页，把这个不返回就可以了。\n  }\n}\n</code></pre>\n<p>如果无法知道数据总条数，只能知道是否有下一页，请返回如下格式，AMIS 会简单生成一个简单版本的分页控件。</p>\n<pre><code class=\"lang-json\">{\n  <span class=\"hljs-string\">\"status\"</span>: <span class=\"hljs-number\">0</span>,\n  <span class=\"hljs-string\">\"msg\"</span>: <span class=\"hljs-string\">\"\"</span>,\n  <span class=\"hljs-string\">\"data\"</span>: {\n    <span class=\"hljs-string\">\"items\"</span>: [\n        { // 每个成员的数据。\n            <span class=\"hljs-string\">\"id\"</span>: <span class=\"hljs-number\">1</span>,\n            <span class=\"hljs-string\">\"xxx\"</span>: <span class=\"hljs-string\">\"xxxx\"</span>\n        }\n    ],\n\n    <span class=\"hljs-string\">\"hasNext\"</span>: <span class=\"hljs-literal\">true</span> // 是否有下一页。\n  }\n}\n</code></pre>\n<p>如果不需要分页，或者配置了 loadDataOnce 则可以忽略掉 <code>total</code> 和 <code>hasNext</code> 参数。</p>\n<h4><a class=\"anchor\" name=\"saveorderapi\" href=\"#saveorderapi\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>saveOrderApi</h4><p>用来保存新的顺序，配置了 draggable 后会通过这个接口保存结果。</p>\n<p><strong>发送：</strong></p>\n<p>发送方式默认为 <code>POST</code> 会包含以下信息。</p>\n<ul>\n<li><code>ids</code> 字符串如： <code>2,3,1,4,5,6</code> 用 id 来记录新的顺序。 前提是你的列表接口返回了 id 字段。另外如果你的 primaryField 不是 <code>id</code>，则需要配置如： <code>primaryField: &quot;order_id&quot;</code>。注意：无论你配置成什么 primayField，这个字段名始终是 ids。</li>\n<li><code>rows</code> <code>Array&lt;Item&gt;</code> 数组格式，新的顺序，数组里面包含所有原始信息。</li>\n<li><p><code>insertAfter</code> 或者 <code>insertBefore</code>  这是 amis 生成的 diff 信息，对象格式，key 为目标成员的 primaryField 值，即 id，value 为数组，数组中存放成员 primaryField 值。如： </p>\n<pre><code class=\"lang-json\">  {\n      <span class=\"hljs-attr\">\"insertAfter\"</span>: {\n          <span class=\"hljs-attr\">\"2\"</span>: [<span class=\"hljs-string\">\"1\"</span>, <span class=\"hljs-string\">\"3\"</span>],\n          <span class=\"hljs-attr\">\"6\"</span>: [<span class=\"hljs-string\">\"4\"</span>, <span class=\"hljs-string\">\"5\"</span>]\n      }\n  }\n</code></pre>\n<p>  表示：成员 1 和成员 3 插入到了成员 2 的后面。成员 4 和 成员 5 插入到了 成员 6 的后面。</p>\n</li>\n</ul>\n<p>发送数据多了？amis 只能猜你可能需要什么格式化的数据，api 不是可以配置数据映射吗？你可以通过 data 指定只发送什么如：</p>\n<pre><code class=\"lang-json\">{\n    <span class=\"hljs-attr\">\"saveOrderApi\"</span>: {\n        <span class=\"hljs-attr\">\"url\"</span>: <span class=\"hljs-string\">\"/api/xxxx\"</span>,\n        <span class=\"hljs-attr\">\"data\"</span>: {\n            <span class=\"hljs-attr\">\"ids\"</span>: <span class=\"hljs-string\">\"${ids}\"</span>\n        }\n    }\n}\n</code></pre>\n<p>这样就只会发送 ids 了。</p>\n<p><strong>响应：</strong></p>\n<p>响应没有什么特殊要求，只关注 status 状态。data 中返回了数据也不会影响结果集。默认调用完保存顺序接口会自动再调用一次 api 接口用来刷新数据。</p>\n<h4><a class=\"anchor\" name=\"quicksaveapi\" href=\"#quicksaveapi\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>quickSaveApi</h4><p>用来保存快速编辑结果，当 crud 的列配置快速保存时会调用进来。</p>\n<p><strong>发送：</strong></p>\n<p>发送方式默认为 <code>POST</code> 会包含以下信息。</p>\n<ul>\n<li><code>ids</code> <code>String</code> 如： <code>&quot;1,2&quot;</code> 用来说明这次快速保存涉及了哪些成员。</li>\n<li><code>indexes</code> <code>Array&lt;number&gt;</code> 通过序号的方式告知更新了哪些成员。</li>\n<li><code>rows</code> <code>Array&lt;Object&gt;</code> 修改过的成员集合，数组对象是在原有数据的基础上更新后的结果。</li>\n<li><code>rowsDiff</code> <code>Array&lt;Object&gt;</code> 跟 <code>rows</code> 不一样的地方是这里只包含本次修改的数据。</li>\n<li><code>rowsOrigin</code> <code>Array&lt;Object&gt;</code> 跟 <code>rows</code> 不一样的地方是这里是修改前段原始数据。</li>\n<li><code>unModifiedItems</code> <code>Array&lt;Object&gt;</code> 其他没有修改的成员集合。</li>\n</ul>\n<p>默认发送的数据有点多，不过可以通过api的数据映射自己选择需要的部分。</p>\n<p><strong>响应：</strong></p>\n<p>响应没有什么特殊要求，只关注 status 状态。</p>\n<h4><a class=\"anchor\" name=\"quicksaveitemapi\" href=\"#quicksaveitemapi\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>quickSaveItemApi</h4><p>跟 quickSaveApi 不一样的地方在于当你配置快速保存为立即保存的时候，优先使用此接口。因为只会保存单条数据，所以发送格式会不一样，直接就是整个更新后的成员数据。</p>\n<p><strong>发送：</strong></p>\n<p><code>POST</code> payload 中就是更新后的成员数据。</p>\n<p><strong>响应：</strong></p>\n<p>响应没有什么特殊要求，只关注 status 状态。</p>\n<h3><a class=\"anchor\" name=\"%E5%8D%95%E6%9D%A1%E6%93%8D%E4%BD%9C\" href=\"#%E5%8D%95%E6%9D%A1%E6%93%8D%E4%BD%9C\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>单条操作</h3><p>当操作对象是单条数据时这类操作叫单条操作，比如：编辑、删除、通过、拒绝等等。CRUD 的 table 模式可以在 column 通过放置按钮来完成（其他模式参考 table 模式）。比如编辑就是添加个按钮行为是弹框类型的按钮或者添加一个页面跳转类型的按钮把当前行数据的 id 放在 query 中传过去、删除操作就是配置一个按钮行为是 AJAX 类型的按钮，将数据通过 api 发送给后端完成。</p>\n<p>CRUD 中不限制有多少个单条操作、添加一个操作对应的添加一个按钮就行了。CRUD 在处理按钮行为的时候会把当前行的完整数据传递过去，如果你的按钮行为是弹出时，还会包含一下信息：</p>\n<ul>\n<li><code>hasNext</code> <code>boolean</code> 当按钮行为是弹框时，还会携带这个数据可以用来判断当前页中是否有下一条数据。</li>\n<li><code>hasPrev</code> <code>boolean</code> 当按钮行为是弹框时，还会携带这个数据可以判断用来当前页中是否有上一条数据。</li>\n<li><code>index</code>  <code>number</code> 当按钮行为是弹框时，还会携带这个数据可以用来获取当前行数据在这一页中的位置。</li>\n<li><code>prevIndex</code> <code>number</code></li>\n<li><code>nextIndex</code> <code>number</code></li>\n</ul>\n<p>如果你的按钮类型是 AJAX，你也可以限定只发送部分数据比如。</p>\n<pre><code class=\"lang-json\">{\n    <span class=\"hljs-attr\">\"type\"</span>: <span class=\"hljs-string\">\"button\"</span>,\n    <span class=\"hljs-attr\">\"label\"</span>: <span class=\"hljs-string\">\"删除\"</span>,\n    <span class=\"hljs-attr\">\"actionType\"</span>: <span class=\"hljs-string\">\"ajax\"</span>,\n    <span class=\"hljs-attr\">\"api\"</span>: <span class=\"hljs-string\">\"delete:/api/xxxx/$id\"</span>,\n    <span class=\"hljs-attr\">\"confirmText\"</span>: <span class=\"hljs-string\">\"确定要删除？\"</span>\n}\n</code></pre>\n<p>上面这个例子就会发送 id 字段了，如果想要全部发送过去同时还想添加点别的字段就这样：</p>\n<pre><code class=\"lang-json\">{\n    <span class=\"hljs-attr\">\"type\"</span>: <span class=\"hljs-string\">\"button\"</span>,\n    <span class=\"hljs-attr\">\"label\"</span>: <span class=\"hljs-string\">\"删除\"</span>,\n    <span class=\"hljs-attr\">\"actionType\"</span>: <span class=\"hljs-string\">\"ajax\"</span>,\n    <span class=\"hljs-attr\">\"api\"</span>: {\n        <span class=\"hljs-attr\">\"method\"</span>: <span class=\"hljs-string\">\"post\"</span>,\n        <span class=\"hljs-attr\">\"url\"</span>: <span class=\"hljs-string\">\"/api/xxxx/$id\"</span>,\n        <span class=\"hljs-attr\">\"data\"</span>: {\n            <span class=\"hljs-attr\">\"&amp;\"</span>: <span class=\"hljs-string\">\"$$\"</span>,\n            <span class=\"hljs-attr\">\"op\"</span>: <span class=\"hljs-string\">\"delete\"</span>\n        }\n    },\n    <span class=\"hljs-attr\">\"confirmText\"</span>: <span class=\"hljs-string\">\"确定要删除？\"</span>\n}\n</code></pre>\n<p>这取决于 api 怎么配置，关于 api 的配置说明请<a href=\"/amis/docs/renderers/Types#api\">前往这</a>。</p>\n<h3><a class=\"anchor\" name=\"%E6%89%B9%E9%87%8F%E6%93%8D%E4%BD%9C\" href=\"#%E6%89%B9%E9%87%8F%E6%93%8D%E4%BD%9C\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>批量操作</h3><p>当操作对象是多条数据时这类操作叫批量操作、跟单条操作类似，将按钮放在 crud 的 <code>bulkActions</code> 中即可, 添加 bulkActions 后列表会自动出现选择框。CRUD 会准备以下数据供按钮行为使用。</p>\n<ul>\n<li><code>items</code> <code>Array&lt;object&gt;</code> 选中的行数据。</li>\n<li><code>rows</code> items 的别名，推荐用 items。</li>\n<li><code>unselectedItems</code> <code>Array&lt;object&gt;</code> 没选中的行数据也可获取。</li>\n<li><code>ids</code> <code>Array&lt;number|string&gt;</code> 前提是行数据中有 id 字段，或者有指定的 <code>primaryField</code> 字段。</li>\n<li><code>...第一行所有行数据</code> 还有第一行的所有行数据也会包含进去。</li>\n</ul>\n<h3><a class=\"anchor\" name=\"%E5%BF%AB%E9%80%9F%E7%BC%96%E8%BE%91\" href=\"#%E5%BF%AB%E9%80%9F%E7%BC%96%E8%BE%91\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>快速编辑</h3><p>列信息中可以配置 quickEdit 属性来启动快速编辑功能、开启后当鼠标hover到对应的行时，会出现一个编辑的小图标，点开后弹出表单项完成编辑。保存的结果不会立即发送 api 完成保存，除非你配置了立即保存，当所有的编辑都完成了，可以点击表格顶部的提交按钮，crud 将通过 quickSaveApi 通知后端完成保存。更多信息请看 quickSaveApi 和 quickSaveItemApi 的说明。</p>\n\n\n<div class=\"m-t-lg b-l b-info b-3x wrapper bg-light dk\">文档内容有误？欢迎大家一起来编写，文档地址：<i class=\"fa fa-github\"></i><a href=\"https://github.com/baidu/amis/tree/master/docs/renderers/CRUD.md\">/docs/renderers/CRUD.md</a>。</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "CRUD",
          "fragment": "crud",
          "fullPath": "#crud",
          "level": 2,
          "children": [
            {
              "label": "接口说明",
              "fragment": "%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E",
              "fullPath": "#%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E",
              "level": 3,
              "children": [
                {
                  "label": "api",
                  "fragment": "api",
                  "fullPath": "#api",
                  "level": 4
                },
                {
                  "label": "saveOrderApi",
                  "fragment": "saveorderapi",
                  "fullPath": "#saveorderapi",
                  "level": 4
                },
                {
                  "label": "quickSaveApi",
                  "fragment": "quicksaveapi",
                  "fullPath": "#quicksaveapi",
                  "level": 4
                },
                {
                  "label": "quickSaveItemApi",
                  "fragment": "quicksaveitemapi",
                  "fullPath": "#quicksaveitemapi",
                  "level": 4
                }
              ]
            },
            {
              "label": "单条操作",
              "fragment": "%E5%8D%95%E6%9D%A1%E6%93%8D%E4%BD%9C",
              "fullPath": "#%E5%8D%95%E6%9D%A1%E6%93%8D%E4%BD%9C",
              "level": 3
            },
            {
              "label": "批量操作",
              "fragment": "%E6%89%B9%E9%87%8F%E6%93%8D%E4%BD%9C",
              "fullPath": "#%E6%89%B9%E9%87%8F%E6%93%8D%E4%BD%9C",
              "level": 3
            },
            {
              "label": "快速编辑",
              "fragment": "%E5%BF%AB%E9%80%9F%E7%BC%96%E8%BE%91",
              "fullPath": "#%E5%BF%AB%E9%80%9F%E7%BC%96%E8%BE%91",
              "level": 3
            }
          ]
        }
      ],
      "level": 0
    }
  };

});
