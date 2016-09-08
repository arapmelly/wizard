<?php

class Award extends \Eloquent {

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

		foreach($data['awards'] as $dt){
			

			$obj = new Award;
			$obj->resume_id = $dt['resumeid'];
			$obj->award = $dt['content'];
			$obj->save();
		}

		
	}


	//update
	public static function edit($data){

		$award = Award::find(array_get($data, 'id'));
		$award->award = array_get($data, 'award');
		$award->update();
		
	}

}