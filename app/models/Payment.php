<?php

class Payment extends \Eloquent {

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

		$payment = new Payment;
		$payment->resume_id = array_get($data, 'resume_id');
		$payment->date = array_get($data, 'date');
		$payment->amount = array_get($data, 'amount');
		$payment->method = array_get($data, 'method');
		$payment->transaction_code = array_get($data, 'transaction_code');
		$payment->save();
		
	}


	//update
	public static function edit($data){

		
	}

}