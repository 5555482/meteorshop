Meteor.startup(function(){
    if(Products.find().count() === 0){
      Products.insert({thumb:'almondtoeshoes.jpeg',name:'Almond Toe Court Shoes, Black',desc:'Almond Toe Court Shoes,Patent Black',price:99.00,catName:'women’s footwear'});
      Products.insert({thumb:'suedeshoes.jpeg',name:'Suede Shoes, Blue',desc:'Suede Shoes, Blue',price:42.00,catName:'women’s footwear'});
      Products.insert({thumb:'loafers.jpeg',name:'Leather Driver Saddle Loafers,Tan',desc:'Leather Driver Saddle Loafers,Tan',price:34.00,catName:'men’s footwear'});
      Products.insert({thumb:'flipflopr.jpeg',name:'Flip Flops, Red',desc:'Flip Flops, Red',price:19.00,catName:'men’s footwear'});
      Products.insert({thumb:'flipflopb.jpeg',name:'Flip Flops, Blue',desc:'Flip Flops, Blue',price:19.00,catName:'men’s footwear'});
      Products.insert({thumb:'shorts.jpeg',name:'Cotton Shorts, Medium Red',desc:'Cotton Shorts,Medium Red',price:30.00,catName:'women’s casualwear'});
      Products.insert({thumb:'shirt.jpeg',name:'Fine Stripe Short Sleeve Shirt,Grey',desc:'Fine Stripe Short Sleeve Shirt,Grey',price:49.99,catName:'men’s casualwear'});
      Products.insert({thumb:'shirtg.jpeg',name:'Fine Stripe Short Sleeve Shirt,Green',desc:'Fine Stripe Short Sleeve Shirt,Green',price:39.99,catName:'men’s casualwear'});
      Products.insert({thumb:'waistcoat.jpeg',name:'Fine Stripe Short Sleeve Shirt,Grey',desc:'Fine Stripe Short Sleeve Shirt,Grey',price:49.99,catName:'men’s casualwear'});
      Products.insert({thumb:'blazer.jpeg',name:'Lightweight Patch Pocket Blazer,Deer',desc:'Lightweight Patch Pocket Blazer,Deer',price:175.00,catName:'men’s formalwear'});
      Products.insert({thumb:'dress.jpeg',name:'Bird Print Dress,Black',desc:'Bird Print Dress,Black',price:270.00,catName:'women’s formalwear'});
      Products.insert({thumb:'twistdress.jpeg',name:'Mid Twist Cut Out Dress,Pink',desc:'Mid Twist Cut Out Dress,Pink',price:540.00,catName:'women’s formalwear'});
      

    }
    if(Categories.find().count() === 0){
        var wid = Categories.insert({name:'WOMEN'});
        var mid = Categories.insert({name:'MEN'});
        SubCategories.insert({name:'women’s footwear',cat:wid});
        SubCategories.insert({name:'women’s casualwear',cat:wid});
        SubCategories.insert({name:'women’s formalwear',cat:wid});
        SubCategories.insert({name:'men’s footwear',cat:mid});
        SubCategories.insert({name:'men’s casualwear',cat:mid});
        SubCategories.insert({name:'men’s formalwear',cat:mid});
    }

});
Meteor.methods({
    //delete when live
    removeAll:function(){
        Products.remove({});
        Categories.remove({});
        CartItems.remove({});
    },
    addToCart:function(qty,product,session){
        if(qty > 0){
            CartItems.insert({qty:qty,product:product,sessid:session});
        } else{
            console.log('Quantity is Zero');
        }

    },
    removeCartItem:function(id){
        CartItems.remove({_id:id});
    }
});