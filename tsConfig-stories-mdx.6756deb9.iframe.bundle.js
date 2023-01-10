"use strict";(self.webpackChunk_ace_ex_docs=self.webpackChunk_ace_ex_docs||[]).push([[6714],{"../../node_modules/@storybook/addon-docs/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GA:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Typeset,VZ:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.ColorPalette,Xz:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Canvas,aT:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext,c6:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.ColorItem,h_:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Meta});var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/blocks/index.js")},"./src/pages/Packages/tsConfig.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,{title:"Packages/Ts Config",mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("h1",{id:"ace-exts-config"},"@ace-ex/ts-config"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@ace-ex/ts-config",target:"_blank",rel:"nofollow noopener noreferrer"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@ace-ex/ts-config",alt:"Version"}))," ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("a",{parentName:"p",href:"https://github.com/ShadowsS01/ace-ex-ui/blob/main/packages/ts-config/LICENSE",target:"_blank",rel:"nofollow noopener noreferrer"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/licence-MIT-blue",alt:"License"}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("p",null,"Configurações do TypeScript."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("h2",{id:"instalação"},"Instalação"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("p",null,"Dependendo de sua preferência, execute uma das seguintes opções em seu terminal:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("code",{parentName:"pre",className:"language-bash"},"# Com Yarn\nyarn add -D @ace-ex/ts-config\n\n# com pnpm\npnpm i -D @ace-ex/ts-config\n\n# Com npm\nnpm i -D @ace-ex/ts-config\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("h2",{id:"usando"},"Usando"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("p",null,"Para utilizar você precisa extender o ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("inlineCode",{parentName:"p"},"@ace-ex/ts-config")," no seu ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),". Temos três opções de tsconfig:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("strong",{parentName:"p"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("a",{parentName:"strong",href:"https://github.com/ShadowsS01/ace-ex-ui/blob/main/packages/ts-config/base.json",target:"_blank",rel:"nofollow noopener noreferrer"},"base"),":")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": "@ace-ex/ts-config/base.json"\n}\n')),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("strong",{parentName:"p"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("a",{parentName:"strong",href:"https://github.com/ShadowsS01/ace-ex-ui/blob/main/packages/ts-config/node16.json",target:"_blank",rel:"nofollow noopener noreferrer"},"node16"),":")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": "@ace-ex/ts-config/node16.json"\n}\n')),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("strong",{parentName:"p"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("a",{parentName:"strong",href:"https://github.com/ShadowsS01/ace-ex-ui/blob/main/packages/ts-config/react.json",target:"_blank",rel:"nofollow noopener noreferrer"},"react"),":")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": "@ace-ex/ts-config/react.json"\n}\n')))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Packages/Ts Config",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(MDXContent,null))}});const __WEBPACK_DEFAULT_EXPORT__=componentMeta;var __namedExportsOrder=["__page"]}}]);