class InputHandler {
    eventHendlerMap = {}

    constructor(eventHendlerConfig) {
        this._eventHendlerConfig = eventHendlerConfig
    }

    subscribe() {
        Object.entries(this.eventHendlerMap).forEach(([name, handler]) => {
            document.addEventListener(name, handler)
        })
    }
}

class MouseInputHendler extends InputHandler {
    buttonIndexNameMap = {
        0: 'left',
        1: 'middle',
        2: 'right',
    }

    eventHendlerMap = {
        click: (event) => {
            const buttonName = this.buttonIndexNameMap[event.button]
            const handler = this._eventHendlerConfig[buttonName]
            if (handler) {
                handler(event)
            }
        },
    }
}