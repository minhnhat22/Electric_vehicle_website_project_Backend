<?php

namespace App\Http\Controllers;

use App\Models\StoreCriteria;
use Illuminate\Http\Request;

class StoreCriteriaController extends Controller
{
    public function getAllCriteria()
    {
        $criteria = StoreCriteria::all();
        return response()->json($criteria);
    }
}
