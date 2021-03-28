build:
	tsc index.ts

build-several-files-into-one-file:
	tsc ./src/index.ts ./src/video.ts --outFile ./dist/index.js

build-several-files-into-one-file:
	tsc ./src/index.ts ./src/video.ts --outFile ./dist/index.js -w