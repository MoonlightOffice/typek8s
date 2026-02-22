FROM docker.io/golang:latest AS golang

### Development image

FROM docker.io/ubuntu:latest
SHELL ["/bin/bash", "-c"]
ENV HOME="/root"

RUN apt update && apt full-upgrade -y
RUN apt install -y unzip vim curl git ripgrep

# SSH Server (for IDEs that don't support dev containers)
RUN apt install -y openssh-server
RUN mkdir -p /run/sshd
RUN sed -i 's/#PermitEmptyPasswords no/PermitEmptyPasswords yes/' /etc/ssh/sshd_config && \
    sed -i 's/#PermitEmptyPasswords no/PermitEmptyPasswords yes/' /etc/ssh/sshd_config && \
    sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config && \
    passwd -d root

# Golang
COPY --from=golang /usr/local/go /usr/local/go
ENV PATH=/usr/local/go/bin:$PATH
ENV GOPATH=/usr/local/go
RUN go install golang.org/x/tools/gopls@latest

# Deno
RUN curl -fsSL https://deno.land/install.sh | bash

# Taskfile
RUN curl -1sLf 'https://dl.cloudsmith.io/public/task/task/setup.deb.sh' | bash
RUN apt install task

# jj
WORKDIR /tmp/jj-install
ENV TERM=xterm-256color
RUN curl -L https://github.com/jj-vcs/jj/releases/download/v0.38.0/jj-v0.38.0-aarch64-unknown-linux-musl.tar.gz -o out.tar.gz
RUN tar xzf out.tar.gz && mv jj /usr/local/bin/
WORKDIR /workspace
RUN rm -rf /tmp/jj-install

# Node and pnpm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
RUN source ~/.nvm/nvm.sh && nvm install 24

# Codex
RUN source ~/.nvm/nvm.sh && npm i -g @openai/codex

# Claude Code
RUN curl -fsSL https://claude.ai/install.sh | bash

# Update PATH
RUN echo 'export PATH="/usr/local/go/bin:$HOME/.deno/bin:$HOME/.local/bin:$HOME/.nvm/versions/node/$(ls $HOME/.nvm/versions/node/)/bin:$PATH"' >> /root/.bashrc
