"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[1458],{68915:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=o(35250),r=o(57766);const i={sidebar_position:2,title:"Go"},s="Go\u793a\u4f8b",c={id:"integration/scow-api-hook/examples/go",title:"Go",description:"\u793a\u4f8b\u9879\u76ee\uff1ahttps://github.com/PKUHPC/scow-go-demo",source:"@site/docs/integration/scow-api-hook/examples/go.md",sourceDirName:"integration/scow-api-hook/examples",slug:"/integration/scow-api-hook/examples/go",permalink:"/SCOW/pr-preview/pr-1021/docs/integration/scow-api-hook/examples/go",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/integration/scow-api-hook/examples/go.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Go"},sidebar:"integration",previous:{title:"\u4f7f\u7528\u793a\u4f8b",permalink:"/SCOW/pr-preview/pr-1021/docs/category/\u4f7f\u7528\u793a\u4f8b"}},l={},a=[{value:"\u51c6\u5907\u73af\u5883",id:"\u51c6\u5907\u73af\u5883",level:2},{value:"\u4f7f\u7528Buf\u83b7\u53d6Proto\u6587\u4ef6\u5e76\u751f\u6210\u4ee3\u7801",id:"\u4f7f\u7528buf\u83b7\u53d6proto\u6587\u4ef6\u5e76\u751f\u6210\u4ee3\u7801",level:2},{value:"\u4f7f\u7528SCOW API",id:"\u4f7f\u7528scow-api",level:2},{value:"\u5b9e\u73b0\u5e76\u6ce8\u518cSCOW Hook",id:"\u5b9e\u73b0\u5e76\u6ce8\u518cscow-hook",level:2}];function g(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"go\u793a\u4f8b",children:"Go\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u9879\u76ee\uff1a",(0,t.jsx)(n.a,{href:"https://github.com/PKUHPC/scow-go-demo",children:"https://github.com/PKUHPC/scow-go-demo"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u51c6\u5907\u73af\u5883",children:"\u51c6\u5907\u73af\u5883"}),"\n",(0,t.jsx)(n.p,{children:"\u60a8\u9700\u8981\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5b89\u88c5\u597dGo\u8bed\u8a00\u5f00\u53d1\u5de5\u5177\u94fe\uff08",(0,t.jsx)(n.a,{href:"https://go.dev/",children:"Go\u8bed\u8a00\u5b98\u7f51"}),"\uff09"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5b89\u88c5Buf CLI\uff08",(0,t.jsx)(n.a,{href:"https://buf.build/docs/installation/",children:"\u5b98\u7f51\u6587\u6863"}),"\uff09"]}),"\n",(0,t.jsx)(n.li,{children:"\u6709\u4e00\u4e2aGo\u9879\u76ee"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7",(0,t.jsx)(n.code,{children:"go mod init"}),"\u547d\u4ee4\uff0c\u521d\u59cb\u5316\u4e00\u4e2aGo\u9879\u76ee\uff0c\u5047\u8bbe\u6a21\u5757\u540d\u4e3a",(0,t.jsx)(n.code,{children:"github.com/PKUHPC/scow-go-demo"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/PKUHPC/scow-go-demo\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528buf\u83b7\u53d6proto\u6587\u4ef6\u5e76\u751f\u6210\u4ee3\u7801",children:"\u4f7f\u7528Buf\u83b7\u53d6Proto\u6587\u4ef6\u5e76\u751f\u6210\u4ee3\u7801"}),"\n",(0,t.jsxs)(n.p,{children:["\u521b\u5efa",(0,t.jsx)(n.code,{children:"buf.gen.yaml"}),"\u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="buf.gen.yaml"',children:"version: v1\nmanaged:\n  enabled: true\n  go_package_prefix:\n    # \u9879\u76ee\u6a21\u5757\u540d+\u751f\u6210\u8def\u5f84\uff08plugins\u4e2dout\uff09\n    default: github.com/PKUHPC/scow-go-demo/gen/go\n    except:\n        - buf.build/googleapis/googleapis\nplugins:\n  - plugin: buf.build/protocolbuffers/go\n    out: gen/go\n    opt: paths=source_relative\n  - plugin: buf.build/grpc/go\n    out: gen/go\n    opt: paths=source_relative,require_unimplemented_servers=false\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6307\u5b9a\u9700\u8981\u4f7f\u7528\u7684SCOW\u7684\u7248\u672c\uff0c\u751f\u6210\u4ee3\u7801"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# \u901a\u8fc7#\u540e\u7684\u53c2\u6570\u786e\u8ba4SCOW\u548cSCOW API\u7248\u672c\uff0c\u53ef\u8f93\u5165\n#    SCOW API\u7684\u7248\u672c\u53f7\uff08tag=api-v0.3.0\uff09\uff08\u63a8\u8350\uff0c\u4ecev0.3.0\u7248\u672c\u5f00\u59cb\u53ef\u7528\uff09\n#    SCOW\u7684\u5206\u652f\uff08branch=master\uff09\n#    SCOW Tag\u53f7\uff08tag=v0.4.0\uff09\n# \u4e0d\u5199\u9ed8\u8ba4\u4f7f\u7528SCOW\u7684master\u5206\u652f\u7248\u672c\nbuf generate --template buf.gen.yaml https://github.com/PKUHPC/SCOW.git#subdir=protos,branch=api-v0.3.0\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528scow-api",children:"\u4f7f\u7528SCOW API"}),"\n",(0,t.jsx)(n.p,{children:"\u7f16\u5199Go\u4ee3\u7801\u4f7f\u7528\u8c03\u7528SCOW API\u7684\u4ee3\u7801"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="api.go"',children:'package main\n\nimport (\n\t"context"\n\t"log"\n\n\t"github.com/PKUHPC/scow-go-demo/gen/go/server"\n\t"google.golang.org/grpc"\n\t"google.golang.org/grpc/credentials/insecure"\n)\n\nfunc main() {\n  // \u5047\u8bbemis-server\u5728192.168.88.100:7571\u4e0a\u76d1\u542c\n\tconn, err := grpc.Dial("192.168.88.100:7571", grpc.WithTransportCredentials(insecure.NewCredentials()))\n\n  if err != nil {\n    panic(err)\n  }\n\n  // \u751f\u6210AccountServiceClient\n\tclient := server.NewAccountServiceClient(conn)\n\n  // \u8c03\u7528`GetAccounts` RPC\uff0c\u83b7\u53d6\u6240\u6709\u8d26\u6237\n\tresp, err := client.GetAccounts(context.Background(), &server.GetAccountsRequest{})\n\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tlog.Printf("Account list: %v", resp)\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u4e0b\u8f7d\u4f9d\u8d56\u5e76\u8fd0\u884c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go mod tidy\ngo run api.go\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5b9e\u73b0\u5e76\u6ce8\u518cscow-hook",children:"\u5b9e\u73b0\u5e76\u6ce8\u518cSCOW Hook"}),"\n",(0,t.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u4e2a",(0,t.jsx)(n.code,{children:"hook.go"}),"\u6587\u4ef6\uff0c\u5b9e\u73b0HookServiceServer (protos/hook/hook.proto)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="hook.go"',children:'package main\n\nimport (\n\t"context"\n\t"log"\n\t"net"\n\n\t"github.com/PKUHPC/scow-go-demo/gen/go/hook"\n\t"google.golang.org/grpc"\n\t"google.golang.org/protobuf/encoding/protojson"\n)\n\ntype MyHookServer struct{}\n\nfunc (s *MyHookServer) OnEvent(ctx context.Context, req *hook.OnEventRequest) (*hook.OnEventResponse, error) {\n\n\tlog.Printf("Received event: %+v", protojson.Format(req))\n\n\treturn &hook.OnEventResponse{}, nil\n}\n\nfunc main() {\n\n\taddr := "0.0.0.0:5000"\n\n\tlis, err := net.Listen("tcp", addr)\n\tif err != nil {\n\t\tlog.Fatalf("failed to listen: %v", err)\n\t}\n\tvar opts []grpc.ServerOption\n\tgrpcServer := grpc.NewServer(opts...)\n\n\tserver := MyHookServer{}\n\n\thook.RegisterHookServiceServer(grpcServer, &server)\n\tlog.Printf("Listening at %s", addr)\n\n\tgrpcServer.Serve(lis)\n}\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u4e0b\u8f7d\u4f9d\u8d56\u5e76\u8fd0\u884c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go mod tidy\ngo run hook.go\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4fee\u6539",(0,t.jsx)(n.code,{children:"config/common.yaml"}),"\u6587\u4ef6\uff0c\u914d\u7f6eHook Server\u7684\u5730\u5740"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="config/common.yaml"',children:"scowHook:\n  url: localhost:5000\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u91cd\u542fSCOW\u3002\u5f53SCOW\u6709\u76f8\u5173\u4e8b\u4ef6\u53d1\u751f\u65f6\uff0cSCOW\u4f1a\u8c03\u7528Hook Server\u3002"})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},57766:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>s});var t=o(70079);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);