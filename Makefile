#
# Binaries
#
MOCHIFY = ./node_modules/.bin/mochify

#
# Tasks
#
node_modules: package.json
	@npm install -d

test:
	$(MOCHIFY) --transform babelify --phantomjs ./node_modules/.bin/phantomjs --ui bdd

#
# Phony
#
.PHONY: test