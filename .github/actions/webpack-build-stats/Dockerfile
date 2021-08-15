
FROM node:14-buster

LABEL com.github.actions.name="lhowsam PR Stats"

COPY . /stats

# Install node_modules
RUN cd /stats && npm ci --production

RUN git config --global user.email 'stats@localhost'
RUN git config --global user.name 'stats'

RUN apt update
RUN apt install apache2-utils -y

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

