install: 
	docker run --rm -v $(shell pwd):/app \
		-w /app \
		node:16.17-alpine \
		/bin/sh -c 'npm install --include=dev --verbose && chown -R $(shell id -u):$(shell id -g) node_modules'

install_production:
	docker run --rm -v $(shell pwd):/app \
		-w /app \
		node:16.17-alpine \
		/bin/sh -c 'npm install --include=DEV && chown -R $(shell id -u):$(shell id -g) node_modules'

build:
	docker run --rm -v $(shell pwd):/app \
		-w /app \
		node:16.17-alpine \
		/bin/sh -c './node_modules/@angular/cli/bin/ng.js build -c production && chown -R $(shell id -u):$(shell id -g) dist'

clean:
	rm -r dist node_modules

start:
	docker run --name poe-item --rm -d -v $(shell pwd):/app \
		-w /app \
		-p 4200:4200 \
		node:16.17-alpine \
		/bin/sh -c './node_modules/@angular/cli/bin/ng.js serve --host 0.0.0.0'

stop:
	docker rm -f poe-item
