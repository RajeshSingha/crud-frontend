<template>
    <div>
        <div class = "p-5">
            <button type="button" @click="addStudent" class="btn btn-primary mb-5">Add Students</button>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(student,index) in students" :key="index">
                <th scope="row">{{index+1}}</th>
                <td>{{student.fname}}</td>
                <td>{{student.lname}}</td>
                <td>{{student.email}}</td>
                <td>
                    <i type = "button" @click="editStudentForm(student.id)" class="fas fa-edit"></i>
                    <i type = "button" @click="deletetStudentForm(student.id)" class="fas fa-trash ml-2" ></i>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import SS from '../service/StudentService'

export default {
    name: 'ShowStudents',
    data(){
        return {
            student: {
                id:0,
                fname: null,
                lname: null,
                email: null,
            },
            students:[]
        }
    },
    methods: {
        editStudentForm(id) {
            this.$router.push('/editStudent/'+id)
        },
        deletetStudentForm(id) {
           SS.deleteStudentByID(id).then(res =>{
               if(res.data)
                this.getStudentData();
            // console.log(res.data);
           });
        },
        getStudentData(){
            SS.getStudent().then(res=>{
                this.students = res.data;
            });
        },
        addStudent(){
            this.$router.push('/addStudent')
        }
    },
    created(){
        this.getStudentData();
    }
}
</script>