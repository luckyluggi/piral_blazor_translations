class App {
    setLanguage(language) {
        localStorage.setItem("language", language);
        window.DotNet.invokeMethodAsync('Piral.Blazor.Core', 'SetLanguage', language);
    }
};

window.App = new App();
