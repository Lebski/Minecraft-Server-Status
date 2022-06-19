# Getting Started 

This is an electron app that will expose a react app on Port :3000 and load an express server on port :4000. 

Please set your Minecaft server IP and port first! 
```bash 
MINECRAFT_SERVER_IP="161.97.111.201"
MINECRAFT_SERVER_PORT=25565
```

To start the application in dev mode use electron serve 
```bash
yarn electron:serve
``` 

To build the application use electron build 
```
# On linux for linux 
yarn electron:build
# Cross plattform build for windows 
yarn electron:buildWin
```
