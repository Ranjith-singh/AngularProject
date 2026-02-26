life cycle hooks and related Methods:
    ViewChild and ngAfterViewInit:
        use the view child life cycle hook to perform:
            Access the component in the typescript file
                use the changeDetectorRef to detect changes
            Access the ng-element and perform operations
            Access any element and perform ops
        use view Children to access multiple components
    ng-content and ngAfterContentInit:
        ng-content is used to render any element/component inside a component
            to sort the content we can pass the select param with it
            single ng-content can render multiple components/elements
        ngAfterContentInit is used to perform action after the component is rendered
    ngOnDestroy:
        called when the component is removed from the rendered dom in frontend
Dependency Injection:
    It is basically a technique/design practice used make our code modular/write clean code
        generally splitting the functionality of components among services
    It can of
        class based, value based and factory()
    class based:
        you can create a separate instance or single ton Dependency class Injection
        If no service/provider found the search ends at Null Injector which throws the error
        we can use different directive tag for Dependency Injection:
            @self, @skipSelf, @host and @Optional
    value based:
        set and use environmental variables through providers and AppConfig
        use @inject while initialization through constructor
    factory():
        use this directly use value providers without explicitly specifying in app component
Observables and Http request:
    Register a Http Client to interact with the backend
        you can configure proxy server to make proxy request
    the Angular internally uses rxjs to communicate with the server api's
        the rxjs is also used by react and vue
    generally the request made to backend using HttpClient returns a stream of data of type Observable
    you can subscribe to the api's to get the stream of data which works on a push based architecture
    you can also create your own Observable which monitors the data using the observer
        it returns 3 types of functionality: next, complete and error
