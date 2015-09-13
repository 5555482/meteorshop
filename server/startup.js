Meteor.startup(function(){
    if(Products.find().count() === 0){
      Products.insert({thumb:'almond.jpeg',name:'Almond Toe Court Shoes, Black',desc:'Featuring almond toe, high vamp, logo metal heel cap, covered spindle stiletto heel and leather sole.',price:99.00,catName:'women’s footwear',qty:5});
      Products.insert({thumb:'suedes.jpeg',name:'Suede Shoes, Blue',desc:'Rugged but feminine chukka boot in light blue suede with lace up front, thin padded collar.',price:42.00,catName:'women’s footwear',qty:4});
      Products.insert({thumb:'loafers.jpeg',name:'Leather Driver Saddle Loafers,Tan',desc:'With quilted stitch detailing, penny saddle and rubber sole for comfort.',price:34.00,catName:'men’s footwear',qty:12});
      Products.insert({thumb:'flipr.jpeg',name:'Flip Flops, Red',desc:'Made from durable rubber with classic waffle pattern outsole.',price:19.00,catName:'men’s footwear',qty:6});
      Products.insert({thumb:'flipb.jpeg',name:'Flip Flops, Blue',desc:'Made from durable rubber with classic waffle pattern outsole',price:19.00,catName:'men’s footwear',qty:0});
      Products.insert({thumb:'shortsr.jpeg',name:'Cotton Shorts, Medium Red',desc:'With a classic cut to finish they are perfect for showing off your beautiful legs',price:30.00,catName:'women’s casualwear',qty:5});
      Products.insert({thumb:'shirt.jpeg',name:'Fine Stripe Short Sleeve Shirt,Grey',desc:'Men’s fine striped short sleeved polo top with collar.',price:49.99,catName:'men’s casualwear',qty:9});
      Products.insert({thumb:'shirtg.jpeg',name:'Fine Stripe Short Sleeve Shirt,Green',desc:'Men’s fine striped short sleeved polo top with collar.',price:39.99,catName:'men’s casualwear',qty:3});
      Products.insert({thumb:'waistcoat.jpeg',name:'Sharkskin Waistcoat, Charcoal',desc:'Made from pure wool, it is designed with a sharkskin finish to boast a 2 tone weave that can be enjoyed up close',price:49.99,catName:'men’s casualwear',qty:2});
      Products.insert({thumb:'blazer.jpeg',name:'Lightweight Patch Pocket Blazer,Deer',desc:'The jacket is a waxed lightweight jacket that is weather resistant.',price:175.00,catName:'men’s formalwear',qty:1});
      Products.insert({thumb:'dress.jpeg',name:'Bird Print Dress,Black',desc:'Black short sleeve shirt dress with all over bird print and waist tie. 100% Silk.',price:270.00,catName:'women’s formalwear',qty:10});
      Products.insert({thumb:'twistdress.jpeg',name:'Mid Twist Cut Out Dress,Pink',desc:'This dress has been designed to enhance your curves with gathers on the cap sleeves, bust and tummy.',price:540.00,catName:'women’s formalwear',qty:5});
      Products.insert({thumb:'cardigan.jpeg',name:'Gold Button Cardigan, Black',desc:'Luxurious cardigan in a fine material blend (virgin wool, rayon, nylon and cashmere)',price:167.00,catName:'women’s casualwear',qty:6});
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