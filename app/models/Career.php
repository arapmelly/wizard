<?php

class Career extends \Eloquent {

	// Add your validation rules here
	public static $rules = [
		// 'title' => 'required'
	];

	// Don't forget to fill this array
	protected $fillable = [];



	//create
	public static function add($data){

		$career = new Career;
		$career->name = array_get($data, 'name');
		$career->save();
		
	}


	//update
	public static function edit($data){

		$career = Career::find(array_get($data, 'id'));
		$career->name = array_get($data, 'name');
		$career->update();
		
	}

}