
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, UtensilsCrossed } from 'lucide-react';
import { toast } from 'sonner';
import MealPlanSelector from '@/components/MealPlanSelector';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const Menu = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showMealPlanSelector, setShowMealPlanSelector] = useState(false);

  const menuItems: MenuItem[] = [
    // Breakfast Items
    {
      id: 1,
      name: 'Chicken Quesadilla with Basil and Cheese',
      description: 'Creamy, cheesy, and rich with a smooth finish.',
      price: '23',
      image: '/img/all img/menus/m1.jpg',
      category: 'breakfast'
    },
    {
      id: 2,
      name: 'Egg Quesadilla with Cheese',
      description: 'Tangy tomato blend with herbs and seasoning.',
      price: '18',
            image: '/img/all img/menus/eq.jpg',
      category: 'breakfast'
    },
    {
      id: 3,
      name: 'Omelette',
      description: 'Fresh basil pesto with a creamy twist.',
      price: '11',
      image: '/img/all img/menus/m2.jpg',
      category: 'breakfast'
    },

    // Lunch Items
    {
      id: 4,
      name: 'Omelette Whites ',
      description: 'Slow-cooked minced beef in classic Italian sauce.',
      price: '11',
     image: '/img/all img/menus/ow.jpg',
     category: 'breakfast'
    },
    {
      id: 5,
      name: 'Eggs Benedict',
      description: 'White and red sauces blended for bold flavor.',
      price: '11',
           image: '/img/all img/menus/eb.jpg',
      category: 'breakfast'
    },
    {
      id: 6,
      name: 'Halloumi Sandwich',
      description: 'Our chef\'s special recipe with signature spices.',
      price: '14',
         image: '/img/all img/menus/hs.jpg',
       category: 'breakfast'
    },
    {
      id: 7,
      name: 'Wraps (-Chicken)',
      description: 'A surprise mix of sauces and bold flavors.',
      price: '21',
          image: '/img/all img/menus/wc.jpg',
       category: 'breakfast'
    },

    // Dinner Items
    {
      id: 8,
      name: 'Beef Shawarma',
      description: 'Crispy pepperoni layered over cheesy perfection.',
      price: '26',
           image: '/img/all img/menus/bs.jpg',
     category: 'breakfast'
    },
    {
      id: 9,
      name: 'Chicken with Balsamic Vinaigrette',
      description: 'Classic tomato, mozzarella, and fresh basil combo.',
      price: '23',
           image: '/img/all img/menus/cbl.jpg',
     category: 'breakfast'
    },
    {
      id: 10,
      name: 'Egg ',
      description: 'Creamy Alfredo base topped with juicy toppings.',
      price: '18',
            image: '/img/all img/menus/Egg.jpg',
     category: 'breakfast'
    },
    {
      id: 11,
      name: 'Turkey',
      description: 'Loaded with spicy beef and bold flavors.',
      price: '21',
            image: '/img/all img/menus/trk.png',
      category: 'breakfast'
    },
    {
      id: 12,
      name: 'Tuna',
      description: 'Our house favorite with a secret twist.',
      price: '21',
           image: '/img/all img/menus/tuna.jpg',
      category: 'breakfast'
    },
    {
      id: 13,
      name: 'Chicken',
      description: 'Grilled chicken with a punch of garlic.',
      price: '23',
           image: '/img/all img/menus/chkn.jpg',
     category: 'breakfast'
    },
    {
      id: 14,
      name: 'Grilled Beef',
      description: 'A colorful mix of seasoned, fresh vegetables.',
      price: '30',
           image: '/img/all img/menus/gb.jpg',
     category: 'breakfast'
    },

    // Snack Items
    {
      id: 15,
      name: 'Fish & Shrimp',
      description: 'Grilled halloumi on crisp greens and veggies.',
      price: '39',
            image: '/img/all img/menus/fs.jpg',
      category: 'breakfast'
    },
    {
      id: 16,
      name: 'Thai Shrimp ',
      description: 'Olives, cherry tomatoes, herbs, and vinaigrette dressing.',
      price: '39',
          image: '/img/all img/menus/tsh.jpg',
     category: 'breakfast'
    },
    {
      id: 17,
      name: 'Shrimp with BBQ Sauce',
      description: 'Fresh arugula tossed with tangy dressing.',
      price: '39',
           image: '/img/all img/menus/sbbq.jpg',
   category: 'breakfast'
    },
    {
      id: 18,
      name: 'Salmon Teriyaki ',
      description: 'Seasonal vegetables with a light citrus dressing.',
      price: '42',
           image: '/img/all img/menus/st.jpg',
    category: 'breakfast'
    },
    {
      id: 19,
      name: 'Salmon with Lemon Sauce Garlic',
      description: 'Creamy malai chicken on a fresh salad bed.',
      price: '42',
           image: '/img/all img/menus/sls.jpg',
      category: 'breakfast'
    },
    {
      id: 20,
      name: 'Grilled Salmon with Herbs',
      description: 'Cheesy garlic toast topped with tender chicken.',
      price: '42',
           image: '/img/all img/menus/sh.jpg',
    category: 'breakfast'
    },
    {
      id: 21,
      name: 'Grilled Fish with Lemon and Dill',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '27',
           image: '/img/all img/menus/gf.jpg',
     category: 'breakfast'
    },


    // salads
    {
      id: 23,
      name: 'Quinoa Salad with Chicken ',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '19',
           image: '/img/all img/menus/s7.jpg',
     category: 'salads'
    },
    {
      id: 24,
      name: 'Caesar Salad ',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '19',
           image: '/img/all img/menus/s2.jpg',
     category: 'salads'
    },
    {
      id: 25,
      name: 'Arugula and Beetroot Salad',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '13',
           image: '/img/all img/menus/s6.jpg',
     category: 'salads'
    },
    {
      id: 26,
      name: 'Orange and Arugula Salad ',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '13',
           image: '/img/all img/menus/s5.jpg',
     category: 'salads'
    },
    {
      id: 27,
      name: 'Greek Salad',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '14',
           image: '/img/all img/menus/s4.jpg',
     category: 'salads'
    },
    {
      id: 28,
      name: 'Shrimp Salad',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '23',
           image: '/img/all img/menus/s3.jpg',
     category: 'salads'
    },
    {
      id: 29,
      name: 'Green Salad ',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '9',
           image: '/img/all img/menus/s1.jpg',
     category: 'salads'
    },
    {
      id: 30,
      name: 'Chicken and Oat Soup',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '13',
           image: '/img/all img/menus/s11.jpg',
     category: 'salads'
    },


    {
      id: 31,
      name: 'Chicken and Corn',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '13',
           image: '/img/all img/menus/s10.jpg',
     category: 'salads'
    },


    {
      id: 32,
      name: 'Chicken with Mushrooms',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '13',
           image: '/img/all img/menus/s9.jpg',
     category: 'salads'
    },
    {
      id: 33,
      name: 'Mushroom Soup',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '13',
           image: '/img/all img/menus/s8.jpg',
     category: 'salads'
    },
    {
      id: 34,
      name: 'Broccoli Soup',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '13',
           image: '/img/all img/menus/s12.jpg',
     category: 'salads'
    },
    {
      id: 35,
      name: 'Zucchini and Mint Soup',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '13',
           image: '/img/all img/menus/s13.jpg',
     category: 'salads'
    },
    {
      id: 36,
      name: 'Lentils',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '13',
           image: '/img/all img/menus/s14.jpg',
     category: 'salads'
    },

    


    // salads


    // pudding
     {
      id: 37,
      name: 'Chia Seeds',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '13',
           image: '/img/all img/menus/b4.jpg',
     category: 'pudding'
    },
     {
      id: 38,
      name: 'Vanilla Chia Pudding',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '13',
           image: '/img/all img/menus/p6.jpg',
     category: 'pudding'
    },
     {
      id: 39,
      name: 'Chia Pudding with Peanut Butter and Jelly',
      description: 'Chia Pudding with Peanut Butter and Jelly',
      price: '13',
           image: '/img/all img/menus/p5.jpg',
     category: 'pudding'
    },
     {
      id: 40,
      name: 'Chocolate Chia Pudding',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '13',
           image: '/img/all img/menus/p4.jpg',
     category: 'pudding'
    },
     {
      id: 41,
      name: 'Blueberry',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '13',
           image: '/img/all img/menus/p3.jpg',
     category: 'pudding'
    },
     {
      id: 42,
      name: 'Strawberries and Cream',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '13',
           image: '/img/all img/menus/p2.jpg',
     category: 'pudding'
    },
     {
      id: 43,
      name: 'Chia Pudding with Split Banana',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '13',
           image: '/img/all img/menus/p1.jpg',
     category: 'pudding'
    },
    // pudding


    // juice

      {
      id: 44,
      name: 'Pineapple & Peach',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '13',
      image: '/img/all img/menus/j1.jpg',
      category: 'juice'
      },
      {
      id: 45,
      name: 'Apple & Pineapple',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '13',
      image: '/img/all img/menus/j2.jpg',
      category: 'juice'
      },
      {
      id: 46,
      name: 'Kiwi & Mango',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '13',
      image: '/img/all img/menus/j1.jpg',
      category: 'juice'
      },
      {
      id: 47,
      name: 'Orange',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '13',
      image: '/img/all img/menus/j1.jpg',
      category: 'juice'
      },
      {
      id: 49,
      name: 'Ginger',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '13',
      image: '/img/all img/menus/j2.jpg',
      category: 'juice'
      },
      {
      id: 50,
      name: ' Pineapple',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '13',
      image: '/img/all img/menus/j4.jpg',
      category: 'juice'
      },
      {
      id: 51,
      name: 'Beetroot and Apple',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '13',
      image: '/img/all img/menus/j3.jpg',
      category: 'juice'
      },
      {
      id: 52,
      name: 'Carrot, Orange, and Ginger',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '13',
      image: '/img/all img/menus/j1.jpg',
      category: 'juice'
      },
      {
      id: 53,
      name: 'Orange with Cranberry',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '13',
      image: '/img/all img/menus/j4.jpg',
      category: 'juice'
      },
    // juice


    // beef
     {
      id: 54,
      name: 'Sirloin Steak ',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '38',
      image: '/img/all img/menus/b3.jpg',
      category: 'beef'
      },
     {
      id: 55,
      name: 'Sweet & Spicy Beef ',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '38',
      image: '/img/all img/menus/b2.jpg',
      category: 'beef'
      },
     {
      id: 56,
      name: 'Beef Piccata ',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '38',
      image: '/img/all img/menus/b1.jpg',
      category: 'beef'
      },
     {
      id: 57,
      name: 'Beef Stroganoff ',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '38',
      image: '/img/all img/menus/b6.jpg',
      category: 'beef'
      },
     {
      id: 58,
      name: 'Beef Fajitas',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '38',
      image: '/img/all img/menus/b5.jpg',
      category: 'beef'
      },
    // beef


    // rice

      {
      id: 59,
      name: 'White Rice',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '38',
      image: '/img/all img/menus/r1.jpg',
      category: 'rice'
      },
      {
      id: 60,
      name: 'Brown Rice',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '38',
      image: '/img/all img/menus/r2.jpg',
      category: 'rice'
      },
      {
      id: 61,
      name: 'Steamed Rice',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '38',
      image: '/img/all img/menus/r3.jpg',
      category: 'rice'
      },
      {
      id: 62,
      name: 'Chinese Rice',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '38',
      image: '/img/all img/menus/r4.jpg',
      category: 'rice'
      },
      {
      id: 63,
      name: 'Cinnamon Rice',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '38',
      image: '/img/all img/menus/r5.jpg',
      category: 'rice'
      },
      {
      id: 64,
      name: 'Curry Rice',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '38',
      image: '/img/all img/menus/r6.jpg',
      category: 'rice'
      },
      {
      id: 65,
      name: 'Saffron Rice',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '38',
      image: '/img/all img/menus/r7.jpg',
      category: 'rice'
      },
      {
      id: 66,
      name: 'Vermicelli Rice',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '38',
      image: '/img/all img/menus/r8.jpg',
      category: 'rice'
      },
      {
      id: 67,
      name: 'Egyptian Rice',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '38',
      image: '/img/all img/menus/re.jpg',
      category: 'rice'
      },
      {
      id: 68,
      name: 'Beetroot Rice',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '38',
      image: '/img/all img/menus/r11.jpg',
      category: 'rice'
      },
      {
      id: 69,
      name: 'Mixed Vegetable Rice',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '38',
      image: '/img/all img/menus/r10.jpg',
      category: 'rice'
      },
      {
      id: 70,
      name: 'Egg Rice',
      description: 'Crispy bread topped with gooey garlic cheese.',
      price: '38',
      image: '/img/all img/menus/r12.jpg',
      category: 'rice'
      },
     
    // rice

    // pasta

        {
          id: 71,
          name: 'Mixed Sauce Pasta',
          description: 'Al dente pasta tossed in a rich blend of signature sauces for a perfect flavor balance.',
          price: '38',
          image: '/img/all img/menus/pasta3.jpg',
          category: 'pasta'
        },
        {
          id: 72,
          name: 'Pasta and Pesto',
          description: 'Fresh pasta with homemade basil pesto, pine nuts, and parmesan cheese.',
          price: '38',
          image: '/img/all img/menus/pasta2.jpg',
          category: 'pasta'
        },
        {
          id: 73,
          name: 'Pasta with Tomato Sauce',
          description: 'Classic pasta with our slow-cooked tomato sauce and fresh herbs.',
          price: '38',
          image: '/img/all img/menus/pasta1.jpg',
          category: 'pasta'
        },
      //Pasta

      //Chicken
        {
          id: 74,
          name: 'Cajun Chicken',
          description: 'Juicy chicken breast seasoned with bold Cajun spices and grilled to perfection.',
          price: '27',
          image: '/img/all img/menus/c1.jpg',
          category: 'chicken'
        },
        {
          id: 75,
          name: 'Saffron Chicken',
          description: 'Tender chicken marinated with precious saffron and Middle Eastern spices.',
          price: '27',
          image: '/img/all img/menus/c2.jpg',
          category: 'chicken'
        },
        {
          id: 76,
          name: 'Grilled Chicken with Pineapple',
          description: 'Grilled chicken served with caramelized pineapple for a sweet and savory combination.',
          price: '27',
          image: '/img/all img/menus/c3.jpg',
          category: 'chicken'
        },
        {
          id: 77,
          name: 'Chicken with Molokhia',
          description: 'Traditional Middle Eastern chicken stew with jute leaves and garlic.',
          price: '27',
          image: '/img/all img/menus/c4.jpg',
          category: 'chicken'
        },
        {
          id: 78,
          name: 'Grilled Shish Tawook',
          description: 'Marinated chicken cubes grilled on skewers with garlic sauce.',
          price: '27',
          image: '/img/all img/menus/c5.jpg',
          category: 'chicken'
        },
        {
          id: 79,
          name: 'Chicken with Lemon and Thyme',
          description: 'Zesty lemon and aromatic thyme infused grilled chicken.',
          price: '27',
          image: '/img/all img/menus/c6.jpg',
          category: 'chicken'
        },
        {
          id: 80,
          name: 'Tandoori Chicken',
          description: 'Classic Indian-style yogurt-marinated chicken with vibrant spices.',
          price: '27',
          image: '/img/all img/menus/c7.jpg',
          category: 'chicken'
        },
        {
          id: 81,
          name: 'Chicken Pollo',
          description: 'Italian-inspired chicken dish with herbs and white wine sauce.',
          price: '27',
          image: '/img/all img/menus/c8.jpg',
          category: 'chicken'
        },
        {
          id: 82,
          name: 'Chicken Dimaria',
          description: 'Creamy chicken preparation with mushrooms and special Dimaria sauce.',
          price: '27',
          image: '/img/all img/menus/c9.jpg',
          category: 'chicken'
        },
        {
          id: 83,
          name: 'Chicken Volcano (Spicy)',
          description: 'Fiery hot chicken with chili peppers and special volcano sauce.',
          price: '27',
          image: '/img/all img/menus/c10.jpg',
          category: 'chicken'
        },
        {
          id: 84,
          name: 'Chicken Mexican Style',
          description: 'Chicken cooked with bell peppers, onions, and Mexican spices.',
          price: '27',
          image: '/img/all img/menus/c11.jpg',
          category: 'chicken'
        },
        {
          id: 85,
          name: 'Grilled Chicken',
          description: 'Simple yet delicious perfectly grilled chicken breast with herbs.',
          price: '27',
          image: '/img/all img/menus/c12.jpg',
          category: 'chicken'
        },
        {
          id: 86,
          name: 'Chicken with Broccoli',
          description: 'Healthy chicken stir-fry with fresh broccoli in light sauce.',
          price: '27',
          image: '/img/all img/menus/c13.jpg',
          category: 'chicken'
        },
        {
          id: 87,
          name: 'Chicken Mastromella',
          description: 'Signature chicken dish with Mastromella herbs and cream sauce.',
          price: '27',
          image: '/img/all img/menus/c14.jpg',
          category: 'chicken'
        },
        {
          id: 88,
          name: 'Chicken Fajita',
          description: 'Sizzling chicken strips with peppers and onions, served with tortillas.',
          price: '27',
          image: '/img/all img/menus/c15.jpg',
          category: 'chicken'
        },
        {
          id: 89,
          name: 'Pesto Chicken',
          description: 'Grilled chicken topped with fresh homemade pesto sauce.',
          price: '27',
          image: '/img/all img/menus/c16.jpg',
          category: 'chicken'
        },
        {
          id: 90,
          name: 'Sumac Chicken',
          description: 'Middle Eastern chicken marinated with tangy sumac and olive oil.',
          price: '27',
          image: '/img/all img/menus/c17.jpg',
          category: 'chicken'
        },
        {
          id: 91,
          name: 'Chicken and Mushroom',
          description: 'Creamy chicken and mushroom combination with herbs.',
          price: '27',
          image: '/img/all img/menus/c18.jpg',
          category: 'chicken'
        },
      //Chicken
      
      //Beef Burger
        {
    id: 92,
    name: 'Classic Burger',
    description: 'Juicy beef patty with lettuce, tomato, onion, and our special sauce in a toasted bun.',
    price: '31',
    image: '/img/all img/menus/bb1.jpg',
    category: 'burger'
  },
  {
    id: 93,
    name: 'Cheeseburger',
    description: 'Our classic burger topped with melted American cheese for extra richness.',
    price: '32',
    image: '/img/all img/menus/bb2.jpg',
    category: 'burger'
  },
  {
    id: 94,
    name: 'Chili Burger',
    description: 'Beef patty smothered in spicy chili con carne and melted cheese.',
    price: '32',
    image: '/img/all img/menus/bb3.jpg',
    category: 'burger'
  },
  {
    id: 95,
    name: 'Mushroom Burger',
    description: 'Juicy burger topped with sautéed mushrooms and Swiss cheese.',
    price: '32',
    image: '/img/all img/menus/bb4.jpg',
    category: 'burger'
  },
  {
    id: 96,
    name: 'Barbecue Burger',
    description: 'Grilled beef patty glazed with smoky BBQ sauce and crispy onions.',
    price: '31',
    image: '/img/all img/menus/bb5.jpg',
    category: 'burger'
  },
  {
    id: 97,
    name: 'Classic Chicken',
    description: 'Crispy chicken fillet with lettuce and mayo in a soft brioche bun.',
    price: '28',
    image: '/img/all img/menus/bb6.jpg',
    category: 'burger'
  },
  {
    id: 98,
    name: 'Chicken Ranch',
    description: 'Crispy chicken with cool ranch dressing, lettuce, and tomato.',
    price: '28',
    image: '/img/all img/menus/bb7.jpg',
    category: 'burger'
  },
  {
    id: 99,
    name: 'Chicken with Cheese',
    description: 'Breaded chicken fillet topped with melted cheese and special sauce.',
    price: '28',
    image: '/img/all img/menus/bb8.jpg',
    category: 'burger'
  },
  {
    id: 100,
    name: 'Greek Chicken',
    description: 'Grilled chicken with tzatziki, feta, and Mediterranean vegetables in pita bread.',
    price: '27',
    image: '/img/all img/menus/bb9.jpg',
    category: 'burger'
  },
  //Beef Burger

  //Sandwich
  {
    id: 101,
    name: 'Balsamic Chicken',
    description: 'Grilled chicken with balsamic glaze, arugula, and sun-dried tomatoes in ciabatta.',
    price: '24',
    image: '/img/all img/menus/sw1.jpg',
    category: 'sandwich'
  },
  {
    id: 102,
    name: 'Chicken Shawarma',
    description: 'Marinated chicken shawarma with garlic sauce and pickles in Arabic bread.',
    price: '24',
    image: '/img/all img/menus/sw2.jpg',
    category: 'sandwich'
  },
  {
    id: 103,
    name: 'Chicken Fajita Sandwich',
    description: 'Spicy chicken fajita mix with peppers and onions in toasted tortilla wrap.',
    price: '24',
    image: '/img/all img/menus/sw3.jpg',
    category: 'sandwich'
  },
  {
    id: 104,
    name: 'Chicken Pesto Sandwich',
    description: 'Grilled chicken with fresh pesto, mozzarella, and tomato in focaccia bread.',
    price: '24',
    image: '/img/all img/menus/sw4.jpg',
    category: 'sandwich'
  },
  //Sandwich

  // Meat Section
  {
    id: 105,
    name: 'Cheese Steak Sandwich',
    description: 'Juicy sliced beef steak with melted cheese and grilled onions in a toasted roll.',
    price: '33',
    image: '/img/all img/menus/meat1.jpg',
    category: 'meat'
  },
  {
    id: 106,
    name: 'Beef Fajita',
    description: 'Sizzling strips of beef with bell peppers and onions, served with tortillas.',
    price: '31',
    image: '/img/all img/menus/meat2.jpg',
    category: 'meat'
  },
  {
    id: 107,
    name: 'Beef Shawarma',
    description: 'Tender marinated beef shawarma with garlic sauce and pickles in Arabic bread.',
    price: '31',
    image: '/img/all img/menus/meat3.jpg',
    category: 'meat'
  },
  {
    id: 108,
    name: 'Beef with Mushroom',
    description: 'Sautéed beef strips with creamy mushroom sauce.',
    price: '31',
    image: '/img/all img/menus/meat4.jpg',
    category: 'meat'
  },
  {
    id: 109,
    name: 'Mexican Beef',
    description: 'Spicy beef preparation with Mexican spices, beans, and cheese.',
    price: '33',
    image: '/img/all img/menus/meat5.jpg',
    category: 'meat'
  },

  // Pizza Section
  {
    id: 110,
    name: 'Shrimp Pizza',
    description: 'Wood-fired pizza topped with fresh shrimp, garlic, and parsley.',
    price: '30',
    image: '/img/all img/menus/piz1.jpg',
    category: 'pizza'
  },
  {
    id: 111,
    name: 'Four Seasons Pizza',
    description: 'Quartered pizza with four different toppings representing the seasons.',
    price: '28',
    image: '/img/all img/menus/piz2.jpg',
    category: 'pizza'
  },
  {
    id: 112,
    name: 'Pepperoni Pizza',
    description: 'Classic pizza with generous portions of spicy pepperoni and mozzarella.',
    price: '25',
    image: '/img/all img/menus/piz3.jpg',
    category: 'pizza'
  },
  {
    id: 113,
    name: 'Ground Beef Pizza',
    description: 'Savory pizza topped with seasoned ground beef and vegetables.',
    price: '25',
    image: '/img/all img/menus/piz4.jpg',
    category: 'pizza'
  },
  {
    id: 114,
    name: 'Ranch Pizza',
    description: 'Creamy ranch base with chicken, bacon, and mozzarella.',
    price: '27',
    image: '/img/all img/menus/piz5.jpg',
    category: 'pizza'
  },
  {
    id: 115,
    name: 'Shawarma Pizza',
    description: 'Arabic-inspired pizza topped with shawarma meat and garlic sauce.',
    price: '27',
    image: '/img/all img/menus/piz6.jpg',
    category: 'pizza'
  },
  {
    id: 116,
    name: 'Chicken with Mushrooms Pizza',
    description: 'Grilled chicken and sautéed mushrooms on a creamy white sauce base.',
    price: '27',
    image: '/img/all img/menus/piz7.jpg',
    category: 'pizza'
  },
  {
    id: 117,
    name: 'Chicken with Pesto Pizza',
    description: 'Wood-fired pizza with pesto sauce, chicken, and sun-dried tomatoes.',
    price: '27',
    image: '/img/all img/menus/piz8.jpg',
    category: 'pizza'
  },
  {
    id: 118,
    name: 'Barbecue Pizza',
    description: 'Smoky BBQ sauce base with chicken, red onions, and cilantro.',
    price: '27',
    image: '/img/all img/menus/piz9.jpg',
    category: 'pizza'
  },
  {
    id: 119,
    name: 'Vegetables Pizza',
    description: 'Garden fresh pizza with seasonal vegetables and light cheese.',
    price: '21',
    image: '/img/all img/menus/piz10.jpg',
    category: 'pizza'
  },
  {
    id: 120,
    name: 'Margarita Pizza',
    description: 'Classic Neapolitan pizza with tomato sauce, fresh mozzarella, and basil.',
    price: '21',
    image: '/img/all img/menus/piz11.jpg',
    category: 'pizza'
  },
  {
    id: 121,
    name: 'Tuna Pizza',
    description: 'Unique pizza topped with premium tuna, onions, and capers.',
    price: '23',
    image: '/img/all img/menus/pi12.jpg',
    category: 'pizza'
  },

  // Side Dishes
  {
    id: 122,
    name: 'Roasted Potato Wedges',
    description: 'Crispy golden potato wedges seasoned with herbs and spices.',
    price: '15', // Assuming standard price for sides
    image: '/img/all img/menus/sd1.jpg',
    category: 'sides'
  },
  {
    id: 123,
    name: 'Mashed Potatoes',
    description: 'Creamy whipped potatoes with butter and a touch of garlic.',
    price: '15',
    image: '/img/all img/menus/sd2.jpg',
    category: 'sides'
  },
  {
    id: 124,
    name: 'Sweet Potatoes',
    description: 'Oven-roasted sweet potato wedges with caramelized edges.',
    price: '15',
    image: '/img/all img/menus/sd3.jpg',
    category: 'sides'
  },
  {
    id: 125,
    name: 'Sautéed Vegetables',
    description: 'Seasonal vegetables lightly sautéed in olive oil and herbs.',
    price: '15',
    image: '/img/all img/menus/sd4.jpg',
    category: 'sides'
  },
  {
    id: 126,
    name: 'Broccoli',
    description: 'Fresh broccoli florets steamed to perfection with lemon zest.',
    price: '15',
    image: '/img/all img/menus/sd5.jpg',
    category: 'sides'
  },
  {
    id: 127,
    name: 'Corn',
    description: 'Sweet corn kernels lightly buttered and seasoned.',
    price: '15',
    image: '/img/all img/menus/sd6.jpg',
    category: 'sides'
  },

  // Desserts
  {
    id: 128,
    name: 'Tiramisu',
    description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
    price: '19',
    image: '/img/all img/menus/d1.jpg',
    category: 'desserts'
  },
  {
    id: 129,
    name: 'Date Cake',
    description: 'Moist Middle Eastern date cake with caramel-like sweetness.',
    price: '10',
    image: '/img/all img/menus/d2.jpg',
    category: 'desserts'
  },
  {
    id: 130,
    name: 'Apple & Cinnamon Cake',
    description: 'Warm spiced apple cake with cinnamon glaze.',
    price: '18',
    image: '/img/all img/menus/d3.jpg',
    category: 'desserts'
  },
  {
    id: 131,
    name: 'Oat & Banana Cake',
    description: 'Healthy banana bread made with oats and honey.',
    price: '12',
    image: '/img/all img/menus/d4.jpg',
    category: 'desserts'
  },
  {
    id: 132,
    name: 'Revalo Cake',
    description: 'Signature layered cake with cream and fruit filling.',
    price: '19',
    image: '/img/all img/menus/d5.jpg',
    category: 'desserts'
  },
  {
    id: 133,
    name: 'Fruit Granola',
    description: 'Crunchy granola mix with dried fruits and nuts.',
    price: '18',
    image: '/img/all img/menus/d6.jpg',
    category: 'desserts'
  },
  {
    id: 134,
    name: 'Honey & Nut Granola',
    description: 'Homemade granola clusters with honey glaze and mixed nuts.',
    price: '18',
    image: '/img/all img/menus/d7.jpg',
    category: 'desserts'
  },
  {
    id: 135,
    name: 'Chia Seeds & Oats',
    description: 'Power breakfast bowl with chia seeds, oats, and almond milk.',
    price: '12',
    image: '/img/all img/menus/d8.jpg',
    category: 'desserts'
  },
  {
    id: 136,
    name: 'Greek Yogurt & Berry Granola',
    description: 'Creamy Greek yogurt topped with fresh berries and granola.',
    price: '18',
    image: '/img/all img/menus/d9.jpg',
    category: 'desserts'
  },
  {
    id: 137,
    name: 'Sunflower Seeds, Sesame & Raisin Granola',
    description: 'Nutty granola blend with seeds and sweet raisins.',
    price: '19',
    image: '/img/all img/menus/d10.jpg',
    category: 'desserts'
  },

  // Healthy Pies
  {
    id: 138,
    name: 'Pineapple & Peach Healthy Pie',
    description: 'Sugar-free pie with tropical pineapple and peach filling.',
    price: '11',
    image: '/img/all img/menus/hp1.jpg',
    category: 'healthy'
  },
  {
    id: 139,
    name: 'Apple & Pineapple Healthy Pie',
    description: 'Double fruit pie with tart apples and sweet pineapple.',
    price: '11',
    image: '/img/all img/menus/hp2.jpg',
    category: 'healthy'
  },
  {
    id: 140,
    name: 'Kiwi & Mango Healthy Pie',
    description: 'Exotic fruit combination in a whole wheat crust.',
    price: '11',
    image: '/img/all img/menus/hp3.jpg',
    category: 'healthy'
  },
  {
    id: 141,
    name: 'Orange, Ginger, and Pineapple Healthy Pie',
    description: 'Zesty citrus pie with warming ginger notes.',
    price: '11',
    image: '/img/all img/menus/hp4.png',
    category: 'healthy'
  },
  {
    id: 142,
    name: 'Beetroot and Apple Healthy Pie',
    description: 'Vibrant pink pie with earthy beetroot and sweet apples.',
    price: '11',
    image: '/img/all img/menus/hp5.jpg',
    category: 'healthy'
  },
  {
    id: 143,
    name: 'Carrot, Orange, and Ginger Healthy Pie',
    description: 'Vitamin-packed pie with winter spice flavors.',
    price: '11',
    image: '/img/all img/menus/hp6.jpg',
    category: 'healthy'
  },
  {
    id: 144,
    name: 'Orange with Cranberry Healthy Pie',
    description: 'Tart cranberries balanced with sweet orange in a flaxseed crust.',
    price: '11',
    image: '/img/all img/menus/hp7.jpg',
    category: 'healthy'
  },

  

  ];

  const categories = [
    { id: 'all', name: 'All Items', icon: UtensilsCrossed },
    { id: 'breakfast', name: 'Breakfast', icon: UtensilsCrossed },
    // { id: 'lunch', name: 'Lunch', icon: UtensilsCrossed },
    // { id: 'dinner', name: 'Dinner', icon: UtensilsCrossed },
    // { id: 'snack', name: 'Snacks', icon: UtensilsCrossed },
    { id: 'salads', name: 'Salads', icon: UtensilsCrossed },
    { id: 'burger', name: 'Beef Burger', icon: UtensilsCrossed },
    { id: 'pizza', name: 'Pizza', icon: UtensilsCrossed },
    { id: 'pasta', name: 'Pasta', icon: UtensilsCrossed },
    { id: 'rice', name: 'Rice', icon: UtensilsCrossed },
    { id: 'beef', name: 'Beef Dishes', icon: UtensilsCrossed },
    { id: 'juice', name: 'Juice', icon: UtensilsCrossed },
    { id: 'pudding', name: 'Pudding', icon: UtensilsCrossed },
    { id: 'chicken', name: 'Chicken', icon: UtensilsCrossed },
    { id: 'sandwich', name: 'SandWich', icon: UtensilsCrossed },
    { id: 'meat', name: 'Meat', icon: UtensilsCrossed },
    { id: 'sides', name: 'Side Dishes', icon: UtensilsCrossed },
    { id: 'desserts', name: 'Desserts', icon: UtensilsCrossed },
    { id: 'healthy', name: 'Healthy Pie', icon: UtensilsCrossed }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item: MenuItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      image: item.image,
      price: `${item.price} SAR`,
      category: item.category
    });
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our delicious selection of fresh, healthy meals prepared with the finest ingredients
          </p>
          
          {/* Order Subscription Button */}
          <div className="mt-8">
            <Dialog open={showMealPlanSelector} onOpenChange={setShowMealPlanSelector}>
              <DialogTrigger asChild>
                <Button className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                  <UtensilsCrossed className="h-5 w-5 mr-2" />
                  Create Subscription Order
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Create Your Meal Plan</DialogTitle>
                </DialogHeader>
                <MealPlanSelector onComplete={() => setShowMealPlanSelector(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2"
              >
                <IconComponent className="h-4 w-4" />
                <span>{category.name}</span>
              </Button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
  {filteredItems.map((item) => (
    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
      {/* Image Section */}
      <div className="aspect-w-16 aspect-h-9 flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section - grows to push button down */}
      <div className="flex-grow p-3 sm:p-4">
        <CardHeader className="p-0">
          <div className="flex justify-between items-start gap-2">
            <div>
              <CardTitle className="text-sm sm:text-base md:text-lg">{item.name}</CardTitle>
              <Badge variant="secondary" className="mt-1 text-xs sm:text-sm capitalize">
                {item.category}
              </Badge>
            </div>
            <span className="text-sm sm:text-base md:text-xl font-bold text-green-600 whitespace-nowrap">
              {item.price} SAR
            </span>
          </div>
        </CardHeader>
      </div>

      {/* Button Section - fixed at bottom */}
      <CardContent className="p-3 sm:p-4 pt-0">
        <Button
          onClick={() => handleAddToCart(item)}
          className="w-full bg-green-600 hover:bg-green-700 text-xs sm:text-sm h-8 sm:h-9 md:h-10"
        >
          <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  ))}
</div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No items found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
