Template.cart.cartitems = function(){
   
};
Template.cart.helpers({
    'cartitems':function(){
        var shopCart = [];
        var cartItems = CartItems.find({});
        var total = 0;

    cartItems.forEach(function(cartitem){
        var item = _.extend(cartitem,{});
        var product = Products.findOne({_id:cartitem.product});
        cartitem.productname = product.name;
        cartitem.price = (Number(product.price) * cartitem.qty);
        total += cartitem.price;
        shopCart.push(cartitem);
    });
    shopCart.subtotal = total;
    if (total >= 75) {
        shopCart.discount = shopCart.subtotal - 15.00;
    } else if (total >= 50) {
        shopCart.discount = shopCart.subtotal - 10.00;
    } else {
        shopCart.discount = shopCart.subtotal - 5.00;  
    }
    shopCart.total = shopCart.discount;
    return shopCart; 
    }
})

Template.cart.events({
    'click .removeci':function(evt,tmpl){
        Meteor.call('removeCartItem',this._id);
    }
});


