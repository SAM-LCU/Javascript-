// difference between javascript array and javascript object
let size = ['s','m','l','xl'] 
//indexing   0   1   2    3
let product = { id:101, 
                name:'Iphone14', 
                price:190000, 
                color:"black"
              }
              console.log(size[10]); // we will get undefined because there is not 10 in indexing 
              console.log(product.discount); // there is not discount in object so even here we wull get undefined