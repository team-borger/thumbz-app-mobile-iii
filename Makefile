local:
	tns debug android --bundle

build:
	tns build android --force

build-production:
	tns build android --release --key-store-path="./thumbz-app.keystore" --key-store-password="123456" --key-store-alias="thumbz-app" --key-store-alias-password="123456"

generate-keytool:
	keytool -v -genkey -v -keystore thumbz-app.keystore -alias thumbz-app -keyalg RSA -validity 10000


clean:
	tns platform clean android
