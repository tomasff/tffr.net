dev:
	hugo server --ignoreCache --noHTTPCache --disableFastRender

deploy:
	hugo --minify
	rsync -rvz public/ $(TARGET):/usr/share/caddy/website/