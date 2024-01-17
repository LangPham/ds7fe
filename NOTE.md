# NOTE RUN LOCAL

/hdd/Git/java_lang/solr-8.11.2/bin/solr start

sudo systemctl start tomcat9

NODE_OPTIONS=--max-old-space-size=4096 yarn start:dev
