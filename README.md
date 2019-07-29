---
template: home
---

# PinServiceManager - based on SocketIO

Used to synchronise the Pins between MediaPlayers.

When on MediaPlayer calls the 'save' method the PinServiceManager will broadcast the changes to all registered MediaPlayers


## Installation

###Windows

Run the following command:

npm install -g qckwinsvc

Run the command:

qckwinsvc

And follow the prompts:

prompt: Service name: [name for your service]
prompt: Service description: [description for it]
prompt: Node script path: [path of your node script]

To uninstall enter the command:

qckwinsvc --uninstall

And follow the prompts:

prompt: Service name: [name of your service]
prompt: Node script path: [path of your node script]