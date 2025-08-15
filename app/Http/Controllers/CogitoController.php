<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;



class CogitoController extends Controller
{
    //
    public function index(): Response{
        return Inertia::render("cogito/Cogito");
    }
    public function login(): Response{
        return Inertia::render("cogito/login");
    }
}
