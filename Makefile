DeLete-Safari: delete/manifest.json
	xcrun safari-web-extension-converter \
		--bundle-identifier org.radbox.DeLete \
		--project-location $@ \
		--force \
		./delete
