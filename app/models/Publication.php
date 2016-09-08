<?php

class Publication extends \Eloquent {

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

		foreach($data['publications'] as $dt){
			

			$obj = new Publication;
			$obj->resume_id = $dt['resumeid'];
			$obj->publication = $dt['content'];
			$obj->save();
		}
	}


	//update
	public static function edit($data){

		$publication = Publication::find(array_get($data, 'id'));
		$publication->publication = array_get($data, 'publication');
		$publication->update();
		
	}

}