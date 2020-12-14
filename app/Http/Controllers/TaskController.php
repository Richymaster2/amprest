<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class TaskController extends Controller
{
    //
    public function index(){
        return Task::all();
    }

    public function create(Request $request){
        return Task::create($request->all) ;
    }
    public function update(Request $request, $id){
        $task = Task::findOrFail($id);
        $task->update($request->all);
    }
    public function delete($id){
        $task = Task::findOrFail($id);
        $task->delete();
        return 204;
    }

   
}
