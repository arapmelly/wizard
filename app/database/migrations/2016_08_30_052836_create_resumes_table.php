<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateResumesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('resumes', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('user_id')->unsigned();
			$table->foreign('user_id')->references('id')->on('users');
			$table->string('fullnames');
			$table->string('email')->nullable();
			$table->string('phone')->nullable();
			$table->text('address')->nullable();
			$table->integer('level_id')->unsigned();
			$table->foreign('level_id')->references('id')->on('levels');
			$table->integer('career_id')->unsigned();
			$table->foreign('career_id')->references('id')->on('careers');
			$table->boolean('is_paid')->default(false);
			$table->integer('template_id')->unsigned();
			$table->foreign('template_id')->references('id')->on('templates');
			$table->boolean('skill')->default(true);
			$table->boolean('award')->default(true);
			$table->boolean('achievement')->default(true);
			$table->boolean('certification')->default(true);
			$table->boolean('publication')->defaut(true);
			$table->boolean('objective')->default(true);
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
		Schema::drop('resumes');
	}

}
