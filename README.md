<img alt="React Native Library Boilerplate" src="assets/readMe.png" width="1050"/>

# Installation

Add the dependency:

```ruby
npm i @paraboly/react-native-multiselect-picker
```

## Peer Dependencies

###### IMPORTANT! You need install them

```js
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"lodash": ">= 4.17.15",
"react-native-bouncy-checkbox": ">= 0.0.5",
"react-native-vector-icons": ">= 6.6.0",
"react-native-dynamic-vector-icons": ">= 0.2.1"
```

# Usage

## Import

```js
import MultiselectPicker from "@paraboly/react-native-multiselect-picker";
```

## Usage

```js
<MultiselectPicker
  data={data}
  onChange={checked => {
    console.log(checked);
  }}
/>
```

### Example Data

```js
const data = [
  {
    id: 0,
    label: "Fred",
    value: "Fred Çakmaktaş"
  },
  {
    id: 1,
    label: "Vilma",
    value: "Vilma Çakmaktaş"
  },
  {
    id: 2,
    label: "Barni",
    value: "Barni Moloztaş"
  },
  {
    id: 3,
    label: "Beti",
    value: "Beti Moloztaş"
  }
];
```

# Configuration - Props

| Property |   Type   |  Default  | Description                                                                          |
| -------- | :------: | :-------: | ------------------------------------------------------------------------------------ |
| onChange | function | undefined | you can make your business logic or get the selection of the data from this function |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

# Change Log

Change log will be here !

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Library Boilerplate is available under the MIT license. See the LICENSE file for more info.
