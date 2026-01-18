dev:
	LOCATION="$(LOCATION)" hugo server --ignoreCache --noHTTPCache --disableFastRender

deploy:
	LOCATION="$(LOCATION)" hugo --minify
	rsync -rvz public/ $(TARGET):/usr/share/caddy/website/

deploy-all:
	$(MAKE) deploy TARGET=coruscant LOCATION="London, UK"
	$(MAKE) deploy TARGET=ams-route LOCATION="Amsterdam, NL"
	$(MAKE) deploy TARGET=mia-route LOCATION="Miami, FL"