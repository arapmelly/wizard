  @extends('layouts.report')
  @section('content')

    <div class="wrapper " >


        


 <!-- menu bar starts here -->
        <div class="row">


          <div class="col-lg-12 col-sm-12 col-md-12">

            

            <h5 class="b-b">Personal Information</h5>

            <p>
              <strong>Full Name: </strong> {{$resume->fullnames}}<br>
              <strong>Phone Number: </strong> {{$resume->phone}}<br>
              <strong>Email Address: </strong> {{$resume->email}}<br>
              <strong>Address: </strong> {{$resume->address}}<br>
            </p>


          </div>


        
        </div> 




        <!-- objectives start here -->
         <div class="row">


          <div class="col-lg-12 col-sm-12 col-md-12">

            

            <h5 class="b-b">Objectives</h5>

            <ul>
              @foreach($objectives as $objective)
                <li  >
                 <p style="line-height: 1.2;">{{$objective->objective}}

                 
                 </p>
                 
              </li>
              @endforeach

            </ul>


          </div>


        
        </div> 




        <!-- experiences start here -->
         <div class="row">


          <div class="col-lg-12 col-sm-12 col-md-12">

            

            <h5 class="b-b">Work Experience</h5>

            <ul>
              @foreach($experiences as $experience)
                <li  >
                 <p style="line-height: 1.2;">


                   <strong>{{$experience->organization}}</strong><br>
        From: {{$experience->start_period}} - To: {{$experience->end_period}}<br>
        {{$experience->title}}<br>
        {{$experience->responsibilities}}

                 
                 </p>
                 
              </li>
              @endforeach

            </ul>


          </div>


        
        </div> 




        <!-- education start here -->
         <div class="row">


          <div class="col-lg-12 col-sm-12 col-md-12">

            

            <h5 class="b-b">Education History</h5>

            <ul>
              @foreach($educations as $education)
                <li  >
                 <p style="line-height: 1.2;">

                  <strong>{{$education->nstitution}}</strong><br>
        <strong>{{$education->course}}</strong><br>
        From: {{$education->start_period}} - To: {{$education->end_period}}<br>
        {{$education->remarks}}

                 </p>
                 
              </li>
              @endforeach

            </ul>


          </div>


        
        </div> 




        <!-- Certifications start here -->
         <div class="row">


          <div class="col-lg-12 col-sm-12 col-md-12">

            

            <h5 class="b-b">Certification</h5>

            <ul>
              @foreach($certifications as $certification)
                <li  >
                 <p style="line-height: 1.2;">{{$certification->certification}}

                 
                 </p>
                 
              </li>
              @endforeach

            </ul>


          </div>


        
        </div> 




        <!-- skills start here -->
         <div class="row">


          <div class="col-lg-12 col-sm-12 col-md-12">

            

            <h5 class="b-b">Skills</h5>

            <ul>
              @foreach($skills as $skill)
                <li  >
                 <p style="line-height: 1.2;">{{$skill->skill}}

                 
                 </p>
                 
              </li>
              @endforeach

            </ul>


          </div>


        
        </div> 




        <!-- achievementss start here -->
         <div class="row">


          <div class="col-lg-12 col-sm-12 col-md-12">

            

            <h5 class="b-b">Achievements</h5>

            <ul>
              @foreach($achievements as $achievement)
                <li  >
                 <p style="line-height: 1.2;">{{$achievement->achievement}}

                 
                 </p>
                 
              </li>
              @endforeach

            </ul>


          </div>


        
        </div> 



        <!-- awards start here -->
         <div class="row">


          <div class="col-lg-12 col-sm-12 col-md-12">

            

            <h5 class="b-b">Awards</h5>

            <ul>
              @foreach($awards as $award)
                <li  >
                 <p style="line-height: 1.2;">{{$award->award}}

                 
                 </p>
                 
              </li>
              @endforeach

            </ul>


          </div>


        
        </div> 




        <!-- publications start here -->
         <div class="row">


          <div class="col-lg-12 col-sm-12 col-md-12">

            

            <h5 class="b-b">Publications</h5>

            <ul>
              @foreach($publications as $publication)
                <li  >
                 <p style="line-height: 1.2;">{{$publication->publication}}

                 
                 </p>
                 
              </li>
              @endforeach

            </ul>


          </div>


        
        </div> 




        <!-- references start here -->
         <div class="row">


          <div class="col-lg-12 col-sm-12 col-md-12">

            

            <h5 class="b-b">References</h5>

            <ul>
              @foreach($references as $reference)
                <li >
                 <p style="line-height: 1.2;">

                   <strong>{{$reference->name}}</strong><br/>
        {{$reference->position}}<br/>
        {{$reference->institution}}<br/>
        {{$reference->phone}}<br/>
        {{$reference->email}}
                 
                 </p>
                 
              </li>
              @endforeach

            </ul>


          </div>


        
        </div> 


        

      
      


    </div>


    @stop






 














