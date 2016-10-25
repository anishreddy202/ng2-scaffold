FROM irvui/alpine-node:6.7.0
MAINTAINER Daniel Scholl <daniel.scholl@verizon.com>

COPY package.json /opt/web/package.json
WORKDIR /opt/web

ENV NODE_ENV=production PORT=3000 DEL_PKGS="libgcc libstdc++" RM_DIRS=/usr/include

RUN apk add --no-cache curl make gcc g++ binutils-gold python linux-headers paxctl libgcc libstdc++ gnupg && \
	adduser -S tspace && \
	addgroup -S tspace && \
	npm install --unsafe-perm=true --production && \
	apk del curl make gcc g++ binutils-gold python linux-headers paxctl gnupg ${DEL_PKGS} && \
	rm -rf rm -rf ${RM_DIRS} && \
	chown -R tspace:tspace /opt/web

USER tspace
COPY dist /opt/web

EXPOSE  3000

CMD ["node", "server/index.js"]
