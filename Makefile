dev:
	LOCATION="$(LOCATION)" hugo server --ignoreCache --noHTTPCache --disableFastRender

deploy:
	LOCATION="$(LOCATION)" hugo --minify
	rsync -rvz public/ $(TARGET):/usr/share/caddy/website/
