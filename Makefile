start:
	docker run --name poe-item -d -v $(shell pwd):/app \
		-w /app \
		-p 4200:4200 \
		node:16.17-alpine \
		/bin/sh -c './node_modules/@angular/cli/bin/ng.js serve --host 0.0.0.0'

stop:
	docker rm poe-item
