define("node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-css-languageservice/parser/scssParser",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("node_modules/tslib/tslib"),i=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),s=r.__importStar(e("node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-css-languageservice/parser/scssScanner")),n=e("node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-css-languageservice/parser/cssScanner"),a=r.__importStar(e("node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-css-languageservice/parser/cssParser")),o=r.__importStar(e("node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-css-languageservice/parser/cssNodes")),p=e("node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-css-languageservice/parser/scssErrors"),h=e("node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-css-languageservice/parser/cssErrors"),c=function(e){function t(){return e.call(this,new s.SCSSScanner)||this}return i(t,e),t.prototype._parseStylesheetStatement=function(){return this.peek(n.TokenType.AtKeyword)?this._parseWarnAndDebug()||this._parseControlStatement()||this._parseMixinDeclaration()||this._parseMixinContent()||this._parseMixinReference()||this._parseFunctionDeclaration()||e.prototype._parseStylesheetAtStatement.call(this):this._parseRuleset(!0)||this._parseVariableDeclaration()},t.prototype._parseImport=function(){if(!this.peekKeyword("@import"))return null;var e=this.create(o.Import);if(this.consumeToken(),!e.addChild(this._parseURILiteral())&&!e.addChild(this._parseStringLiteral()))return this.finish(e,h.ParseError.URIOrStringExpected);for(;this.accept(n.TokenType.Comma);)if(!e.addChild(this._parseURILiteral())&&!e.addChild(this._parseStringLiteral()))return this.finish(e,h.ParseError.URIOrStringExpected);return this.peek(n.TokenType.SemiColon)||this.peek(n.TokenType.EOF)||e.setMedialist(this._parseMediaQueryList()),this.finish(e)},t.prototype._parseVariableDeclaration=function(e){if(void 0===e&&(e=[]),!this.peek(s.VariableName))return null;var t=this.create(o.VariableDeclaration);if(!t.setVariable(this._parseVariable()))return null;if(!this.accept(n.TokenType.Colon))return this.finish(t,h.ParseError.ColonExpected);if(t.colonPosition=this.prevToken.offset,!t.setValue(this._parseExpr()))return this.finish(t,h.ParseError.VariableValueExpected,[],e);for(;this.accept(n.TokenType.Exclamation);){if(!this.peekRegExp(n.TokenType.Ident,/^(default|global)$/))return this.finish(t,h.ParseError.UnknownKeyword);this.consumeToken()}return this.peek(n.TokenType.SemiColon)&&(t.semicolonPosition=this.token.offset),this.finish(t)},t.prototype._parseMediaFeatureName=function(){return this._parseFunction()||this._parseIdent()||this._parseVariable()},t.prototype._parseKeyframeSelector=function(){return this._tryParseKeyframeSelector()||this._parseControlStatement(this._parseKeyframeSelector.bind(this))||this._parseVariableDeclaration()||this._parseMixinContent()},t.prototype._parseVariable=function(){if(!this.peek(s.VariableName))return null;var e=this.create(o.Variable);return this.consumeToken(),e},t.prototype._parseIdent=function(e){var t=this;if(!this.peek(n.TokenType.Ident)&&!this.peek(s.InterpolationFunction)&&!this.peekDelim("-"))return null;var r=this.create(o.Identifier);r.referenceTypes=e,r.isCustomProperty=this.peekRegExp(n.TokenType.Ident,/^--/);for(var i=!1,a=function(){var e=t.mark();return t.acceptDelim("-")&&(t.hasWhitespace()||t.acceptDelim("-"),t.hasWhitespace())?(t.restoreAtMark(e),null):t._parseInterpolation()};(this.accept(n.TokenType.Ident)||r.addChild(a())||i&&(this.acceptDelim("-")||this.accept(n.TokenType.Num)))&&(i=!0,!this.hasWhitespace()););return i?this.finish(r):null},t.prototype._parseTerm=function(){var t=e.prototype._parseTerm.call(this);return t?t:(t=this.create(o.Term),t.setExpression(this._parseVariable())||t.setExpression(this._parseSelectorCombinator())||t.setExpression(this._tryParsePrio())?this.finish(t):null)},t.prototype._parseInterpolation=function(){if(this.peek(s.InterpolationFunction)){var e=this.create(o.Interpolation);return this.consumeToken(),e.addChild(this._parseExpr())||this._parseSelectorCombinator()?this.accept(n.TokenType.CurlyR)?this.finish(e):this.finish(e,h.ParseError.RightCurlyExpected):this.accept(n.TokenType.CurlyR)?this.finish(e):this.finish(e,h.ParseError.ExpressionExpected)}return null},t.prototype._parseOperator=function(){if(this.peek(s.EqualsOperator)||this.peek(s.NotEqualsOperator)||this.peek(s.GreaterEqualsOperator)||this.peek(s.SmallerEqualsOperator)||this.peekDelim(">")||this.peekDelim("<")||this.peekIdent("and")||this.peekIdent("or")||this.peekDelim("%")){var t=this.createNode(o.NodeType.Operator);return this.consumeToken(),this.finish(t)}return e.prototype._parseOperator.call(this)},t.prototype._parseUnaryOperator=function(){if(this.peekIdent("not")){var t=this.create(o.Node);return this.consumeToken(),this.finish(t)}return e.prototype._parseUnaryOperator.call(this)},t.prototype._parseRuleSetDeclaration=function(){return this.peek(n.TokenType.AtKeyword)?this._parseKeyframe()||this._parseImport()||this._parseMedia(!0)||this._parseFontFace()||this._parseWarnAndDebug()||this._parseControlStatement()||this._parseFunctionDeclaration()||this._parseExtends()||this._parseMixinReference()||this._parseMixinContent()||this._parseMixinDeclaration()||this._parseRuleset(!0)||this._parseSupports(!0):this._parseVariableDeclaration()||this._tryParseRuleset(!0)||e.prototype._parseRuleSetDeclaration.call(this)},t.prototype._parseDeclaration=function(e){var t=this.create(o.Declaration);if(!t.setProperty(this._parseProperty()))return null;if(!this.accept(n.TokenType.Colon))return this.finish(t,h.ParseError.ColonExpected,[n.TokenType.Colon],e);t.colonPosition=this.prevToken.offset;var r=!1;if(t.setValue(this._parseExpr())&&(r=!0,t.addChild(this._parsePrio())),this.peek(n.TokenType.CurlyL))t.setNestedProperties(this._parseNestedProperties());else if(!r)return this.finish(t,h.ParseError.PropertyValueExpected);return this.peek(n.TokenType.SemiColon)&&(t.semicolonPosition=this.token.offset),this.finish(t)},t.prototype._parseNestedProperties=function(){var e=this.create(o.NestedProperties);return this._parseBody(e,this._parseDeclaration.bind(this))},t.prototype._parseExtends=function(){if(this.peekKeyword("@extend")){var e=this.create(o.ExtendsReference);if(this.consumeToken(),!e.getSelectors().addChild(this._parseSimpleSelector()))return this.finish(e,h.ParseError.SelectorExpected);for(;this.accept(n.TokenType.Comma);)e.getSelectors().addChild(this._parseSimpleSelector());return this.accept(n.TokenType.Exclamation)&&!this.acceptIdent("optional")?this.finish(e,h.ParseError.UnknownKeyword):this.finish(e)}return null},t.prototype._parseSimpleSelectorBody=function(){return this._parseSelectorCombinator()||this._parseSelectorPlaceholder()||e.prototype._parseSimpleSelectorBody.call(this)},t.prototype._parseSelectorCombinator=function(){if(this.peekDelim("&")){var e=this.createNode(o.NodeType.SelectorCombinator);for(this.consumeToken();!this.hasWhitespace()&&(this.acceptDelim("-")||this.accept(n.TokenType.Num)||this.accept(n.TokenType.Dimension)||e.addChild(this._parseIdent())||this.acceptDelim("&")););return this.finish(e)}return null},t.prototype._parseSelectorPlaceholder=function(){if(this.peekDelim("%")){var e=this.createNode(o.NodeType.SelectorPlaceholder);return this.consumeToken(),this._parseIdent(),this.finish(e)}if(this.peekKeyword("@at-root")){var e=this.createNode(o.NodeType.SelectorPlaceholder);return this.consumeToken(),this.finish(e)}return null},t.prototype._parseElementName=function(){var t=this.mark(),r=e.prototype._parseElementName.call(this);return r&&!this.hasWhitespace()&&this.peek(n.TokenType.ParenthesisL)?(this.restoreAtMark(t),null):r},t.prototype._tryParsePseudoIdentifier=function(){return this._parseInterpolation()||e.prototype._tryParsePseudoIdentifier.call(this)},t.prototype._parseWarnAndDebug=function(){if(!this.peekKeyword("@debug")&&!this.peekKeyword("@warn")&&!this.peekKeyword("@error"))return null;var e=this.createNode(o.NodeType.Debug);return this.consumeToken(),e.addChild(this._parseExpr()),this.finish(e)},t.prototype._parseControlStatement=function(e){return void 0===e&&(e=this._parseRuleSetDeclaration.bind(this)),this.peek(n.TokenType.AtKeyword)?this._parseIfStatement(e)||this._parseForStatement(e)||this._parseEachStatement(e)||this._parseWhileStatement(e):null},t.prototype._parseIfStatement=function(e){return this.peekKeyword("@if")?this._internalParseIfStatement(e):null},t.prototype._internalParseIfStatement=function(e){var t=this.create(o.IfStatement);if(this.consumeToken(),!t.setExpression(this._parseExpr(!0)))return this.finish(t,h.ParseError.ExpressionExpected);if(this._parseBody(t,e),this.acceptKeyword("@else"))if(this.peekIdent("if"))t.setElseClause(this._internalParseIfStatement(e));else if(this.peek(n.TokenType.CurlyL)){var r=this.create(o.ElseStatement);this._parseBody(r,e),t.setElseClause(r)}return this.finish(t)},t.prototype._parseForStatement=function(e){if(!this.peekKeyword("@for"))return null;var t=this.create(o.ForStatement);return this.consumeToken(),t.setVariable(this._parseVariable())?this.acceptIdent("from")?t.addChild(this._parseBinaryExpr())?this.acceptIdent("to")||this.acceptIdent("through")?t.addChild(this._parseBinaryExpr())?this._parseBody(t,e):this.finish(t,h.ParseError.ExpressionExpected,[n.TokenType.CurlyR]):this.finish(t,p.SCSSParseError.ThroughOrToExpected,[n.TokenType.CurlyR]):this.finish(t,h.ParseError.ExpressionExpected,[n.TokenType.CurlyR]):this.finish(t,p.SCSSParseError.FromExpected,[n.TokenType.CurlyR]):this.finish(t,h.ParseError.VariableNameExpected,[n.TokenType.CurlyR])},t.prototype._parseEachStatement=function(e){if(!this.peekKeyword("@each"))return null;var t=this.create(o.EachStatement);this.consumeToken();var r=t.getVariables();if(!r.addChild(this._parseVariable()))return this.finish(t,h.ParseError.VariableNameExpected,[n.TokenType.CurlyR]);for(;this.accept(n.TokenType.Comma);)if(!r.addChild(this._parseVariable()))return this.finish(t,h.ParseError.VariableNameExpected,[n.TokenType.CurlyR]);return this.finish(r),this.acceptIdent("in")?t.addChild(this._parseExpr())?this._parseBody(t,e):this.finish(t,h.ParseError.ExpressionExpected,[n.TokenType.CurlyR]):this.finish(t,p.SCSSParseError.InExpected,[n.TokenType.CurlyR])},t.prototype._parseWhileStatement=function(e){if(!this.peekKeyword("@while"))return null;var t=this.create(o.WhileStatement);return this.consumeToken(),t.addChild(this._parseBinaryExpr())?this._parseBody(t,e):this.finish(t,h.ParseError.ExpressionExpected,[n.TokenType.CurlyR])},t.prototype._parseFunctionBodyDeclaration=function(){return this._parseVariableDeclaration()||this._parseReturnStatement()||this._parseWarnAndDebug()||this._parseControlStatement(this._parseFunctionBodyDeclaration.bind(this))},t.prototype._parseFunctionDeclaration=function(){if(!this.peekKeyword("@function"))return null;var e=this.create(o.FunctionDeclaration);if(this.consumeToken(),!e.setIdentifier(this._parseIdent([o.ReferenceType.Function])))return this.finish(e,h.ParseError.IdentifierExpected,[n.TokenType.CurlyR]);if(!this.accept(n.TokenType.ParenthesisL))return this.finish(e,h.ParseError.LeftParenthesisExpected,[n.TokenType.CurlyR]);if(e.getParameters().addChild(this._parseParameterDeclaration()))for(;this.accept(n.TokenType.Comma)&&!this.peek(n.TokenType.ParenthesisR);)if(!e.getParameters().addChild(this._parseParameterDeclaration()))return this.finish(e,h.ParseError.VariableNameExpected);return this.accept(n.TokenType.ParenthesisR)?this._parseBody(e,this._parseFunctionBodyDeclaration.bind(this)):this.finish(e,h.ParseError.RightParenthesisExpected,[n.TokenType.CurlyR])},t.prototype._parseReturnStatement=function(){if(!this.peekKeyword("@return"))return null;var e=this.createNode(o.NodeType.ReturnStatement);return this.consumeToken(),e.addChild(this._parseExpr())?this.finish(e):this.finish(e,h.ParseError.ExpressionExpected)},t.prototype._parseMixinDeclaration=function(){if(!this.peekKeyword("@mixin"))return null;var e=this.create(o.MixinDeclaration);if(this.consumeToken(),!e.setIdentifier(this._parseIdent([o.ReferenceType.Mixin])))return this.finish(e,h.ParseError.IdentifierExpected,[n.TokenType.CurlyR]);if(this.accept(n.TokenType.ParenthesisL)){if(e.getParameters().addChild(this._parseParameterDeclaration()))for(;this.accept(n.TokenType.Comma)&&!this.peek(n.TokenType.ParenthesisR);)if(!e.getParameters().addChild(this._parseParameterDeclaration()))return this.finish(e,h.ParseError.VariableNameExpected);if(!this.accept(n.TokenType.ParenthesisR))return this.finish(e,h.ParseError.RightParenthesisExpected,[n.TokenType.CurlyR])}return this._parseBody(e,this._parseRuleSetDeclaration.bind(this))},t.prototype._parseParameterDeclaration=function(){var e=this.create(o.FunctionParameter);return e.setIdentifier(this._parseVariable())?(this.accept(s.Ellipsis),this.accept(n.TokenType.Colon)&&!e.setDefaultValue(this._parseExpr(!0))?this.finish(e,h.ParseError.VariableValueExpected,[],[n.TokenType.Comma,n.TokenType.ParenthesisR]):this.finish(e)):null},t.prototype._parseMixinContent=function(){if(!this.peekKeyword("@content"))return null;var e=this.createNode(o.NodeType.MixinContent);return this.consumeToken(),this.finish(e)},t.prototype._parseMixinReference=function(){if(!this.peekKeyword("@include"))return null;var e=this.create(o.MixinReference);if(this.consumeToken(),!e.setIdentifier(this._parseIdent([o.ReferenceType.Mixin])))return this.finish(e,h.ParseError.IdentifierExpected,[n.TokenType.CurlyR]);if(this.accept(n.TokenType.ParenthesisL)){if(e.getArguments().addChild(this._parseFunctionArgument()))for(;this.accept(n.TokenType.Comma)&&!this.peek(n.TokenType.ParenthesisR);)if(!e.getArguments().addChild(this._parseFunctionArgument()))return this.finish(e,h.ParseError.ExpressionExpected);if(!this.accept(n.TokenType.ParenthesisR))return this.finish(e,h.ParseError.RightParenthesisExpected)}if(this.peek(n.TokenType.CurlyL)){var t=this.create(o.BodyDeclaration);this._parseBody(t,this._parseMixinReferenceBodyStatement.bind(this)),e.setContent(t)}return this.finish(e)},t.prototype._parseMixinReferenceBodyStatement=function(){return this._tryParseKeyframeSelector()||this._parseRuleSetDeclaration()},t.prototype._parseFunctionArgument=function(){var e=this.create(o.FunctionArgument),t=this.mark(),r=this._parseVariable();if(r)if(this.accept(n.TokenType.Colon))e.setIdentifier(r);else{if(this.accept(s.Ellipsis))return e.setValue(r),this.finish(e);this.restoreAtMark(t)}return e.setValue(this._parseExpr(!0))?(this.accept(s.Ellipsis),e.addChild(this._parsePrio()),this.finish(e)):null},t.prototype._parseURLArgument=function(){var t=this.mark(),r=e.prototype._parseURLArgument.call(this);if(!r||!this.peek(n.TokenType.ParenthesisR)){this.restoreAtMark(t);var i=this.create(o.Node);return i.addChild(this._parseBinaryExpr()),this.finish(i)}return r},t.prototype._parseOperation=function(){if(!this.peek(n.TokenType.ParenthesisL))return null;var e=this.create(o.Node);for(this.consumeToken();e.addChild(this._parseListElement());)this.accept(n.TokenType.Comma);return this.accept(n.TokenType.ParenthesisR)?this.finish(e):this.finish(e,h.ParseError.RightParenthesisExpected)},t.prototype._parseListElement=function(){var e=this.create(o.ListEntry),t=this._parseBinaryExpr();if(!t)return null;if(this.accept(n.TokenType.Colon)){if(e.setKey(t),!e.setValue(this._parseBinaryExpr()))return this.finish(e,h.ParseError.ExpressionExpected)}else e.setValue(t);return this.finish(e)},t}(a.Parser);t.SCSSParser=c});