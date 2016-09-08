<?php

class Certification extends \Eloquent {

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

		foreach($data['certifications'] as $dt){
			

			$obj = new Certification;
			$obj->resume_id = $dt['resumeid'];
			$obj->certification = $dt['content'];
			$obj->save();
		}
	}


	//update
	public static function edit($data){

		$certification =  Certification::find(array_get($data, 'id'));
		$certification->certification = array_get($data, 'certification');
		$certification->update();
		
	}

}