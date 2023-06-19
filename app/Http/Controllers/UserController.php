<?php

namespace App\Http\Controllers;



use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

//controle 
class UserController extends Controller{

    /**
     * Display the specified resource.
     *
     *
     * @return \Illuminate\Http\Response
     */

    //pega/gera lista de contato
    public function indexUsuario(){
        
        $collection = User::orderBy('id', 'desc')->get();

        return response()->json($collection, 200);

    }







    

    public function criaUsuario(Request $request){

        $User = new User;
        $User->name = $request->name;
        $User->email = $request->email;
        $User->password = $request->password;
        $User->save();

        return response()->json('Usuario cadastrado com sucesso', 200);
        return response()->json('Não foi possível cadastrar o Usuario');

    }


    public function updateUsuario($id , Request $request){

        User::where('id', $id)->update([
           'name' => $request->name,
           'email' => $request->email,
           'password' => $request->password
        ]);

        return response()->json('Usuario Editado com sucesso', 200);
        return response()->json('Não foi possível Editado o Usuario');

    }


    public function deleteUsuario($id){
         $deleted = User::where('id', $id)->delete();
             if($deleted){
            return response()->json('Usuario excluido com sucesso', 200);
            } else {
            return response()->json('Não foi possível excluir o Usuario');
        }
    }































}