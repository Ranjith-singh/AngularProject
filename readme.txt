Advantage of typescript over javascript:
    provide compile time errors instead of surprise runtime errors
        uses typescript compiler(tsc) to convert typescript code to javascript
        which can be run on browsers as well as backend using nodeJs
    avoids undefined or null errors while accessing variable or variable's field
    typescript can be compiled down any version of js using the tsconfig.json
Angular requirements:
    specific versions of the Angular require specific version of node to be installed to run the project
    create package json using: npm(comes with node) init
        provide details
    you can install typescript dependency using: npm install typescript
    tsc --init: creates tsconfig.json which contains target js, module etc
Multi page application(MPA)
    Earlier php, asp.net based on the url change/navigate, button click etc,
    the request used to go on the backend
    the javascript fetches data from DB based on the request and creates an entire new DOM
    the browsers after sending the request, delete there entire memory
        receives the new DOM from backend and displays it
    drawbacks:
        for even a small change like button/link click, navigation, form submission
            the request has to go through and create a new DOM
    innovation:
        even back while using MPA, some events which doesn't require DB access
            like increment on button/link click
            where interrupted by AJAX(Async js and xml): frontend JS using preventDefault()
            and perform js logic and alter the current page
        this led to the thought of rendering the entire js bundle in frontend
        which led to the creation of Single page application
Single page Application(SPA):
    In react/ angular when you visit a website the core/shell html page and entire js bundle
        would be rendered onto the browser
    based on the current page only the raw data is fetched from backend
    once the raw data is fetched
        The js performs logic and updates the core html page based on the current data
    drawbacks:
        heavy initial app load and js hell
    innovation:
        instead of using pure SPA people used several cheat codes to created hydrated SPA:
            lazy loading: only loads the core js bundle needed for current page
                if any new data required when navigation etc then download that js chunk
            server side rendering(SSR):
                In nextJs, it initially downloads the core js bundle needed and displays
                    UI to the user/client
                In the background downloads the bundles/chunks for the links/buttons/navigation
                    present on the current page, so it maintains search engine optimization(SEO)
            Tree Shacking:
                removes unused imports of functions/libraries
Class based Dependency Injection vs Value provider DI:
    We use class based DI when the structure is fixed and known to US, In case of value provider DI
        we use it when we want a string or obj from local, session storage or network paths where the structure
        is not known to us
    Value provider DI is used when one class implememnts a base class, so the obj's can be defined
        dynamically while using DI using Injection Token
    The Injection token based approach helps in creating indivisual token for indivisual obj's and avoids
        tight coupling.


