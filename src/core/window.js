window.myApp = {
    onWindowClose: () => {
        Neutralino.app.exit();
    }
};
Neutralino.init();
Neutralino.events.on("windowClose", myApp.onWindowClose);