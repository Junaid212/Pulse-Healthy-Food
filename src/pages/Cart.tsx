import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useCart } from '@/contexts/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, clearCart, total } = useCart();
  const [isCreatingSubscription, setIsCreatingSubscription] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Handle subscription creation
  const handleCreateSubscription = () => {
    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Add some items to your cart first",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Subscription Plan Created!",
      description: "Your custom subscription plan has been created successfully",
    });
    
    setIsCreatingSubscription(true);
    setTimeout(() => {
      navigate('/subscription');
    }, 2000);
  };

  // Generate order details text
  const generateOrderDetails = () => {
    let details = "Order Details:\n";
    items.forEach(item => {
      details += `- ${item.name} x${item.quantity} = ${parseFloat(item.price.replace(' SAR', '')) * item.quantity} SAR\n`;
    });
    details += `\nTotal: ${total.toFixed(2)} SAR`;
    return details;
  };

  // Send order via WhatsApp
  const sendWhatsAppOrder = async () => {
    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Add some items to your cart first",
        variant: "destructive"
      });
      return;
    }
    
    setIsSending(true);

    try {
      // Fixed WhatsApp number
      const fixedPhoneNumber = "+966 133479961 ";
      
      // Create order number
      const orderNumber = `#${Math.floor(1000 + Math.random() * 9000)}`;
      
      // Prepare order items text
      const orderItemsText = items.map(
        item => `• ${item.name} x${item.quantity} - ${item.price}`
      ).join('\n');

      // Prepare WhatsApp message
      const whatsappMessage = `New Order ${orderNumber}\n\n${orderItemsText}\n\nTotal: ${total.toFixed(2)} SAR`;
      
      // Create WhatsApp link
      const whatsappUrl = `https://wa.me/${fixedPhoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');

      toast({
        title: "WhatsApp Opened!",
        description: "Please confirm your order in WhatsApp",
      });
      
    } catch (error) {
      toast({
        title: "Failed to open WhatsApp",
        description: "Please try again later",
        variant: "destructive"
      });
    } finally {
      setIsSending(false);
    }
  };

  // Empty cart state
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <ShoppingCart className="h-24 w-24 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Start adding some delicious items to your cart!</p>
            <Link to="/menu">
              <Button className="bg-green-600 hover:bg-green-700">
                Browse Menu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4 md:py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8 gap-4">
          <Button variant="ghost" onClick={() => navigate(-1)} className="self-start sm:self-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span className="sr-only sm:not-sr-only">Back</span>
          </Button>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Your Cart</h1>
            <p className="text-gray-600">{items.length} item{items.length !== 1 ? 's' : ''} in your cart</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items - Full width on mobile, 2/3 on desktop */}
          <div className="w-full lg:w-2/3 space-y-3 sm:space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-col sm:flex-row">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 capitalize">{item.category}</p>
                      <p className="font-bold text-green-600 text-sm sm:text-base">{item.price}</p>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-1 sm:gap-2 w-full sm:w-auto justify-between">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                          className="w-12 sm:w-16 text-center h-8"
                          min="1"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </div>
                      
                      {/* Remove Button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-700 h-8 w-8 p-0"
                      >
                        <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary - Full width on mobile, 1/3 on desktop */}
          <div className="w-full lg:w-1/3">
            <Card className="sticky top-20 sm:top-24">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg font-semibold mb-3 sm:mb-4">Order Summary</h3>
                
                <div className="space-y-2 mb-3 sm:mb-4 max-h-60 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-xs sm:text-sm">
                      <span className="truncate max-w-[120px] sm:max-w-[160px]">
                        {item.name} x{item.quantity}
                      </span>
                      <span>{parseFloat(item.price.replace(' SAR', '')) * item.quantity} SAR</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-3 sm:pt-4 mb-4 sm:mb-6">
                  <div className="flex justify-between font-bold text-base sm:text-lg">
                    <span>Total</span>
                    <span className="text-green-600">{total.toFixed(2)} SAR</span>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-sm sm:text-base"
                    onClick={sendWhatsAppOrder}
                    disabled={isSending}
                  >
                    {isSending ? 'Opening WhatsApp...' : 'Proceed to Checkout'}
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full text-sm sm:text-base"
                    onClick={handleCreateSubscription}
                    disabled={isCreatingSubscription}
                  >
                    {isCreatingSubscription ? 'Creating...' : 'Create Subscription Plan'}
                  </Button>
                  
                  <Button
                    variant="ghost"
                    className="w-full text-red-600 hover:text-red-700 text-sm sm:text-base"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Cart;