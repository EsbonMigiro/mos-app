<?php

use App\Http\Controllers\CogitoController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/product', [ProductController:: class, 'create'])->name('product.create');
    Route::post('/productsregister', [ProductController::class, 'store']);
    Route::get('/proregister', function(){
        return("thank you");
    });
    Route::get("/products", [ProductController::class, "index"])->name("product.index");
    Route::get('/products/create', [ProductController::class,'create'])->name('product.create');
    Route::post("/products/store", [ProductController::class, "store"])->name("product.store");
    Route::delete("/products/{product}", [ProductController::class, "destroy"])->name("product.destroy");
    Route::put("/products/{product}", [ProductController::class, "update"])->name('product.update');
    Route::get("/products/{product}/edit", [ProductController::class, "edit"])->name('product.edit');

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/cogito.php';

