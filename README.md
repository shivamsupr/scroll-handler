### scroll-handler  
  
  
##### Scroll handler helps you manage all window scroll events at a single place.  
  
## Documentation  
  
### Installation  
  
**npm**  
  
```bash  
  
npm i @shaaditech/scroll-handler  
  
```  
  
**yarn**  
  
```bash  
  
yarn add @shaaditech/scroll-handler  
  
```  
  
### API  
  
#### registerScrollToView(element, callback, allowNext, delay)  
  
To register the callback when the element appears in the viewport.   
  
```  
  
registerScrollToView(element, scrollPosition => {}, false, 0)  
  
```  
| Parameters    | type          | example |  
| ------------- |:-------------:|:-------------:|  
| element       | html element node | document.getElementById('header')  
| callback      | function      | scrollPosition => {}  
| allowNext | boolean **(default false)** | true/false  
| delay (milliseconds) | int  **(default 0)** | 1000  
  
  
#### unregisterScrollToView(element, callback)  
  
This function unregisters the element. Here, the second parameter is callback function which will be called when the element is unregistered.  
  
  
#### isScrollIntoView(element)  
  
To check if the element is in viewport.

### Contact

If you have an issue, feel free to contact me [@shivamsupr](https://www.twitter.com/shivamsupr/)