FROM node:21.4-bookworm-slim
RUN apt update && apt -y install git && \
    unlink /etc/localtime && \
    ln -s /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    git config --global user.name "halflite" && \
    git config --global user.email shingo@halflite.net
