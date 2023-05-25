<?php

namespace App\Http\Controllers\icons;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FontAwesome extends Controller
{
  public function index()
  {
    return view('content.icons.icons-font-awesome');
  }
}
