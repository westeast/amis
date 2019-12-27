define('docs/renderers/Form/FieldSet.md', function(require, exports, module) {

  module.exports = {
    "html": "<h3><a class=\"anchor\" name=\"fieldset\" href=\"#fieldset\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>FieldSet</h3><p>多个输入框可以通过 fieldSet 捆绑在一起。</p>\n<ul>\n<li><code>type</code> 请设置成 <code>fieldSet</code></li>\n<li><code>title</code> 标题</li>\n<li><code>controls</code> 表单项集合。</li>\n<li><code>mode</code> 展示默认，跟 <a href=\"/amis/docs/renderers/Form/Form\">Form</a> 中的模式一样，选择： <code>normal</code>、<code>horizontal</code>或者<code>inline</code>。</li>\n<li><code>horizontal</code> 当为水平模式时，用来控制左右占比。</li>\n<li><code>horizontal.label</code> 左边 label 的宽度占比。</li>\n<li><code>horizontal.right</code> 右边控制器的宽度占比。</li>\n<li><code>horizontal.offset</code> 当没有设置 label 时，右边控制器的偏移量。</li>\n<li><code>collapsable</code> 配置是否可折叠，默认为 <code>false</code>。</li>\n<li><code>collapsed</code> 默认是否折叠。</li>\n<li><code>className</code> CSS 类名</li>\n<li><code>headingClassName</code> 标题 CSS 类名</li>\n<li><code>bodyClassName</code> 内容区域 CSS 类名</li>\n</ul>\n<div class=\"amis-preview\" style=\"height: 700px\"><script type=\"text/schema\" height=\"700\" scope=\"form\">[\n  {\n    \"type\": \"fieldSet\",\n    \"title\": \"基本配置\",\n    \"controls\": [\n      {\n        \"name\": \"a\",\n        \"type\": \"text\",\n        \"label\": \"文本1\"\n      },\n\n      {\n        \"name\": \"a\",\n        \"type\": \"text\",\n        \"label\": \"文本2\"\n      }\n    ]\n  },\n\n  {\n    \"type\": \"fieldSet\",\n    \"title\": \"其他配置\",\n    \"collapsable\": true,\n    \"collapsed\": true,\n    \"controls\": [\n      {\n        \"name\": \"c\",\n        \"type\": \"text\",\n        \"label\": \"文本3\"\n      },\n\n      {\n        \"name\": \"d\",\n        \"type\": \"text\",\n        \"label\": \"文本4\"\n      }\n    ]\n  }\n]\n</script></div>\n\n\n<div class=\"m-t-lg b-l b-info b-3x wrapper bg-light dk\">文档内容有误？欢迎大家一起来编写，文档地址：<i class=\"fa fa-github\"></i><a href=\"https://github.com/baidu/amis/tree/master/docs/renderers/Form/FieldSet.md\">/docs/renderers/Form/FieldSet.md</a>。</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "FieldSet",
          "fragment": "fieldset",
          "fullPath": "#fieldset",
          "level": 3
        }
      ],
      "level": 0
    }
  };

});
