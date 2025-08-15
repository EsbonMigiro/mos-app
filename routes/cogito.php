<?php

use App\Http\Controllers\CogitoController;
use Illuminate\Support\Facades\Route;

Route::middleware("auth")->group(function (): void{
    Route::get("/cogito/login",[CogitoController::class,"login"])->name("cogito.login");
    Route::get('/cogito', [CogitoController::class,'index'])->name('cogito.index');


});