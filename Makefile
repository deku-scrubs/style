#
# Vars
#

BIN = ./node_modules/.bin

#
# Tasks
#

node_modules: package.json
	@npm install

test: node_modules
	@${BIN}/mochify --transform babelify --phantomjs ./node_modules/.bin/phantomjs --ui bdd

validate: node_modules
	@${BIN}/standard

.PHONY: test validate