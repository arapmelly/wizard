<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSamplesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('samples', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('level_id')->unsigned();
			$table->foreign('level_id')->references('id')->on('levels');
			$table->integer('career_id')->unsigned();
			$table->foreign('career_id')->references('id')->on('careers');
			$table->string('section')->nullable();
			$table->text('content')->nullable();
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
		Schema::drop('samples');
	}

}
