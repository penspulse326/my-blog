"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[432],{693:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var t=r(4848),s=r(8453);const c={title:"Switch",description:"\u8a2d\u8a08 Switch \u5143\u4ef6",date:new Date("2024-07-26T00:00:00.000Z"),keywords:["\u7a0b\u5f0f\u8a9e\u8a00","JavaScript","React","custom-component","component-design","storybook","switch"],slug:"react-custom-ui-switch"},i=void 0,d={id:"react/react_ui/Switch",title:"Switch",description:"\u8a2d\u8a08 Switch \u5143\u4ef6",source:"@site/docs/react/react_ui/2.Switch.md",sourceDirName:"react/react_ui",slug:"/react/react_ui/react-custom-ui-switch",permalink:"/react/react_ui/react-custom-ui-switch",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Switch",description:"\u8a2d\u8a08 Switch \u5143\u4ef6",date:"2024-07-26T00:00:00.000Z",keywords:["\u7a0b\u5f0f\u8a9e\u8a00","JavaScript","React","custom-component","component-design","storybook","switch"],slug:"react-custom-ui-switch"},sidebar:"tutorialSidebar",previous:{title:"Button",permalink:"/react/react_ui/react-custom-ui-button"},next:{title:"[\u7b46\u8a18] React \u7c21\u6613\u4e92\u52d5\u5730\u5716",permalink:"/react/react-taiwan-map"}},o={},l=[{value:"\u57fa\u672c\u6a23\u5f0f",id:"\u57fa\u672c\u6a23\u5f0f",level:2},{value:"\u5bec\u5ea6\u8b8a\u5316",id:"\u5bec\u5ea6\u8b8a\u5316",level:2},{value:"\u52a0\u5165\u9593\u9694",id:"\u52a0\u5165\u9593\u9694",level:2},{value:"\u6253\u5305 props",id:"\u6253\u5305-props",level:2},{value:"\u5c55\u793a\u8a2d\u5b9a",id:"\u5c55\u793a\u8a2d\u5b9a",level:2}];function h(e){const n={br:"br",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u5c6c\u6027\u8a2d\u8a08"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface ButtonProps {\r\n   /**\r\n   * \u95dc\u9589\u72c0\u614b\u7684\u6587\u5b57\r\n   */\r\n  uncheckedText?: React.ReactNode;\r\n\r\n  /**\r\n   * \u958b\u555f\u72c0\u614b\u7684\u6587\u5b57\r\n   */\r\n  checkedText?: React.ReactNode;\r\n\r\n  /**\r\n   * \u662f\u5426\u958b\u555f\r\n   */\r\n  isChecked: boolean;\r\n\r\n  /**\r\n   * \u662f\u5426\u7981\u7528\r\n   */\r\n  isDisabled?: boolean;\r\n\r\n  /**\r\n   * \u984f\u8272\r\n   */\r\n  themeColor?: string;\r\n\r\n  /**\r\n   * \u5c3a\u5bf8\r\n   */\r\n  size?: 'sm' | 'md';\r\n\r\n  /**\r\n   * \u5207\u63db\u958b\u95dc\r\n   */\r\n  onClick: () => void;\r\n}\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\u57fa\u672c\u6a23\u5f0f",children:"\u57fa\u672c\u6a23\u5f0f"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 styled \u505a\u51fa\u57fa\u672c\u7684\u6a23\u5f0f\uff0c\u56e0\u70ba\u5728 ",(0,t.jsx)(n.code,{children:"Button"})," \u5143\u4ef6\u5df2\u7d93\u8a2d\u8a08\u597d ",(0,t.jsx)(n.code,{children:"useColor"})," \u9019\u500b hook \u53ef\u4ee5\u7528\u4e86\uff0c",(0,t.jsx)(n.br,{}),"\n","\u6240\u4ee5\u9019\u908a\u5728\u505a\u57fa\u672c\u6a23\u5f0f\u6642\u5df2\u7d93\u5148\u628a ",(0,t.jsx)(n.code,{children:"$themeColor"})," \u50b3\u5165\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"export const SwitchButton = styled.button<StyledProps>`\r\n  display: flex;\r\n  align-items: center;\r\n\r\n  padding: 0;\r\n  width: 40px;\r\n  height: 20px;\r\n  border: none;\r\n  border-radius: 20px;\r\n\r\n  background-color: ${({ $isChecked, $themeColor, theme }) =>\r\n    $isChecked ? $themeColor : theme.colors.disable};\r\n\r\n  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};\r\n`;\r\n\r\nexport const Thumb = styled.div<StyledProps>`\r\n  width: 16px;\r\n  height: 16px;\r\n  border-radius: 50%;\r\n  background-color: white;\r\n\r\n  transform: translateX(${({ $isChecked }) => ($isChecked ? '20px' : '0px')});\r\n  transition: 0.3s;\r\n`;\r\n\r\nexport const Label = styled.label<StyledProps>`\r\n  color: white;\r\n  font-size: 14px;\r\n  line-height: 1;\r\n  white-space: nowrap;\r\n\r\n  cursor: pointer;\r\n`;\r\n\r\ninterface StyledProps {\r\n  $isChecked: boolean;\r\n  $themeColor?: string;\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5916\u5c64\u5143\u4ef6\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"function Switch({\r\n  checkedText,\r\n  uncheckedText,\r\n  isChecked,\r\n  themeColor = 'primary',\r\n  isDisabled = false,\r\n  size = 'md',\r\n  onClick,\r\n}: SwitchProps) {\r\n  const { getColor } = useColor();\r\n  const switchColor = getColor(themeColor, isDisabled);\r\n\r\n  return (\r\n    <SwitchButton\r\n      $isChecked={isChecked}\r\n      $themeColor={switchColor}\r\n      disabled={isDisabled}\r\n      onClick={onClick}\r\n    >\r\n      <Thumb $isChecked={isChecked} />\r\n      <Label $isChecked={isChecked}>\r\n        {/* {isChecked ? checkedText : uncheckedText} */}\r\n      </Label>\r\n    </SwitchButton>\r\n  );\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0d\u7ba1\u6587\u5b57\u7684\u8a71\u76ee\u524d\u66ab\u6642\u5df2\u7d93\u5b8c\u6210 ",(0,t.jsx)(n.code,{children:"Switch"})," \u5927\u81f4\u7684\u6d41\u7a0b\u4e86\uff01"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\u5bec\u5ea6\u8b8a\u5316",children:"\u5bec\u5ea6\u8b8a\u5316"}),"\n",(0,t.jsxs)(n.p,{children:["\u8003\u616e\u6587\u5b57\u4e4b\u5f8c\u5c31\u8868\u793a\u5bec\u5ea6\u662f\u6703\u96a8\u8457\u6587\u5b57\u5167\u5bb9\u6539\u8b8a\u800c\u8b8a\u5316\u7684\uff0c",(0,t.jsx)(n.br,{}),"\n","\u6240\u4ee5\u9700\u8981\u7528 ",(0,t.jsx)(n.code,{children:"useRef"})," \u7d81\u5b9a ",(0,t.jsx)(n.code,{children:"Label"}),"\uff0c\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"useLayoutEffect(() => {\r\n  // \u9019\u500b\u5bec\u5ea6\u6bd4\u8f03\u4e0d\u4e00\u5b9a\uff0c\u5982\u679c\u9700\u8981\u8abf\u9019\u500b\u503c\uff0c\u8981\u6ce8\u610f\u5f8c\u7e8c\u8a08\u7b97\u4f4d\u79fb\u7684\u91cf\r\n  const minLabelWidth = thumbSize * 1.2; \r\n  const currentLabelWidth = labelRef.current?.clientWidth ?? minLabelWidth;\r\n\r\n  setLabelWidth(\r\n    currentLabelWidth > minLabelWidth ? currentLabelWidth : minLabelWidth,\r\n  );\r\n}, [labelRef?.current?.clientWidth, isChecked]);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u53ea\u52a0\u5165\u66f8\u4e2d\u7d66\u7684\u4f9d\u8cf4\u9805 ",(0,t.jsx)(n.code,{children:"labelRef?.current?.clientWidth"})," \u7684\u8a71\uff0c",(0,t.jsx)(n.br,{}),"\n","\u6211\u5617\u8a66\u904e\u5f8c\u5728\u642d\u914d\u6587\u5b57\u6642\u6703\u6709\u554f\u984c\uff0c\u56e0\u6b64\u6211\u52a0\u5165 ",(0,t.jsx)(n.code,{children:"isChecked"}),"\uff0c\u6211\u8a8d\u70ba\u8a9e\u610f\u4e0a\u4e5f\u662f\u901a\u9806\u7684\uff0c\r\n\u56e0\u70ba\u6587\u5b57\u5167\u5bb9\u7684\u8b8a\u5316\u5fc5\u5b9a\u767c\u751f\u5728\u6309\u4e0b\u9019\u500b\u958b\u95dc\u5f8c\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u73fe\u5728\u53ef\u4ee5\u53d6\u5230\u52d5\u614b\u8b8a\u5316\u7684 ",(0,t.jsx)(n.code,{children:"Label"})," \u5bec\u5ea6\u5f8c\uff0c\u539f\u672c\u5728 styled \u88e1\u9762\u5beb\u6b7b\u7684\u5bec\u9ad8\u548c\u4f4d\u79fb\u91cf\uff0c",(0,t.jsx)(n.br,{}),"\n","\u90fd\u53ef\u4ee5\u91cd\u65b0\u4fee\u6539\u4e86\u3002"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\u52a0\u5165\u9593\u9694",children:"\u52a0\u5165\u9593\u9694"}),"\n",(0,t.jsxs)(n.p,{children:["\u76ee\u524d\u662f\u628a ",(0,t.jsx)(n.code,{children:"padding"})," \u6e05\u7a7a\uff0c",(0,t.jsx)(n.code,{children:"Label"})," \u548c ",(0,t.jsx)(n.code,{children:"Thumb"})," \u9593\u4e5f\u53ea\u8a08\u7b97\u4e86\u4f4d\u79fb\uff0c",(0,t.jsx)(n.br,{}),"\n","\u6574\u9ad4\u7684\u6a23\u5f0f\u662f\u6c92\u6709\u9593\u8ddd\u7684\uff0c\u6240\u4ee5\u9019\u908a\u5148\u88dc\u4e0a ",(0,t.jsx)(n.code,{children:"SwitchButton"})," \u7684 ",(0,t.jsx)(n.code,{children:"padding"}),"\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export const SwitchButton = styled.button<StyledProps>`\r\n  padding: 0 4px;\r\n  width: ${({ $labelWidth, $thumbSize }) => $labelWidth! + $thumbSize}px;\r\n  height: ${({ $thumbSize }) => $thumbSize * 1.5}px;\r\n\r\n  box-sizing: content-box;\r\n\r\n  // \u5176\u4ed6\u7565\r\n`;\r\n\r\nexport const Thumb = styled.div<StyledProps>`\r\n  flex-shrink: 0;\r\n\r\n  width: ${({ $thumbSize }) => $thumbSize}px;\r\n  height: ${({ $thumbSize }) => $thumbSize}px;\r\n\r\n  transform: translateX(\r\n    ${({ $isChecked, $labelWidth, $thumbSize }) =>\r\n      $isChecked ? $labelWidth : 0}px\r\n  );\r\n\r\n  // \u5176\u4ed6\u7565\r\n`;\r\n\r\nexport const Label = styled.label<StyledProps>`\r\n  padding: 0 4px;\r\n\r\n  transform: translateX(\r\n    ${({ $isChecked, $thumbSize }) => ($isChecked ? -$thumbSize : 0)}px\r\n  );\r\n\r\n  // \u5176\u4ed6\u7565\r\n`;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0a\u9762\u7684\u7a0b\u5f0f\u78bc\u53ef\u4ee5\u767c\u73fe\uff0c\u6211\u5728\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"translateX"})," \u505a\u4f4d\u79fb\u6642\uff0c\u57fa\u672c\u4e0a\u6c92\u6709\u984d\u5916\u505a\u8a08\u7b97\uff0c",(0,t.jsx)(n.br,{}),"\n","\u9019\u662f\u56e0\u70ba\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"SwitchButton"})," \u6539\u70ba ",(0,t.jsx)(n.code,{children:"content-box"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Label"})," \u7528 ",(0,t.jsx)(n.code,{children:"padding"})," \u505a\u9593\u9694\uff08\u7528 ",(0,t.jsx)(n.code,{children:"margin"})," \u6703\u9700\u8981\u984d\u5916\u591a\u4e9b\u8a08\u7b97\uff09"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4e00\u958b\u59cb\u6211\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"border-box"})," \u548c ",(0,t.jsx)(n.code,{children:"margin"})," \u4f86\u505a\u9593\u9694\uff0c",(0,t.jsx)(n.br,{}),"\n","\u53ea\u80fd\u8aaa\u90a3\u7a0b\u5f0f\u78bc\u4e0d\u662f\u666e\u901a\u919c\uff0c\u800c\u4e14\u5982\u679c\u60f3\u914d\u5408 ",(0,t.jsx)(n.code,{children:"size"})," \u505a\u6574\u9ad4\u5927\u5c0f\u7684\u8b8a\u5316\uff0c",(0,t.jsx)(n.br,{}),"\n","\u90a3\u53ef\u8aaa\u662f\u6158\u70c8\uff0c\u81f3\u5c11\u4ee5\u6211\u76ee\u524d\u7684\u80fd\u529b\u6c92\u8fa6\u6cd5\u8b93\u90a3\u7a0b\u5f0f\u78bc\u8b8a\u597d\u770b\u3002"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\u6253\u5305-props",children:"\u6253\u5305 props"}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u767c\u73fe\u7d66 styled \u7684 props \u5f88\u591a\uff0c\u6211\u6703\u5617\u8a66\u7528\u6253\u5305\u7684\u65b9\u5f0f\uff0c",(0,t.jsx)(n.br,{}),"\n","\u8b93 JSX \u770b\u8d77\u4f86\u4e7e\u6de8\u4e00\u9ede\uff0c\u9019\u6a23\u505a\u4e5f\u53ef\u4ee5\u8b93 styled \u88e1\u9762\u7684\u578b\u5225\u4e0d\u7528\u518d\u8003\u616e\u5230\u5e95\u8981\u4e0d\u8981\u5fc5\u50b3\uff0c",(0,t.jsx)(n.br,{}),"\n","\u4e0b\u4e86\u554f\u865f\u53c8\u8981\u8003\u616e\u9a5a\u5606\u865f\uff0c\u6211\u89ba\u5f97 styled \u88e1\u9762\u9084\u662f\u76e1\u91cf\u6e1b\u5c11\u9019\u4e9b\u578b\u5225\u5224\u65b7\u8207\u984d\u5916\u8a08\u7b97\uff0c",(0,t.jsx)(n.br,{}),"\n","\u5c08\u6ce8\u5728 props \u8207\u6a23\u5f0f\u8b8a\u5316\u7684\u95dc\u4fc2\u5c31\u597d\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const styledProps = {\r\n    $isChecked: isChecked,\r\n    $themeColor: switchColor,\r\n    $thumbSize: thumbSize,\r\n    $labelWidth: labelWidth,\r\n  };\r\n\r\nreturn (\r\n  <SwitchButton \r\n    {...styledProps} \r\n    disabled={isDisabled} \r\n    onClick={isDisabled ? () => {} : onClick}\r\n  >    \r\n    <Thumb {...styledProps} />\r\n    <Label ref={labelRef} {...styledProps}>\r\n      {isChecked ? checkedText : uncheckedText}\r\n    </Label>\r\n  </SwitchButton>\r\n);\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\u5c55\u793a\u8a2d\u5b9a",children:"\u5c55\u793a\u8a2d\u5b9a"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Switch"})," \u9700\u8981\u5916\u90e8\u50b3\u5165 ",(0,t.jsx)(n.code,{children:"isChecked"})," \u8207 ",(0,t.jsx)(n.code,{children:"onClick"}),"\uff0c\u672c\u8eab\u4e26\u6c92\u6709 ",(0,t.jsx)(n.code,{children:"state"}),"\uff08\u4fdd\u8b49\u55ae\u5411\u8cc7\u6599\u6d41\uff09\uff0c",(0,t.jsx)(n.br,{}),"\n","\u6240\u4ee5\u76f4\u63a5\u8f38\u51fa ",(0,t.jsx)(n.code,{children:"Story"}),"\u5143\u4ef6\u7684\u8a71\u5728 storybook \u7684\u5c55\u793a\u88e1\u9762\u662f\u6c92\u6709\u9ede\u64ca\u6548\u679c\u7684\uff0c",(0,t.jsx)(n.br,{}),"\n","\u8981\u7a0d\u5fae\u6539\u5beb\u4e00\u4e0b ",(0,t.jsx)(n.code,{children:"Story"}),"\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"export const Normal: Story = {\r\n  render: (args) => {\r\n    const [isChecked, setIsChecked] = useState(false);\r\n\r\n    const handleClick = () => {\r\n      setIsChecked(!isChecked);\r\n    };\r\n\r\n    return <Switch {...args} isChecked={isChecked} onClick={handleClick} />;\r\n  },\r\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6539\u7528 ",(0,t.jsx)(n.code,{children:"render"})," \u7684\u65b9\u5f0f\u8a2d\u8a08\u4e00\u500b\u5916\u5c64\u5143\u4ef6\u5f8c\uff0c\u9019\u500b ",(0,t.jsx)(n.code,{children:"Story"})," \u7684 ",(0,t.jsx)(n.code,{children:"Switch"})," \u5c31\u53ef\u4ee5\u88ab\u9ede\u64ca\u4e86\uff01"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var t=r(6540);const s={},c=t.createContext(s);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);