<template>
    <div>
        <div class="p-5">
           <form>
                <div class="form-group col-md-4" >
                <label for="exampleInputEmail1">First Name</label>
                <input type="text" class="form-control" v-model="student.fname" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="form-group col-md-4">
                <label for="exampleInputPassword1">Last Name</label>
                <input type="text" class="form-control" v-model="student.lname" id="exampleInputPassword1">
                </div>
                <div class="form-group col-md-4">
                <label for="exampleInputPassword2">Email</label>
                <input type="email" class="form-control" v-model="student.email" id="exampleInputPassword2">
                </div>
                <button type="submit"  @click="updateStudentData" class="btn btn-primary ml-3">Update</button>
            </form>
        </div>
    </div>
</template>

<script>

import SS from '../service/StudentService'
    export default {
        name: 'editStudent',
        data() {
            return {
                studentID : this.$route.params.id,
                student: {
                    id:0,
                    fname: null,
                    lname: null,
                    email: null,
                }
            }
        },
        mounted () {
            console.log(this.studentID);
            this.loadStudent();
            
        },
        methods:{
            loadStudent(){
                SS.getStudentByID(this.studentID).then(res =>{
                this.student = res.data;
           });
            },
            updateStudentData() {
                SS.addStudent(this.student).then(res=>{
                    console.log(res);
                    this.$router.push('/')
            });  
            }
            
        }
    }

</script>
