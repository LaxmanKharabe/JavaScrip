const fruits = [
    {
        cat: 'Electronics', product: ['Mobile', 'Laptop']
    },
    {
        cat: 'Footweare', product: ['Sindle', 'Boots']
    },
    {
        cat: 'Fashion', product: ['T-Shirt', 'Pants']
    }
];

tagTxt = "<select>";
fruits.map(items=>
   tagTxt += `<optgroup label= "${items.cat}"> ${items.product.map(pro=>
     `<option>${pro}</option>`
    )}</optgroup>`
)

tagTxt += "</select>";

document.querySelector('#fruitsList').innerHTML = tagTxt