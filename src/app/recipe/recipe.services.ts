import { OnInit, Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeServices {

    private recipes: Recipe[] = []
    public onRecipeSelected = new EventEmitter<number>();

    constructor(){
      this.recipes =[
        {
          publisher: 'The Pioneer Woman',
          title: 'Pasta with Pesto Cream Sauce',
          source_url: 'http://thepioneerwoman.com/cooking/2011/06/pasta-with-pesto-cream-sauce/',
          recipe_id:  47025,
          image_url: 'http://forkify-api.herokuapp.com/images/pestoa0e7.jpg',
          social_rank: 100,
          publisher_url: 'http://thepioneerwoman.com'
        },
        {
          publisher: 'The Pioneer Woman',
          title: 'The Best Lasagna Ever',
          source_url: 'http://thepioneerwoman.com/cooking/2007/06/the_best_lasagn/',
          recipe_id:  863573,
          image_url: 'http://forkify-api.herokuapp.com/images/387114468_aafd1be3404a2f.jpg',
          social_rank: 100,
          publisher_url: 'http://thepioneerwoman.com'
        },
        {
          publisher: 'The Pioneer Woman',
          title: 'Shrimp Scampi',
          source_url: 'http://thepioneerwoman.com/cooking/2011/04/16-minute-meal-shrimp-scampi/',
          recipe_id:  47032,
          image_url: 'http://forkify-api.herokuapp.com/images/scampibf5a.jpg',
          social_rank: 100,
          publisher_url: 'http://thepioneerwoman.com'
        },
        {
          publisher: 'Two Peas and Their Pod',
          title: 'Creamy Avocado Pasta',
          source_url: 'http://www.twopeasandtheirpod.com/creamy-avocado-pasta/',
          recipe_id: 54426,
          image_url: 'http://forkify-api.herokuapp.com/images/creamyavocadopasta607e.jpg',
          social_rank: 99.99999999999989,
          publisher_url: 'http://www.twopeasandtheirpod.com'
        },
        {
          publisher: 'The Pioneer Woman',
          title: 'Pasta Alla Vodka',
          source_url: 'http://thepioneerwoman.com/cooking/2008/12/friday-night-dinner-pasta-alla-vodka/',
          recipe_id: 47275,
          image_url: 'http://forkify-api.herokuapp.com/images/pastaallavodkaa870.jpg',
          social_rank: 99.99999999999636,
          publisher_url: 'http://thepioneerwoman.com'
        },
        {
          publisher: 'The Pioneer Woman',
          title: 'Seafood Pasta',
          source_url: 'http://thepioneerwoman.com/cooking/2012/03/seafood-pasta/',
          recipe_id: 46943,
          image_url: 'http://forkify-api.herokuapp.com/images/seafoodpasta5075.jpg',
          social_rank: 99.99999999999329,
          publisher_url: 'http://thepioneerwoman.com'
        },
        {
          publisher: 'The Pioneer Woman',
          title: 'Bowtie Chicken Alfredo',
          source_url: 'http://thepioneerwoman.com/cooking/2012/12/bowtie-chicken-alfredo/',
          recipe_id: 46882,
          image_url: 'http://forkify-api.herokuapp.com/images/chickenalfredoc9c5.jpg',
          social_rank: 99.99999999993057,
          publisher_url: 'http://thepioneerwoman.com'
        },
       
        {
          publisher: 'All Recipes',
          title: 'Baked Ziti I',
          source_url: 'http://allrecipes.com/Recipe/Baked-Ziti-I/Detail.aspx',
          recipe_id: 2658,
          image_url: 'http://forkify-api.herokuapp.com/images/14573f089.jpg',
          social_rank: 99.99999999889937,
          publisher_url: 'http://allrecipes.com'
        },
        {
          publisher: 'Closet Cooking',
          title: 'Taco Stuffed Shells',
          source_url: 'http://www.closetcooking.com/2012/02/taco-stuffed-shells.html',
          recipe_id: 35628,
          image_url: 'http://forkify-api.herokuapp.com/images/Taco2BStuffed2BShells2B5002B7249e76e46ea.jpg',
          social_rank: 99.99999999852123,
          publisher_url: 'http://closetcooking.com'
        },
        {
          publisher: 'Closet Cooking',
          title: 'Lasagna Soup',
          source_url: 'http://www.closetcooking.com/2012/01/lasagna-soup.html',
          recipe_id: 35401,
          image_url: 'http://forkify-api.herokuapp.com/images/Lasagna2BSoup2B5002B050668ba78b8.jpg',
          social_rank: 99.99999999740096,
          publisher_url: 'http://closetcooking.com'
        },
        {
          publisher: 'The Pioneer Woman',
          title: 'Pastor Ryan’s Pasta Carbonara',
          source_url: 'http://thepioneerwoman.com/cooking/2008/09/cooking-with-ryan-pasta-carbonara/',
          recipe_id: 47296,
          image_url: 'http://forkify-api.herokuapp.com/images/PastaCarbonara061c.jpg',
          social_rank: 99.99999999693264,
          publisher_url: 'http://thepioneerwoman.com'
        },
        {
          publisher: 'The Pioneer Woman',
          title: 'Pasta Carbonara',
          source_url: 'http://thepioneerwoman.com/cooking/2012/05/pasta-carbonara/',
          recipe_id: 46922,
          image_url: 'http://forkify-api.herokuapp.com/images/carbonara2f55.jpg',
          social_rank: 99.99999999592087,
          publisher_url: 'http://thepioneerwoman.com'
        },
        {
          publisher: 'The Pioneer Woman',
          title: 'Penne a la Betsy',
          source_url: 'http://thepioneerwoman.com/cooking/2007/09/cooking_with_my_punk-ass_little_sister_penne_a_la_betsy/',
          recipe_id: 47361,
          image_url: 'http://forkify-api.herokuapp.com/images/PennealaBetsy12d5.jpg',
          social_rank: 99.99999998671821,
          publisher_url: 'http://thepioneerwoman.com'
        },
       
        {
          publisher: '101 Cookbooks',
          title: 'Winter Pasta',
          source_url: 'http://www.101cookbooks.com/archives/winter-pasta-recipe.html',
          recipe_id: 47991,
          image_url: 'http://forkify-api.herokuapp.com/images/winter_pasta_recipebee6.jpg',
          social_rank: 99.9999999572553,
          publisher_url: 'http://www.101cookbooks.com'
        },
        {
          publisher: 'The Pioneer Woman',
          title: 'Grilled Chicken with Lemon Basil Pasta',
          source_url: 'http://thepioneerwoman.com/cooking/2010/07/grilled-chicken-with-lemon-basil-pasta/',
          recipe_id: 47118,
          image_url: 'http://forkify-api.herokuapp.com/images/4814287904_bb43e024c9_be8a9.jpg',
          social_rank: 99.99999991847115,
          publisher_url: 'http://thepioneerwoman.com'
        },
       
        {
          publisher: 'All Recipes',
          title: 'Chicken Fettuccini Alfredo',
          source_url: 'http://allrecipes.com/Recipe/Chicken-Fettuccini-Alfredo/Detail.aspx',
          recipe_id: 7202,
          image_url: 'http://forkify-api.herokuapp.com/images/214411de5a.jpg',
          social_rank: 99.9999995711024,
          publisher_url: 'http://allrecipes.com'
        },
        {
          publisher: 'Two Peas and Their Pod',
          title: 'Lemon Chicken Orzo Soup',
          source_url: 'http://www.twopeasandtheirpod.com/lemon-chicken-orzo-soup/',
          recipe_id: 54290,
          image_url: 'http://forkify-api.herokuapp.com/images/LemonChickenOrzoSoup33989.jpg',
          social_rank: 99.99999952354868,
          publisher_url: 'http://www.twopeasandtheirpod.com'
        },
        {
          publisher: 'The Pioneer Woman',
          title: 'Pasta Salad with Tomatoes, Zucchini, and Feta',
          source_url: 'http://thepioneerwoman.com/cooking/2011/03/pasta-salad-with-tomatoes-zucchini-and-feta/',
          recipe_id: 47041,
          image_url: 'http://forkify-api.herokuapp.com/images/5566512470_9e98939ab3_z2766.jpg',
          social_rank: 99.99999855322939,
          publisher_url: 'http://thepioneerwoman.com'
        },
        {
          publisher: 'The Pioneer Woman',
          title: 'Pesto Pasta Salad',
          source_url: 'http://thepioneerwoman.com/cooking/2013/04/pesto-pasta-salad/',
          recipe_id: 585263,
          image_url: 'http://forkify-api.herokuapp.com/images/pestopasta1833.jpg',
          social_rank: 99.9999930312073,
          publisher_url: 'http://thepioneerwoman.com'
        },
        {
          publisher: 'Two Peas and Their Pod',
          title: 'Baked Pasta with Spinach and Ricotta',
          source_url: 'http://www.twopeasandtheirpod.com/baked-pasta-with-spinach-and-ricotta/',
          recipe_id: 54170,
          image_url: 'http://forkify-api.herokuapp.com/images/SpinachBakedShells53ded.jpg',
          social_rank: 99.9999924531229,
          publisher_url: 'http://www.twopeasandtheirpod.com'
        },
        {
          publisher: 'Two Peas and Their Pod',
          title: 'Creamy Tomato Orzo Soup',
          source_url: 'http://www.twopeasandtheirpod.com/creamy-tomato-orzo-soup/',
          recipe_id: 54277,
          image_url: 'http://forkify-api.herokuapp.com/images/creamytomatoorzosoup30ac3.jpg',
          social_rank: 99.99999243464103,
          publisher_url: 'http://www.twopeasandtheirpod.com'
        },
        {
          publisher: 'Closet Cooking',
          title: 'Pumpkin Mac n Cheese with Amaretti Crust',
          source_url: 'http://www.closetcooking.com/2011/10/pumpkin-mac-n-cheese.html',
          recipe_id: 35498,
          image_url: 'http://forkify-api.herokuapp.com/images/Pumpkin2BMac2Bn2BCheese2B5002B5112462abf6a.jpg',
          social_rank: 99.9999920107993,
          publisher_url: 'http://closetcooking.com'
        }
      ]
    } 


    getRecipes() {
        return this.recipes.slice();
    }
}