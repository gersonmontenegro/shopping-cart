# shopping-cart
Little experiment using React Native and Redux in order to create a basic, but effective shopping cart app.

In the next few words I'm going to show how was this project made.

**App structure**
![](https://lh3.googleusercontent.com/PY2IJUzJm39V7ENXwrMGTt15CfGQrW8RxvwQoAa3Vji6Vgz46ajf5KUyqf3cbkOPX6OL4RHLMyOE=s900)

The structure above talks about the main components workflow. There is nothing complex here, and the point (according to me) than deserves a explanation is the *Cart list*, because it use the same Product component than ProductList component, but there is a validation (*showDetails* prop) that allow show or not more details about the product, such as Quantity and Subtotal amount.

**React Navigation**
The whole app workflow is controlling by [react-navigation](https://github.com/react-navigation/react-navigation) library. I think is the best (for now) resource in order to achieve a faster way to control every interface in an app. Also, is easy to implement and works pretty well.

**Redux**
Despite there is [a lot](https://www.javascriptstuff.com/component-communication/) of strategies to communicate components in React, this time I use Redux because this app has some processing data stages that I need to show in every interfaces according to their own behavior when the user interact with the app, and this library works too good to control the data flow.

**Interfaces**
*Main interface*
![](https://lh3.googleusercontent.com/XowEwENxrHU1i1_Rs6jyxe_QMhVl6K8lNZ3f0sM1dLg4vhaJe8M2mO6HkdfDF60xWK_O3R4jKDbF=s800)

I'm just going through the relevant points:

 1. A Badge component that shows how many items in total has the client chosen.
 2. Cart button that allows to the user go to the Cart list interface.
 3. White (or transparent) icon that indicates that there is still not items in the cart of this product.
 4. Black icon that indicates that there is at least one item in the cart of this product.
 5. Add product, and Remove product buttons.

*Cart list interface*

![enter image description here](https://lh3.googleusercontent.com/sFvy6o464ioqwWXpC-Jdbh03e2eTbqlH3DnTJCAA00w7Uawp-Gmslkddn9BCznDtbfl4gjNzNQtQ=s800)

Again, I'm boing through the relevant details:

 1. Total products added to the cart.
 2. Total amount of the products added to the cart.
 3. Specific quantity of this product in the cart.
 4. Amount with the subtotal price of this product in the cart.

