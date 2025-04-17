# 使用更小的基础镜像
ARG NODE_VERSION=node:22.14-alpine

# 第一阶段：构建依赖项
FROM ${NODE_VERSION} AS dependency-base

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装依赖
RUN npm install && \
	npm cache clean --force # 清理构建缓存

# 第二阶段：构建应用程序
FROM dependency-base AS production-base

# 把宿主机当前目录所有内容，复制到容器的 /app 目录
COPY . .

# 构建项目
RUN npm run build:h5

# 第三阶段：使用 Nginx 镜像
# 使用官方的 Nginx 镜像作为基础镜像
FROM nginx:1.21.6-alpine

# 设置工作目录
WORKDIR /etc/nginx

# 复制 nginx.conf 模板文件到容器
COPY docker/nginx.conf.template /etc/nginx/nginx.conf.template

# 复制构建输出到 Nginx 的 html 目录
COPY --from=production-base /app/dist/build/h5 /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]