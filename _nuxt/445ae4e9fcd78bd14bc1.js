(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{334:function(e,t,a){var i=a(496);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,a(23).default)("3c611ca7",i,!1,{sourceMap:!1})},496:function(e,t,a){(e.exports=a(24)(!1)).push([e.i,".screenview[data-v-001c9586]{margin-top:15px}.screenview_company[data-v-001c9586]{display:inline}.screenview_date[data-v-001c9586]{display:inline;margin:0 15px}.screenview_id[data-v-001c9586]{display:inline}.selectview[data-v-001c9586]{margin-top:15px;margin-bottom:15px;padding-bottom:30px}.selectview_left[data-v-001c9586]{float:left}.selectview_state[data-v-001c9586]{display:inline}.selectview_man[data-v-001c9586]{display:inline;margin-left:15px}.selectview_right[data-v-001c9586]{float:right}.tableview[data-v-001c9586]{margin-top:20px}",""])},497:function(e,t,a){"use strict";var i=a(334);a.n(i).a},561:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pageview"},[a("h1",{staticStyle:{color:"black"}},[e._v("引用其他公司订单")]),e._v(" "),a("div",{staticClass:"screenview"},[a("div",{staticClass:"screenview_company"},[a("span",[e._v("分公司")]),e._v(" "),a("el-select",{staticStyle:{width:"140px"},attrs:{size:"small",placeholder:"请选择"},model:{value:e.companyId,callback:function(t){e.companyId=t},expression:"companyId"}},e._l(e.companyList,function(e){return a("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})}))],1),e._v(" "),a("div",{staticClass:"screenview_date"},[a("span",[e._v("采购时间")]),e._v(" "),a("el-date-picker",{staticStyle:{width:"250px","margin-top":"5px","margin-right":"10px"},attrs:{size:"small",type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd",format:"yyyy-MM-dd"},on:{change:e.dateChange},model:{value:e.createTime,callback:function(t){e.createTime=t},expression:"createTime"}})],1),e._v(" "),a("div",{staticClass:"screenview_id"},[a("span",[e._v("采购单号")]),e._v(" "),a("el-input",{staticStyle:{width:"140px"},attrs:{size:"small",placeholder:"请输入采购单号"},model:{value:e.orderId,callback:function(t){e.orderId=t},expression:"orderId"}})],1)]),e._v(" "),a("div",{staticClass:"selectview"},[a("div",{staticClass:"selectview_left"},[a("div",{staticClass:"selectview_state"},[a("span",[e._v("订单状态")]),e._v(" "),a("el-select",{staticStyle:{width:"100px"},attrs:{size:"small",placeholder:"请选择"},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},e._l(e.stateList,function(e){return a("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})}))],1),e._v(" "),a("div",{staticClass:"selectview_man"},[a("span",[e._v("采购人员")]),e._v(" "),a("el-input",{staticStyle:{width:"140px"},attrs:{size:"small",placeholder:"请输入采购员名称"},model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}})],1)]),e._v(" "),a("div",{staticClass:"selectview_right"},[a("el-button",{staticStyle:{width:"120px"},attrs:{size:"small",type:"primary"},on:{click:function(t){e.selectAllPurchaseOrder()}}},[e._v("查询")])],1)]),e._v(" "),a("div",{staticClass:"tableview"},[a("el-table",{staticStyle:{width:"1800px"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{resizable:!1,fixed:"",prop:"num",label:"序号",width:"60px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{resizable:!1,prop:"gmtCreate",label:"采购时间",width:"120px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{resizable:!1,prop:"orderId",label:"采购单号",width:"120px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{resizable:!1,prop:"count",label:"商品个数",width:"80px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{resizable:!1,prop:"totalPrice",label:"含税总价(元)",width:"100px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{resizable:!1,prop:"contactPerson",label:"采购人员",width:"80px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{resizable:!1,prop:"stateName",label:"状态",width:"80px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{resizable:!1,prop:"companyName",label:"分公司名称",width:"120px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{resizable:!1,fixed:"right",label:"操作",width:"120px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleClick(t.row.orderId)}}},[e._v("导入")])]}}])})],1)],1)])};i._withStripped=!0;var s=a(53),l=a.n(s),n=a(2),r=a.n(n),c=a(4),o=a.n(c),p=a(11),d=a(16),u=a(6),h=a(89),v={data:function(){return{orderId:"",companyId:"",createTime:"",beginDate:"",endDate:"",purchaseId:"",state:"",userId:"",indexPage:1,pageSize:10,pageCount:0,stateList:[],tableData:[],companyList:[]}},components:{},computed:{},mounted:function(){this.getCompanyList(),this.PurchaseOrderState(),this.selectAllPurchaseOrder()},methods:{selectAllPurchaseOrder:function(){var e=o()(r.a.mark(function e(){var t,a,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={orderId:this.orderId,beginDate:this.beginDate,endDate:this.endDate,orderStatus:this.state,userId:this.userId,companyId:this.companyId,pageNum:this.indexPage,pageSize:this.pageSize},e.next=3,Object(d.a)(this,p.a.AllPurchaseUrl,t);case 3:if((a=e.sent)&&(this.pageCount=a.data.pageCount,this.tableData=a.data.list,this.tableData))for(i=0;i<this.tableData.length;i++)this.tableData[i].num=i+1,this.tableData[i].gmtCreate=Object(u.i)(this.tableData[i].gmtCreate),this.tableData[i].payTypeName=Object(u.d)(this.tableData[i].payType),this.tableData[i].stateName=Object(u.e)(this.tableData[i].orderStatus),this.tableData[i].totalPrice=this.tableData[i].totalPrice?this.tableData[i].totalPrice.toFixed(2):this.tableData[i].price.toFixed(2);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),PurchaseOrderState:function(){var e=o()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.d)(this);case 2:this.stateList=e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getCompanyList:function(){var e=o()(r.a.mark(function e(t){var a,i,s,n,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={companyId:t},e.next=3,Object(d.a)(this,p.a.getCompanyListUrl,a);case 3:if((i=e.sent).data)for((s=new l.a).key="",s.value="全部",this.companyList.push(s),n=0;n<i.data.length;n++)(c=new l.a).key=i.data[n].companyId,c.value=i.data[n].companyName,this.companyList.push(c);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),handleClick:function(e){this.$router.push({path:"/profile/portqueryorderlist/",query:{id:e,type:"other"}})},dateChange:function(){console.log("tang---------------------\x3e"+this.createTime),this.createTime&&(this.beginDate=this.createTime[0],this.endDate=this.createTime[1])}}},m=(a(497),a(25)),b=Object(m.a)(v,i,[],!1,null,"001c9586",null);t.default=b.exports}}]);