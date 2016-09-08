<?php

class Objective extends \Eloquent {

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

		

		foreach($data['objectives'] as $dt){
			

			$obj = new Objective;
			$obj->resume_id = $dt['resumeid'];
			$obj->objective = $dt['content'];
			$obj->save();
		}
		
		
	}


	//update
	public static function edit($data){

		$obj = Objective::find(array_get($data, 'id'));
		$obj->objective = array_get($data, 'objective');
		$obj->update();
		
	}

}