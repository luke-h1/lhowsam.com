"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6229],{66229:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var i=a(30719),n=a(38629),o=a(36883),r=a(73819),d=a(10830),s=a(46227),c=a(62409),l=a(28066);let u=c.zo.hr`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`;function h(e){let{childItemId:t,items:a,isActive:o,layout:c,showIcons:l,title:h}=e,{collapsed:p}=(0,r.usePaneLayout)(),x=(0,n.sr_)(a?.filter(e=>"divider"!==e.type)),m=(0,s.useCallback)(e=>a?.find((t,a)=>a===e)?.type==="divider",[a]),v=(0,s.useCallback)(e=>{let t=e.displayOptions?.showIcon;return"u">typeof t?!1!==t:!1!==l},[l]),b=(0,s.useCallback)((e,a)=>{let{virtualIndex:n}=a;if("divider"===e.type)return(0,i.jsx)(d.xu,{marginBottom:1,children:(0,i.jsx)(u,{})},`divider-${n}`);let s=!o&&t===e.id,l=o&&t===e.id,h=e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0;return(0,i.jsx)(r.PaneItem,{icon:!!v(e)&&e.icon,id:e.id,layout:c,marginBottom:1,pressed:s,schemaType:e.schemaType,selected:l,title:x(e).title,value:h},e.id)},[t,x,o,c,v]);return(0,i.jsx)(r.PaneContent,{overflow:p?"hidden":"auto",children:a&&a.length>0&&(0,i.jsx)(n.e8h,{activeItemDataAttr:"data-hovered",ariaLabel:h,canReceiveFocus:!0,getItemDisabled:m,itemHeight:51,items:a,onlyShowSelectionWhenActive:!0,paddingBottom:1,paddingX:3,renderItem:b,wrapAround:!1})})}let p=({index:e,menuItems:t,menuItemGroups:a,title:n})=>{let{features:d}=(0,r.useStructureTool)(),{collapsed:s,isLast:c}=(0,r.usePane)();return(0,i.jsx)(r.PaneHeader,{actions:(0,i.jsx)(r.PaneHeaderActions,{menuItems:t,menuItemGroups:a}),backButton:d.backButton&&e>0&&(0,i.jsx)(o.zx,{as:r.BackLink,"data-as":"a",icon:l.Y4O,mode:"bleed",tooltipProps:{content:"Back"}}),tabIndex:c&&!s?-1:0,title:n})};function x(e){let{childItemId:t,index:a,isActive:o,isSelected:d,pane:s,paneKey:c}=e,{defaultLayout:l,displayOptions:u,items:x,menuItems:m,menuItemGroups:v}=s,b=u?.showIcons!==!1,{title:k}=(0,n.v0Z)(s);return(0,i.jsxs)(r.Pane,{currentMaxWidth:350,"data-testid":"structure-tool-list-pane","data-ui":"ListPane",id:c,maxWidth:640,minWidth:320,selected:d,children:[r._DEBUG,(0,i.jsx)(p,{index:a,menuItems:m,menuItemGroups:v,title:k}),(0,i.jsx)(h,{childItemId:t,isActive:o,items:x,layout:l,showIcons:b,title:k},c)]})}}}]);