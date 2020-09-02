# AngularElements

Create Angular Components that can run in any framework.

## Create a component
Create a component as you would normally but add:
````
...
@Component({
    ...
    encapsulation: ViewEncapsulation.ShadowDom,
})
````
Import your component inside **app.module.ts**.  
Define your angular element:
````
const YourElement = createCustomElement(YourComponent, { injector: this.injector });
customElements.define('your-element', YourComponentElement);
````

Now you can already use it in your development server directly in your **index.html**

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build:elements` to build the project. The build bundle will be stored in the `elements/` directory.
