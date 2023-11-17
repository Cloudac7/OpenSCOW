"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[7374],{24081:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>c,default:()=>t,frontMatter:()=>r,metadata:()=>d,toc:()=>i});var s=n(35250),l=n(57766);const r={sidebar_label:"slurm\u96c6\u7fa4\u90e8\u7f72",title:"slurm\u96c6\u7fa4\u90e8\u7f72",slug:"/slurm",sidebar_position:5},c=void 0,d={id:"hpccluster/slurm",title:"slurm\u96c6\u7fa4\u90e8\u7f72",description:"1. \u5b89\u88c5Munge",source:"@site/docs/hpccluster/slurm.md",sourceDirName:"hpccluster",slug:"/slurm",permalink:"/SCOW/pr-preview/pr-830/docs/slurm",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/hpccluster/slurm.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"slurm\u96c6\u7fa4\u90e8\u7f72",title:"slurm\u96c6\u7fa4\u90e8\u7f72",slug:"/slurm",sidebar_position:5},sidebar:"hpccluster",previous:{title:"slurmdbd.conf \u914d\u7f6e",permalink:"/SCOW/pr-preview/pr-830/docs/hpccluster/config/slurmdbd.conf"},next:{title:"\u6570\u636e\u76d8\u6302\u8f7d",permalink:"/SCOW/pr-preview/pr-830/docs/hpccluster/mount-disk"}},m={},i=[{value:"1. \u5b89\u88c5Munge",id:"1-\u5b89\u88c5munge",level:2},{value:"1.1 \u521b\u5efaMunge\u7528\u6237",id:"11-\u521b\u5efamunge\u7528\u6237",level:3},{value:"<strong>1.2 \u751f\u6210\u71b5\u6c60</strong>",id:"12-\u751f\u6210\u71b5\u6c60",level:3},{value:"<strong>1.3 \u90e8\u7f72Munge</strong>",id:"13-\u90e8\u7f72munge",level:3},{value:"<strong>1.4 \u6d4b\u8bd5Munge\u670d\u52a1</strong>",id:"14-\u6d4b\u8bd5munge\u670d\u52a1",level:3},{value:"<strong>2. \u5b89\u88c5slurm</strong>",id:"2-\u5b89\u88c5slurm",level:2},{value:"2.1 \u5b89\u88c5mariadb",id:"21-\u5b89\u88c5mariadb",level:3},{value:"2.2 \u521b\u5efaslurm\u7528\u6237",id:"22-\u521b\u5efaslurm\u7528\u6237",level:3},{value:"2.3 \u5b89\u88c5slurm\u4f9d\u8d56",id:"23-\u5b89\u88c5slurm\u4f9d\u8d56",level:3},{value:"2.4 \u5236\u4f5crpm\u5305",id:"24-\u5236\u4f5crpm\u5305",level:3},{value:"2.5 \u5b89\u88c5\u4e0e\u914d\u7f6e",id:"25-\u5b89\u88c5\u4e0e\u914d\u7f6e",level:3},{value:"3. \u521d\u59cb\u5316\u8d26\u6237\u548c\u7528\u6237(\u53ef\u9009)",id:"3-\u521d\u59cb\u5316\u8d26\u6237\u548c\u7528\u6237\u53ef\u9009",level:2}];function a(A){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...A.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"1-\u5b89\u88c5munge",children:"1. \u5b89\u88c5Munge"}),"\n",(0,s.jsx)(e.h3,{id:"11-\u521b\u5efamunge\u7528\u6237",children:"1.1 \u521b\u5efaMunge\u7528\u6237"}),"\n",(0,s.jsx)(e.p,{children:"Munge\u7528\u6237\u8981\u786e\u4fdd\u7ba1\u7406\u8282\u70b9\u548c\u8ba1\u7b97(\u767b\u5f55)\u8282\u70b9\u7684UID\u548cGID\u76f8\u540c\uff0c\u6240\u6709\u8282\u70b9\u90fd\u9700\u8981\u5b89\u88c5Munge\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:"groupadd -g 1108 munge\nuseradd -m -c \"Munge Uid 'N' Gid Emporium\" -d /var/lib/munge -u 1108 -g munge -s /sbin/nologin munge\n"})}),"\n",(0,s.jsx)(e.h3,{id:"12-\u751f\u6210\u71b5\u6c60",children:(0,s.jsx)(e.strong,{children:"1.2 \u751f\u6210\u71b5\u6c60"})}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u7ba1\u7406\u8282\u70b9\u4e0a\u6267\u884c"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:"yum install -y rng-tools\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4f7f\u7528/dev/urandom\u6765\u505a\u71b5\u6e90"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:"rngd -r /dev/urandom\n\n# \u4fee\u6539service\u53c2\u6570\nvim /usr/lib/systemd/system/rngd.service\n# \u4fee\u6539\u5982\u4e0b\uff1a\n[service]\nExecStart=/sbin/rngd -f -r /dev/urandom\n#\u9000\u51fa\u62a5\u5b58\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u542f\u52a8rngd"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:"systemctl daemon-reload\nsystemctl start rngd\nsystemctl enable rngd\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u67e5\u770b\u670d\u52a1\u72b6\u6001",(0,s.jsx)(e.code,{children:"systemctl status rngd"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"img",src:n(19720).Z+"",width:"1280",height:"249"})}),"\n",(0,s.jsx)(e.h3,{id:"13-\u90e8\u7f72munge",children:(0,s.jsx)(e.strong,{children:"1.3 \u90e8\u7f72Munge"})}),"\n",(0,s.jsx)(e.p,{children:"Munge\u662f\u8ba4\u8bc1\u670d\u52a1\uff0c\u5b9e\u73b0\u672c\u5730\u6216\u8005\u8fdc\u7a0b\u4e3b\u673a\u8fdb\u7a0b\u7684UID\u3001GID\u9a8c\u8bc1\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:"yum install epel-release -y\nyum install munge munge-libs munge-devel -y\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u521b\u5efa\u5168\u5c40\u5bc6\u94a5\uff0c\u5728\u7ba1\u7406\u8282\u70b9\u521b\u5efa\u5168\u5c40\u4f7f\u7528\u7684\u5bc6\u94a5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:"/usr/sbin/create-munge-key -r\ndd if=/dev/urandom bs=1 count=1024 > /etc/munge/munge.key\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5bc6\u94a5\u540c\u6b65\u5230\u6240\u6709\u5176\u4ed6\u8282\u70b9\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:"scp -p /etc/munge/munge.key root@login01:/etc/munge/\nscp -p /etc/munge/munge.key root@compute01:/etc/munge/\nscp -p /etc/munge/munge.key root@compute02:/etc/munge/\n\n# \u6240\u6709\u8282\u70b9\u8d4b\u6743\nchown munge: /etc/munge/munge.key\nchmod 400 /etc/munge/munge.key\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u6240\u6709\u8282\u70b9\u90fd\u6267\u884c\u542f\u52a8\u547d\u4ee4\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:"systemctl start munge\nsystemctl enable munge\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u67e5\u770b\u72b6\u6001",(0,s.jsx)(e.code,{children:"systemctl status munge"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"img",src:n(3).Z+"",width:"1019",height:"257"})}),"\n",(0,s.jsx)(e.h3,{id:"14-\u6d4b\u8bd5munge\u670d\u52a1",children:(0,s.jsx)(e.strong,{children:"1.4 \u6d4b\u8bd5Munge\u670d\u52a1"})}),"\n",(0,s.jsx)(e.p,{children:"\u6bcf\u4e2a\u8282\u70b9\u4e0e\u63a7\u5236\u8282\u70b9\u8fdb\u884c\u8fde\u63a5\u9a8c\u8bc1"}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u5730\u67e5\u770b\u51ed\u636e\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:"munge -n\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"img",src:n(55611).Z+"",width:"1193",height:"47"})}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u5730\u89e3\u7801\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:"munge -n | unmunge\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"img",src:n(72158).Z+"",width:"745",height:"237"})}),"\n",(0,s.jsx)(e.p,{children:"\u9a8c\u8bc1\u8fdc\u7a0b\u89e3\u7801\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:"munge -n | ssh compute01 unmunge\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"img",src:n(6569).Z+"",width:"1169",height:"240"})}),"\n",(0,s.jsx)(e.p,{children:"munge\u51ed\u8bc1\u57fa\u51c6\u6d4b\u8bd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:"remunge\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"img",src:n(93550).Z+"",width:"1130",height:"83"})}),"\n",(0,s.jsx)(e.h2,{id:"2-\u5b89\u88c5slurm",children:(0,s.jsx)(e.strong,{children:"2. \u5b89\u88c5slurm"})}),"\n",(0,s.jsx)(e.h3,{id:"21-\u5b89\u88c5mariadb",children:"2.1 \u5b89\u88c5mariadb"}),"\n",(0,s.jsx)(e.p,{children:"\u5b89\u88c5mariadb\uff0c\u4f5c\u4e3aSlurm Accounting\u914d\u7f6e\uff0c\u5728\u7ba1\u7406\u8282\u70b9\u6267\u884c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-PowerShell",children:"yum -y install mariadb-server\nsystemctl start mariadb\nsystemctl enable mariadb\nmysql\n\nset password=password('81SLURM@@rabGTjN7');\ncreate database slurm_acct_db;\nquit\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u521b\u5efa",(0,s.jsx)(e.code,{children:"slurm"}),"\u7528\u6237\uff0c\u5e76\u4e3a\u5176\u8d4b\u4e88",(0,s.jsx)(e.code,{children:"slurm_acct_db"}),"\u6570\u636e\u5e93\u7684\u6240\u6709\u6743\u9650"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:"mysql -uroot -p'81SLURM@@rabGTjN7'\ncreate user slurm;\n\ngrant all on slurm_acct_db.* TO 'slurm'@'localhost' identified by '123456' with grant option;\n\nflush privileges;\n"})}),"\n",(0,s.jsx)(e.h3,{id:"22-\u521b\u5efaslurm\u7528\u6237",children:"2.2 \u521b\u5efaslurm\u7528\u6237"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u6240\u6709\u8282\u70b9\u6267\u884c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:'groupadd -g 1109 slurm\nuseradd -m -c "Slurm manager" -d /var/lib/slurm -u 1109 -g slurm -s /bin/bash slurm\n'})}),"\n",(0,s.jsx)(e.h3,{id:"23-\u5b89\u88c5slurm\u4f9d\u8d56",children:"2.3 \u5b89\u88c5slurm\u4f9d\u8d56"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u6240\u6709\u8282\u70b9\u6267\u884c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:"yum install gcc gcc-c++ readline-devel perl-ExtUtils-MakeMaker pam-devel rpm-build mysql-devel python3 -y\n"})}),"\n",(0,s.jsx)(e.h3,{id:"24-\u5236\u4f5crpm\u5305",children:"2.4 \u5236\u4f5crpm\u5305"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u64cd\u4f5c\u5728\u7ba1\u7406\u8282\u70b9\u6267\u884c"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4e0b\u8f7dslurm"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:"wget https://download.schedmd.com/slurm/slurm-22.05.3.tar.bz2\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5b89\u88c5rpmbuild\uff0c\u7f16\u8bd1slurm\uff0crpmbuild\u5236\u4f5crpm\u5305"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:"yum install rpm-build -y\n\nrpmbuild -ta --nodeps slurm-22.05.3.tar.bz2\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u7f16\u8bd1\u5236\u4f5c\u5b8c\u6210\u540e\uff0c\u53ef\u5728\u76ee\u5f55",(0,s.jsx)(e.code,{children:"/root/rpmbuild/RPMS/x86_64"}),"\u4e0b\u5f97\u5230\u5982\u4e0brpm\u5305"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"img",src:n(36132).Z+"",width:"1057",height:"272"})}),"\n",(0,s.jsx)(e.p,{children:"\u5c06\u7f16\u8bd1\u597d\u7684rpm\u5305\u62f7\u8d1d\u5230\u5176\u4ed6\u8282\u70b9"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:"mkdir -p /root/rpmbuild/RPMS/\nscp -r /root/rpmbuild/RPMS/x86_64 root@login01:/root/rpmbuild/RPMS/x86_64\nscp -r /root/rpmbuild/RPMS/x86_64 root@compute01:/root/rpmbuild/RPMS/x86_64\nscp -r /root/rpmbuild/RPMS/x86_64 root@compute02:/root/rpmbuild/RPMS/x86_64\n"})}),"\n",(0,s.jsx)(e.h3,{id:"25-\u5b89\u88c5\u4e0e\u914d\u7f6e",children:"2.5 \u5b89\u88c5\u4e0e\u914d\u7f6e"}),"\n",(0,s.jsx)(e.p,{children:"\u6240\u6709\u8282\u70b9\u5b89\u88c5slurm"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:" cd /root/rpmbuild/RPMS/x86_64/\n yum localinstall slurm-*\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u914d\u7f6e\u63a7\u5236\u8282\u70b9slurm"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:"cp /etc/slurm/cgroup.conf.example /etc/slurm/cgroup.conf\ncp /etc/slurm/slurm.conf.example /etc/slurm/slurm.conf\ncp /etc/slurm/slurmdbd.conf.example /etc/slurm/slurmdbd.conf\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"cgroup.conf "}),"\u4f7f\u7528\u4e86\u9ed8\u8ba4\u914d\u7f6e\uff1b"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["slurm.conf \u914d\u7f6e\u53c2\u89c1",(0,s.jsx)(e.a,{href:"/SCOW/pr-preview/pr-830/docs/hpccluster/config/slurm.conf",children:"\u9644\u5f551\uff1aslurm.conf \u914d\u7f6e"})," \uff1b"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["slurmdbd.conf \u914d\u7f6e\u53c2\u89c1",(0,s.jsx)(e.a,{href:"/SCOW/pr-preview/pr-830/docs/hpccluster/config/slurmdbd.conf",children:"\u9644\u5f552\uff1aslurmdbd.conf \u914d\u7f6e"})," \u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u590d\u5236\u914d\u7f6e\u6587\u4ef6\u5230\u5176\u4ed6\u8282\u70b9"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:"# slurmdbd.conf\u53ef\u4e0d\u7528\u590d\u5236\nscp -r /etc/slurm/*.conf  root@login01:/etc/slurm/\nscp -r /etc/slurm/*.conf  root@compute01:/etc/slurm/\nscp -r /etc/slurm/*.conf  root@compute02:/etc/slurm/\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u8bbe\u7f6e\u5404\u8282\u70b9\u6587\u4ef6\u6743\u9650"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:"mkdir /var/spool/slurmd\nchown slurm: /var/spool/slurmd\nmkdir /var/log/slurm\nchown slurm: /var/log/slurm\n\nmkdir /var/spool/slurmctld\nchown slurm: /var/spool/slurmctld\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u542f\u52a8\u670d\u52a1\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:"# \u670d\u52a1\u8282\u70b9\nsystemctl start slurmdbd\nsystemctl enable slurmdbd\n\nsystemctl start slurmctld\nsystemctl enable slurmctld\n\n# \u6240\u6709\u8282\u70b9\nsystemctl start slurmd\nsystemctl enable slurmd\n\n# \u901a\u8fc7 systemctl status \xd7\xd7\xd7 \u67e5\u770b\u670d\u52a1\u72b6\u6001\uff0c\u5e76\u786e\u4fdd\u4e2a\u670d\u52a1\u72b6\u6001\u6b63\u5e38\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u53ef\u80fd\u7684\u62a5\u9519\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-PowerShell",children:"# 1. \u542f\u52a8slurmdbd\u65f6\u62a5\u9519(\u4e00)\uff1a\nslurmdbd: fatal: slurmdbd.conf file /etc/slurm/slurmdbd.conf should be 600 is 644 acc... others\n#  \u89e3\u51b3\u65b9\u6cd5\nchmod 600 slurmdbd.conf\nsystemctl restart slurmdbd\n\n# 2. \u542f\u52a8slurmdbd\u65f6\u62a5\u9519(\u4e8c)\uff1a\nslurmdbd: fatal: slurmdbd.conf not owned by SlurmUser root!=slurm\n#  \u89e3\u51b3\u65b9\u6cd5\nchown slurm: /etc/slurm/slurmdbd.conf\nsystemctl restart slurmdbd\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u67e5\u770b\u914d\u7f6e"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:"scontrol show config\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u68c0\u67e5slurm\u96c6\u7fa4"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:"sinfo\nscontrol show partition\nscontrol show node\n\n# \u63d0\u4ea4\u4f5c\u4e1a\nsrun -N2 hostname\nscontrol show jobs\n\n# \u67e5\u770b\u4f5c\u4e1a\nsqueue -a\n"})}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsx)(e.p,{children:"slurm\u9ed8\u8ba4\u7684qos\u53ea\u6709\u4e00\u4e2aqos: normal\uff0c\u5728\u5bf9\u63a5scow\u65f6\uff0c\u9700\u8981low\u3001normal\u3001high\u4e09\u4e2aqos\uff0c\u624b\u52a8\u521b\u5efalow\u3001high\u4e24\u4e2a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:"# \u67e5\u770b\u5df2\u6709\u7684qos\nsacctmgr show qos\n\n# \u521b\u5efalow\u3001high\u4e24\u4e2aqos\nsacctmgr create qos name=low\nsacctmgr create qos name=high\n\n# \u7ed9\u7528\u6237\u6dfb\u52a0qos\nsacctmgr modify user name={username} set qos=low,high,normal  defaultQOS=low\n"})}),"\n",(0,s.jsx)(e.h2,{id:"3-\u521d\u59cb\u5316\u8d26\u6237\u548c\u7528\u6237\u53ef\u9009",children:"3. \u521d\u59cb\u5316\u8d26\u6237\u548c\u7528\u6237(\u53ef\u9009)"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Bash",children:'# \u521d\u59cb\u5316\u8d26\u6237.\u4f8b\u5982\u8d26\u6237\u4e3aa_admin\nsacctmgr add account name=a_admin \n\n# \u521d\u59cb\u5316\u7528\u6237.\u4f8b\u5982\u7528\u6237demo_admin\uff0c\u6307\u5b9a\u8d26\u6237\u4e3aa_admin\uff0c\u5206\u533a\u4e3acompute\nsacctmgr add user name=demo_admin account=a_admin partition=compute qos=low,high,normal defaultQOS=low\n\n# \u67e5\u770b\u7528\u6237\u4fe1\u606f\nsacctmgr show ass format="Cluster,Account,User,Partition,QOS"\n'})})]})}function t(A={}){const{wrapper:e}={...(0,l.a)(),...A.components};return e?(0,s.jsx)(e,{...A,children:(0,s.jsx)(a,{...A})}):a(A)}},55611:(A,e,n)=>{n.d(e,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABKkAAAAvCAIAAACnhw4/AAAZSElEQVR4nOydv27yvvfHo59+d8GCaJfOGdmQEFO5gjBmYKm6sWZlq1gYGMkV0AkhZWPM/CxPUZbex1exncR27GMn0Ke0n/draps6Pj4+Pv537PxfAMBvJtp/fu6j75YCAAAAAACA7wZzPwAAAAAAAAAAAAAAAAAAAAB+Ptj3AwAAAAAAAIDfD+Z+AAAAAAAAAPD7wdwPAAAAAAAAAH4/mPsBAAAAAAAAwO9Hn/tF+0/OOQm/SaSfTRjtz0KDe02FYfmMPbz+mwN1Pd3kbR6EyZnKLtoLi6l/AAAAAAAAANwTpn2/YjcfDMZJ/sVZl7MJyzShniSZplD3TJhs1qPTaj4YDObbID5I5QuT183s+PKyym6RUboYMG7zNg/yZExkFz6OgsvfXPoBAAAAAAAAcFfcYcxntP88LIPtC5vbzFenkTKFumui13iYbZO0nPvk6duuGE6fK8nzZDFepPmvnBaFz9NhdkylHwAAAAAAAAD3hffcL9qzaL8qovG8j6pJTZjsbXt0lkc8YPEQD4NhfNAiCaP9epKtylkS+zVPk20WsClUmep8Zi887xPx5npWGEZNXrJ0XG5bIKYtlSr8eR8leznYMYySs+GF4eMoKD7+VL/m7yd58tcLbQc08nlZpMiq/2qrSlq9NvF4JGhZlZO1/AMdh0rkRQhPV2WP+uqHQwwAAAAAAADuk077fqPlfnbk+3Evx0c2qQmT8yEeneZ8k07Zo7M/4gGL813Bw0sZi5SnWU6K3VsqHZw7z4KiEeH0Nh6ssuEkfjiOyzcM41c2wo+eZ4EQje0Vrg/SBGKyFGLPd8Ek3kiTUHuqaN8I//KxjCeNDNH+sI4v23ldrirR08OQBTzy2cENZgRhsllPRE6lzoPZ843O9hmqMiDUa6OOBOUVWf8gqpOka14Me1X2qK/+WMUAAAAAAADgXuk09xtejtJ+XJLzGL9i9yLOBubJSxPmSDyyU82exKxnNS8H8qNh/Zw9+/MhJoP530v1IE0WiRBN7BVOZvUIvzi98Wf5+6kIhg9PzlR8DqoIX6UpHwXZSiiCPZos24P/0aPQWZNbd0p1FB9/GgkXyY3iKdtVGVDqJel32K9fXpaqvL6+umG1KAAAAAAAAO6VTnM/KZ5RUM/VBOUQXoyEiUdWmqDJMnV2LMfXbHRNiDJ65FPNpAmO/PxcT+R/bsTQpxi2VCbhpUeyIgzlShfNXTltnXUgPWYFC4s9n/f7JApvt73kEKulXoqnh2FdaT2K2ykvS1VeV182pMtUteBXu0UBAAAAAABwp/x/l3++2wscWXhpsFvNq128aP+5/qJUJeV8LJb/wK+//PNRBNNy/nIzNaWLcRqEUfT8OJvG60M8W/lEU3pwk6os9SWmy5NKIeUPxW7+9dfEdsFSXy7SxQDX1gAAAAAAgN/Clfd8lrMdebdGuu2EeGSl2ZMpU09mUchjR11isF3CbR2+yfJyQ6QyCS89ylYDFT4h07aUWNTr6f3qSVCepkmyGM93hRzI6oufLnrBzm2WYjF9NIf9bjfx8xW+X30BAAAAAADwH+LKuR+7yrK+6yJMNnE92yEeibTlTEk7ASimfOxc1iobrQ+fn5uHiyHmU4Unq7KK9pvYOV2kU+XJNiuFj8JaePnRZC1dcxol+0TMyNI3dpiMPQujV73EnWGvrq7OKefArclzM0fW/iaOtIXRq3vqfA3N5x1u82W/fsL3rC8AAAAAAAD+O1z7fb88Gc93lyn/UsNhepGi/YhHnPRtlwXVRx743Ys5u2+FDf3zdDFmm0iLxdi1k8RniuJVm9mH3wfUyVTpohR+zR5uHrbao9XHbCNOgm1mwfE9lV4pUh2WgVpicXpsPQn4ZxBcH0Ioc3o/BlVGJg3yu0v4HLk5k8b+xhV7fn18237p59+rM363+rJfX+H71RcAAAAAAAD/WdiX1773ynr2zbjzTb6RcDNKmX7KB+a/kta3Au8U1BcAAAAAAAAO6qsNv3XkzD65fv5eSaR4y/AOZsTfjfiKu89u5feA+gIAAAAAAAD0Iozq+ee5OXYH7hXUFwAAAAAAAAAAAAAAAAAA/tNce9cLAAAAAAAAAID7B3M/AAAAAAAAAPj9YO4HAAAAAAAAAL8fzP0AAAAAAAAA4PdTzf3EFf7N/f3NH9hP8sX+zcfT+D9Jt+nr31ULo0S6ezFUXq3ifyU//wxFlyv8w2jfEkITw3IzJJGX9VGY7M/0W7W3tN8hq1x9Xahkr3xuQfmLOZWmefl9hmpR5VIe1xn3/+CfuVKoBJTwPfOqP2kiQ5WHrC+ipdB4fJMi2qvfPGnlxf6BPaMURZoN+7SKt+k2yc0KIyR0FT2s72zVtek2AF1R3es46OgPLZq/9WWzrByKc6UbbC/MmneJdfvPvti9Q2e/QeXyBfVFm5uxQ3Q+ql9M17BaFR69nsFwnOq1eECj8IRt9GqV/dCLrI1EDN0ck8NQUOErXX6e0qHpGSmGnHuHz16F0rXXn2fpc8m08F49kbfHDtTrt9lXm69vYoR6/WzeUCuGjq+dys89WN3yFeNep1s2Dg/MefV2enbbsBqbeOzwbNL795HHkLgrVPu6cjLyk9H2/Sazau7wPB36vmMYv9oM8rCenrbzwWAwmG+DeCOpNFsNFMZJ7pdbNJsERVEMp8+e9VNKMTrVQhyUihVizLcf0/WhVeVEXpZH0f7zMA14kVl2y2dteqVm8uejCIYPTwaxi48/LMEhDk7idadRfKjMP12ssmCybgYVyXISZKtFGlCpAlnzbW0ExW5uq5I8GfM/rzJa316EyWY9Oq3mZjHsUML3zEu3xAHToQVHfX0V0X49CUTdmFpKmJzZPzTPLIoizCZMXmfB8aVONV0fbjgWa0tI/OvrZnZ8eTEamsMADIpKF0rtzndFEGRHoo4l3P7QqnmLS+lLtF9ODH8mGmwPSM3/Q7jLZi128HIMXuVhXD+/QfAF9WVzKUSHSPWVffDp9dqGQ6aiM+so/DWtsg+N31iVHSIvWJ687Ap5+BImm3hY7N5KOdJjFqjde/g48hCSMlGzYZNiNEktXYBxgTF6PaxHF5HT4GUb3NAVmYps8xu8wNt6KLI+WMaKppcaF04JEyWdg9EAxBvtYzYp1WXi3yHa3XKfca/TLVtsg8jrpk6PNrauzuH2Qyxn++o9GfnRKHO/LMvEYCd8ngZZVni9oiiKeogkUxpkthonKdNjni7m27/XC1z63+K0vVjMo/3/yXJS7F4SIcTbzjiTy9NkvMr0SSyRl/mRyGzBi+xT5vzvxfDXp4dhcPmb8xFndhSWmCfbrBmNimH8UqzlbOKhmPnRqZRCW7Tx9USv8TDbctPoJ4Z/quvzkrMl6+tLsWbAp/q2aZVeZKvZ5MliIRorM12b2fSAkLAcA2p/zpPFeJHmDnXaq5KsibJxaKMqK05/SGne7FJ6EibL0Wm183PI/fHT/FdTdhyly646jmRRq/embVnlpvVlhOgQffpKQ0ux4tfr9UrVFuMGHX2XVnklecpGgqJgvHdciuFoaV61AvjkT+reRb/qEJIwUbthU2JIdOhjPnbzce3Ob9pUunjsaDYJKmWw5eP57uOqzCkT9XQOqgH4jtlyud/8x3i55V7jjxs5PcLYujuHrxhiebav/xbqvt/xyAc75VDndPRspZftNjO0CbYxpkzU8zT11XYrmLR+UHYSp/fSLVcDU+v6ENvU1WymNCzLrFF+py0v+pH4a24oMw9xOcTDYBgfxM4yW0T681EEo8dQCb5jE0uPNY7SHQ3jTRIyr7ei9qvMlMq5BfZIC2WhrK4prYD5+6l2FlqYEBE1JAtPpCLyImgFL1e/960v6wuN//lZhU2IkIT1JAgma1NAApt+DEvvam1bei13NxuuTyKSiQoUs0goBX31XHdUyuVUlMi1dPtyE5XjXFthPaQ/9NC86h+0YBblV1KMcop+2SZdFj3VSKtEf58xjNz6LtLBVr/YIhmT5kmUqEGJZjH4stq7SamOtmyNLaI0LyPXF2HzhGcjIDpEuq+kWoqi3sf6z/69ngydyiaGs6N3B+mqrZJwle0IrbMcOOnnYFVqbyhiILZNcy59vdS9l+px7/rZTZQwbEoMu2ezDiqCIE1uMLJVeqI+HpttlCrkSZIqxTJVJVEuwkR7dvT2MZtOaQ5KUtl/3SBcvKNbDvx7PRJ9EEv1RFrO4ilhbA7nYHRf5BCLHB8Sfp5o5vYCuno9V/r7jh7VYj5TNtiJyqHOu/9QIz1m5lZ2872QuqVKBmvu2NiK0zFteZ/GsFpoj0x50Y+ItQke4jLfFVI4ABt019JzSeuXsfeIPTvR70VshUpZHGVLLPFhPZGH8M5UVSmSsmEqfq/2te2gbTuT5YyHCs53waTZ0m9tODY9fKUo3pB6tQ6D8Gb65aX1HE0PQdZXnxeqRPvzYXpZDRbNUulAxNlWgQnyXGO2P8TDYjcn5m8mRRnNRk3FwkjkkY6llh2P7BKKoK/e4YVauRyKEkS6LqJnKc51dRppYT12f+ihed2lpIv5Lqjir6s9gNwpRjnzC2x7IuYGGyab9eQiopgGL8dg9iwfXDzEIzkg3NU/kQ6W/Ww1gGjf5PXysYybsFW7GLzBPtWDgnOijL6tbTnaH9axKLQW6E5oXkXrArp7NgeEl7A/srYURYeyerv0etLr6FRUgyXKRTkHgdYqCVdZHzyoJJEcgJ+DrQK+pEfcG27OG30lrHxlU8/tYawJwkQJw6bEsHs266CiXWarNqzoPVEfj80VuC6dUxJFqjaIqrSXizJR745eMYAO+0nKWmO0/zzEQeNiH5/lyuw+jurulgPvXs+B0swdHaL4p5ZtKEXRjM2mXpv76jvEcvh5azM3Q/Z6xtPKX3Ve+avQ7/ksBzvLZTnU6WJB6dsuMMRL1j9XSzySOVfLFOaFJG7TLTNmURfcBKQ1uXICxm1XuoXGc+vMjjkv6lF7lcsHsZpUvjPb7YqyIE8Pw0p2Zs1T5kgO6+llpQ9ZmHdtRUKTqWrNH+JRJj/6e9qJkO3BfNshur04vYkd/VIYqb1o2x4z43LLSCz3+MXwWoX3wpiX2RKVoYTszej6Ul93iJvewvrCmqdo/7keXVZj7w3cyWRSFObztrSizGYjNdXDepStlImNtZbJR4SE/bjGAAwrfmkix7m2w6Nt/rBfudjBg8l6nyRnHgmTu8WIXuPAMlOxNthylFJ8/GleuKhW20V03UsdEP7iEQzmdLAWA1ACtHhegZ8Y9YRhMD8F8do0DNLacn1wNW8ULQWjWDVP0tezmVwK0SG6+koLBh36FMrZ+XbDJTzhHKpEeqt0u0pxzlapSDpVU+Ry1KpGaXPzG7ajTpnIYljcWjZyY+huKMO2inEt0f6g+RBbJyXo3hNZyJPxfLXLgmASr9frA9veaf1TuyqvxqR5owF4j9n4YmhlAKq3YS629rD0OMrS9Pq4ZSd9mrmrQ3TahmJslHOwuy/XEIuA8vP29mVUFNXraaeVB4aFF8sU5o5ofeMhPWbDYcepH3eSqo3IUbtMDXO1Z9KOV3rpSA64l9fk/nzwhhI+T4MiYE2mtJWuhfDKi3hkDlR2UaYaPYZPD8PsmPy9DB+epAbDFlg+mmPI+rlcfmArE7vZfqkazbOz1/Uj5r/qVt8hur1Zj9E1wIZI4iXyPkH9XDo64DdTtwnvxpqXxRKloYQykCDrS3udYvO2FwqG8Xo9CYJLl/sOit18PFYvb/FSlNlsAmk1li/5yanstUw9IiTsR38DMJ/XCZMmOJIHz6hY/GHfcuXJeJVN4tbSo00MdlzCEp9ib7DpMSvY0vP5vN8nyt16+jq3Vzigy8FaDMCUl58Y9YTBPAwytGUx3bWXy6Z5ir6ezeRSiA7R1VdaINTroE/na8MlPOEcGKZW6XCV1QBT23QnU1VFnq+y4WStL9kw0QwDhuaVZMCmAUt3Qxu2TYxrMM6srJ1U0LMnspOnyWI85qrfFcOWwzRW5TVYNG82AFebaZYa2WJo9V4q/JceR1maXi+37KJXM6c7RIdt6MZGOQe7+3INsUgoP29rX2ZFfcW04p5of9+vy5Hyhjxhh/40Y3WGmXSC37VXtUa2XMVnXVVDeXoITttTWUtld8yjJvW2Tezxy4+seVGPvCJrWpQm9vD8OCr91J+PYvT4XPeY0WwylI5Kt84v80Orb4s35RojV6oacnnJft1SB+q8QyXytJ+iVHzXxnrnVff72kCCqK9+LxQUu/l8V0yMmxwWWK761Z2tbFuKMpuNmii9zdKjl4T96Lo4ahhkiqiTbX0pmyGeyewPPctl8Dala9Jco0MM2dWwGZ05Q7nBpouyn12tTqdgFK8P117YSjjYr0F/tSiXoy03p4OM03iD5nX8I8Asns0Bkfct+8ouvd61qRj9hTdfoEK6Sus+kcPB8v/pdmdHZfneQZMOE7UY9lfBPMtl1XFm1aMn8oH3Kbrn67TlR5moZ0evGYAjlTQrGJsjHF3cZBz1pUg6dHeIhG3YjO2mQ2IPPPy8F0Sv9ytjPg14LieyQ3+zB/n3G9s8W9qVLs8t7ZJXMN+eTWaj03v6fgpKs6n6E/0Qnz0WVFm+tedFPDIcLw4jZ7g3W+WYToelUeXvp2A6nVL7241Om4Dmaqfbbnrda6JZSFfL0C2aVqgkUrtObVWLOJvRK4xWSeWdl032REvRsb7cL+SUf8n5rVtd73fvNrfqYja34mtmf50QE16lX2LLt/UqSQ9zc5SrvSPElT+XjiXQYsjBJfUBGPNITt/5CvI0TZLFuEzWBC3oYx2/5kw4WAJTXm4xmlibBvGIaMvlC8mvtRg1r2GKTbBh9mwERIfYr6/0V6+nz+6X6qqO3tQqA9JVRvuDde+WdLCNwMSaV/ufeXSvMg2mRkSEiRKG/SVUtxB3nbNc0RPpRAn1AqoqLRAm6t/RywbQb8ymnwIiaLlln3Ld4MySN7LTc3aIVtuwGBvhHAj35T3EMnTYPn7eE3uv5xHzef94zP2U+JayZVgOtqdvu2AyaWLHy3FRsz4QPj10EMt0SU4r4F76AM+fj2IYxyNhK6M4rk0lT7aNnVplD6PkvJaWb4m8KDFEZvUljdH+sHyUsmHuqbVTUQo/HHKjyv9ehsO6mxGar1/3GjdrpPwyjq3yJQc+CKVSaaWW1BEl0nWAIfucWPX2x+WhOrIcRs1ZRy+4Staa2kvvW4moVgrzqsu6uuxfmVSSUanseTllL/uFONZT2Our5wtl+H1UXb0WNQdRy2w3G80A9BsRruT2s79udWk8rsO78KRurZv20RcX1nLpLkVZ5RazbuHg+olBNFj5EdtYaTpOboJVv92698KG3cESVL63+layVC5KjPTIbh03PrK2ZRZ4st7LBrxP5AtujJqXMNSXT+l0z0ZAdIi9+kqla9PU69XrkS/0b15XdPT2Q3RmVxnyOrLuY3k42PqghufWHxsALpfKogA1IiK6G8Kwr8A8qKA//ONDv55I4yGuhw5an+KqSnO5KBP17+hlA3CN2cwvqPrN2gSSytkQbpl6YT+3fC260/PtiTTbIL/hZHMOhPsihlj0+NDDz3ehV6/XiPKz7vk0ky7mq8tUxNMcljaPIi6Q0NNtqnjpy27bWLN2vNKtJEM30cy6eNaXylaUHWJJeha0PTZcfHJYPpykA+BEXqQYbEFgfgqWh1pVW/2CxSyoIpMUr1oZFTvnWlsYl31dva65f0P+lHv1r/Ug1JpK03wpX31dRvp+fFhumienOlGevKwuo2VzdUy3EJJSPYHu/9g7uYiqQZVtVqjo/Pr4ttViDizCk6mseTmprkQxeGFzfV3xwpp+syQ9lVlRlNmk78dgtjlXxxuml2sGDleVS0RUSDdXN4ksBuCAlbut9dIyspFoj5vZR6+Pmls0r7kUfZVbXjztJ4a9wYqqFE+0imQf2aq8uf7QqnnKwZK6KfPinmjzsJXKRYlR+q/ah6qPiLZcpvqoSv25mQXH99Sleaq+PEpn8mwOddg6RKqvpN5X63DzsN1lelZ0r9fufMlUvcpFYWmVHKOrZFctKqG9+iVxHg5WDN19w8XZiV9t9ZQaETlM1GLYV2AaVLAFX1VT3UPSrvfY6dtqVw0dtD7FWZWWwRJhov4dvWIAjjGbTTeD+a5K9LmZ/X1vfK/NLQdE0+vnlmmIMbbF6fn3RLJt0MZmdw6E+wpsQyxqpEf7+R6K6tnrgfuDTcXveSb+K2l/DQuACu/v5YAfj+8n134K/9az9W0p/Xo9ayo02P84d2MAGM4BAHyJ9qZbhsHXYf2QMgCwjl+OFAEV/ra6/rfluSa3fr2eMdVvq0TQkbsyAAznAADg3hChCnfTU4C7ob4o67yHdfxmwqi+MvwsHYT54fxDz3YnLeVOxADfBQwAAAAAAAAAAAAA4CfhddcLAAAAAAAAAIAfDeZ+AAAAAAAAAPD7wdwPAAAAAAAAAH4/mPsBAAAAAAAAwO9HzP0Mn0r5wo8X3c0XYn4MLY3Vt271+GSr8YW34V9+8eqbvhvYQfM3lPAaA8AHFgEAAAAAQNDM/fLkZVcM49d6gBgmm3hY7N7Sb5QN2EkXA8Yq+25JZMLn6T8zmn+Zl4y/5r9UwjsRo8rjl321GwAAAADgV/K/AAAA///plr41KeZWygAAAABJRU5ErkJggg=="},72158:(A,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/m-nu-634318b6ee9e7ef6056a7644d369c3b0.png"},6569:(A,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/m-uns-db0fd6b814df46bbefb943eb4b2f8d05.PNG"},3:(A,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/munge-ac339cde1c99cfe1080e69b85cd2988f.PNG"},93550:(A,e,n)=>{n.d(e,{Z:()=>s});const s="data:image/png;base64,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"},36132:(A,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/rmp-8b2c521f1beb07f2d4fa07005555da24.png"},19720:(A,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/rngd-da4b6a610e210dfbea1357d984dc2d7f.PNG"},57766:(A,e,n)=>{n.d(e,{Z:()=>d,a:()=>c});var s=n(70079);const l={},r=s.createContext(l);function c(A){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function d(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(l):A.components||l:c(A.components),s.createElement(r.Provider,{value:e},A.children)}}}]);