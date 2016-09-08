<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateEducationTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('educations', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('resume_id')->unsigned();
			$table->foreign('resume_id')->references('id')->on('resumes');
			$table->string('institution')->nullable();
			$table->string('course')->nullable();
			$table->string('start_period')->nullable();
			$table->string('end_period')->nullable();
			$table->text('remarks')->nullable();
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
		Schema::drop('education');
	}

}
