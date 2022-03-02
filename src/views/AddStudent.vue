<template>
    <div>
        <div class="p-5">
           <form>
                <div class="form-group col-md-4" >
                <label for="student_fname">First Name</label>
                <input type="text" class="form-control" v-model="student.fname" id="student_fname" placeholder="Enter First Name">
                </div>
                <div class="form-group col-md-4">
                <label for="student_lname">Last Name</label>
                <input type="text" class="form-control" v-model="student.lname" id="student_lname" placeholder="Enter Last Name">
                </div>
                <div class="form-group col-md-4">
                <label for="student_email">Email</label>
                <input type="email" class="form-control" v-model="student.email" id="student_email" placeholder="Enter Email">
                </div>
                <button type="submit"  @click="addStudent" class="btn btn-primary m-3">Submit</button>
            </form>
        </div>
            
    </div>

</template>





<script>
import SS from '../service/StudentService'

export default {
    name: 'AddStudent',
    data(){
        return {
            student: {
                id:0,
                fname: null,
                lname: null,
                email: null,
                err: [],
            }
        }
    },
    methods:{
        addStudent(){
            if (this.student.fname && this.student.lname){
                SS.addStudent(this.student).then(res=>{
                console.log(res.data);
                this.$router.push('/');
                });
            }

            const mfname = document.getElementById('student_fname').value

            if(mfname == ""){
                // alert("Name must be filled out");
                mfname.innerHTML = "First name is required"
            }
        },
    },
}
</script>