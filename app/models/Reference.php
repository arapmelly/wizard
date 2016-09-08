<?php

class Reference extends \Eloquent {

	// Add your validation rules here
	public static $rules = [
		// 'title' => 'required'
	];

	// Don't forget to fill this array
	protected $fillable = [];

	public function resume(){

		return $this->belongsTo('Resume');
	}

	//create
	public static function add($data){

		


		foreach($data['references'] as $dt){
			

			$obj = new Reference;
			$obj->resume_id = $dt['resumeid'];
			$obj->institution = $dt['institution'];
			$obj->name = $dt['name'];
			$obj->email = $dt['email'];
			$obj->phone = $dt['phone'];
			$obj->position = $dt['position'];
			$obj->save();
		}

	}


	//update
	public static function edit($data){

		$reference =  Reference::find(array_get($data, 'id'));
		$reference->name = array_get($data, 'name');
		$reference->email = array_get($data, 'email');
		$reference->phone = array_get($data, 'phone');
		$reference->institution = array_get($data, 'institution');
		$reference->position = array_get($data, 'position');
		$reference->update();
		
	}

}