"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[5499],{67885:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var s=r(49214),i=r(5409);const t={sidebar_position:1},o="RStudio",a={id:"deploy/config/portal/apps/apps/rstudio/index",title:"RStudio",description:"\u8f6f\u4ef6\u7b80\u4ecb",source:"@site/docs/deploy/config/portal/apps/apps/rstudio/index.md",sourceDirName:"deploy/config/portal/apps/apps/rstudio",slug:"/deploy/config/portal/apps/apps/rstudio/",permalink:"/SCOW/pr-preview/pr-1202/docs/deploy/config/portal/apps/apps/rstudio/",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/config/portal/apps/apps/rstudio/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"deploy",previous:{title:"Relion",permalink:"/SCOW/pr-preview/pr-1202/docs/deploy/config/portal/apps/apps/relion/"},next:{title:"VSCode",permalink:"/SCOW/pr-preview/pr-1202/docs/deploy/config/portal/apps/apps/vscode/"}},d={},l=[{value:"\u8f6f\u4ef6\u7b80\u4ecb",id:"\u8f6f\u4ef6\u7b80\u4ecb",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"1\u3001RStudio Server 1.4.1103\u4e4b\u524d\u7248\u672c\u7684\u5b89\u88c5",id:"1rstudio-server-141103\u4e4b\u524d\u7248\u672c\u7684\u5b89\u88c5",level:3},{value:"1.1\u3001R\u5b89\u88c5",id:"11r\u5b89\u88c5",level:4},{value:"1.2\u3001RStudio Server\u5b89\u88c5",id:"12rstudio-server\u5b89\u88c5",level:4},{value:"2\u3001RStudio Server 1.4.1103\u53ca\u4e4b\u540e\u7248\u672c\u7684\u5b89\u88c5",id:"2rstudio-server-141103\u53ca\u4e4b\u540e\u7248\u672c\u7684\u5b89\u88c5",level:3},{value:"2.1\u3001Singularity\u5b89\u88c5",id:"21singularity\u5b89\u88c5",level:4},{value:"2.2\u3001R\u5b89\u88c5",id:"22r\u5b89\u88c5",level:4},{value:"2.3\u3001\u6784\u5efaRStudio Server\u955c\u50cf",id:"23\u6784\u5efarstudio-server\u955c\u50cf",level:3},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2},{value:"1\u3001RStudio Server 1.4.1103\u4e4b\u524d\u7248\u672c",id:"1rstudio-server-141103\u4e4b\u524d\u7248\u672c",level:3},{value:"2\u3001RStudio Server 1.4.1103\u53ca\u4e4b\u540e\u7248\u672c\uff08\u6e90\u7801\u5b89\u88c5R\uff09",id:"2rstudio-server-141103\u53ca\u4e4b\u540e\u7248\u672c\u6e90\u7801\u5b89\u88c5r",level:3},{value:"3\u3001RStudio Server 1.4.1103\u53ca\u4e4b\u540e\u7248\u672c\uff08Conda\u73af\u5883\u5b89\u88c5R\uff09",id:"3rstudio-server-141103\u53ca\u4e4b\u540e\u7248\u672cconda\u73af\u5883\u5b89\u88c5r",level:3},{value:"\u9644\u7ae0",id:"\u9644\u7ae0",level:2},{value:"1\u3001Singularity\u5b89\u88c5",id:"1singularity\u5b89\u88c5",level:3},{value:"2\u3001R\u5b89\u88c5",id:"2r\u5b89\u88c5",level:3},{value:"2.1\u3001\u6e90\u7801\u5b89\u88c5R",id:"21\u6e90\u7801\u5b89\u88c5r",level:4},{value:"2.2\u3001\u5728Conda\u73af\u5883\u5b89\u88c5R",id:"22\u5728conda\u73af\u5883\u5b89\u88c5r",level:4},{value:"3\u3001\u6784\u5efaRStudio Server\u955c\u50cf",id:"3\u6784\u5efarstudio-server\u955c\u50cf",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"rstudio",children:"RStudio"}),"\n",(0,s.jsx)(n.h2,{id:"\u8f6f\u4ef6\u7b80\u4ecb",children:"\u8f6f\u4ef6\u7b80\u4ecb"}),"\n",(0,s.jsx)(n.p,{children:"RStudio Server\u662fRStudio\u516c\u53f8\u63d0\u4f9b\u7684\u4e00\u6b3e\u57fa\u4e8eWeb\u7684R\u5f00\u53d1\u73af\u5883\uff0c\u53ef\u4ee5\u901a\u8fc7Web\u6d4f\u89c8\u5668\u8fdc\u7a0b\u8bbf\u95ee\uff0c\u5b9e\u73b0\u5bf9R\u7f16\u7a0b\u8bed\u8a00\u7684\u5f00\u53d1\u3001\u8c03\u8bd5\u548c\u7ba1\u7406\u3002RStudio Server\u652f\u6301\u591a\u7528\u6237\u5e76\u53d1\u8bbf\u95ee\uff0c\u5177\u6709\u826f\u597d\u7684\u7528\u6237\u7ba1\u7406\u548c\u6743\u9650\u63a7\u5236\uff0c\u652f\u6301SSH\u548cHTTPS\u7b49\u5b89\u5168\u534f\u8bae\uff0c\u662f\u4f01\u4e1a\u7ea7\u548c\u56e2\u961f\u534f\u4f5c\u5f00\u53d1\u7684\u7406\u60f3\u9009\u62e9\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"\u8bf7\u786e\u4fdd\u5728\u9700\u8981\u8fd0\u884c\u5e94\u7528\u7684\u8ba1\u7b97\u8282\u70b9\u4e0a\u5b89\u88c5\u6709R\u548cRStudio Server\u3002RStudio Server 1.4.1103\u4e4b\u524d\u7248\u672c\uff0c\u5efa\u8bae\u4e0b\u8f7d\u76f8\u5e94\u7cfb\u7edf\u7684rpm\u5305\u8fdb\u884c\u5b89\u88c5\uff0c\u8fd9\u6837\u76f8\u5bf9\u6bd4\u8f83\u7b80\u5355\u3002RStudio Server 1.4.1103\u53ca\u4e4b\u540e\u7684\u7248\u672c\uff0c\u4e3a\u4fdd\u8bc1\u548c\u5e73\u53f0\u7684\u517c\u5bb9\u6027\uff0c\u5efa\u8bae\u901a\u8fc7\u7f16\u8bd1\u540e\u6784\u5efaSingularity\u955c\u50cf\u8fdb\u884c\u5b89\u88c5\uff0c\u8fd9\u6837\u53ef\u4ee5\u51cf\u5c11\u8de8\u5e73\u53f0\u3001\u8de8\u96c6\u7fa4\u7684\u91cd\u590d\u7f16\u8bd1\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"1rstudio-server-141103\u4e4b\u524d\u7248\u672c\u7684\u5b89\u88c5",children:"1\u3001RStudio Server 1.4.1103\u4e4b\u524d\u7248\u672c\u7684\u5b89\u88c5"}),"\n",(0,s.jsx)(n.h4,{id:"11r\u5b89\u88c5",children:"1.1\u3001R\u5b89\u88c5"}),"\n",(0,s.jsx)(n.p,{children:"\u5177\u4f53\u5b89\u88c5\u6b65\u9aa4\u8bf7\u53c2\u8003\u9644\u7ae0\u4e2dR\u7684\u5b89\u88c5\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"12rstudio-server\u5b89\u88c5",children:"1.2\u3001RStudio Server\u5b89\u88c5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u4e0b\u8f7drpm\u5305\nwget https://download2.rstudio.org/server/centos6/x86_64/rstudio-server-rhel-1.3.959-x86_64.rpm\n\n# \u62f7\u8d1d\u53ea\u5171\u4eab\u5b58\u50a8\nmkdir -p /data/software/rstudio-server/1.3.959\ncp rstudio-server-rhel-1.3.959-x86_64.rpm /data/software/rstudio-server/1.3.959\ncd /data/software/rstudio-server/1.3.959\n\n# \u89e3\u538b\u5b89\u88c5\nrpm2cpio rstudio-server-rhel-1.3.959-x86_64.rpm | cpio -div\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2rstudio-server-141103\u53ca\u4e4b\u540e\u7248\u672c\u7684\u5b89\u88c5",children:"2\u3001RStudio Server 1.4.1103\u53ca\u4e4b\u540e\u7248\u672c\u7684\u5b89\u88c5"}),"\n",(0,s.jsx)(n.h4,{id:"21singularity\u5b89\u88c5",children:"2.1\u3001Singularity\u5b89\u88c5"}),"\n",(0,s.jsx)(n.p,{children:"\u5177\u4f53\u5b89\u88c5\u6b65\u9aa4\u8bf7\u53c2\u8003\u9644\u7ae0\u4e2dSingularity\u7684\u5b89\u88c5\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"22r\u5b89\u88c5",children:"2.2\u3001R\u5b89\u88c5"}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u6784\u5efaSingularity\u955c\u50cf\u7684\u65b9\u5f0f\u5b89\u88c5RStudio Server\uff0cSingularity\u955c\u50cf\u5185\u65e0\u9700\u5b89\u88c5R\u73af\u5883\uff0c\u53ef\u76f4\u63a5\u4f7f\u7528\u5bbf\u4e3b\u673a\u7cfb\u7edf\u91cc\u9762\u7684R\u73af\u5883\uff0c\u6240\u4ee5R\u5b89\u88c5\u5728\u5bbf\u4e3b\u673a\u7cfb\u7edf\u5373\u53ef\uff0c\u5177\u4f53\u5b89\u88c5\u6b65\u9aa4\u8bf7\u53c2\u8003\u9644\u7ae0\u4e2dR\u7684\u5b89\u88c5\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"23\u6784\u5efarstudio-server\u955c\u50cf",children:"2.3\u3001\u6784\u5efaRStudio Server\u955c\u50cf"}),"\n",(0,s.jsx)(n.p,{children:"\u5177\u4f53\u5b89\u88c5\u6b65\u9aa4\u8bf7\u53c2\u8003\u9644\u7ae0\u4e2d\u6784\u5efaRStudio Server\u955c\u50cf\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u9762\u8bb2\u89e3\u5982\u4f55\u914d\u7f6e\u4f7f\u7528RStudio Server\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u914d\u7f6e\u6587\u4ef6",children:"\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:["\u521b\u5efa",(0,s.jsx)(n.code,{children:"config/apps"}),"\u76ee\u5f55\uff0c\u5728\u91cc\u9762\u521b\u5efa",(0,s.jsx)(n.code,{children:"rstudio.yml"}),"\u6587\u4ef6\uff0c\u5176\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.h3,{id:"1rstudio-server-141103\u4e4b\u524d\u7248\u672c",children:"1\u3001RStudio Server 1.4.1103\u4e4b\u524d\u7248\u672c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="config/apps/rstudio.yml"',children:'# \u8fd9\u4e2a\u5e94\u7528\u7684ID\nid: rstudio\n\n# \u8fd9\u4e2a\u5e94\u7528\u7684\u540d\u5b57\nname: RStudio\n\n# \u6307\u5b9a\u5e94\u7528\u7c7b\u578b\u4e3aweb\ntype: web\n\n# Web\u5e94\u7528\u7684\u914d\u7f6e\nweb:\n  # \u6307\u5b9a\u53cd\u5411\u4ee3\u7406\u7c7b\u578b\n  proxyType: relative\n  # \u51c6\u5907\u811a\u672c\n  beforeScript: |\n    export PORT=$(get_port)\n    export PASSWORD=$(get_password 12)\n    export SLURM_COMPUTE_NODE_HOSTNAME=$(hostname)\n    export APPURI="${PROXY_BASE_PATH}/${SLURM_COMPUTE_NODE_HOSTNAME}/${PORT}/"\n    export USER=${USER}\n\n  # \u8fd0\u884c\u4efb\u52a1\u7684\u811a\u672c\u3002\u53ef\u4ee5\u4f7f\u7528\u51c6\u5907\u811a\u672c\u5b9a\u4e49\u7684\u53d8\u91cf\n  script: |\n    setup_env () {\n        # Additional environment which could be moved into a module\n        export RSTUDIO_PASSWORD=${PASSWORD}\n\n        # rstudio\u7684\u8def\u5f84\n        export RSTUDIO_HOME=/data/software/rstudio-server/1.3.959/usr/lib/rstudio-server\n        export RSTUDIO_BIN_PATH=${RSTUDIO_HOME}/bin\n        export RSTUDIO_RSERVER=${RSTUDIO_BIN_PATH}/rserver\n        export RSTUDIO_RSESSION=${RSTUDIO_BIN_PATH}/rsession\n\n        export RSTUDIO_AUTH="/data/software/rstudio-server/auth"\n        export RSESSION_WRAPPER_FILE="${PWD}/rsession.sh"\n        export DB_CONF_FILE="${PWD}/database.conf"\n        export WHICHR=/data/software/R/${r_version}/bin/R\n    }\n    setup_env\n\n    (\n    umask 077\n    sed \'s/^ \\{2\\}//\' > "${RSESSION_WRAPPER_FILE}" << EOL\n    #!/usr/bin/env bash\n    # Log all output from this script\n    export RSESSION_LOG_FILE="${PWD}/rsession.log"\n    exec &>>"\\${RSESSION_LOG_FILE}"\n    # Launch the original command\n    echo "Launching rsession..."\n    set -x\n    exec ${RSTUDIO_RSESSION} --r-libs-user "${R_LIBS_USER}" "\\${@}"\n    EOL\n    )\n\n    chmod 700 "${RSESSION_WRAPPER_FILE}"\n    cd "${HOME}"\n    export TMPDIR="$(mktemp -d)"\n    mkdir -p "$TMPDIR/rstudio-server"\n    python -c \'from uuid import uuid4; print(uuid4())\' > "$TMPDIR/rstudio-server/secure-cookie-key"\n    chmod 0600 "$TMPDIR/rstudio-server/secure-cookie-key"\n    \n    set -x\n    # Launch the RStudio Server\n    export PATH=/data/software/rstudio-server/1.3.959/usr/lib/rstudio-server/bin:$PATH\n    echo "Starting up rserver..."\n    # RStudio Server 1.4.1103\u4e4b\u524d\u7248\u672c\u4e0d\u9700\u8981--database-config-file\uff0c\u4e4b\u540e\u7248\u672c\u9700\u8981\u589e\u52a0\u6b64\u914d\u7f6e\n    /data/software/rstudio-server/1.3.959/usr/lib/rstudio-server/bin/rserver \\\n      --www-port "${PORT}" \\\n      --auth-none 1 \\\n      --auth-pam-helper-path "${RSTUDIO_AUTH}" \\\n      --auth-encrypt-password 0 \\\n      --rsession-path "${RSESSION_WRAPPER_FILE}" \\\n      --server-data-dir "${TMPDIR}" \\\n      --server-user ${USER} \\\n      --secure-cookie-key-file "${TMPDIR}/rstudio-server/secure-cookie-key" \\\n      --rsession-which-r ${WHICHR}\n      \n      echo \'Singularity as exited...\'\n\n  # \u5982\u4f55\u8fde\u63a5\u5e94\u7528\n  connect:\n    method: POST\n    path: /auth-do-sign-in\n    formData:\n      password: "{{ PASSWORD }}"\n      username: "{{ USER }}"\n      appUri: "{{ APPURI }}"\n      \n# \u914d\u7f6eHTML\u8868\u5355   \nattributes:\n  - type: select\n    name: r_version\n    label: \u8bf7\u9009\u62e9R\u7248\u672c\n    select:\n      - value: R-3.6.0\n        label: 3.6.0\n      - value: R-4.2.3\n        label: 4.2.3\n  - type: text\n    name: sbatchOptions\n    label: \u5176\u4ed6sbatch\u53c2\u6570\n    required: false\n    placeholder: "\u6bd4\u5982\uff1a--gpus gres:2 --time 10"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"2rstudio-server-141103\u53ca\u4e4b\u540e\u7248\u672c\u6e90\u7801\u5b89\u88c5r",children:"2\u3001RStudio Server 1.4.1103\u53ca\u4e4b\u540e\u7248\u672c\uff08\u6e90\u7801\u5b89\u88c5R\uff09"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="config/apps/rstudio.yml"',children:'# \u8fd9\u4e2a\u5e94\u7528\u7684ID\nid: rstudio\n\n# \u8fd9\u4e2a\u5e94\u7528\u7684\u540d\u5b57\nname: RStudio\n\n# \u6307\u5b9a\u5e94\u7528\u7c7b\u578b\u4e3aweb\ntype: web\n\n# Web\u5e94\u7528\u7684\u914d\u7f6e\nweb:\n  # \u6307\u5b9a\u53cd\u5411\u4ee3\u7406\u7c7b\u578b\n  proxyType: relative\n  # \u51c6\u5907\u811a\u672c\n  beforeScript: |\n    export PORT=$(get_port)\n    export PASSWORD=$(get_password 12)\n    export SLURM_COMPUTE_NODE_HOSTNAME=$(hostname)\n    export APPURI="${PROXY_BASE_PATH}/${SLURM_COMPUTE_NODE_HOSTNAME}/${PORT}/"\n    export USER=${USER}\n    export SINGULARITY_VERSION="singularity/3.9.2"\n\n  # \u8fd0\u884c\u4efb\u52a1\u7684\u811a\u672c\u3002\u53ef\u4ee5\u4f7f\u7528\u51c6\u5907\u811a\u672c\u5b9a\u4e49\u7684\u53d8\u91cf\n  script: |\n    setup_env () {\n        # Additional environment which could be moved into a module\n        export RSTUDIO_PASSWORD=${PASSWORD}\n        # Change these to suit\n        export RSTUDIO_SERVER_IMAGE="/data/software/rstudio-server/rstudio.sif"\n\n        # \u5bb9\u5668\u4e2drstudio\u7684\u8def\u5f84\n        export RSTUDIO_HOME=/usr/lib/rstudio-server\n        export RSTUDIO_BIN_PATH=${RSTUDIO_HOME}/bin\n        export RSTUDIO_RSERVER=${RSTUDIO_BIN_PATH}/rserver\n        export RSTUDIO_RSESSION=${RSTUDIO_BIN_PATH}/rsession\n\n        export RSTUDIO_AUTH="/data/software/rstudio-server/auth"\n        export RSESSION_WRAPPER_FILE="${PWD}/rsession.sh"\n        export DB_CONF_FILE="${PWD}/database.conf"\n        export WHICHR=/data/software/R/${r_version}/bin/R\n    }\n    setup_env\n    module switch ${SINGULARITY_VERSION}\n    (\n    umask 077\n    sed \'s/^ \\{2\\}//\' > "${RSESSION_WRAPPER_FILE}" << EOL\n    #!/usr/bin/env bash\n    # Log all output from this script\n    export RSESSION_LOG_FILE="${PWD}/rsession.log"\n    exec &>>"\\${RSESSION_LOG_FILE}"\n    # Launch the original command\n    echo "Launching rsession..."\n    set -x\n    exec ${RSTUDIO_RSESSION} --r-libs-user "${R_LIBS_USER}" "\\${@}"\n    EOL\n    )\n\n    chmod 700 "${RSESSION_WRAPPER_FILE}"\n    cd "${HOME}"\n    export TMPDIR="$(mktemp -d)"\n    mkdir -p "$TMPDIR/rstudio-server"\n    python -c \'from uuid import uuid4; print(uuid4())\' > "$TMPDIR/rstudio-server/secure-cookie-key"\n    chmod 0600 "$TMPDIR/rstudio-server/secure-cookie-key"\n\n    (\n    umask 177\n    cat > "${DB_CONF_FILE}" << EOL\n    provider=sqlite\n    directory=${HOME}/.local/share/rstudio/database\n    EOL\n    )\n    \n    set -x\n    # Launch the RStudio Server\n    echo "Starting up rserver..."\n    # RStudio Server 1.4.1103\u4e4b\u524d\u7248\u672c\u4e0d\u9700\u8981--database-config-file\uff0c\u4e4b\u540e\u7248\u672c\u9700\u8981\u589e\u52a0\u6b64\u914d\u7f6e\n    singularity run -B "/tmp:/tmp","/data:/data" "$RSTUDIO_SERVER_IMAGE" ${RSTUDIO_RSERVER} \\\n      --www-port "${PORT}" \\\n      --auth-none 1 \\\n      --auth-pam-helper-path "${RSTUDIO_AUTH}" \\\n      --auth-encrypt-password 0 \\\n      --rsession-path "${RSESSION_WRAPPER_FILE}" \\\n      --server-data-dir "${TMPDIR}" \\\n      --server-user ${USER} \\\n      --secure-cookie-key-file "${TMPDIR}/rstudio-server/secure-cookie-key" \\\n      --database-config-file "${DB_CONF_FILE}" \\\n      --rsession-which-r ${WHICHR}\n      \n      echo \'Singularity as exited...\'\n\n  # \u5982\u4f55\u8fde\u63a5\u5e94\u7528\n  connect:\n    method: POST\n    path: /auth-do-sign-in\n    formData:\n      password: "{{ PASSWORD }}"\n      username: "{{ USER }}"\n      appUri: "{{ APPURI }}"\n      \n# \u914d\u7f6eHTML\u8868\u5355   \nattributes:\n  - type: select\n    name: r_version\n    label: \u8bf7\u9009\u62e9R\u7248\u672c\n    select:\n      - value: R-3.6.0\n        label: 3.6.0\n      - value: R-4.2.3\n        label: 4.2.3\n  - type: text\n    name: sbatchOptions\n    label: \u5176\u4ed6sbatch\u53c2\u6570\n    required: false\n    placeholder: "\u6bd4\u5982\uff1a--gpus gres:2 --time 10"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"3rstudio-server-141103\u53ca\u4e4b\u540e\u7248\u672cconda\u73af\u5883\u5b89\u88c5r",children:"3\u3001RStudio Server 1.4.1103\u53ca\u4e4b\u540e\u7248\u672c\uff08Conda\u73af\u5883\u5b89\u88c5R\uff09"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="config/apps/rstudio.yml"',children:'# \u8fd9\u4e2a\u5e94\u7528\u7684ID\nid: rstudio\n\n# \u8fd9\u4e2a\u5e94\u7528\u7684\u540d\u5b57\nname: RStudio\n\n# \u6307\u5b9a\u5e94\u7528\u7c7b\u578b\u4e3aweb\ntype: web\n\n# Web\u5e94\u7528\u7684\u914d\u7f6e\nweb:\n  # \u6307\u5b9a\u53cd\u5411\u4ee3\u7406\u7c7b\u578b\n  proxyType: relative\n  # \u51c6\u5907\u811a\u672c\n  beforeScript: |\n    export PORT=$(get_port)\n    export PASSWORD=$(get_password 12)\n    export SLURM_COMPUTE_NODE_NAME=$(hostname)\n    export APPURI="${PROXY_BASE_PATH}/${SLURM_COMPUTE_NODE_NAME}/${PORT}/"\n    export USER=${USER}\n    export SINGULARITY_VERSION="singularity/3.9.2"\n    export SHELL_NAME=$(echo ${SHELL} | awk -F\'/\' \'{print $NF}\')\n    export CONDA_VERSION="anaconda/3-2023.03"\n\n  # \u8fd0\u884c\u4efb\u52a1\u7684\u811a\u672c\u3002\u53ef\u4ee5\u4f7f\u7528\u51c6\u5907\u811a\u672c\u5b9a\u4e49\u7684\u53d8\u91cf\n  script: |\n    setup_env () {\n        # Additional environment which could be moved into a module\n        export RSTUDIO_PASSWORD=${PASSWORD}\n        # Change these to suit\n        export RSTUDIO_SERVER_IMAGE="/data/software/rstudio-server/rstudio.sif"\n\n        # \u5bb9\u5668\u4e2drstudio\u7684\u8def\u5f84\n        export RSTUDIO_HOME=/usr/lib/rstudio-server\n        export RSTUDIO_BIN_PATH=${RSTUDIO_HOME}/bin\n        export RSTUDIO_RSERVER=${RSTUDIO_BIN_PATH}/rserver\n        export RSTUDIO_RSESSION=${RSTUDIO_BIN_PATH}/rsession\n\n        export RSTUDIO_AUTH="/data/software/rstudio-server/auth"\n        export RSESSION_WRAPPER_FILE="${PWD}/rsession.sh"\n        export DB_CONF_FILE="${PWD}/database.conf"\n        export WHICHR=/data/software/R/${r_version}/bin/R\n    }\n    setup_env\n    module switch ${SINGULARITY_VERSION}\n\n    for m in ${textModuleName}; do module switch ${m}; done\n\n    conda -V &> /dev/null\n    if [ $? -ne 0 ]; then\n      module switch ${CONDA_VERSION}\n    fi\n    # init conda\n    eval "$($(which conda) shell.${SHELL_NAME} hook)"\n\n    conda activate ${r_version}\n    if [ $? -ne 0 ]; then\n      echo "${r_version}\u4e0d\u5b58\u5728\uff0c\u8bf7\u8f93\u5165\u6b63\u786e\u7684R\u7248\u672c\uff01"\n      exit 2\n    fi\n\n    (\n    umask 077\n    sed \'s/^ \\{2\\}//\' > "${RSESSION_WRAPPER_FILE}" << EOL\n    #!/usr/bin/env bash\n    # Log all output from this script\n    export RSESSION_LOG_FILE="${PWD}/rsession.log"\n    exec &>>"\\${RSESSION_LOG_FILE}"\n    # Launch the original command\n    echo "Launching rsession..."\n    set -x\n    exec ${RSTUDIO_RSESSION} --r-libs-user "${R_LIBS_USER}" "\\${@}"\n    EOL\n    )\n\n    chmod 700 "${RSESSION_WRAPPER_FILE}"\n    cd "${HOME}"\n    export TMPDIR="$(mktemp -d)"\n    mkdir -p "$TMPDIR/rstudio-server"\n    python -c \'from uuid import uuid4; print(uuid4())\' > "$TMPDIR/rstudio-server/secure-cookie-key"\n    chmod 0600 "$TMPDIR/rstudio-server/secure-cookie-key"\n\n    (\n    umask 177\n    cat > "${DB_CONF_FILE}" << EOL\n    provider=sqlite\n    directory=${HOME}/.local/share/rstudio/database\n    EOL\n    )\n\n    set -x\n    # Launch the RStudio Server\n    echo "Starting up rserver..."\n    # RStudio Server 1.4.1103\u4e4b\u524d\u7248\u672c\u4e0d\u9700\u8981--database-config-file\uff0c\u4e4b\u540e\u7248\u672c\u9700\u8981\u589e\u52a0\u6b64\u914d\u7f6e\n    singularity run -B "/tmp:/tmp","/data:/data" "$RSTUDIO_SERVER_IMAGE" ${RSTUDIO_RSERVER} \\\n      --www-port "${PORT}" \\\n      --auth-none 1 \\\n      --auth-pam-helper-path "${RSTUDIO_AUTH}" \\\n      --auth-encrypt-password 0 \\\n      --rsession-path "${RSESSION_WRAPPER_FILE}" \\\n      --server-data-dir "${TMPDIR}" \\\n      --server-user ${USER} \\\n      --secure-cookie-key-file "${TMPDIR}/rstudio-server/secure-cookie-key" \\\n      --database-config-file "${DB_CONF_FILE}"\n      # --rsession-which-r ${WHICHR}\n\n      echo \'Singularity as exited...\'\n\n  # \u5982\u4f55\u8fde\u63a5\u5e94\u7528\n  connect:\n    method: POST\n    path: /auth-do-sign-in\n    formData:\n      password: "{{ PASSWORD }}"\n      username: "{{ USER }}"\n      appUri: "{{ APPURI }}"\n\n# \u914d\u7f6eHTML\u8868\u5355   \nattributes:\n  - type: select\n    name: r_version\n    label: \u8bf7\u9009\u62e9R\u7248\u672c\n    select:\n      - value: R-3.6.0\n        label: 3.6.0\n      - value: R-4.2.3\n        label: 4.2.3\n  - type: text\n    name: textModuleName\n    label: Modules\n    required: false  # \u8f93\u5165\u9700\u8981\u989d\u5916\u52a0\u8f7d\u7684\u73af\u5883\u6a21\u5757\u5217\u8868\n    placeholder: \u8f93\u5165\u9700\u8981\u989d\u5916\u52a0\u8f7d\u7684\u73af\u5883\u6a21\u5757\u5217\u8868\uff0c\u6a21\u5757\u4e4b\u95f4\u7528\u7a7a\u683c\u5206\u5f00\uff08\u6bd4\u5982\uff1apython/2.7.5 code-server/4.9.1\uff09  # \u63d0\u793a\u4fe1\u606f\n  - type: text\n    name: sbatchOptions\n    label: \u5176\u4ed6sbatch\u53c2\u6570\n    required: false\n    placeholder: "\u6bd4\u5982\uff1a--gpus gres:2 --time 10"\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u589e\u52a0\u4e86\u6b64\u6587\u4ef6\u540e\uff0c\u5237\u65b0WEB\u6d4f\u89c8\u5668\u5373\u53ef\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8eRStudio\uff0cexport\u4ee5\u4e0b\u53d8\u91cf\u7684\u542b\u4e49\u662f\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SLURM_COMPUTE_NODE_HOSTNAME"}),": \u8ba1\u7b97\u8282\u70b9\u7684\u4e3b\u673a\u540d"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SINGULARITY_VERSION"}),"\uff1aSingularity\u7248\u672c"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9644\u7ae0",children:"\u9644\u7ae0"}),"\n",(0,s.jsx)(n.h3,{id:"1singularity\u5b89\u88c5",children:"1\u3001Singularity\u5b89\u88c5"}),"\n",(0,s.jsx)(n.p,{children:"Singularity\u7528\u4e8e\u6784\u5efa\u548c\u8fd0\u884cRStudio Server\u5bb9\u5668\u955c\u50cf\uff0c\u5efa\u8bae\u5b89\u88c5\u5728\u5171\u4eab\u5b58\u50a8\u4e0a\uff0c\u96c6\u7fa4\u5404\u8282\u70b9\u53ea\u9700\u8981\u6302\u8f7d\u4e0a\u5171\u4eab\u5b58\u50a8\uff0c\u5e76\u914d\u7f6e\u597d\u73af\u5883\u53d8\u91cf\u540e\u4fbf\u53ef\u4ee5\u4f7f\u7528\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5b89\u88c5Singularity\u4f9d\u8d56\u5305\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yum install -y gcc libuuid-devel squashfs-tools openssl-devel make\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Singularity\u4f7f\u7528Go\u8bed\u8a00\u5f00\u53d1\uff0c\u9700\u8981\u5148\u5b89\u88c5Go\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export VERSION=1.20.3 OS=linux ARCH=amd64\nwget https://dl.google.com/go/go$VERSION.$OS-$ARCH.tar.gz\nmkdir -p /data/software/go\ntar -C /data/software/go -xzvf go$VERSION.$OS-$ARCH.tar.gz\nmv /data/software/go/go /data/software/go/$VERSION\nrm -f go$VERSION.$OS-$ARCH.tar.gz\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5c06Go\u6dfb\u52a0\u5230module\u5de5\u5177\u4e2d\u7edf\u4e00\u7ba1\u7406\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# ${MODULEPATH}\u4e3amodulefile\u6240\u5728\u7684\u8def\u5f84\nmkdir -p ${MODULEPATH}/go\ncat >> ${MODULEPATH}/go/1.20.3 << EOF\n#%Module1.0#####################################################################\n##\n## go@1.20.3  modulefile\n##\nproc ModulesHelp { } {\n\nputs stderr "    This module defines environment variables, aliases and add PATH, LD_LIBRARY_PATH for go"\nputs stderr "    Version 1.20.3"\n}\n\nmodule-whatis   "go@1.20.3"\nprepend-path    PATH                    "/data/software/go/1.20.3/bin"\nprepend-path    LIBRARY_PATH            "/data/software/go/1.20.3/lib"\nprepend-path    LD_LIBRARY_PATH         "/data/software/go/1.20.3/lib"\nEOF\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5b89\u88c5Singularity\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export VERSION=3.9.2\nwget https://github.com/sylabs/singularity/releases/download/v${VERSION}/singularity-ce-${VERSION}.tar.gz\ntar -xzf singularity-ce-${VERSION}.tar.gz\ncd singularity-ce-${VERSION}\nmodule load go/1.20.3\n./mconfig --prefix=/data/software/singularity/${VERSION}\ncd builddir/\nmake -j && make install\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5c06Singularity\u6dfb\u52a0\u5230module\u5de5\u5177\u4e2d\u7edf\u4e00\u7ba1\u7406\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# ${MODULEPATH}\u4e3amodulefile\u6240\u5728\u7684\u8def\u5f84\nmkdir -p ${MODULEPATH}/singularity\ncat >> ${MODULEPATH}/singularity/3.9.2 << EOF\n#%Module1.0#####################################################################\n##\n## singularity@3.9.2  modulefile\n##\nproc ModulesHelp { } {\n\nputs stderr "    This module defines environment variables, aliases and add PATH, LD_LIBRARY_PATH for singularity"\nputs stderr "    Version 3.9.2"\n}\n\nmodule-whatis   "singularity@3.9.2"\nprepend-path    PATH                    "/data/software/singularity/3.9.2/bin"\nEOF\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2r\u5b89\u88c5",children:"2\u3001R\u5b89\u88c5"}),"\n",(0,s.jsx)(n.h4,{id:"21\u6e90\u7801\u5b89\u88c5r",children:"2.1\u3001\u6e90\u7801\u5b89\u88c5R"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5b89\u88c5R\u7684\u4f9d\u8d56\u5305:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yum -y install gcc-gfortran gcc-c++ glibc-headers java-1.8.0-openjdk java-1.8.0-openjdk-devel libX11-devel libXt-devel xz-devel curl-devel bzip2-devel readline-devel zlib-devel openssl-devel pcre2\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5b89\u88c5R\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u4e0b\u8f7dR\u7684\u6e90\u4ee3\u7801\u5e76\u7f16\u8bd1\u5b89\u88c5\ncurl -LJO https://cran.rstudio.com/src/base/R-4/R-4.2.3.tar.gz\ntar zxf R-4.2.3.tar.gz\n\n# \u5fc5\u987b\u6709--enable-R-shlib\u8fd9\u4e2a\u9009\u9879(lib64/R/lib/libR.so)\n./configure --prefix=/data/software/R/R-4.2.3 --enable-R-shlib\nmake -j\nmake install\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5c06R\u6dfb\u52a0\u5230module\u5de5\u5177\u4e2d\u7edf\u4e00\u7ba1\u7406\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# ${MODULEPATH}\u4e3amodulefile\u6240\u5728\u7684\u8def\u5f84\nmkdir -p ${MODULEPATH}/R\ncat >> ${MODULEPATH}/R/3-2023.03 << EOF\n#%Module1.0#####################################################################\n##\n## R@4.2.3  modulefile\n##\nproc ModulesHelp { } {\n    puts stderr "\\tThis module defines environment variables, aliases and add PATH for R"\n    puts stderr "\\tVersion 4.2.3"\n}\n\nmodule-whatis   "R@4.2.3"\nprepend-path    PATH                    "/data/software/R/R-4.2.3/bin"\nEOF\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"22\u5728conda\u73af\u5883\u5b89\u88c5r",children:"2.2\u3001\u5728Conda\u73af\u5883\u5b89\u88c5R"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# \u8f7d\u5165conda\u5230\u7cfb\u7edf\u73af\u5883\u4e2d\uff0c\u5e76\u521d\u59cb\u5316conda\u73af\u5883\nmodule load anaconda/3-2023.03\neval "$($(which conda) shell.bash hook)"\n\n# \u6dfb\u52a0\u5317\u5927\u955c\u50cf\u6e90\uff0c\u67e5\u627e\u76f8\u5e94\u7248\u672c\u7684R\u8fdb\u884c\u5b89\u88c5\nconda config --add channels https://mirrors.pku.edu.cn/anaconda/pkgs/free/\nconda config --add channels https://mirrors.pku.edu.cn/anaconda/pkgs/main/\nconda config --add channels https://mirrors.pku.edu.cn/anaconda/cloud/conda-forge/\nconda search R\n\n\n# \u6839\u636e\u67e5\u627e\u5230\u7684R\u7248\u672c\uff0c\u521b\u5efaConda\u865a\u62df\u73af\u5883\uff0c\u5e76\u5728\u521b\u5efa\u7684\u65f6\u5019\u6307\u5b9a\u9700\u8981\u5b89\u88c5\u7684R\u7248\u672c\uff0c\u8fd9\u91cc\u9009\u62e9\u5b89\u88c5R-3.6.0\u7248\u672c;\nconda create -n R-3.6.0 r=3.6.0 -y\n\n# \u8fdb\u5165\u4e0a\u4e00\u6b65\u521b\u5efa\u597d\u7684\u865a\u62df\u73af\u5883\uff1b\nconda activate R-3.6.0\n\n# \u5b89\u88c5R\u8bed\u8a00\u5e93\uff0c\u6bd4\u5982stringi\nconda install r-stringi -y\n\n# \u5b89\u88c5\u5b8c\u540e\u5c31\u53ef\u4ee5\u7528R\u8bed\u8a00\u73af\u5883\u4e86\uff0c\u5982\u679c\u8981\u9000\u51fa\u5f53\u524d\u73af\u5883\u5219\u6267\u884c\u4ee5\u4e0b\u6307\u4ee4\uff1b\nconda deactivate\n'})}),"\n",(0,s.jsx)(n.h3,{id:"3\u6784\u5efarstudio-server\u955c\u50cf",children:"3\u3001\u6784\u5efaRStudio Server\u955c\u50cf"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4e0b\u8f7dRStudio Server\u6e90\u7801\u5305\u8fdb\u884c\u7f16\u8bd1\u6253\u5305\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u4e0b\u8f7d\u6e90\u7801\u5305\nwget https://github.com/rstudio/rstudio/archive/refs/tags/v2023.03.0+386.tar.gz\n# \u89e3\u538b\u6e90\u7801\u5305\ntar -zxvf v2023.03.0+386.tar.gz\ncd rstudio-2023.03.0-386\n\n# \u8df3\u8fc7\u767b\u5f55\u65f6\u7684csrf-token\u9a8c\u8bc1\uff0c\u9ad8\u7248\u672c\u7684RStudio Server\u96c6\u6210\u5230scow\u9700\u8981\u8df3\u8fc7\u9a8c\u8bc1\nsed -i '134s/^/\\/\\//' src/cpp/server/auth/ServerAuthCommon.cpp\n\n# \u5728\u5f53\u524d\u8def\u5f84\u521d\u59cb\u5316git\u4ed3\u5e93\ngit init\n# \u589e\u52a0git\u7f13\u5b58\u914d\u7f6e\ngit config --global http.postBuffer 5242880000\n# \u56e0\u4e3a\u662f\u65b0\u521d\u59cb\u5316\u7684git\u4ed3\u5e93\uff0c\u6240\u4ee5\u6ca1\u6709\u63d0\u4ea4\u8bb0\u5f55\uff0c\u90a3\u4e48\u6ca1\u6709HEAD\u5f15\u7528\u3002\u901a\u8fc7\u6267\u884c\u7b2c\u4e00\u6b21\u63d0\u4ea4\u6765\u521b\u5efa\u4e00\u4e2aHEAD\u5f15\u7528\ngit config --global user.email ${USER_EMAIL_ADDRESS}\ngit commit --allow-empty -n -m \"Initial commit.\"\n\n# \u4ee5\u4e0b\u811a\u672c\u9996\u5148\u6784\u5efa\u7f16\u8bd1rstudio server\u6240\u9700\u73af\u5883\u7684docker\u5bb9\u5668\uff0c\u7136\u540e\u5728\u5bb9\u5668\u5185\u8fdb\u884crstudio server\u7f16\u8bd1\uff0c\u7f16\u8bd1\u5b8c\u6210\u540e\u4f1a\u5728\u6e90\u7801\u5305\u8def\u5f84\u7684package\u76ee\u5f55\u4e0b\u751f\u6210rstudio server\u7684rpm\u5305\n# \u6267\u884c\u8fc7\u7a0b\u5982\u679c\u9047\u5230git\u514b\u9686\u5305\u514b\u9686\u4e0d\u4e0b\u6765\u7684\u60c5\u51b5\uff0c\u53ef\u4ee5\u5728\u6267\u884c\u7684shell\u73af\u5883\u6dfb\u52a0\u4ee3\u7406\u6216\u8005\u4fee\u6539\u4ee3\u7801\u4e2d\u7684\u514b\u9686\u5730\u5740\nsh docker/docker-compile.sh centos7 server 2023.03.0-386\n# \u53ef\u4ee5\u770b\u5230\u76ee\u5f55\u4e0b\u6709\u7f16\u8bd1\u597d\u7684rstudio-server-rhel-2023.03.0-386-x86_64-relwithdebinfo.rpm\u5305\nls package\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5728rstudio-2023.03.0-386\u76ee\u5f55\u4e0b\u7f16\u5199Dockerfile\u6587\u4ef6\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"FROM centos:7\n\nCOPY package/rstudio-server-rhel-2023.03.0-386-x86_64-relwithdebinfo.rpm /\n\nRUN yum -y update && \\\n    yum -y install epel-release && \\\n    yum -y install which gcc-gfortran gcc-c++ glibc-headers java-1.8.0-openjdk java-1.8.0-openjdk-devel libX11-devel libXt-devel xz-devel curl-devel bzip2-devel readline-devel zlib-devel openssl-devel pcre2 initscripts postgresql-libs psmisc && \\\n    cd / && \\\n    rpm2cpio rstudio-server-rhel-2023.03.0-386-x86_64-relwithdebinfo.rpm | cpio -div && \\\n    mkdir data && \\\n    yum clean all\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5728rstudio-2023.03.0-386\u76ee\u5f55\u4e0b\u6784\u5efaRStudio Server\u7684docker\u955c\u50cf\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker build -t rstudio:2023.03.0-386 .\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6784\u5efaRStudio Server\u7684Singularity\u955c\u50cf\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"singularity build rstudio.sif docker-daemon://rstudio:2023.03.0-386\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5c06Singularity\u955c\u50cf\u62f7\u8d1d\u5230\u5171\u4eab\u5b58\u50a8\uff0c\u4ee5\u4fbf\u5728\u8ba1\u7b97\u8282\u70b9\u53ef\u4ee5\u8bbf\u95ee\u5e76\u8fd0\u884c\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cp rstudio.sif /data/software/rstudio-server/\n"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},5409:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var s=r(48318);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);