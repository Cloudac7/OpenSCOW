"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[3523],{4852:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>d});var o=r(9231);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=o.createContext({}),s=function(e){var n=o.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=s(e.components);return o.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(r),d=t,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||c;return r?o.createElement(f,l(l({ref:n},u),{},{components:r})):o.createElement(f,l({ref:n},u))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,l=new Array(c);l[0]=p;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:t,l[1]=a;for(var s=2;s<c;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},532:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var o=r(9675),t=(r(9231),r(4852));const c={title:"slurm.conf \u914d\u7f6e",sidebar_position:2},l=void 0,a={unversionedId:"deploy/config/slurm.conf",id:"deploy/config/slurm.conf",title:"slurm.conf \u914d\u7f6e",description:"",source:"@site/docs/deploy/config/slurm.conf.md",sourceDirName:"deploy/config",slug:"/deploy/config/slurm.conf",permalink:"/SCOW/pr-preview/pr-364/docs/deploy/config/slurm.conf",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/config/slurm.conf.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"slurm.conf \u914d\u7f6e",sidebar_position:2},sidebar:"deploy",previous:{title:"\u96c6\u7fa4\u4fe1\u606f\u914d\u7f6e\u6587\u4ef6",permalink:"/SCOW/pr-preview/pr-364/docs/deploy/config/clusterConfig"},next:{title:"slurmdbd.conf \u914d\u7f6e",permalink:"/SCOW/pr-preview/pr-364/docs/deploy/config/slurmdbd.conf"}},i={},s=[],u={toc:s};function m(e){let{components:n,...r}=e;return(0,t.kt)("wrapper",(0,o.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Properties"},"#\n# slurm.conf file. Please run configurator.html\n# (in doc/html) to build a configuration file customized\n# for your environment.\n#\n#\n# slurm.conf file generated by configurator.html.\n# Put this file on all nodes of your cluster.\n# See the slurm.conf man page for more information.\n#\n################################################\n#                   CONTROL                    #\n################################################\nClusterName=cluster    #\u96c6\u7fa4\u540d\u79f0\nSlurmctldHost=manage01    #\u7ba1\u7406\u670d\u52a1\u8282\u70b9\u540d\u79f0\nSlurmctldPort=6817    #slurmctld\u670d\u52a1\u7aef\u53e3\nSlurmdPort=6818   #slurmd\u670d\u52a1\u7684\u7aef\u53e3 \nSlurmUser=slurm    #slurm\u7684\u4e3b\u7528\u6237\n#SlurmdUser=root    #slurmd\u670d\u52a1\u7684\u542f\u52a8\u7528\u6237\n\n################################################\n#            LOGGING & OTHER PATHS             #\n################################################\nSlurmctldDebug=info\nSlurmctldLogFile=/var/log/slurm/slurmctld.log\nSlurmdDebug=info\nSlurmdLogFile=/var/log/slurm/slurmd.log\nSlurmctldPidFile=/var/run/slurmctld.pid\nSlurmdPidFile=/var/run/slurmd.pid\nSlurmdSpoolDir=/var/spool/slurmd\nStateSaveLocation=/var/spool/slurmctld\n\n################################################\n#                  ACCOUNTING                  #\n################################################\nAccountingStorageEnforce=associations,limits,qos  #account\u5b58\u50a8\u6570\u636e\u7684\u914d\u7f6e\u9009\u9879\nAccountingStorageHost=manage01    #\u6570\u636e\u5e93\u5b58\u50a8\u8282\u70b9\nAccountingStoragePass=/var/run/munge/munge.socket.2    #munge\u8ba4\u8bc1\u6587\u4ef6\uff0c\u4e0eslurmdbd.conf\u6587\u4ef6\u4e2d\u7684AuthInfo\u6587\u4ef6\u540c\u540d\u3002\nAccountingStoragePort=6819    #slurmd\u670d\u52a1\u76d1\u542c\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a6819\nAccountingStorageType=accounting_storage/slurmdbd    #\u6570\u636e\u5e93\u8bb0\u8d26\u670d\u52a1\n\n################################################\n#                      JOBS                    #\n################################################\nJobCompHost=localhost      #\u4f5c\u4e1a\u5b8c\u6210\u4fe1\u606f\u7684\u6570\u636e\u5e93\u672c\u8282\u70b9\nJobCompLoc=slurm_acct_db    #\u6570\u636e\u5e93\u540d\u79f0\nJobCompPass=123456    #slurm\u7528\u6237\u6570\u636e\u5e93\u5bc6\u7801\nJobCompPort=3306    #\u6570\u636e\u5e93\u7aef\u53e3\nJobCompType=jobcomp/mysql     #\u4f5c\u4e1a\u5b8c\u6210\u4fe1\u606f\u6570\u636e\u5b58\u50a8\u7c7b\u578b\uff0c\u91c7\u7528mysql\u6570\u636e\u5e93\nJobCompUser=slurm    #\u4f5c\u4e1a\u5b8c\u6210\u4fe1\u606f\u6570\u636e\u5e93\u7528\u6237\u540d\nJobContainerType=job_container/none\nJobAcctGatherFrequency=30\nJobAcctGatherType=jobacct_gather/linux\n\n################################################\n#           SCHEDULING & ALLOCATION            #\n################################################\nSchedulerType=sched/backfill\nSelectType=select/cons_tres\nSelectTypeParameters=CR_Core\n\n################################################\n#                    TIMERS                    #\n################################################\nInactiveLimit=0\nKillWait=30\nMinJobAge=300\nSlurmctldTimeout=120\nSlurmdTimeout=300\nWaittime=0\n\n################################################\n#                    OTHER                     #\n################################################\nMpiDefault=none\nProctrackType=proctrack/cgroup\nReturnToService=1\nSwitchType=switch/none\nTaskPlugin=task/affinity\n\n################################################\n#                    NODES                     #\n################################################\nNodeName=manage01 NodeAddr=192.168.29.106  CPUs=2 CoresPerSocket=1 ThreadsPerCore=1 RealMemory=200 Procs=1 State=UNKNOWN\nNodeName=login01 NodeAddr=192.168.29.101  CPUs=2 CoresPerSocket=1 ThreadsPerCore=1 RealMemory=200 Procs=1 State=UNKNOWN\nNodeName=compute0[1-2] NodeAddr=192.168.29.10[2-3]  CPUs=2 CoresPerSocket=1 ThreadsPerCore=1 RealMemory=200 Procs=1 State=UNKNOWN\n\n################################################\n#                  PARTITIONS                  #\n################################################\nPartitionName=compute Nodes=compute0[1-2] Default=YES MaxTime=INFINITE State=UP\n")))}m.isMDXComponent=!0}}]);