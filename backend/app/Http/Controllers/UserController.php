<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function login(UserRequest $request)
    {
        if (!Auth::attempt($request->only('email','phone', 'password'))) {
            return response()->json([
                'message' => 'Invalid email or password'
            ], 401);
        }
        $user = User::where('email', $request['email'])->orWhere('phone', $request->phone)->firstorFail();
        $token = $user->createToken('auth_token')->plainTextToken;
        $user = User::findorFail(Request()->user()->id);
        $user['access_token'] = $token;
        return UserResource::make($user);
    }

    public function Register(UserRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
        ]);
        return UserResource::make($user);
    }
}
