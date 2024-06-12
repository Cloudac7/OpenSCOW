"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[1917],{27985:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=s(49214),r=s(5409);const o={sidebar_position:4,title:"vagrant\u955c\u50cf\u5236\u4f5c"},a=void 0,l={id:"deploy/get-started/vagrant/images",title:"vagrant\u955c\u50cf\u5236\u4f5c",description:"1. login/compute\u8282\u70b9\u955c\u50cf\u5236\u4f5c",source:"@site/docs/deploy/get-started/vagrant/images.md",sourceDirName:"deploy/get-started/vagrant",slug:"/deploy/get-started/vagrant/images",permalink:"/SCOW/pr-preview/pr-1294/docs/deploy/get-started/vagrant/images",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/get-started/vagrant/images.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"vagrant\u955c\u50cf\u5236\u4f5c"},sidebar:"deploy",previous:{title:"\u81ea\u5b9a\u4e49\u90e8\u7f72",permalink:"/SCOW/pr-preview/pr-1294/docs/deploy/get-started/vagrant/customization"},next:{title:"FAQ",permalink:"/SCOW/pr-preview/pr-1294/docs/deploy/get-started/vagrant/faq"}},i={},c=[{value:"1. login/compute\u8282\u70b9\u955c\u50cf\u5236\u4f5c",id:"1-logincompute\u8282\u70b9\u955c\u50cf\u5236\u4f5c",level:2},{value:"2. slurm\u8282\u70b9\u955c\u50cf\u5236\u4f5c",id:"2-slurm\u8282\u70b9\u955c\u50cf\u5236\u4f5c",level:2},{value:"3. SCOW\u8282\u70b9\u955c\u50cf\u5236\u4f5c",id:"3-scow\u8282\u70b9\u955c\u50cf\u5236\u4f5c",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"1-logincompute\u8282\u70b9\u955c\u50cf\u5236\u4f5c",children:"1. login/compute\u8282\u70b9\u955c\u50cf\u5236\u4f5c"}),"\n",(0,t.jsx)(n.p,{children:"\u57fa\u4e8evagrant\u5b98\u65b9centos/7\u955c\u50cf(7.8.2003)\uff0c\u6267\u884c\u7684\u547d\u4ee4\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"# 1. \u5347\u7ea7\u5230centos7.9.2009\nyum update -y \n\n# 2. \u5173\u95edfirewalld\u3001dnsmasq\u3001NetworkManager\nsystemctl disable --now firewalld \nsystemctl disable --now dnsmasq\nsystemctl disable --now NetworkManager\n\n# 3. \u5173\u95edselinux\nsetenforce 0\nsed -i 's#SELINUX=enforcing#SELINUX=disabled#g' /etc/sysconfig/selinux\nsed -i 's#SELINUX=enforcing#SELINUX=disabled#g' /etc/selinux/config\ngetenforce\n\n# 4. \u5173\u95edswap\nswapoff -a && sysctl -w vm.swappiness=0enforcing\nsed -ri '/^[^#]*swap/s@^@#@' /etc/fstab\n\n\n# 5. \u65f6\u95f4\u540c\u6b65\nrpm -ivh http://mirrors.wlnmp.com/centos/wlnmp-release-centos.noarch.rpm\nyum install ntpdate vim -y\n\n# \u540c\u6b65\u65f6\u95f4\u3002time2.aliyun.com\u5916\u7f51\uff0cvineyard.pku.edu.cn\u5185\u7f51\n# \u65f6\u95f4\u540c\u6b65\u914d\u7f6e\u5982\u4e0b\uff1a\nln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\necho 'Asia/Shanghai' >/etc/timezone\nntpdate time2.aliyun.com\n\ncat >>/var/spool/cron/root <<EOF\n*/5 * * * * /usr/sbin/ntpdate time2.aliyun.com\nEOF\n\n# 6. \u5b89\u88c5epel-release\nyum install epel-release -y\n\n# 7. \u5b89\u88c5emacs wget\nyum install emacs wget -y\n\n# 8. \u5b89\u88c5turbovnc\nwget https://turbovnc.org/pmwiki/uploads/Downloads/TurboVNC.repo --no-check-certificate\nmv TurboVNC.repo /etc/yum.repos.d\n# \u5b89\u88c5\u6700\u65b0\u7248\u672c\nyum install turbovnc -y\n\n# 9. \u5b89\u88c5\u684c\u9762\nyum groupinstall \"Xfce\" -y\nyum groupinstall \"KDE Plasma Workspaces\" -y\nyum groupinstall \"MATE Desktop\" -y\nyum install cinnamon -y\n\n# 10. \u5b89\u88c5rng-tools\nyum install -y rng-tools\nrngd -r /dev/urandom\n\n# 11. \u5b89\u88c5munge\nyum install munge munge-libs munge-devel -y\n\n# 12. \u5b89\u88c5slurm\nyum install gcc gcc-c++ readline-devel perl-ls-MakeMaker pam-devel rpm-build mysql-devel python3 -y\n# \u6b64\u5904\u662f\u62f7\u8d1d\u7684slurm\u7684\u7f16\u8bd1\u6587\u4ef6\ncp -r /vagrant/slurm/rpmbuild/ /root/ \ncd /root/rpmbuild/RPMS/x86_64/ && yum localinstall slurm-* -y\n\n# 13. \u652f\u6301\u5bc6\u7801\u767b\u5f55\u767b\u5f55\nsed -i 's#PasswordAuthentication no#PasswordAuthentication yes#g' /etc/ssh/sshd_config\nsystemctl restart sshd\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6b64\u5904slurm\u7684\u7f16\u8bd1\u8bf7\u53c2\u89c1\u6587\u6863",(0,t.jsx)(n.a,{href:"https://pkuhpc.github.io/SCOW/docs/slurm",children:"slurm\u96c6\u7fa4\u90e8\u7f72"})," \u4e2dslurm\u7f16\u8bd1\u76f8\u5173\u5185\u5bb9"]}),"\n",(0,t.jsx)(n.h2,{id:"2-slurm\u8282\u70b9\u955c\u50cf\u5236\u4f5c",children:"2. slurm\u8282\u70b9\u955c\u50cf\u5236\u4f5c"}),"\n",(0,t.jsx)(n.p,{children:"\u5728login/compute\u8282\u70b9\u955c\u50cf\u7684\u57fa\u7840\u4e0a\uff0c\u6267\u884c\u7684\u547d\u4ee4\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"# 1.\u5b89\u88c5mariadb\nyum -y install mariadb-server\nsystemctl start mariadb\nsystemctl enable mariadb\n\n# \u521d\u59cb\u5316\nmysql << EOF\n   set password=password('${db_passwd}');\n   create database slurm_acct_db;\n   create user slurm;\n   grant all on slurm_acct_db.* TO 'slurm'@'localhost' identified by '123456' with grant option;\n   grant select on slurm_acct_db.* to 'slurm'@'%' identified by '123456';\n   flush privileges;\nEOF\n\n# 2. \u62f7\u8d1dvscode\u6587\u4ef6\ncp code-server-4.7.1-linux-amd64.tar.gz /root/\n"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u6b64\u5904code-server\u7684\u4e0b\u8f7d\u5730\u5740\u4e3a\uff1a",(0,t.jsx)(n.a,{href:"https://github.com/coder/code-server/releases/download/v4.7.1/code-server-4.7.1-linux-amd64.tar.gz",children:"https://github.com/coder/code-server/releases/download/v4.7.1/code-server-4.7.1-linux-amd64.tar.gz"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u4e5f\u53ef\u9009\u62e9\u5176\u4ed6\u7248\u672c\u4e0b\u8f7d\uff1a",(0,t.jsx)(n.a,{href:"https://github.com/coder/code-server/releases",children:"https://github.com/coder/code-server/releases"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"3-scow\u8282\u70b9\u955c\u50cf\u5236\u4f5c",children:"3. SCOW\u8282\u70b9\u955c\u50cf\u5236\u4f5c"}),"\n",(0,t.jsx)(n.p,{children:"\u57fa\u4e8evagrant\u5b98\u65b9centos/7\u955c\u50cf(7.8.2003)\uff0c\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"# 1. \u5347\u7ea7\u5230centos7.9.2009\nyum update -y \n\n# 2. \u5173\u95edfirewalld\u3001dnsmasq\u3001NetworkManager\nsystemctl disable --now firewalld \nsystemctl disable --now dnsmasq\nsystemctl disable --now NetworkManager\n\n# 3. \u5173\u95edselinux\nsetenforce 0\nsed -i 's#SELINUX=enforcing#SELINUX=disabled#g' /etc/sysconfig/selinux\nsed -i 's#SELINUX=enforcing#SELINUX=disabled#g' /etc/selinux/config\ngetenforce\n\n# 4. \u5173\u95edswap\nswapoff -a && sysctl -w vm.swappiness=0enforcing\nsed -ri '/^[^#]*swap/s@^@#@' /etc/fstab\n\n\n# 5. \u65f6\u95f4\u540c\u6b65\nrpm -ivh http://mirrors.wlnmp.com/centos/wlnmp-release-centos.noarch.rpm\nyum install ntpdate vim -y\n\n# \u540c\u6b65\u65f6\u95f4\u3002time2.aliyun.com\u5916\u7f51\uff0cvineyard.pku.edu.cn\u5185\u7f51\n# \u65f6\u95f4\u540c\u6b65\u914d\u7f6e\u5982\u4e0b\uff1a\nln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\necho 'Asia/Shanghai' >/etc/timezone\nntpdate time2.aliyun.com\n\ncat >>/var/spool/cron/root <<EOF\n*/5 * * * * /usr/sbin/ntpdate time2.aliyun.com\nEOF\n\n# 6. \u5b89\u88c5docker\nyum install -y yum-utils \\\n  device-mapper-persistent-data \\\n  lvm2\n  \n# \u8bbe\u7f6e\u7a33\u5b9a\u5b58\u50a8\u5e93\nyum-config-manager \\\n    --add-repo \\\n    https://download.docker.com/linux/centos/docker-ce.repo \n    \n# \u5b89\u88c5Docker CE\nyum install docker-ce -y\n\n# \u542f\u52a8Docker CE\u5e76\u8bbe\u7f6e\u5f00\u673a\u542f\u52a8\nsystemctl start docker\nsystemctl enable docker\n\n\n# 7. \u5b89\u88c5docker-compose\ncurl -L \"https://github.com/docker/compose/releases/download/v2.7.0/docker-compose-$(uname -s)-$(uname -m)\" -o /usr/local/bin/docker-compose\n# \u8d4b\u6743\nchmod +x /usr/local/bin/docker-compose\n\n# \u9a8c\u8bc1\u5b89\u88c5\u6210\u529f\ndocker-compose --version\n\n# 8. \u521b\u5efascow\u76ee\u5f55\nmkdir /root/scow/\n\nyum install -y python3\npip3 install -r /root/scow/export-jobs/requirements.txt\n\n\n# 9. \u652f\u6301\u5bc6\u7801\u767b\u5f55\u767b\u5f55\nsed -i 's#PasswordAuthentication no#PasswordAuthentication yes#g' /etc/ssh/sshd_config\nsystemctl restart sshd\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5409:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var t=s(48318);const r={},o=t.createContext(r);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);