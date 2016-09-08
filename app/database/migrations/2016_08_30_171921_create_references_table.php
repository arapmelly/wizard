<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateReferencesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('references', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('resume_id')->unsigned();
			$table->foreign('resume_id')->references('id')->on('resumes');
			$table->string('name')->nullable();
			$table->string('phone')->nullable();
			$table->string('email')->nullable();
			$table->string('institution')->nullable();
			$table->string('position')->nullable();
			$table->timestamps();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('references');
	}

}
