(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ConfigConnections"],{e5c6:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-data-iterator",{attrs:{items:t.items,"item-key":"name","hide-default-footer":"","single-expand":t.expand},scopedSlots:t._u([{key:"header",fn:function(){return[n("v-toolbar",{staticClass:"mb-1",attrs:{color:t.navColor,dark:"",flat:"",dense:""}},[n("v-toolbar-title",[t._v("API Connections")]),n("v-spacer"),n("v-spacer"),n("v-btn",{attrs:{color:t.navColor+" darken-2"},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-plus-box")]),n("span",[t._v("Add API Connection")])],1)],1)]},proxy:!0},{key:"no-data",fn:function(){return[n("v-alert",{staticClass:"ma-8",attrs:{border:"left",type:"info"}},[n("span",[t._v("No API Connections are defined. Please add one: "),n("v-btn",{attrs:{color:t.navColor+" darken-2",small:""},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[n("span",[t._v("Add API Connection")])])],1)])]},proxy:!0},{key:"default",fn:function(e){var i=e.items,a=e.isExpanded,o=e.expand;return[n("v-row",t._l(i,(function(e){return n("v-col",{key:e.name,attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[n("v-card",[n("v-toolbar",[n("v-toolbar-title",[n("span",[t._v(t._s(e.name))]),t.isApiReady(e.key)?n("v-chip",{staticClass:"ma-2",attrs:{color:"green",small:""}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-check-circle")]),n("span",[t._v("Connected")])],1):n("v-chip",{staticClass:"ma-2",attrs:{color:"red",small:""}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-alert-circle")]),n("span",[t._v("Not Connected")])],1)],1),n("v-spacer"),n("v-switch",{staticClass:"mt-4",attrs:{color:t.navColor,"input-value":a(e),label:a(e)?"Editing":"Edit"},on:{change:function(t){return o(e,t)}}})],1)],1),a(e)?n("v-row",[n("v-container",{staticClass:"mt-0 pt-0",attrs:{fluid:""}},[n("v-card",[n("v-row",[n("v-col",{staticClass:"pt-0 pr-1",attrs:{cols:"12",sm:"12",md:"6",lg:"6"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",[n("v-list-item-content",[n("v-text-field",{attrs:{label:"API Name/Description"},model:{value:e.name,callback:function(n){t.$set(e,"name",n)},expression:"item.name"}})],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-text-field",{attrs:{label:"GraphQL Endpoint"},model:{value:e.httpEndpoint,callback:function(n){t.$set(e,"httpEndpoint",n)},expression:"item.httpEndpoint"}})],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-text-field",{attrs:{label:"Websockets Endpoint"},model:{value:e.wsEndpoint,callback:function(n){t.$set(e,"wsEndpoint",n)},expression:"item.wsEndpoint"}})],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-text-field",{attrs:{label:"Schema Endpoint"},model:{value:e.schemaEndpoint,callback:function(n){t.$set(e,"schemaEndpoint",n)},expression:"item.schemaEndpoint"}})],1)],1),n("v-list-item",[n("v-divider")],1),n("v-list-item",[n("v-btn",{attrs:{color:"green"},on:{click:function(n){return t.save(e)}}},[t._v("Save")]),n("v-btn",{staticClass:"ml-2",attrs:{color:"blue"},on:{click:function(n){return t.connect(e)}}},[t._v("Connect")]),n("v-spacer"),n("v-btn",{attrs:{color:"red"},on:{click:function(n){return t.remove(e)}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-delete")]),n("span",[t._v("Delete")])],1)],1)],1)],1),n("v-col",{staticClass:"pt-0 pl-1",attrs:{cols:"12",sm:"12",md:"6",lg:"6"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",[n("v-list-item-content",[t._v("API Unique ID")]),n("v-list-item-content",[t.apistate[e.key].uuid?n("span",{staticClass:"green--text text--lighten-1"},[t._v(t._s(t.apistate[e.key].uuid))]):n("v-icon",{attrs:{color:"red"}},[t._v("mdi-alert-circle-outline")])],1)],1),n("v-list-item",[n("v-list-item-content",[t._v("API Last Seen")]),n("v-list-item-content",[t.lastseen(e.key)<60?n("span",{staticClass:"green--text text--lighten-1"},[t._v(t._s(t.lastseen(e.key).toFixed(2))+" seconds ago")]):n("span",{staticClass:"red--text text--lighten-1"},[t._v(t._s(t.lastseen(e.key).toFixed(2))+" seconds ago")])])],1),n("v-list-item",[n("v-list-item-content",[t._v("API Connection State")]),n("v-list-item-content",[t.apistate[e.key].state?n("v-icon",{attrs:{color:"green"}},[t._v("mdi-check-circle-outline")]):n("v-icon",{attrs:{color:"red"}},[t._v("mdi-alert-circle-outline")])],1)],1),n("v-list-item",[n("v-list-item-content",[t._v("API Schema Ready")]),n("v-list-item-content",[t.apistate[e.key].schemaready?n("v-icon",{attrs:{color:"green"}},[t._v("mdi-check-circle-outline")]):n("v-icon",{attrs:{color:"red"}},[t._v("mdi-alert-circle-outline")])],1)],1),n("v-list-item",[n("v-list-item-content",[t._v("Authentication Set")]),n("v-list-item-content",[t.apistate[e.key].auth?n("v-icon",{attrs:{color:"green"}},[t._v("mdi-check-circle-outline")]):n("v-icon",{attrs:{color:"red"}},[t._v("mdi-alert-circle-outline")])],1)],1),n("v-list-item",[n("v-list-item-content",[t._v("Icon Set")]),n("v-list-item-content",[t._v(t._s(t.apistate[e.key].icon)),t.apistate[e.key].icon?n("v-icon",{attrs:{color:"green"}},[t._v(t._s(t.apistate[e.key].icon))]):n("v-icon",{attrs:{color:"red"}},[t._v("mdi-alert-circle-outline")])],1)],1)],1)],1)],1)],1)],1)],1):t._e()],1)})),1)]}}])}),n("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline",class:t.navColor,attrs:{"primary-title":""}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-plus-box")]),n("span",[t._v("Add API Connection")])],1),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"API Key (Short)",required:""},model:{value:t.newitem.key,callback:function(e){t.$set(t.newitem,"key",e)},expression:"newitem.key"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"API Name/Description",required:""},model:{value:t.newitem.name,callback:function(e){t.$set(t.newitem,"name",e)},expression:"newitem.name"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Hostname (FQDN) / IP Address",required:""},model:{value:t.newitem.hostname,callback:function(e){t.$set(t.newitem,"hostname",e)},expression:"newitem.hostname"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Port",required:""},model:{value:t.newitem.port,callback:function(e){t.$set(t.newitem,"port",e)},expression:"newitem.port"}})],1)],1)],1)],1),n("v-divider"),n("v-card-actions",[n("v-btn",{staticClass:"ma-2",attrs:{color:"green"},on:{click:function(e){return t.createConnection()}}},[t._v("Create Connection")]),n("v-btn",{staticClass:"ma-2",attrs:{color:"grey"},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")])],1)],1)],1),t.deleteitem?n("v-dialog",{attrs:{"max-width":"400"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline red--text"},[t._v("Delete Connection: "),n("strong",[t._v(t._s(t.deleteitem.key))]),t._v("?")])]),n("v-card-text",[n("h3",[t._v(t._s(t.deleteitem.name))]),n("div",[t._v("Are you sure you want to delete this API connection?")])]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(e){t.deleteDialog=!1}}},[t._v("Cancel")]),n("v-btn",{attrs:{text:"",color:"red darken-1"},on:{click:function(e){return t.removeConnection()}}},[t._v("Delete")])],1)],1)],1):t._e()],1)},a=[],o=(n("99af"),n("b0c0"),n("07ac"),n("2532"),{name:"ConfigConnections",components:{},data:function(){return{search:"",filter:{},dialog:!1,deleteDialog:!1,newitem:{},deleteitem:null,expand:!0}},computed:{items:function(){return Object.values(this.apis)}},methods:{lastseen:function(t){var e=this.apistate&&this.apistate.hasOwnProperty(t)?this.apistate[t].lastseen:0;return performance.now()-e},save:function(t){this.$store.commit("data/setApiData",{api:t.key,data:t})},connect:function(t){this.logDebug("Connecting: "+t.key),this.$apollo.provider.clients[t.key]||this.createClient(t.key,this.apis[t.key])},createConnection:function(){this.dialog=!1,this.logDebug("Creating new connection: "+this.newitem.key);var t="http:",e=t.includes("https")?"wss:":"ws:",n={key:this.newitem.key,httpEndpoint:"".concat(t,"//").concat(this.newitem.hostname,":").concat(this.newitem.port,"/graphql"),wsEndpoint:"".concat(e,"//").concat(this.newitem.hostname,":").concat(this.newitem.port,"/subscriptions"),schemaEndpoint:"".concat(t,"//").concat(this.newitem.hostname,":").concat(this.newitem.port,"/schema"),websocketsOnly:!1,name:this.newitem.name,colorLight:"rgba(166,11,11,0.3)",colorDark:"rgba(166,11,11,0.9)",authToken:null};this.$store.commit("data/addApi",{key:n.key,data:n})},remove:function(t){this.deleteitem=t,this.deleteDialog=!0},removeConnection:function(){this.logDebug("Deleting connection:"+this.deleteitem.key),delete this.$apollo.provider.clients[this.deleteitem.key],this.$store.commit("data/removeApi",this.deleteitem.key),this.deleteitem=null}}}),s=o,l=n("2877"),c=n("6544"),r=n.n(c),d=n("0798"),v=n("8336"),m=n("b0af"),p=n("99d9"),u=n("cc20"),h=n("62ad"),f=n("a523"),k=n("c377"),_=n("169a"),b=n("ce7e"),g=n("132d"),C=n("8860"),w=n("da13"),y=n("5d23"),x=n("0fd9"),A=n("2fa4"),D=n("b73d"),V=n("8654"),I=n("71d9"),E=n("2a7f"),P=Object(l["a"])(s,i,a,!1,null,null,null);e["default"]=P.exports;r()(P,{VAlert:d["a"],VBtn:v["a"],VCard:m["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VChip:u["a"],VCol:h["a"],VContainer:f["a"],VDataIterator:k["a"],VDialog:_["a"],VDivider:b["a"],VIcon:g["a"],VList:C["a"],VListItem:w["a"],VListItemContent:y["a"],VRow:x["a"],VSpacer:A["a"],VSwitch:D["a"],VTextField:V["a"],VToolbar:I["a"],VToolbarTitle:E["b"]})}}]);
//# sourceMappingURL=ConfigConnections.ba6b6f11.js.map