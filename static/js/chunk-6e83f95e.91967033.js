(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e83f95e"],{"08b6":function(e,t,a){},"11ee":function(e,t,a){},"13d5":function(e,t,a){"use strict";var r=a("23e7"),n=a("d58f").left,o=a("a640"),i=a("ae40"),s=o("reduce"),l=i("reduce",{1:0});r({target:"Array",proto:!0,forced:!s||!l},{reduce:function(e){return n(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},3521:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"standard-table"},[a("div",{staticClass:"alert"},[e.selectedRows?a("a-alert",{attrs:{type:"info","show-icon":!0}},[a("div",{staticClass:"message",attrs:{slot:"message"},slot:"message"},[e._v(" 已选择 "),a("a",[e._v(e._s(e.selectedRows.length))]),e._v(" 项 "),a("a",{staticClass:"clear",on:{click:e.onClear}},[e._v("清空")]),e._l(e.needTotalList,(function(t,r){return[t.needTotal?a("div",{key:r},[e._v(" "+e._s(t.title)+"总计 "),a("a",[e._v(e._s(t.customRender?t.customRender(t.total):t.total))])]):e._e()]}))],2)]):e._e()],1),a("a-table",{attrs:{bordered:e.bordered,loading:e.loading,columns:e.storedColumns,dataSource:e.dataSource,rowKey:e.rowKey,pagination:e.pagination,expandedRowKeys:e.expandedRowKeys,expandedRowRender:e.expandedRowRender,expandIconColumnIndex:e.expandIconColumnIndex,expandIcon:e.expandIcon,expandIconAsCell:e.expandIconAsCell,rowSelection:e.selectedRows?{selectedRowKeys:e.selectedRowKeys,onChange:e.updateSelect}:void 0,customRow:e.onRowClick},on:{change:e.onChange,expand:e.onExpand,expandedRowsChange:e.expandedRowsChange},scopedSlots:e._u([e._l(Object.keys(e.$scopedSlots).filter((function(e){return"expandedRowRender"!==e})),(function(t){return{key:t,fn:function(a,r,n){return[e._t(t,null,null,{text:a,record:r,index:n})]}}})),{key:e.$scopedSlots.expandedRowRender?"expandedRowRender":"",fn:function(t,a,r,n){return[e._t(e.$scopedSlots.expandedRowRender?"expandedRowRender":"",null,null,{record:t,index:a,indent:r,expanded:n})]}}],null,!0)},[e._l(Object.keys(e.$slots),(function(t){return a("template",{slot:t},[e._t(t)],2)}))],2)],1)},n=[],o=a("7644"),i=o["a"],s=(a("5ac1"),a("7b8b"),a("0c7c")),l=Object(s["a"])(i,r,n,!1,null,"6f430611",null);t["a"]=l.exports},"4ec9":function(e,t,a){"use strict";var r=a("6d61"),n=a("6566");e.exports=r("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),n)},"59cf":function(e,t,a){},"5ac1":function(e,t,a){"use strict";var r=a("59cf"),n=a.n(r);n.a},"64ec":function(e,t,a){"use strict";var r=a("11ee"),n=a.n(r);n.a},7644:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("4de4"),core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("d81d"),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("13d5"),core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("a9e3"),core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3__),_home_runner_work_roo_roo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("5530");__webpack_exports__["a"]={name:"StandardTable",props:{bordered:Boolean,loading:[Boolean,Object],columns:Array,dataSource:Array,rowKey:{type:[String,Function],default:"key"},pagination:{type:[Object,Boolean],default:!0},expandIconColumnIndex:Number,selectedRows:Array,expandedRowKeys:Array,expandedRowRender:Function,expandIcon:Function,expandIconAsCell:Boolean},data:function(){return{needTotalList:[],storedColumns:this.columns}},methods:{updateSelect:function(e,t){this.$emit("update:selectedRows",t),this.$emit("selectedRowChange",e,t)},initTotalList:function(e){var t=e.filter((function(e){return e.needTotal})).map((function(e){return Object(_home_runner_work_roo_roo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["a"])(Object(_home_runner_work_roo_roo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["a"])({},e),{},{total:0})}));return t},onClear:function(){this.updateSelect([],[]),this.$emit("clear")},onChange:function(e,t,a,r){var n=r.currentDataSource;this.$emit("change",e,t,a,{currentDataSource:n})},onExpand:function(e,t){this.$emit("expand",e,t)},expandedRowsChange:function(e){this.$emit("expandedRowsChange",e)},onRowClick:function(e,t){var a=this;return{style:{animation:"myfirst 1s","-webkit-animation":"myfirst 1s"},on:{click:function(){a.$emit("click",e,t)},dblclick:function(){a.$emit("dblclick",e,t)}}}}},created:function(){this.storedColumns=this.storedColumns.filter((function(e){return!(!1===e.visible)})),this.needTotalList=this.initTotalList(this.storedColumns)},watch:{selectedRows:function selectedRows(_selectedRows){this.needTotalList=this.needTotalList.map((function(item){return Object(_home_runner_work_roo_roo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["a"])(Object(_home_runner_work_roo_roo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["a"])({},item),{},{total:_selectedRows.reduce((function(sum,val){var v;try{v=val[item.dataIndex]?val[item.dataIndex]:eval("val.".concat(item.dataIndex))}catch(_){v=val[item.dataIndex]}return v=isNaN(parseFloat(v))?0:parseFloat(v),sum+v}),0)})}))},columns:function(){this.storedColumns=this.columns,this.storedColumns=this.storedColumns.filter((function(e){return!(!1===e.visible)})),this.needTotalList=this.initTotalList(this.storedColumns)}},computed:{selectedRowKeys:function(){var e=this;return this.selectedRows.map((function(t){return"function"===typeof e.rowKey?e.rowKey(t):t[e.rowKey]}))}}}},"7b8b":function(e,t,a){"use strict";var r=a("d731"),n=a.n(r);n.a},"89a6":function(e,t){e.exports={messages:{CN:{errorMessage:{connectToWalletFirst:"请先连接钱包",failedToMortgage:"抵押失败:",failedToCancelMortgage:"取消抵押失败:",failedToActive:"启用失败：",invalidInputAmount:"输入金额非法",maximumDepositAmount:"最大存款金额为",depositFailed:"存款失败:",withdrawFailed:"取款失败:",loanFailed:"借款失败:",repaymentFailed:"还款失败:",transactionFailed:"交易失败，错误码:",errorInfo:"错误信息:",liquidateFailed:"清算失败:"},depositList:{totalSupply:"存款总规模",totalBorrow:"借款总规模",connectToWallet:"连接到钱包",transactionProcessing:"交易处理中",transactionConfirming:"交易确认中",transComUpdateData:"交易完成，正在更新数据...",ok:"确认",cancel:"取消",close:"关闭",detail:"概览",person:{text:"我的持仓",symbol:"币种",deposit:"存款余额",supplyAPY:"存款利率",balanceOfBorrow:{text:"借款余额",filter:{text:"我的借款"}},borrowRate:"借款利率",options:{text:"操作",depositAndDraw:"存取",debit:"借贷"},collateral:"抵押"},markets:{text:"市场",symbol:"币种",totalSupply:"存款规模",supplyAPY:"存款利率",totalBorrow:{text:"借款规模",filter:{text:"市场"}},borrowRate:"借款利率",options:{text:"操作",depositAndDraw:"存取",debit:"借贷"},collateral:"抵押"}},liquidation:{liquidationPool:"清算池",borrowingLimit:"借款额",assetName:"质押资产",assetSupply:"质押额度",risk:"风险值",liquidate:"清算"},liquidationEx:{header:{title:"清算池(0个仓位)",info:"暂无清算池列表"},table:{account:"账户",totalBorrowUSDT:"借款额",totalSupplyUSDT:"抵押额",rate:"健康",operation:"操作",inner:{symbol:"币种",borrowBalance:"借款额",assetSupply:"质押额"},detail:"详情"},tips:"要向复合协议提供或偿还{{innerCurRecord.name}},您需要先进行授权",enable:"授权",transactionConfirm:"交易确认"}},US:{errorMessage:{connectToWalletFirst:"Please connect to wallet at first",failedToMortgage:"Failed to mortgage:",failedToCancelMortgage:"Failed to cancel mortgage:",failedToActive:"Failed to active:",invalidInputAmount:"Illegal amount entered",maximumDepositAmount:"The maximum deposit amount is",depositFailed:"Deposit failed:",withdrawFailed:"Withdraw failed:",loanFailed:"Loan failed:",repaymentFailed:"Repayment failed:",transactionFailed:"Transaction failed, error code:",errorInfo:"error information:"},depositList:{totalSupply:"Total Supply",totalBorrow:"Total Borrow",connectToWallet:"Connect to wallet",transactionProcessing:"Transaction processing",transactionConfirming:"Pending",transComUpdateData:"Transaction completed, updating data ...",close:"close",detail:"Detail",ok:"Ok",cancel:"Cancel",person:{text:"My Position",symbol:"Assets",deposit:"Supply Balance",supplyAPY:"Supply APY",balanceOfBorrow:{text:"Borrow Balance",filter:{text:"My Borrow"}},borrowRate:"Borrow APY",options:{text:"Options",depositAndDraw:"Withdraw",debit:"Collateral"},collateral:"Collateral"},markets:{text:"Markets",symbol:"Markets",totalSupply:"Total Supply",supplyAPY:"Total Supply APY",totalBorrow:{text:"Total Borrow",filter:{text:"Markets"}},borrowRate:"Total Borrow APY",options:{text:"Management",depositAndDraw:"Withdraw",debit:"Borrow"},collateral:"Collateral"}},liquidation:{liquidationPool:"Liquidation Pool",borrowingLimit:"Borrowing Limit",assetName:"Asset Name",assetSupply:"Asset Supply",risk:"Risk",liquidate:"Liquidate"},liquidationEx:{header:{title:"Liquidation Pool (none)",info:"None liquidation pool list"},table:{account:"Account",totalBorrowUSDT:"Total Borrow",totalSupplyUSDT:"Total Supply",rate:"Rate",operation:"Operation",inner:{symbol:"Symbol",borrowBalance:"Borrow Balance",assetSupply:"Asset Supply"},detail:"Detail"},tips:"To supply or return {{record.name}} to the protocol, you need to approve it first",enable:"Approve"}},HK:{depositList:{},liquidation:{}}}}},a999:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{class:{"liquidation-card":e.isMobile}},[0==e.liqs.length?a("a-card",{staticStyle:{"border-radius":"10px"},attrs:{title:e.$t("liquidationEx.header.title"),bordered:!1,headStyle:{"font-size":"18px"},bodyStyle:{"font-size":"16px"}}},[a("p",{staticStyle:{"text-align":"center"}},[e._v(e._s(this.$t("liquidationEx.header.info")))])]):a("div",[a("standard-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.columns,"data-source":e.liqs,pagination:!(e.liqs.length<10),expandedRowKeys:e.isMobile?null:e.expandedRowKeys,expandIconColumnIndex:4,expandIcon:function(e){return null},rowKey:function(e){return e.key},expandIconAsCell:!1},on:{expand:e.onExpand,expandedRowsChange:e.expandedRowsChange},scopedSlots:e._u([{key:"account",fn:function(t){t.text;var r=t.record;return e.isMobile?a("div",{},[e._v(" "+e._s(r.account.substring(0,4)+"..."+r.account.substring(38))+" ")]):a("div",{},[e._v(" "+e._s(r.account.substring(0,6)+"..."+r.account.substring(38))+" ")])}},{key:"totalBorrowUSDT",fn:function(t){t.text;var r=t.record;return a("div",{},[e._v(" $"+e._s(Math.floor(100*parseFloat(r.totalBorrowUSDT))/100)+" ")])}},{key:"totalSupplyUSDT",fn:function(t){t.text;var r=t.record;return a("div",{},[e._v(" $"+e._s(Math.floor(100*parseFloat(r.totalSupplyUSDT))/100)+" ")])}},{key:"risk",fn:function(e){e.text;var t=e.record;return a("div",{},[a("div",{staticClass:"line-element"},[a("b",[a("a-progress",{attrs:{strokeColor:t.risk<60?"green":t.risk<=86?"blue":"red",percent:Math.floor(100*parseFloat(t.risk))/100,status:"active",showInfo:!0}})],1)])])}},{key:"detail",fn:function(t){t.text;var r=t.record;return e.isMobile?a("div",{},[a("div",[e._v(" $"+e._s(Math.floor(100*parseFloat(r.totalBorrowUSDT))/100)+" ")]),a("div",[e._v(" $"+e._s(Math.floor(100*parseFloat(r.totalSupplyUSDT))/100)+" ")]),a("div",[a("a-progress",{attrs:{strokeColor:r.risk<60?"green":r.risk<=86?"blue":"red",percent:Math.floor(100*parseFloat(r.risk))/100,status:"active",showInfo:!0}})],1)]):e._e()}},{key:"operation",fn:function(t){t.text;var r=t.record;return a("div",{},[e.expandedRowKeys.length<1&&r.key===e.curRecord.key&&!e.liqsMap.has(r.key)?a("a-icon",{attrs:{type:"loading"}}):a("a",{on:{click:function(t){return e.handleExpand(r)}}},[e._v(e._s(e.$t("liquidationEx.table.detail")))])],1)}},{key:"expandedRowRender",fn:function(t){return e.isMobile?e._e():a("standard-table",{attrs:{columns:e.innerColumns,"data-source":e.liqsMap.get(t.record.key),pagination:!1},scopedSlots:e._u([{key:"name",fn:function(t){t.text;var r=t.record;return a("div",{},[a("div",{staticClass:"line-element"},[a("a-avatar",{attrs:{slot:"avatar",size:"large",shape:"square",src:r.base64},slot:"avatar"}),a("b",[a("span",[e._v(" "+e._s(r.name)+" ")])])],1)])}},{key:"borrow",fn:function(t){t.text;var r=t.record;return a("div",{},[a("div",{staticClass:"line-element"},[a("b",[e._v(" $"+e._s((r.borrowUSDT*r.assetSupplyUSDT/e.curRecord.totalSupplyUSDT).toFixed(8))+"/$"+e._s(r.borrowUSDT.toFixed(8))+" ")])]),a("div",{staticClass:"line-element"},[a("b",[e._v(" "+e._s(parseFloat(e.computBorrow(r)).toFixed(8))+"/"+e._s(parseFloat(r.borrow).toFixed(8))+" "+e._s(r.name)+" ")])])])}},{key:"assetSupply",fn:function(t){t.text;var r=t.record;return a("div",{},[a("div",{staticClass:"line-element"},[a("b",[e._v(" $"+e._s((r.assetSupplyUSDT*r.borrowUSDT/e.curRecord.totalBorrowUSDT).toFixed(8))+"/$"+e._s(r.assetSupplyUSDT)+" ")])]),a("div",[a("b",[e._v(" "+e._s(parseFloat(r.assetSupplyUnderlying).toFixed(8))+" "+e._s(r.assetName)+" ")])])])}},{key:"operation",fn:function(t){t.text;var r=t.record;return a("span",{staticClass:"table-operation"},[a("a",{staticStyle:{"margin-right":"8px"},on:{click:function(t){return e.onLiquidate(t,r)}}},[e.isMobile?a("a-button",{attrs:{type:"primary",shape:"round",size:"small",disabled:e.curRecord.risk<100.2}},[e._v(e._s(e.$t("liquidation.liquidate")))]):a("a-button",{attrs:{type:"primary",shape:"round",size:"default",disabled:e.curRecord.risk<100.2}},[e._v(e._s(e.$t("liquidation.liquidate")))])],1)])}}],null,!1,3420946557)},[a("span",{staticClass:"table-operation"},[a("a",{staticStyle:{"margin-right":"8px"},on:{click:function(a){return e.onLiquidate(a,t)}}},[a("a-button",{attrs:{type:"primary",shape:"round",size:"default",disabled:t.record.risk<100.2,loading:e.liqLoading}},[e._v(e._s(e.$t("liquidation.liquidate")))])],1)])])}}],null,!0)})],1),a("a-modal",{attrs:{maskClosable:!0,closable:!0,width:"95%",footer:null,selections:!1,hideDefaultSelections:!0},model:{value:e.detailModalVisible,callback:function(t){e.detailModalVisible=t},expression:"detailModalVisible"}},[a("a-card",{staticStyle:{"margin-top":"15px"},attrs:{bordered:!1,"body-style":{padding:0},title:e.curRecord.key,headStyle:{"font-size":"32px"}}},[a("standard-table",{attrs:{columns:e.innerColumns,"data-source":e.liqsMap.get(e.curRecord.key),pagination:!1},scopedSlots:e._u([{key:"name",fn:function(t){t.text;var r=t.record;return a("div",{},[a("div",{staticClass:"line-element"},[a("a-avatar",{attrs:{slot:"avatar",size:"large",shape:"square",src:r.base64},slot:"avatar"}),a("b",[a("span",[e._v(" "+e._s(r.name)+" ")])])],1)])}},{key:"detail",fn:function(t){t.text;var r=t.record;return e.isMobile?a("div",{},[a("div",{staticClass:"table-detail"},[a("div",{staticClass:"table-cell-borrow"},[a("div",{staticClass:"table-detail"},[a("div",[e._v("$"+e._s((r.borrowUSDT*r.assetSupplyUSDT/e.curRecord.totalSupplyUSDT).toFixed(2))+"/$"+e._s(r.borrowUSDT.toFixed(2)))]),a("div",[e._v(e._s(parseFloat(e.computBorrow(r)).toFixed(2))+"/"+e._s(parseFloat(r.borrow).toFixed(2))+" "+e._s(r.name))])]),a("div",{staticClass:"table-detail-tips"},[a("a-tooltip",{attrs:{placement:"rightBottom"}},[a("template",{slot:"title"},[a("ul",{staticClass:"tips-ul"},[a("li",[e._v(e._s(e.$t("liquidationEx.table.inner.borrowBalance")))])])]),a("a",{on:{click:function(e){}}},[a("a-icon",{attrs:{type:"exclamation-circle",size:"large"}})],1)],2)],1)]),a("a-divider",{staticClass:"liq-table-divider"}),a("div",{staticClass:"table-cell-asset"},[a("div",{staticClass:"table-detail"},[a("div",[e._v("$"+e._s((r.assetSupplyUSDT*r.borrowUSDT/e.curRecord.totalBorrowUSDT).toFixed(2))+"/$"+e._s(r.assetSupplyUSDT.toFixed(2)))]),a("div",[e._v(e._s(parseFloat(r.assetSupplyUnderlying).toFixed(2))+" "+e._s(r.assetName))])]),a("div",{staticClass:"table-detail-tips"},[a("a-tooltip",{attrs:{placement:"rightBottom"}},[a("template",{slot:"title"},[a("ul",{staticClass:"tips-ul"},[a("li",[e._v(e._s(e.$t("liquidationEx.table.inner.assetSupply")))])])]),a("a",{on:{click:function(e){}}},[a("a-icon",{attrs:{type:"exclamation-circle",size:"large"}})],1)],2)],1)])],1)]):e._e()}},{key:"operation",fn:function(t){t.text;var r=t.record;return a("span",{staticClass:"table-operation"},[a("a",{staticStyle:{"margin-right":"8px"},on:{click:function(t){return e.onLiquidate(t,r)}}},[a("a-button",{attrs:{type:"primary",shape:"round",size:"small",disabled:e.curRecord.risk<100.2}},[e._v(e._s(e.$t("liquidation.liquidate")))])],1)])}}],null,!0)})],1)],1),a("a-modal",{class:{"popup-ensure-card":!e.isMobile,"popup-ensure-card-m":e.isMobile},attrs:{width:"",maskClosable:!0,closable:!0,footer:null},model:{value:e.bNeedEnable,callback:function(t){e.bNeedEnable=t},expression:"bNeedEnable"}},[a("a-card",{staticClass:"project-list",staticStyle:{"margin-bottom":"2px","text-align":"center"},attrs:{bordered:!1,"body-style":{padding:0}}},[a("div",[a("a-card",{attrs:{bordered:!1,"body-style":{padding:0}}},[a("div",{staticClass:"wallet"},[a("b",[e._v(" "+e._s(e.tt("liquidationEx.tips","{{record.name}}",e.innerCurRecord.name))+" ")])]),a("a-form-item",[a("a-button",{staticStyle:{width:"100%","margin-top":"24px"},attrs:{size:"large",loading:e.btnLoading,type:"primary"},on:{click:e.approve}},[e._v(e._s(e.$t("liquidationEx.enable")))])],1)],1)],1)])],1)],1)},n=[],o=(a("7db0"),a("c975"),a("a434"),a("b0c0"),a("4ec9"),a("b680"),a("d3b7"),a("ac1f"),a("25f0"),a("3ca3"),a("5319"),a("1276"),a("ddb0"),a("96cf"),a("1da1")),i=a("5530"),s=a("3521"),l=a("b775"),c=a("5880"),d=a("c030"),u=a("4d8a"),p=[],_={name:"QueryList",components:{StandardTable:s["a"]},i18n:a("89a6"),data:function(){return{liqs:[],liqsMap:new Map,innerData:p,expandedRowKeys:[],curRecord:[],innerCurRecord:[],advanced:!0,selectedRows:[],ModalText:"Content of the modal",visible:!1,confirmVisible:!1,confirmLoading:!1,liqLoading:!1,opType:"depOrRedeem",timer:"",bNeedEnable:!1,btnLoading:!1,detailModalVisible:!1}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(c["mapState"])("coins",["coins","balance","signer","walletAddress","perBlockRate","liqArray","comptrollerErrorReporter","comptrollerFailureInfo","tokenErrorReporter","tokenFailureInfo","USDTDecimals"])),Object(c["mapGetters"])("coins",["comptrollerObj","dexPriceObj","tokenHelper"])),Object(c["mapState"])("setting",["isMobile"])),{},{confirmTitle:function(){return this.$t("liquidationEx.transactionConfirm")},columns:function(){return[{title:this.$t("liquidationEx.table.account"),key:"account",scopedSlots:{customRender:"account"},width:this.isMobile?110:0,fixed:!!this.isMobile},{title:this.$t("liquidationEx.table.totalBorrowUSDT"),key:"totalBorrowUSDT",scopedSlots:{customRender:"totalBorrowUSDT"},visible:!this.isMobile},{title:this.$t("liquidationEx.table.totalSupplyUSDT"),key:"totalSupplyUSDT",scopedSlots:{customRender:"totalSupplyUSDT"},visible:!this.isMobile},{title:this.$t("liquidationEx.table.rate"),key:"rate",scopedSlots:{customRender:"risk"},defaultSortOrder:"descend",sorter:function(e,t){return e.risk-t.risk},visible:!this.isMobile},{title:this.$t("liquidationEx.table.detail"),key:"detail",scopedSlots:{customRender:"detail"},defaultSortOrder:"descend",sorter:function(e,t){return e.risk-t.risk},visible:!!this.isMobile,width:this.isMobile?100:0,fixed:!!this.isMobile},{title:this.$t("liquidationEx.table.operation"),key:"operation",scopedSlots:{customRender:"operation"},width:this.isMobile?60:0,fixed:!!this.isMobile}]},innerColumns:function(){return[{title:this.$t("liquidationEx.table.inner.symbol"),key:"name",scopedSlots:{customRender:"name"},width:this.isMobile?40:0,fixed:!!this.isMobile},{title:this.$t("liquidationEx.table.inner.borrowBalance"),key:"borrow",scopedSlots:{customRender:"borrow"},visible:!this.isMobile},{title:this.$t("liquidationEx.table.inner.assetSupply"),key:"assetSupply",scopedSlots:{customRender:"assetSupply"},visible:!this.isMobile},{title:this.$t("liquidationEx.table.detail"),scopedSlots:{customRender:"detail"},visible:!!this.isMobile,width:this.isMobile?230:0,fixed:!!this.isMobile},{title:this.$t("liquidationEx.table.operation"),dataIndex:"operation",key:"operation",scopedSlots:{customRender:"operation"},width:this.isMobile?50:0,fixed:!!this.isMobile}]}}),authorize:{deleteRecord:"delete"},watch:{confirmVisible:function(){this.confirmVisible||(this.confirmTitle=this.$t("liquidationEx.transactionConfirm"))},liqArray:function(){0!=this.liqArray.length&&clearInterval(this.timer)}},methods:{tt:function(e,t,a){return this.$t(e).replace(t,a)},handleExpand:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.curRecord=e,t.liqsMap.has(e.key)){a.next=3;break}return a.delegateYield(regeneratorRuntime.mark((function a(){var r,n,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=[],a.next=3,t.comptrollerObj.getAssetsIn(e.account);case 3:n=a.sent,o=regeneratorRuntime.mark((function a(o){var i,s,l,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(i=t.coins.find((function(e){return e.address.toLowerCase()==n[o].toLowerCase()})),!i){a.next=25;break}return s={},s["symbol"]=i.symbol,s["name"]=i.name,s["decimals"]=i.decimals,s["rate"]=i.rate,s["underlyingDecimals"]=i.underlyingDecimals,s["underlyingPrice"]=i.underlyingPrice,s["underlyingObj"]=i.underlyingObj,s["contractObj"]=i.contractObj,s["address"]=i.address,s["base64"]=i.BASE64,a.next=15,i.contractObj.balanceOf(e.account);case 15:return l=a.sent,s["balanceOf"]=d["a"].utils.formatUnits(l,i.decimals),s["balanceOfUnderlying"]=t.cToken2Underlying(s.balanceOf,s.decimals,s.rate,s.underlyingDecimals),s["balanceOfUSDT"]=parseFloat(t.underlying2USDT(t.cToken2Underlying(s.balanceOf,s.decimals,s.rate,s.underlyingDecimals),s.underlyingDecimals,s.underlyingPrice)),a.next=21,i.contractObj.borrowBalanceStored(e.account);case 21:c=a.sent,s["borrow"]=d["a"].utils.formatUnits(c,i.underlyingDecimals),s["borrowUSDT"]=parseFloat(t.underlying2USDT(s.borrow,s.underlyingDecimals,s.underlyingPrice)),r.push(s);case 25:case"end":return a.stop()}}),a)})),i=0;case 6:if(!(i<n.length)){a.next=11;break}return a.delegateYield(o(i),"t0",8);case 8:i++,a.next=6;break;case 11:t.generlLiqLists(e.account,r);case 12:case"end":return a.stop()}}),a)}))(),"t0",3);case 3:t.expandedRowKeys.length>0?(r=t.expandedRowKeys.indexOf(e.key),r>-1?t.expandedRowKeys.splice(r,1):(t.expandedRowKeys.splice(0,t.expandedRowKeys.length),t.expandedRowKeys.push(e.key))):t.expandedRowKeys.push(e.key),t.isMobile&&(t.detailModalVisible=!0);case 5:case"end":return a.stop()}}),a)})))()},computBorrow:function(e){return this.USDT2Underlying((e.borrowUSDT*e.assetSupplyUSDT/this.curRecord.totalSupplyUSDT).toFixed(e.underlyingDecimals),e.underlyingPrice,e.underlyingDecimals)},generlLiqLists:function(e,t){var a=[];this.liqsMap.clear();for(var r=0,n=0;n<t.length;n++)for(var o=0;o<t.length;o++){if(0==parseFloat(t[n].borrow))break;if(0!=parseFloat(t[o].balanceOf)){var i={};i["key"]=r++,i["account"]=e,i["name"]=t[n].name,i["symbol"]=t[n].symbol,i["decimals"]=t[n].decimals,i["rate"]=t[n].rate,i["underlyingDecimals"]=t[n].underlyingDecimals,i["underlyingPrice"]=t[n].underlyingPrice,i["address"]=t[n].address,i["base64"]=t[n].base64,i["balanceOf"]=t[n].balanceOf,i["borrow"]=t[n].borrow,i["borrowUSDT"]=t[n].borrowUSDT,i["underlyingObj"]=t[n].underlyingObj,i["contractObj"]=t[n].contractObj,i["assetName"]=t[o].name,i["assetRate"]=t[o].rate,i["assetDecimals"]=t[o].decimals,i["assetAddress"]=t[o].address,i["assetUnderlyingPrice"]=t[o].underlyingPrice,i["assetSupply"]=t[o].balanceOf,i["assetSupplyUnderlying"]=t[o].balanceOfUnderlying,i["assetSupplyUSDT"]=t[o].balanceOfUSDT,a.push(i)}}this.liqsMap.set(e,a)},expandedRowsChange:function(e){},onExpand:function(e,t){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a.curRecord=t,!e){r.next=4;break}if(a.liqsMap.has(t.key)){r.next=4;break}return r.delegateYield(regeneratorRuntime.mark((function e(){var r,n,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=[],e.next=3,a.comptrollerObj.getAssetsIn(t.account);case 3:n=e.sent,o=regeneratorRuntime.mark((function e(o){var i,s,l,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=a.coins.find((function(e){return e.address.toLowerCase()==n[o].toLowerCase()})),!i){e.next=24;break}return s={},s["name"]=i.name,s["symbol"]=i.symbol,s["decimals"]=i.decimals,s["rate"]=i.rate,s["underlyingDecimals"]=i.underlyingDecimals,s["underlyingPrice"]=i.underlyingPrice,s["underlyingObj"]=i.underlyingObj,s["contractObj"]=i.contractObj,s["address"]=i.address,s["base64"]=i.BASE64,e.next=15,i.contractObj.balanceOf(t.account);case 15:return l=e.sent,s["balanceOf"]=d["a"].utils.formatUnits(l,i.decimals),s["balanceOfUSDT"]=parseFloat(a.underlying2USDT(a.cToken2Underlying(s.balanceOf,s.decimals,s.rate,s.underlyingDecimals),s.underlyingDecimals,s.underlyingPrice)),e.next=20,i.contractObj.borrowBalanceStored(t.account);case 20:c=e.sent,s["borrow"]=d["a"].utils.formatUnits(c,i.underlyingDecimals),s["borrowUSDT"]=parseFloat(a.underlying2USDT(s.borrow,s.underlyingDecimals,s.underlyingPrice)),r.push(s);case 24:case"end":return e.stop()}}),e)})),i=0;case 6:if(!(i<n.length)){e.next=11;break}return e.delegateYield(o(i),"t0",8);case 8:i++,e.next=6;break;case 11:a.generlLiqLists(t.account,r);case 12:case"end":return e.stop()}}),e)}))(),"t0",4);case 4:a.expandedRowKeys.length>0?(n=a.expandedRowKeys.indexOf(t.key),n>-1?a.expandedRowKeys.splice(n,1):(a.expandedRowKeys.splice(0,a.expandedRowKeys.length),a.expandedRowKeys.push(t.key))):a.expandedRowKeys.push(t.key);case 5:case"end":return r.stop()}}),r)})))()},getAccounts:function(){var e=this;0!=this.coins.length&&(this.liqs.length>0?clearInterval(this.timer):(clearInterval(this.timer),this.timer=setInterval(this.getAccounts,5e3)),Object(l["e"])("https://api.roolend.finance:9527/liquidations",l["a"].GET).then(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(a){var r,n,o,i,s,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=a.data.liquidations,null!=r){t.next=3;break}return t.abrupt("return");case 3:e.liqs=[],n=!0,o=0;case 6:if(!(o<r.length)){t.next=29;break}if(i={},i["key"]=r[o].account,i["account"]=r[o].account,!n){t.next=22;break}return t.next=13,e.comptrollerObj.getAccountSumCollateralAndBorrow(r[o].account,"0x0000000000000000000000000000000000000000",0,0);case 13:return s=t.sent,"0"==s[1]?i["risk"]=0:i["risk"]=100*parseFloat(Object(u["formatEther"])(Object(u["parseUnits"])(s[2].toString(),18).div(s[1]))),i["totalBorrowUSDT"]=parseFloat(Object(u["formatUnits"])(s[2],6)),t.next=18,e.tokenHelper.getTotalAssert(r[o].account);case 18:l=t.sent,i["totalSupplyUSDT"]=parseFloat(Object(u["formatUnits"])(l[1],6)),t.next=25;break;case 22:i["risk"]=100*parseFloat(r[o].healthRate),i["totalBorrowUSDT"]=parseFloat(Object(u["formatUnits"])(d["a"].BigNumber.from(r[o].totalBorrow),6)),i["totalSupplyUSDT"]=parseFloat(Object(u["formatUnits"])(d["a"].BigNumber.from(r[o].totalAsset),6));case 25:e.liqs.push(i);case 26:o++,t.next=6;break;case 29:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},approve:function(){var e=this;this.btnLoading=!0,this.innerCurRecord.underlyingObj.approve(this.innerCurRecord.address,d["a"].constants.MaxUint256).then((function(e){})).catch((function(t){e.$message.error(e.$t("enableFailed")+t.message())})),this.innerCurRecord.underlyingObj.on("Approval",(function(t,a,r){"0"==r.toString()?e.bNeedEnable=!0:e.bNeedEnable=!1}))},onLiquidate:function(e,t){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==a.walletAddress){e.next=3;break}return a.$message.warning(a.$t("errorMessage.connectToWalletFirst")),e.abrupt("return");case 3:if(a.innerCurRecord=t,"OKT"==t.name){e.next=14;break}return e.next=7,t.underlyingObj.allowance(a.walletAddress,t.address);case 7:if(r=e.sent,"0"!=r.toString()){e.next=13;break}return a.bNeedEnable=!0,e.abrupt("return");case 13:a.bNeedEnable=!1;case 14:"OKT"!=t.name?t.contractObj.liquidateBorrow(t.account,Object(u["parseUnits"])(a.computBorrow(t),t.underlyingDecimals),t.assetAddress).then((function(e){t.contractObj.on("Failure",(function(t,r,n,o){e.hash==o.transactionHash&&a.$message.error(a.$t("errorMessage.liquidateFailed"),a.tokenErrorReporter[t],a.tokenFailureInfo[r])}))})).catch((function(e){a.$message.error(a.$t("errorMessage.liquidateFailed")+e.data.messages)})):(n={value:Object(u["parseUnits"])(a.computBorrow(t),t.underlyingDecimals)},t.contractObj.liquidateBorrow(t.account,t.assetAddress,n).then((function(e){t.contractObj.on("Failure",(function(t,r,n,o){e.hash==o.transactionHash&&a.$message.error(a.$t("errorMessage.liquidateFailed"),a.tokenErrorReporter[t],a.tokenFailureInfo[r])}))})).catch((function(e){a.$message.error(a.$t("errorMessage.liquidateFailed")+e.data.message)}))),t.contractObj.on("LiquidateBorrow",(function(e,t,r,n,o,i){a.getAccounts()}));case 16:case"end":return e.stop()}}),e)})))()},cToken2Underlying:function(e,t,a,r){if(0==e)return"0";var n=Object(u["formatUnits"])(Object(u["parseUnits"])(e,t).mul(a),r),o=d["a"].BigNumber.from(n.split(".")[0]);return Object(u["formatEther"])(o)},underlying2USDT:function(e,t,a){if(0==e)return"0";var r=Object(u["parseUnits"])(parseFloat(e).toFixed(t).toString(),t).mul(a).toString(),n=Object(u["formatEther"])(r),o=d["a"].BigNumber.from(n.split(".")[0]),i=Object(u["formatUnits"])(o,this.USDTDecimals);return i},USDT2Underlying:function(e,t,a){if(!isNaN(e)){var r=Object(u["parseUnits"])(parseFloat(e).toFixed(this.USDTDecimals),this.USDTDecimals),n=Object(u["parseUnits"])(r.toString(),18),o=Object(u["formatUnits"])(n.div(t).toString(),a);return o}},hideConfirmModal:function(){this.confvisible=!1},getBalanceOf:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.record.contractObj.balanceOf(e.walletAddress);case 2:a=t.sent,e.record.balanceOf=d["a"].utils.formatUnits(a,e.decimals);case 4:case"end":return t.stop()}}),t)})))()},showModalDR:function(e,t){this.opType="depOrRedeem",this.visible=!0,this.record=t},showModalBR:function(e,t){this.opType="borrowAndRepay",this.visible=!0,this.record=t},collateral:function(e,t){this.comptrollerObj.enterMarkets([t.address]).then((function(e){}))},onChange:function(e,t){e?this.comptrollerObj.enterMarkets([t.address]).then((function(e){})).catch((function(e){})):this.comptrollerObj.exitMarket(t.address).then((function(e){})).catch((function(e){}))},handleOk:function(e){var t=this;this.ModalText="The modal will be closed after two seconds"+e,this.confirmLoading=!0,setTimeout((function(){t.visible=!1,t.confirmLoading=!1}),2e3)},handleCancel:function(e){this.visible=!1},expandIcon:function(e){var t=this.$createElement;return t("span",{style:"margin-right:0px"},[t("a-icon",{attrs:{type:"down-circle"}})])}},mounted:function(){this.timer=setInterval(this.getAccounts,5e3),this.getAccounts()},beforeDestroy:function(){clearInterval(this.timer)}},b=_,m=(a("bcb6"),a("64ec"),a("0c7c")),f=Object(m["a"])(b,r,n,!1,null,"77874195",null);t["default"]=f.exports},bcb6:function(e,t,a){"use strict";var r=a("08b6"),n=a.n(r);n.a},d58f:function(e,t,a){var r=a("1c0b"),n=a("7b0b"),o=a("44ad"),i=a("50c4"),s=function(e){return function(t,a,s,l){r(a);var c=n(t),d=o(c),u=i(c.length),p=e?u-1:0,_=e?-1:1;if(s<2)while(1){if(p in d){l=d[p],p+=_;break}if(p+=_,e?p<0:u<=p)throw TypeError("Reduce of empty array with no initial value")}for(;e?p>=0:u>p;p+=_)p in d&&(l=a(l,d[p],p,c));return l}};e.exports={left:s(!1),right:s(!0)}},d731:function(e,t,a){}}]);