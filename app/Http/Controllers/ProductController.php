<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Client\Request as ClientRequest;
use Illuminate\Support\Facades\Auth;





class ProductController extends Controller
{
    public function index(){
        $products = Product::all();
        return Inertia::render("products/Index", compact("products"));
        
    }
    // public function create(): Response
    // {
    //     return Inertia::render('auth/proregister');
    // }
    public function create(){
        return Inertia::render('products/Create');
    }

       /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
   public function store(Request $request){
    $request->validate([
        'name'=> 'required|string|max:255',
        'price'=> 'required|numeric',
        'description'=>'nullable|string'
    ]);
    $product = Product::create($request->all());
    return redirect()->route('product.index')->with('message', 'Product created successfully');
   }

   public function destroy(Product $product){
    $product->delete();

    return redirect()->route('product.index')->with('message', 'Product deleted successfully');
   }
   public function edit(Product $product){
    return Inertia::render('products/Edit', compact('product'));
   }
   public function update(Request $request, Product $product){
    $request->validate([
        'name'=> 'required|string|max:255',
        'price'=> 'required|numeric',
        'description'=>'nullable|string'
    ]);
    $product->update([
        'name'=>$request->input('name'),
        'price'=>$request->input('price'),
        'description'=>$request->input('description')    ]

);

return redirect(route('product.index'))->with('message', 'product updated successfully');
   }
}
