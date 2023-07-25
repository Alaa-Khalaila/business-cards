<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules()
    {

        $url = $this->route()->uri;
 
        if ($this->getMethod() == 'POST' && Str::contains($url, 'users/login') == true) {
            return[
                'password'=>'required|min:8',
               ];
        } 
         if($this->getMethod() == 'POST' && Str::contains($url, 'users/register') == true) {
            return[
                'name'=>'required|string',
                'password'=>'required|min:8|confirmed',
                'phone'=>'required|regex:/(962)[0-9]{9}/',
                "email"=>'email|unique:users'
               ];
        }
     
  
    } 
    
}
    